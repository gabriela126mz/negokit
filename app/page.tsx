"use client";

type Service = {
  id: number;
  title: string;
  description: string;

  image: string;

  showPrice: boolean;
  price: string;

  showDuration: boolean;
  duration: string;

  showBeforeAfter: boolean;
  beforeImage: string;
  afterImage: string;
};

const business = {
  name: "your_braind_style",

  owner: "Your Braind Style",

  profession:
    "Peluquería · Trenzas · Cortes",

  location: "Madrid",

  logo: "YB",

  whatsapp: "34600123456",

  instagram:
    "https://instagram.com/",

  tiktok:
    "https://www.tiktok.com/",

  schedule:
    "Consultar disponibilidad",

  trustItems: [
    "Servicio personalizado",
    "Respuesta < 24 h",
  ],

  mainCTA: "Reservar cita",

  finalCTA:
    "¿Tienes un estilo en mente?",

  finalDescription:
    "Cuéntame qué quieres hacerte y hablamos directamente por WhatsApp.",
};

const services: Service[] = [
  {
    id: 1,

    title: "Trenzas sueltas",

    description:
      "Trenzas sueltas personalizadas, cómodas y adaptadas al estilo que quieras conseguir.",

    image:
      "https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&w=1200&q=90",

    showPrice: false,

    price: "",

    showDuration: false,

    duration: "",

    showBeforeAfter: true,

    beforeImage:
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=700&q=90",

    afterImage:
      "https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&w=700&q=90",
  },

  {
    id: 2,

    title: "Trenzas de raíz",

    description:
      "Trenzas de raíz con diseños personalizados y un acabado limpio y definido.",

    image:
      "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?auto=format&fit=crop&w=1200&q=90",

    showPrice: true,

    price: "Desde 35 €",

    showDuration: false,

    duration: "",

    showBeforeAfter: false,

    beforeImage: "",

    afterImage: "",
  },
];

/* =====================================================
   WHATSAPP
====================================================== */

function sendWhatsApp(message: string) {
  window.open(
    `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
      message
    )}`,
    "_blank"
  );
}

function contactGeneral() {
  sendWhatsApp(`Hola ${business.name} 👋

He visto vuestro catálogo y me gustaría pedir información.

¿Podéis ayudarme?`);
}

function contactService(
  service: Service
) {
  sendWhatsApp(`Hola ${business.name} 👋

Me interesa este servicio:

✨ ${service.title}

¿Tenéis disponibilidad?`);
}

/* =====================================================
   ICONOS
====================================================== */

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
      <path d="M20.52 3.48A11.77 11.77 0 0012.05 0C5.55 0 .27 5.28.27 11.78c0 2.08.54 4.1 1.57 5.88L.16 24l6.49-1.65a11.76 11.76 0 005.4 1.3h.01c6.5 0 11.77-5.28 11.77-11.78 0-3.15-1.22-6.11-3.31-8.39zM12.06 21.68h-.01a9.78 9.78 0 01-4.98-1.36l-.36-.21-3.85.98 1.03-3.75-.23-.39a9.77 9.77 0 01-1.5-5.17c0-5.39 4.39-9.78 9.79-9.78 2.61 0 5.07 1.02 6.92 2.87a9.73 9.73 0 012.87 6.92c0 5.4-4.39 9.79-9.78 9.79z" />
    </svg>
  );
}

/* =====================================================
   PAGE
====================================================== */

