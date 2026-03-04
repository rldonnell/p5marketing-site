<?php
/**
 * P5 Headless WordPress Theme
 *
 * Configures WordPress as a headless CMS:
 * - Enables CORS for the REST API
 * - Registers custom post types if needed
 * - Adds custom fields to the REST API
 * - Redirects frontend to Next.js site
 * - Enables featured images
 * - Increases REST API limits
 */

// 1. Enable CORS for REST API
add_action('rest_api_init', function() {
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    add_filter('rest_pre_serve_request', function($value) {
        $origin = get_http_origin();
        $allowed_origins = [
            'http://localhost:3000',
            'https://p5marketing.com',
            'https://www.p5marketing.com',
            defined('P5_FRONTEND_URL') ? P5_FRONTEND_URL : '',
        ];

        if (in_array($origin, array_filter($allowed_origins))) {
            header('Access-Control-Allow-Origin: ' . esc_url_raw($origin));
        } else {
            header('Access-Control-Allow-Origin: *');
        }
        header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Allow-Headers: Authorization, Content-Type, X-WP-Nonce');
        return $value;
    });
});

// 2. Enable featured images
add_theme_support('post-thumbnails');

// 3. Add custom image sizes
add_image_size('card', 768, 512, true);
add_image_size('hero', 1920, 1080, true);

// 4. Expose custom fields in REST API
add_action('rest_api_init', function() {
    // Add reading time estimate
    register_rest_field('post', 'reading_time', [
        'get_callback' => function($post) {
            $content = strip_tags($post['content']['rendered']);
            $word_count = str_word_count($content);
            return max(1, ceil($word_count / 250));
        },
        'schema' => ['type' => 'integer', 'description' => 'Estimated reading time in minutes'],
    ]);

    // Add featured image URL directly
    register_rest_field('post', 'featured_image_url', [
        'get_callback' => function($post) {
            $thumb_id = get_post_thumbnail_id($post['id']);
            if ($thumb_id) {
                $img = wp_get_attachment_image_src($thumb_id, 'large');
                return $img ? $img[0] : null;
            }
            return null;
        },
        'schema' => ['type' => 'string', 'description' => 'Featured image URL'],
    ]);

    // Add author info
    register_rest_field('post', 'author_info', [
        'get_callback' => function($post) {
            $author_id = $post['author'];
            return [
                'name' => get_the_author_meta('display_name', $author_id),
                'bio' => get_the_author_meta('description', $author_id),
                'avatar' => get_avatar_url($author_id, ['size' => 96]),
            ];
        },
        'schema' => ['type' => 'object'],
    ]);
});

// 5. Redirect frontend to Next.js site
add_action('template_redirect', function() {
    if (!is_admin() && !wp_doing_ajax() && !defined('REST_REQUEST')) {
        $frontend = defined('P5_FRONTEND_URL') ? P5_FRONTEND_URL : 'https://p5marketing.com';
        wp_redirect($frontend, 301);
        exit;
    }
});

// 6. Disable XML-RPC (security)
add_filter('xmlrpc_enabled', '__return_false');

// 7. Clean up head
remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'rsd_link');

// 8. Increase REST API per_page limit
add_filter('rest_post_collection_params', function($params) {
    $params['per_page']['maximum'] = 100;
    return $params;
});

// 9. Add revalidation webhook - triggers Next.js ISR when content changes
add_action('save_post', function($post_id, $post) {
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;
    if ($post->post_status !== 'publish') return;

    $revalidation_url = defined('P5_REVALIDATION_URL') ? P5_REVALIDATION_URL : '';
    $revalidation_secret = defined('P5_REVALIDATION_SECRET') ? P5_REVALIDATION_SECRET : '';

    if ($revalidation_url && $revalidation_secret) {
        wp_remote_post($revalidation_url, [
            'body' => json_encode([
                'secret' => $revalidation_secret,
                'slug' => $post->post_name,
                'type' => $post->post_type,
            ]),
            'headers' => ['Content-Type' => 'application/json'],
            'timeout' => 5,
            'blocking' => false,
        ]);
    }
}, 10, 2);

// 10. Customize admin appearance
add_action('admin_head', function() {
    echo '<style>
        #wpadminbar { background: #080c14 !important; }
        #wpadminbar .ab-item { color: #e2e8f0 !important; }
        .wp-core-ui .button-primary { background: #00e5c7 !important; border-color: #00e5c7 !important; color: #080c14 !important; }
    </style>';
});

// 11. Admin footer branding
add_filter('admin_footer_text', function() {
    return 'P5 Marketing — Headless WordPress CMS. Frontend: <a href="https://p5marketing.com" target="_blank">p5marketing.com</a>';
});
