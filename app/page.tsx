"use client";

/*
=========================================================
 NEGOKIT — LANDING PROFESIONAL
 Plantilla reutilizable para:
 peluquería · uñas · fontanería · jardinería · mudanzas
 fotografía · estética · reparación · etc.
=========================================================
*/

const business = {
  name: "Gaby Nails",
  owner: "Gabriela",

  profession: "Manicura · Gel · Nail Art",
  location: "Madrid · Fuencarral",

  logo: "GN",

  whatsapp: "34600123456",

  instagram: "https://instagram.com/",
  tiktok: "https://www.tiktok.com/",

  /*
  Estos datos deben ser REALES del profesional.
  Si no quiere mostrar alguno, simplemente se elimina.
  */

  trustItems: [
    "+500 clientes atendidos",
    "Respuesta < 24 h",
  ],

  schedule: "Lun–Sáb · 10:00–19:00",

  /*
  CTA principal adaptable al tipo de negocio.
  Ejemplos:
  "Reservar cita"
  "Solicitar presupuesto"
  "Consultar disponibilidad"
  "Pedir información"
  */

  mainCTA: "Reservar cita",

  finalCTA: "¿Tienes algo en mente?",
  finalDescription:
    "Cuéntame qué necesitas y te respondo directamente por WhatsApp.",
};


/* =========================================================
   SERVICIOS
========================================================= */

const services = [
  {
    title: "Manicura semipermanente",

    description:
      "Acabado natural, cuidado y duradero.",

    price: "25 €",

    duration: "45 min",

    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=90",

    before:
      "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=700&q=90",

    after:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=700&q=90",
  },

  {
    title: "Uñas de gel",

    description:
      "Construcción y alargamiento con acabado elegante.",

    price: "40 €",

    duration: "75 min",

    image:
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1200&q=90",

    before:
      "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=700&q=90",

    after:
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=700&q=90",
  },

  {
    title: "Nail Art",

    description:
      "Diseños personalizados para darle tu propio estilo.",

    price: "Desde 30 €",

    duration: "60 min",

    image:
      "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=1200&q=90",

    before:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=700&q=90",

    after:
      "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=700&q=90",
  },
];


/* =========================================================
   WHATSAPP
========================================================= */

function sendWhatsApp(message) {
  window.open(
    `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
      message
    )}`,
    "_blank"
  );
}


function contactGeneral() {
  sendWhatsApp(
    `Hola ${business.name} 👋

He visto vuestro catálogo y me gustaría pedir información.

¿Podéis ayudarme?`
  );
}


function contactService(service) {
  sendWhatsApp(
    `Hola ${business.name} 👋

Me interesa este servicio:

✨ ${service.title}

¿Tenéis disponibilidad?`
  );
}


/* =========================================================
   ICONOS
========================================================= */

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[18px] w-[18px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
      />

      <circle
        cx="17.5"
        cy="6.5"
        r="0.8"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}


function TikTokIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[18px] w-[18px]"
      fill="currentColor"
    >
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.4V2h-3.56v13.67a2.91 2.91 0 11-2-2.76V9.31a6.47 6.47 0 102 6.36V9.37a8.36 8.36 0 005.18 1.8V7.63a4.84 4.84 0 01-1.85-.94z" />
    </svg>
  );
}


function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[18px] w-[18px] fill-current"
    >
      <path d="M20.52 3.48A11.77 11.77 0 0012.05 0C5.55 0 .27 5.28.27 11.78c0 2.08.54 4.1 1.57 5.88L.16 24l6.49-1.65a11.76 11.76 0 005.4 1.3h.01c6.5 0 11.77-5.28 11.77-11.78 0-3.15-1.22-6.11-3.31-8.39zM12.06 21.68h-.01a9.78 9.78 0 01-4.98-1.36l-.36-.21-3.85.98 1.03-3.75-.23-.39a9.77 9.77 0 01-1.5-5.17c0-5.39 4.39-9.78 9.79-9.78 2.61 0 5.07 1.02 6.92 2.87a9.73 9.73 0 012.87 6.92c0 5.4-4.39 9.79-9.78 9.79zm5.37-7.33c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.65.15-.19.29-.75.95-.92 1.14-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.49.1-.19.05-.37-.02-.51-.07-.15-.65-1.58-.89-2.17-.23-.57-.47-.49-.65-.5h-.56c-.19 0-.49.07-.75.37-.26.29-.99.97-.99 2.37s1.02 2.75 1.16 2.94c.15.19 2 3.05 4.85 4.28.68.29 1.21.47 1.79.6.68.22 1.3.19 1.79.12.55-.08 1.72-.7 1.96-1.38.24-.68.24-1.27.17-1.39-.07-.12-.27-.19-.56-.34z" />
    </svg>
  );
}


