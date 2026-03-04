import Link from "next/link";

const footerLinks = {
  Empresa: [
    { name: "Sobre nosotros", href: "/sobre-nosotros" },
    { name: "Servicios", href: "/servicios" },
    { name: "Portafolio", href: "/portafolio" },
    { name: "Blog", href: "/blog" },
  ],
  Servicios: [
    { name: "Marketing Digital", href: "/servicios#marketing-digital" },
    { name: "Diseño Web", href: "/servicios#diseno-web" },
    { name: "SEO", href: "/servicios#seo" },
    { name: "Redes Sociales", href: "/servicios#redes-sociales" },
  ],
  Contacto: [
    { name: "Escríbenos", href: "/contacto" },
    { name: "hola@p5marketing.com", href: "mailto:hola@p5marketing.com" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="container-narrow py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-primary-600">P5</span>
              <span className="text-xl font-bold text-gray-900">Marketing</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              Soluciones de marketing digital que generan resultados reales para
              tu negocio.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 transition-colors hover:text-primary-600"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} P5 Marketing. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}
