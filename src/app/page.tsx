import Link from "next/link";
import { getPosts } from "@/lib/wordpress";
import BlogCard from "@/components/BlogCard";

// Datos estáticos para las secciones hero y servicios
// (se pueden mover a WordPress con ACF o Custom Fields más adelante)
const services = [
  {
    icon: "📈",
    title: "Marketing Digital",
    description:
      "Estrategias integrales que impulsan tu presencia online y generan leads cualificados.",
  },
  {
    icon: "🎨",
    title: "Diseño Web",
    description:
      "Sitios web modernos, rápidos y optimizados para convertir visitantes en clientes.",
  },
  {
    icon: "🔍",
    title: "SEO",
    description:
      "Posicionamiento orgánico que te lleva a las primeras posiciones de Google.",
  },
  {
    icon: "📱",
    title: "Redes Sociales",
    description:
      "Gestión y creación de contenido que conecta con tu audiencia y genera engagement.",
  },
];

export default async function HomePage() {
  // Fetch últimos posts del blog desde WordPress
  let latestPosts = [];
  try {
    const { posts } = await getPosts(1, 3);
    latestPosts = posts;
  } catch {
    // WordPress no disponible — renderizamos sin posts
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20 lg:py-32">
        <div className="container-narrow text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Marketing que{" "}
            <span className="text-primary-600">genera resultados</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            Somos una agencia de marketing digital enfocada en hacer crecer tu
            negocio con estrategias basadas en datos y creatividad.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contacto" className="btn-primary">
              Solicitar consulta gratis
            </Link>
            <Link href="/portafolio" className="btn-secondary">
              Ver nuestro trabajo
            </Link>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-20">
        <div className="container-narrow">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Nuestros servicios
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Todo lo que necesitas para dominar el mundo digital.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-gray-100 p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="text-3xl">{service.icon}</span>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/servicios" className="btn-secondary">
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-600 py-20">
        <div className="container-narrow text-center">
          <h2 className="text-3xl font-bold text-white">
            ¿Listo para hacer crecer tu negocio?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-primary-100">
            Agenda una consulta gratuita y descubre cómo podemos ayudarte a
            alcanzar tus objetivos.
          </p>
          <Link
            href="/contacto"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 font-semibold text-primary-600 transition-colors hover:bg-primary-50"
          >
            Hablemos
          </Link>
        </div>
      </section>

      {/* Blog reciente */}
      {latestPosts.length > 0 && (
        <section className="py-20">
          <div className="container-narrow">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">
                Últimos artículos
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Consejos, tendencias y estrategias de marketing digital.
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {latestPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link href="/blog" className="btn-secondary">
                Ver todos los artículos
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
