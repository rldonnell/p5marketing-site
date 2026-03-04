"use client";

import { useState, type FormEvent } from "react";
import type { Metadata } from "next";

// Nota: metadata no funciona en client components,
// se puede mover a un layout.tsx si se necesita SEO aquí.

export default function ContactoPage() {
  const [formState, setFormState] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("sending");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      // Aquí puedes conectar con:
      // - WordPress REST API (crear un endpoint custom)
      // - Vercel Serverless Function (api/contact)
      // - Un servicio como Formspree, Resend, etc.
      console.log("Form data:", data);

      // Simular envío
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFormState("sent");
    } catch {
      setFormState("error");
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16 lg:py-24">
        <div className="container-narrow text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Contacto
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            ¿Tienes un proyecto en mente? Escríbenos y te respondemos en menos
            de 24 horas.
          </p>
        </div>
      </section>

      {/* Contact form + info */}
      <section className="py-20">
        <div className="container-narrow">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              {formState === "sent" ? (
                <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
                  <h2 className="text-2xl font-bold text-green-800">
                    ¡Mensaje enviado!
                  </h2>
                  <p className="mt-2 text-green-700">
                    Gracias por contactarnos. Te responderemos pronto.
                  </p>
                  <button
                    onClick={() => setFormState("idle")}
                    className="btn-primary mt-6"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Nombre
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                      placeholder="Nombre de tu empresa (opcional)"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Servicio de interés
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="marketing-digital">Marketing Digital</option>
                      <option value="diseno-web">Diseño y Desarrollo Web</option>
                      <option value="seo">SEO y Posicionamiento</option>
                      <option value="redes-sociales">Redes Sociales</option>
                      <option value="publicidad">Publicidad Digital</option>
                      <option value="branding">Branding</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                      placeholder="Cuéntanos sobre tu proyecto..."
                    />
                  </div>

                  {formState === "error" && (
                    <p className="text-sm text-red-600">
                      Hubo un error al enviar. Por favor intenta de nuevo.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={formState === "sending"}
                    className="btn-primary w-full disabled:opacity-50"
                  >
                    {formState === "sending" ? "Enviando..." : "Enviar mensaje"}
                  </button>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl bg-gray-50 p-8">
                <h2 className="text-xl font-bold text-gray-900">
                  Información de contacto
                </h2>
                <div className="mt-6 space-y-5">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">
                      Email
                    </h3>
                    <a
                      href="mailto:hola@p5marketing.com"
                      className="mt-1 block text-sm text-primary-600 hover:underline"
                    >
                      hola@p5marketing.com
                    </a>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">
                      Teléfono
                    </h3>
                    <a
                      href="tel:+1234567890"
                      className="mt-1 block text-sm text-gray-600"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">
                      Horario
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Lunes a Viernes: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">
                      Redes sociales
                    </h3>
                    <div className="mt-2 flex gap-4">
                      <a href="#" className="text-sm text-gray-500 hover:text-primary-600">
                        Instagram
                      </a>
                      <a href="#" className="text-sm text-gray-500 hover:text-primary-600">
                        LinkedIn
                      </a>
                      <a href="#" className="text-sm text-gray-500 hover:text-primary-600">
                        Facebook
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
