import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center justify-center py-20">
      <div className="text-center">
        <p className="text-6xl font-bold text-primary-600">404</p>
        <h1 className="mt-4 text-3xl font-bold text-gray-900">
          Página no encontrada
        </h1>
        <p className="mt-4 text-lg text-gray-500">
          Lo sentimos, la página que buscas no existe o fue movida.
        </p>
        <Link href="/" className="btn-primary mt-8 inline-block">
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