export default function Home() {
  return (
    <main className="min-h-screen bg-[#eeeeec] text-neutral-950">
      <div className="mx-auto min-h-screen max-w-xl bg-white shadow-2xl">

        {/* CABECERA */}

        <header className="px-5 pb-7 pt-7">
          <div className="flex items-center justify-between gap-4">
            <div className="flex min-w-0 items-center gap-3.5">
              <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-2xl bg-neutral-950 text-sm font-bold tracking-widest text-white shadow-lg">
                {business.logo}
              </div>

              <div className="min-w-0">
                <h1 className="truncate text-[21px] font-bold tracking-[-0.04em]">
                  {business.name}
                </h1>

                <p className="mt-1 text-xs font-medium text-neutral-500">
                  {business.profession}
                </p>
              </div>
            </div>

            <div className="flex shrink-0 gap-1.5">
              <a
                href={business.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-500 transition hover:bg-neutral-100"
              >
                <InstagramIcon />
              </a>

              <a
                href={business.tiktok}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-500 transition hover:bg-neutral-100"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2 text-xs text-neutral-500">
            <span>📍 {business.location}</span>

            <span>·</span>

            <span>🕐 {business.schedule}</span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {business.trustItems.map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full bg-neutral-100 px-3 py-1.5 text-[10px] font-semibold text-neutral-600"
                >
                  {item}
                </span>
              )
            )}
          </div>

          <button
            onClick={contactGeneral}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-950 px-5 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-neutral-800"
          >
            <WhatsAppIcon />

            {business.mainCTA}

            <span>→</span>
          </button>
        </header>

        <div className="h-px bg-neutral-100" />

        {/* SERVICIOS */}

        <section className="px-5 pb-10 pt-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
            Servicios
          </p>

          <h2 className="mt-1 text-2xl font-bold tracking-[-0.04em]">
            Elige lo que necesitas.
          </h2>

          <div className="mt-5 space-y-5">
            {services.map(
              (service, index) => (
                <article
                  key={service.id}
                  className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
                >
                  {/* FOTO PRINCIPAL */}

                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover"
                    />

                    <div className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[10px] font-bold shadow">
                      {String(
                        index + 1
                      ).padStart(2, "0")}
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-bold">
                          {service.title}
                        </h3>

                        <p className="mt-1 text-sm leading-5 text-neutral-500">
                          {
                            service.description
                          }
                        </p>
                      </div>

                      {/* PRECIO/DURACIÓN SOLO SI EXISTEN */}

                      {(service.showPrice ||
                        service.showDuration) && (
                        <div className="shrink-0 text-right">
                          {service.showPrice &&
                            service.price && (
                              <p className="font-bold">
                                {
                                  service.price
                                }
                              </p>
                            )}

                          {service.showDuration &&
                            service.duration && (
                              <p className="mt-0.5 text-[10px] text-neutral-400">
                                {
                                  service.duration
                                }
                              </p>
                            )}
                        </div>
                      )}
                    </div>

                    {/* ANTES/DESPUÉS SOLO SI SE ACTIVÓ */}

                    {service.showBeforeAfter &&
                      service.beforeImage &&
                      service.afterImage && (
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
                                src={
                                  service.beforeImage
                                }
                                alt="Antes"
                                className="h-28 w-full object-cover"
                              />

                              <span className="absolute bottom-2 left-2 rounded-md bg-black/60 px-2 py-1 text-[8px] font-bold text-white">
                                ANTES
                              </span>
                            </div>

                            <div className="relative overflow-hidden rounded-xl">
                              <img
                                src={
                                  service.afterImage
                                }
                                alt="Después"
                                className="h-28 w-full object-cover"
                              />

                              <span className="absolute bottom-2 left-2 rounded-md bg-black/60 px-2 py-1 text-[8px] font-bold text-white">
                                DESPUÉS
                              </span>
                            </div>
                          </div>
                        </div>
                      )}

                    <button
                      onClick={() =>
                        contactService(
                          service
                        )
                      }
                      className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-950 px-5 py-4 text-sm font-semibold text-white transition hover:bg-neutral-800"
                    >
                      {business.mainCTA}

                      <span>→</span>
                    </button>
                  </div>
                </article>
              )
            )}
          </div>
        </section>

        {/* CTA FINAL */}

        <section className="px-5 pb-8">
          <div className="rounded-3xl bg-neutral-950 px-6 py-9 text-white shadow-xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">
              Hablemos
            </p>

            <h2 className="mt-2 text-3xl font-bold leading-tight tracking-[-0.04em]">
              {business.finalCTA}
            </h2>

            <p className="mt-3 text-sm leading-6 text-neutral-400">
              {business.finalDescription}
            </p>

            <button
              onClick={contactGeneral}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-4 text-sm font-bold text-neutral-950"
            >
              <WhatsAppIcon />

              Hablar por WhatsApp

              <span>→</span>
            </button>
          </div>
        </section>

        <footer className="border-t border-neutral-100 px-5 py-6 text-center">
          <p className="text-[10px] text-neutral-400">
            © 2026 {business.name} ·{" "}
            {business.location}
          </p>
        </footer>
      </div>

      {/* WHATSAPP FLOTANTE */}

      <button
        onClick={contactGeneral}
        aria-label="WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-110"
      >
        <WhatsAppIcon />
      </button>
    </main>
  );
}