import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portafolio",
  description:
    "Conoce los proyectos que hemos realizado y los resultados que hemos generado para nuestros clientes.",
};

// Datos placeholder — se pueden traer desde WordPress con un CPT "portafolio"
const projects = [
  {
    title: "Rediseño Web para Clínica Dental",
    category: "Diseño Web",
    description:
      "Rediseño completo del sitio web con enfoque en conversión. Aumento del 150% en solicitudes de cita online.",
    result: "+150% citas online",
    color: "bg-blue-50",
  },
  {
    title: "Campaña SEO para E-commerce",
    category: "SEO",
    description:
      "Estrategia SEO integral para tienda de moda online. Posicionamiento en top 3 para 50+ keywords.",
    result: "+200% tráfico orgánico",
    color: "bg-green-50",
  },
  {
    title: "Gestión de Redes para Restaurante",
    category: "Redes Sociales",
    description:
      "Creación de contenido y gestión de comunidad en Instagram y TikTok. Crecimiento orgánico exponencial.",
    result: "50K seguidores en 6 meses",
    color: "bg-purple-50",
  },
  {
    title: "Google Ads para Inmobiliaria",
    category: "Publicidad Digital",
    description:
      "Campañas de Google Ads optimizadas para generación de leads inmobiliarios con bajo costo por adquisición.",
    result: "-60% costo por lead",
    color: "bg-orange-50",
  },
  {
    title: "Branding para Startup Tech",
    category: "Branding",
    description:
      "Desarrollo de identidad visual completa para startup de tecnología fintech desde cero.",
    result: "Identidad completa en 4 semanas",
    color: "bg-pink-50",
  },
  {
    title: "Landing Page para Evento",
    category: "Diseño Web",
    description:
      "Diseño y desarrollo de landing page de alta conversión para evento corporativo con 2,000+ asistentes.",
    result: "95% de registro online",
    color: "bg-yellow-50",
  },
];

export default function PortafolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16 lg:py-24">
        <div className="container-narrow text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Nuestro portafolio
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Proyectos reales, resultados medibles. Conoce cómo hemos ayudado a
            nuestros clientes a crecer.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20">
        <div className="container-narrow">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group overflow-hidden rounded-xl border border-gray-100 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className={`${project.color} p-8`}>
                  <span className="inline-block rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-gray-700">
                    {project.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {project.description}
                  </p>
                  <div className="mt-4 rounded-lg bg-primary-50 px-3 py-2 text-center text-sm font-semibold text-primary-700">
                    {project.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-16">
        <div className="container-narrow text-center">
          <h2 className="text-3xl font-bold text-white">
            ¿Quieres ser nuestro próximo caso de éxito?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-gray-400">
            Contáctanos y descubre cómo podemos transformar tu presencia
            digital.
          </p>
          <Link
            href="/contacto"
            className="btn-primary mt-8"
          >
            Empezar proyecto
          </Link>
        </div>
      </section>
    </>
  );
}
