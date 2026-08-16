export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f7f9] text-slate-900">

      {/* NAVBAR */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          
          <div>
            <h1 className="text-xl font-bold tracking-tight">
              NegoKit
            </h1>
            <p className="text-xs text-slate-500">
              Herramientas sencillas para tu negocio
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden text-sm text-slate-500 sm:block">
              Portfolio
            </span>

            <button className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium hover:bg-slate-50">
              Mi cuenta
            </button>
          </div>

        </div>
      </header>


      {/* CABECERA */}
      <section className="mx-auto max-w-7xl px-6 pb-8 pt-12">

        <div className="max-w-3xl">

          <div className="mb-4 inline-flex rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white">
            Tu portfolio profesional
          </div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Presenta lo que haces.
            <br />
            <span className="text-slate-500">
              Sin complicarte.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Crea una página sencilla con tus servicios, precios e información
            de contacto para que tus clientes sepan rápidamente qué haces.
          </p>

        </div>

      </section>


      {/* EDITOR + PREVIEW */}
      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-16 lg:grid-cols-[420px_1fr]">


        {/* ================= EDITOR ================= */}

        <section className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          <div className="mb-7">

            <h3 className="text-lg font-semibold">
              Edita tu portfolio
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-500">
              Añade la información de tu negocio y personaliza cómo quieres
              presentarte.
            </p>

          </div>


          {/* LOGO */}
          <div className="mb-6">

            <label className="mb-2 block text-sm font-medium">
              Imagen principal
            </label>

            <div className="flex items-center gap-4">

              <div className="h-16 w-16 overflow-hidden rounded-xl bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=200&q=80"
                  alt="Jardinería"
                  className="h-full w-full object-cover"
                />
              </div>

              <button className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium hover:bg-slate-50">
                Cambiar imagen
              </button>

            </div>

          </div>


          {/* NOMBRE */}
          <div className="mb-5">

            <label className="mb-2 block text-sm font-medium">
              Nombre del negocio
            </label>

            <input
              type="text"
              placeholder="Ej. Jardinería García"
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-100"
            />

          </div>


          {/* DESCRIPCIÓN */}
          <div className="mb-5">

            <label className="mb-2 block text-sm font-medium">
              Descripción
            </label>

            <textarea
              rows="4"
              placeholder="Cuéntale a tus clientes qué haces..."
              className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-100"
            />

          </div>


          {/* WHATSAPP */}
          <div className="mb-7">

            <label className="mb-2 block text-sm font-medium">
              WhatsApp
            </label>

            <input
              type="text"
              placeholder="Ej. 600 000 000"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-100"
            />

          </div>


          {/* SERVICIOS */}

          <div className="border-t border-slate-100 pt-6">

            <div className="mb-4 flex items-center justify-between">

              <div>
                <h4 className="font-semibold">
                  Servicios
                </h4>

                <p className="text-xs text-slate-500">
                  Lo que ofreces a tus clientes.
                </p>
              </div>

              <button className="text-sm font-semibold text-slate-900 hover:underline">
                + Añadir
              </button>

            </div>


            {/* SERVICIO 1 */}

            <div className="mb-3 rounded-xl border border-slate-200 p-4">

              <input
                type="text"
                value="Poda de jardines"
                readOnly
                className="mb-3 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm"
              />

              <div className="flex gap-3">

                <input
                  type="text"
                  value="Mantenimiento profesional"
                  readOnly
                  className="flex-1 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm"
                />

                <input
                  type="text"
                  value="50 €"
                  readOnly
                  className="w-20 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm"
                />

              </div>

            </div>


            {/* SERVICIO 2 */}

            <div className="rounded-xl border border-slate-200 p-4">

              <input
                type="text"
                value="Mantenimiento"
                readOnly
                className="mb-3 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm"
              />

              <div className="flex gap-3">

                <input
                  type="text"
                  value="Cuidado periódico"
                  readOnly
                  className="flex-1 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm"
                />

                <input
                  type="text"
                  value="80 €"
                  readOnly
                  className="w-20 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm"
                />

              </div>

            </div>

          </div>


          {/* BOTÓN */}

          <button className="mt-7 w-full rounded-lg bg-slate-900 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800">
            Guardar portfolio
          </button>


          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
            <span>🔒</span>
            <span>Tus datos se guardan de forma segura</span>
          </div>

        </section>



        {/* ================= PREVIEW ================= */}

        <section>

          <div className="mb-4 flex items-center justify-between">

            <div>

              <h3 className="font-semibold">
                Vista previa
              </h3>

              <p className="text-sm text-slate-500">
                Así verá tu portfolio un cliente.
              </p>

            </div>

            <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-500 shadow-sm">
              Vista pública
            </span>

          </div>



          {/* PORTFOLIO REAL */}

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">


            {/* HERO IMAGE */}

            <div className="relative h-72 overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1400&q=85"
                alt="Jardinería profesional"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-7 left-7 text-white">

                <p className="mb-2 text-sm font-medium text-white/80">
                  SERVICIOS PROFESIONALES
                </p>

                <h4 className="text-4xl font-bold tracking-tight">
                  Jardinería García
                </h4>

                <p className="mt-2 text-sm text-white/80">
                  Cuidado y mantenimiento de jardines
                </p>

              </div>

            </div>



            {/* CONTENIDO */}

            <div className="p-7">


              {/* DESCRIPCIÓN */}

              <div className="mb-8 max-w-2xl">

                <h5 className="text-xl font-semibold">
                  Un jardín cuidado cambia un espacio.
                </h5>

                <p className="mt-3 leading-7 text-slate-600">
                  Nos encargamos del cuidado y mantenimiento de tu jardín
                  para que puedas disfrutarlo sin preocuparte por el trabajo.
                </p>

              </div>



              {/* SERVICIOS */}

              <div>

                <div className="mb-4 flex items-center justify-between">

                  <h5 className="text-lg font-semibold">
                    Servicios
                  </h5>

                  <span className="text-sm text-slate-400">
                    Precios orientativos
                  </span>

                </div>


                <div className="grid gap-4 sm:grid-cols-2">


                  {/* CARD 1 */}

                  <article className="overflow-hidden rounded-xl border border-slate-200">

                    <div className="h-40 overflow-hidden">

                      <img
                        src="https://images.unsplash.com/photo-1599685315640-9ce6e4c4c4d8?auto=format&fit=crop&w=700&q=80"
                        alt="Poda"
                        className="h-full w-full object-cover"
                      />

                    </div>

                    <div className="p-5">

                      <div className="flex items-start justify-between gap-3">

                        <div>

                          <h6 className="font-semibold">
                            Poda de jardines
                          </h6>

                          <p className="mt-1 text-sm text-slate-500">
                            Mantenimiento y poda profesional.
                          </p>

                        </div>

                        <span className="font-semibold">
                          50 €
                        </span>

                      </div>

                    </div>

                  </article>



                  {/* CARD 2 */}

                  <article className="overflow-hidden rounded-xl border border-slate-200">

                    <div className="h-40 overflow-hidden">

                      <img
                        src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=700&q=80"
                        alt="Mantenimiento"
                        className="h-full w-full object-cover"
                      />

                    </div>

                    <div className="p-5">

                      <div className="flex items-start justify-between gap-3">

                        <div>

                          <h6 className="font-semibold">
                            Mantenimiento
                          </h6>

                          <p className="mt-1 text-sm text-slate-500">
                            Cuidado periódico del jardín.
                          </p>

                        </div>

                        <span className="font-semibold">
                          80 €
                        </span>

                      </div>

                    </div>

                  </article>

                </div>

              </div>



              {/* CTA */}

              <div className="mt-8 rounded-2xl bg-slate-900 p-6 text-white">

                <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">

                  <div>

                    <h5 className="font-semibold">
                      ¿Necesitas ayuda con tu jardín?
                    </h5>

                    <p className="mt-1 text-sm text-slate-400">
                      Escríbeme directamente y hablamos.
                    </p>

                  </div>

                  <button className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                    Contactar por WhatsApp
                  </button>

                </div>

              </div>


            </div>

          </div>

        </section>

      </section>



      {/* FOOTER */}

      <footer className="border-t border-slate-200 bg-white">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-6 py-6 text-xs text-slate-400 sm:flex-row">

          <span>
            NegoKit
          </span>

          <span>
            Herramientas sencillas para profesionales.
          </span>

        </div>

      </footer>

    </main>
  );
}