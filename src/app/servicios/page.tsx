import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Descubre nuestros servicios de marketing digital: diseño web, SEO, redes sociales, publicidad y más.",
};

const services = [
  {
    id: "marketing-digital",
    icon: "📈",
    title: "Marketing Digital",
    description:
      "Desarrollamos estrategias integrales de marketing digital que combinan múltiples canales para maximizar tu ROI. Analizamos tu mercado, definimos objetivos claros y ejecutamos campañas medibles.",
    features: [
      "Estrategia de marketing integral",
      "Email marketing y automatización",
      "Análisis y reportes mensuales",
      "Optimización de conversiones",
    ],
  },
  {
    id: "diseno-web",
    icon: "🎨",
    title: "Diseño y Desarrollo Web",
    description:
      "Creamos sitios web modernos, rápidos y optimizados para convertir. Utilizamos las últimas tecnologías para ofrecer experiencias que impresionan y generan resultados.",
    features: [
      "Diseño UI/UX personalizado",
      "Desarrollo responsive",
      "WordPress y headless CMS",
      "Optimización de rendimiento",
    ],
  },
  {
    id: "seo",
    icon: "🔍",
    title: "SEO y Posicionamiento",
    description:
      "Posicionamos tu sitio en las primeras posiciones de Google con estrategias de SEO técnico, contenido y link building que generan tráfico orgánico cualificado.",
    features: [
      "Auditoría SEO técnica",
      "Investigación de keywords",
      "Optimización on-page y off-page",
      "SEO local para negocios",
    ],
  },
  {
    id: "redes-sociales",
    icon: "📱",
    title: "Redes Sociales",
    description:
      "Gestionamos tus redes sociales con contenido estratégico que conecta con tu audiencia, genera engagement y convierte seguidores en clientes.",
    features: [
      "Estrategia de contenido",
      "Gestión de comunidad",
      "Publicidad en redes sociales",
      "Análisis y optimización",
    ],
  },
  {
    id: "publicidad",
    icon: "🎯",
    title: "Publicidad Digital",
    description:
      "Campañas de publicidad en Google Ads, Meta Ads y otras plataformas optimizadas para generar leads y ventas con el mejor retorno de inversión.",
    features: [
      "Google Ads (Search, Display, Shopping)",
      "Meta Ads (Facebook e Instagram)",
      "Retargeting y remarketing",
      "A/B testing y optimización",
    ],
  },
  {
    id: "branding",
    icon: "✨",
    title: "Branding e Identidad",
    description:
      "Construimos marcas memorables que conectan emocionalmente con tu público. Desde el logo hasta la guía de marca completa.",
    features: [
      "Diseño de logotipo",
      "Identidad visual corporativa",
      "Guía de marca y estilo",
      "Material gráfico",
    ],
  },
];

export default function ServiciosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16 lg:py-24">
        <div className="container-narrow text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Nuestros servicios
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Soluciones completas de marketing digital para hacer crecer tu
            negocio de forma sostenible.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20">
        <div className="container-narrow">
          <div className="grid gap-10 lg:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="rounded-2xl border border-gray-100 p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="text-4xl">{service.icon}</span>
                <h2 className="mt-4 text-2xl font-bold text-gray-900">
                  {service.title}
                </h2>
                <p className="mt-3 leading-relaxed text-gray-600">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-gray-500"
                    >
                      <span className="mt-0.5 text-primary-500">&#10003;</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-600 py-16">
        <div className="container-narrow text-center">
          <h2 className="text-3xl font-bold text-white">
            ¿Necesitas una solución a medida?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-primary-100">
            Cuéntanos tu proyecto y diseñamos un plan personalizado para tu
            negocio.
          </p>
          <Link
            href="/contacto"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 font-semibold text-primary-600 transition-colors hover:bg-primary-50"
          >
            Solicitar cotización
          </Link>
        </div>
      </section>
    </>
  );
}