function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1116 0z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}


function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
      />

      <path d="M12 7v5l3 2" />
    </svg>
  );
}


/* =========================================================
   PÁGINA
========================================================= */

export default function Home() {
  return (
    <main className="min-h-screen bg-[#eeeeec] text-neutral-900">


      {/* =====================================================
          CONTENEDOR
      ====================================================== */}

      <div className="mx-auto min-h-screen max-w-xl bg-white shadow-2xl">


        {/* =====================================================
            CABECERA
        ====================================================== */}

        <header className="px-5 pb-7 pt-7">


          {/* IDENTIDAD */}

          <div className="flex items-center justify-between gap-4">


            {/* LOGO + NOMBRE */}

            <div className="flex min-w-0 items-center gap-3.5">


              {/* LOGO */}

              <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-2xl bg-neutral-950 text-sm font-bold tracking-widest text-white shadow-lg">

                {business.logo}

              </div>


              {/* NOMBRE */}

              <div className="min-w-0">

                <h1 className="truncate text-[21px] font-bold tracking-[-0.04em]">

                  {business.name}

                </h1>


                <p className="mt-1 truncate text-xs font-medium text-neutral-500">

                  {business.profession}

                </p>

              </div>

            </div>


            {/* REDES */}

            <div className="flex shrink-0 items-center gap-1.5">


              <a
                href={business.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-950"
              >

                <InstagramIcon />

              </a>


              <a
                href={business.tiktok}
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-950"
              >

                <TikTokIcon />

              </a>

            </div>

          </div>


          {/* UBICACIÓN + HORARIO */}

          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-neutral-500">


            <div className="flex items-center gap-1.5">

              <LocationIcon />

              <span>
                {business.location}
              </span>

            </div>


            <div className="flex items-center gap-1.5">

              <ClockIcon />

              <span>
                {business.schedule}
              </span>

            </div>

          </div>


          {/* DATOS DE CONFIANZA */}

          <div className="mt-4 flex flex-wrap gap-2">

            {business.trustItems.map((item) => (

              <div
                key={item}
                className="rounded-full bg-neutral-100 px-3 py-1.5 text-[10px] font-semibold text-neutral-600"
              >

                {item}

              </div>

            ))}

          </div>


          {/* CTA PRINCIPAL */}

          <button
            onClick={contactGeneral}
            className="group mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-950 px-5 py-4 text-sm font-semibold text-white shadow-lg transition duration-300 hover:bg-neutral-800 active:scale-[0.98]"
          >

            <WhatsAppIcon />

            <span>
              {business.mainCTA}
            </span>

            <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>

          </button>

        </header>


        {/* =====================================================
            SEPARADOR
        ====================================================== */}

        <div className="h-px bg-neutral-100" />


        {/* =====================================================
            SERVICIOS
        ====================================================== */}

        <section className="px-5 pb-10 pt-8">


          {/* TÍTULO */}

          <div className="mb-5">

            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">

              Servicios

            </p>

            <h2 className="mt-1 text-2xl font-bold tracking-[-0.04em]">

              Elige lo que necesitas.

            </h2>

          </div>


          {/* LISTA */}

          <div className="space-y-5">

            {services.map((service, index) => (

              <article
                key={service.title}
                className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition duration-300 hover:shadow-xl"
              >


                {/* IMAGEN */}

                <div className="relative h-64 overflow-hidden">

                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />


                  {/* NÚMERO */}

                  <div className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[10px] font-bold shadow backdrop-blur">

                    {String(index + 1).padStart(2, "0")}

                  </div>

                </div>


                {/* INFORMACIÓN */}

                <div className="p-5">


                  <div className="flex items-start justify-between gap-4">


                    <div>

                      <h3 className="text-lg font-bold tracking-tight">

                        {service.title}

                      </h3>

                      <p className="mt-1 text-sm leading-5 text-neutral-500">

                        {service.description}

                      </p>

                    </div>


                    <div className="shrink-0 text-right">

                      <p className="font-bold">

                        {service.price}

                      </p>

                      <p className="mt-0.5 text-[10px] text-neutral-400">

                        {service.duration}

                      </p>

                    </div>

                  </div>


                  {/* ANTES / DESPUÉS */}

                  <div className="mt-5">

                    <div className="mb-2 flex items-center justify-between">

                      <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">

                        Resultado

                      </span>

                      <span className="text-[10px] text-neutral-400">

                        Antes / Después

                      </span>

                    </div>


                    <div className="grid grid-cols-2 gap-2">


                      <div className="relative overflow-hidden rounded-xl">

                        <img
                          src={service.before}
                          alt="Antes"
                          className="h-28 w-full object-cover"
                        />

                        <span className="absolute bottom-2 left-2 rounded-md bg-black/60 px-2 py-1 text-[8px] font-bold text-white">

                          ANTES

                        </span>

                      </div>


                      <div className="relative overflow-hidden rounded-xl">

                        <img
                          src={service.after}
                          alt="Después"
                          className="h-28 w-full object-cover"
                        />

                        <span className="absolute bottom-2 left-2 rounded-md bg-black/60 px-2 py-1 text-[8px] font-bold text-white">

                          DESPUÉS

                        </span>

                      </div>

                    </div>

                  </div>


                  {/* CTA SERVICIO */}

                  <button
                    onClick={() => contactService(service)}
                    className="group mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-950 px-5 py-4 text-sm font-semibold text-white transition hover:bg-neutral-800 active:scale-[0.98]"
                  >

                    {business.mainCTA}

                    <span className="transition-transform group-hover:translate-x-1">

                      →

                    </span>

                  </button>

                </div>

              </article>

            ))}

          </div>

        </section>


        {/* =====================================================
            PORTFOLIO
        ====================================================== */}

        <section className="border-t border-neutral-100 px-5 py-8">


          <div className="flex items-end justify-between">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">

                Trabajos

              </p>

              <h2 className="mt-1 text-xl font-bold tracking-tight">

                Algunos resultados.

              </h2>

            </div>


            <a
              href={business.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold text-neutral-600 underline underline-offset-4"
            >

              Ver más →

            </a>

          </div>


          {/* GALERÍA */}

          <div className="mt-5 grid grid-cols-3 gap-2">

            {services.map((service, index) => (

              <a
                href={business.instagram}
                target="_blank"
                rel="noreferrer"
                key={index}
                className="group aspect-square overflow-hidden rounded-xl"
              >

                <img
                  src={service.image}
                  alt={`Trabajo ${index + 1}`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

              </a>

            ))}

          </div>

        </section>


        {/* =====================================================
            CTA FINAL
        ====================================================== */}

        <section className="px-5 pb-8 pt-2">


          <div className="relative overflow-hidden rounded-3xl bg-neutral-950 px-6 py-10 text-white shadow-xl">


            {/* DECORACIÓN */}

            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full border border-white/10" />

            <div className="absolute -bottom-20 -left-16 h-48 w-48 rounded-full border border-white/5" />


            <div className="relative">


              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">

                Hablemos

              </p>


              <h2 className="mt-2 max-w-sm text-3xl font-bold leading-tight tracking-[-0.04em]">

                {business.finalCTA}

              </h2>


              <p className="mt-3 max-w-sm text-sm leading-6 text-neutral-400">

                {business.finalDescription}

              </p>


              <button
                onClick={contactGeneral}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-4 text-sm font-bold text-neutral-950 transition hover:bg-neutral-200 active:scale-[0.98]"
              >

                <WhatsAppIcon />

                Hablar por WhatsApp

                <span>
                  →
                </span>

              </button>


              <p className="mt-3 text-center text-[10px] text-neutral-600">

                Respuesta rápida · Sin compromiso

              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            FOOTER
        ====================================================== */}

        <footer className="border-t border-neutral-100 px-5 py-6">


          <div className="flex items-center justify-between">


            <div>

              <p className="text-sm font-semibold">

                {business.name}

              </p>

              <p className="mt-1 text-[10px] text-neutral-400">

                {business.location}

              </p>

            </div>


            <div className="flex gap-1.5">


              <a
                href={business.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-500"
              >

                <InstagramIcon />

              </a>


              <a
                href={business.tiktok}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-500"
              >

                <TikTokIcon />

              </a>

            </div>

          </div>


          <p className="mt-5 text-center text-[9px] text-neutral-300">

            © 2026 {business.name}

          </p>

        </footer>

      </div>


      {/* =====================================================
          WHATSAPP FLOTANTE
      ====================================================== */}

      <a
        href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
          "Hola 👋 He visto vuestro catálogo y me gustaría pedir información."
        )}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition duration-300 hover:scale-110 active:scale-95"
      >

        <WhatsAppIcon />

      </a>

    </main>
  );
}