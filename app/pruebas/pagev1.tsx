export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] text-slate-900">
      {/* NAVBAR */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-xl font-bold tracking-tight">NegoKit</h1>
            <p className="text-xs text-slate-500">
              Herramientas sencillas para tu negocio
            </p>
          </div>

          <button className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium hover:bg-slate-50">
            Mi cuenta
          </button>
        </div>
      </header>

      {/* CONTENIDO */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm font-semibold text-slate-500">
            MI PORTFOLIO
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Presenta tus servicios de forma profesional.
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Crea tu portfolio, muestra lo que haces y permite que tus clientes
            contacten contigo directamente por WhatsApp.
          </p>
        </div>

        {/* EDITOR + PREVIEW */}
        <div className="grid gap-8 lg:grid-cols-2">
          
          {/* EDITOR */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6">
              <h3 className="text-lg font-semibold">
                Edita tu portfolio
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Completa la información de tu negocio. Podrás cambiarla
                cuando quieras.
              </p>
            </div>

            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Nombre del negocio
                </label>

                <input
                  type="text"
                  placeholder="Ej. Jardinería García"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Descripción
                </label>

                <textarea
                  rows="4"
                  placeholder="Cuéntale brevemente a tus clientes qué haces..."
                  className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  WhatsApp
                </label>

                <input
                  type="text"
                  placeholder="Ej. 600 000 000"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-100"
                />
              </div>

              <div className="border-t border-slate-100 pt-5">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold">Servicios</h4>
                    <p className="text-sm text-slate-500">
                      Añade lo que ofreces.
                    </p>
                  </div>

                  <button className="text-sm font-semibold text-slate-900 hover:underline">
                    + Añadir
                  </button>
                </div>

                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <input
                      type="text"
                      placeholder="Nombre del servicio"
                      className="rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-slate-900"
                    />

                    <input
                      type="text"
                      placeholder="Precio"
                      className="rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-slate-900"
                    />
                  </div>
                </div>
              </div>

              <button className="w-full rounded-lg bg-slate-900 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800">
                Guardar portfolio
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                <span>🔒</span>
                <span>Tus datos están protegidos</span>
              </div>
            </div>
          </section>

          {/* PREVIEW */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">
                  Vista previa
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Así lo verá tu cliente.
                </p>
              </div>

              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                Vista pública
              </span>
            </div>

            {/* PORTFOLIO */}
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <div className="bg-slate-900 px-6 py-10 text-white">
                <p className="mb-3 text-sm font-medium text-slate-300">
                  SERVICIOS PROFESIONALES
                </p>

                <h4 className="text-3xl font-bold tracking-tight">
                  Jardinería García
                </h4>

                <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">
                  Cuidado y mantenimiento de jardines con un servicio cercano,
                  profesional y adaptado a cada cliente.
                </p>
              </div>

              <div className="space-y-4 p-6">
                <div className="flex items-center justify-between rounded-xl border border-slate-200 p-4">
                  <div>
                    <p className="font-semibold">Poda de jardines</p>
                    <p className="mt-1 text-sm text-slate-500">
                      Mantenimiento y poda profesional.
                    </p>
                  </div>

                  <span className="font-semibold">50 €</span>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-slate-200 p-4">
                  <div>
                    <p className="font-semibold">Mantenimiento</p>
                    <p className="mt-1 text-sm text-slate-500">
                      Cuidado periódico del jardín.
                    </p>
                  </div>

                  <span className="font-semibold">80 €</span>
                </div>

                <button className="mt-2 w-full rounded-lg bg-slate-900 px-5 py-3.5 text-sm font-semibold text-white hover:bg-slate-800">
                  Contactar por WhatsApp
                </button>

                <p className="text-center text-xs text-slate-400">
                  Respuesta directa con el profesional
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}