import type { Metadata } from "next";
import { getPosts } from "@/lib/wordpress";
import BlogCard from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artículos, consejos y tendencias sobre marketing digital, SEO, redes sociales y diseño web.",
};

export default async function BlogPage() {
  let posts = [];
  let totalPages = 1;
  let error = false;

  try {
    const result = await getPosts(1, 12);
    posts = result.posts;
    totalPages = result.totalPages;
  } catch {
    error = true;
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16 lg:py-24">
        <div className="container-narrow text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Blog
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Consejos, tendencias y estrategias de marketing digital para hacer
            crecer tu negocio.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20">
        <div className="container-narrow">
          {error ? (
            <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-8 text-center">
              <p className="text-yellow-800">
                No se pudo conectar con WordPress. Verifica que la URL del API
                esté configurada correctamente en las variables de entorno.
              </p>
            </div>
          ) : posts.length === 0 ? (
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-8 text-center">
              <p className="text-gray-500">
                Aún no hay artículos publicados. ¡Pronto habrá contenido!
              </p>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
