<?php
// Silence is golden. This is a headless theme — no frontend rendering.
// All requests redirect to the Next.js frontend.
wp_redirect(home_url('/wp-admin/'));
exit;
