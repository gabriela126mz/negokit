"use client";

import {
  ChangeEvent,
  FormEvent,
  ReactNode,
  useState,
} from "react";

const MAX_SERVICES = 10;
const MAX_DESCRIPTION = 300;

type Business = {
  businessName: string;
  ownerName: string;
  slogan: string;
  location: string;
  whatsapp: string;

  logo: string;

  instagram: string;
  tiktok: string;
  website: string;
};

type Service = {
  id: number;

  title: string;
  description: string;

  mainImage: string;

  secondaryImage1: string;
  secondaryImage2: string;

  showBeforeAfter: boolean;

  showPrice: boolean;
  price: string;
};

/* =========================================================
   DATOS INICIALES DEL NEGOCIO
========================================================= */

const initialBusiness: Business = {
  businessName: "Your Braind Style",
  ownerName: "",
  slogan: "Peluquería · Trenzas · Cortes",

  location: "",
  whatsapp: "",

  logo: "",

  instagram: "",
  tiktok: "",
  website: "",
};

/* =========================================================
   SERVICIO VACÍO
========================================================= */

function createEmptyService(): Service {
  return {
    id: Date.now() + Math.random(),

    title: "",
    description: "",

    mainImage: "",

    secondaryImage1: "",
    secondaryImage2: "",

    showBeforeAfter: false,

    showPrice: false,
    price: "",
  };
}

/* =========================================================
   SERVICIOS INICIALES
========================================================= */

const initialServices: Service[] = [
  {
    ...createEmptyService(),

    id: 1,

    title: "Trenzas sueltas",

    description:
      "Trenzas sueltas personalizadas y adaptadas al estilo que quieras conseguir.",
  },

  {
    ...createEmptyService(),

    id: 2,

    title: "Trenzas de raíz",

    description:
      "Trenzas de raíz con diseños personalizados y un acabado limpio y definido.",
  },
];

/* =========================================================
   PÁGINA
========================================================= */

export default function EditarPage() {
  /* =====================================================
     NEGOCIO
  ====================================================== */

  const [business, setBusiness] =
    useState<Business>(initialBusiness);

  const [businessSaved, setBusinessSaved] =
    useState(false);

  /* =====================================================
     SERVICIOS
  ====================================================== */

  const [services, setServices] =
    useState<Service[]>(initialServices);

  const [editingService, setEditingService] =
    useState<Service | null>(null);

  const [formOpen, setFormOpen] =
    useState(false);

  /* =====================================================
     EDITAR NEGOCIO
  ====================================================== */

  function updateBusiness<K extends keyof Business>(
    field: K,
    value: Business[K]
  ) {
    setBusiness((current) => ({
      ...current,
      [field]: value,
    }));

    setBusinessSaved(false);
  }

  function saveBusiness() {
    if (!business.businessName.trim()) {
      alert("Añade el nombre del negocio.");
      return;
    }

    if (!business.slogan.trim()) {
      alert(
        "Añade una frase o descripción breve de lo que haces."
      );
      return;
    }

    if (!business.whatsapp.trim()) {
      alert("Añade tu número de WhatsApp.");
      return;
    }

    setBusinessSaved(true);
  }

  /* =====================================================
     NUEVO SERVICIO
  ====================================================== */

  function addService() {
    if (services.length >= MAX_SERVICES) {
      return;
    }

    setEditingService(
      createEmptyService()
    );

    setFormOpen(true);

    scrollToEditor();
  }

  /* =====================================================
     EDITAR SERVICIO
  ====================================================== */

  function editService(service: Service) {
    setEditingService({
      ...service,
    });

    setFormOpen(true);

    scrollToEditor();
  }

  function scrollToEditor() {
    setTimeout(() => {
      document
        .getElementById("service-editor")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 100);
  }

  /* =====================================================
     ELIMINAR SERVICIO
  ====================================================== */

  function deleteService(id: number) {
    const confirmation =
      window.confirm(
        "¿Seguro que quieres eliminar este servicio?"
      );

    if (!confirmation) return;

    setServices((current) =>
      current.filter(
        (service) =>
          service.id !== id
      )
    );

    if (
      editingService?.id === id
    ) {
      setEditingService(null);
      setFormOpen(false);
    }
  }

  /* =====================================================
     ACTUALIZAR SERVICIO
  ====================================================== */

  function updateServiceField<
    K extends keyof Service
  >(
    field: K,
    value: Service[K]
  ) {
    setEditingService((current) => {
      if (!current) return null;

      return {
        ...current,
        [field]: value,
      };
    });
  }

  /* =====================================================
     SUBIDA DE IMÁGENES
  ====================================================== */

  function uploadImage(
    event: ChangeEvent<HTMLInputElement>,
    callback: (url: string) => void
  ) {
    const file =
      event.target.files?.[0];

    if (!file) return;

    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
    ];

    if (
      !allowedTypes.includes(
        file.type
      )
    ) {
      alert(
        "Solo puedes subir JPG, JPEG, PNG o WEBP."
      );

      event.target.value = "";

      return;
    }

    const previewUrl =
      URL.createObjectURL(file);

    callback(previewUrl);
  }

  /* =====================================================
     GUARDAR SERVICIO
  ====================================================== */

  function saveService(
    event: FormEvent
  ) {
    event.preventDefault();

    if (!editingService) return;

    if (
      !editingService.title.trim()
    ) {
      alert(
        "Añade el nombre del servicio."
      );

      return;
    }

    if (
      !editingService.description.trim()
    ) {
      alert(
        "Añade una descripción."
      );

      return;
    }

    if (
      editingService.description
        .length > MAX_DESCRIPTION
    ) {
      alert(
        "La descripción no puede superar los 300 caracteres."
      );

      return;
    }

    if (
      !editingService.mainImage
    ) {
      alert(
        "Añade una foto principal."
      );

      return;
    }

    /* PRECIO NUMÉRICO */

    if (
      editingService.showPrice
    ) {
      if (
        !editingService.price
      ) {
        alert(
          "Añade el precio o desactiva Mostrar precio."
        );

        return;
      }

      if (
        Number(
          editingService.price
        ) < 0
      ) {
        alert(
          "Introduce un precio válido."
        );

        return;
      }
    }

    /* ANTES / DESPUÉS */

    if (
      editingService.showBeforeAfter &&
      (!editingService.secondaryImage1 ||
        !editingService.secondaryImage2)
    ) {
      alert(
        "Para usar Antes / Después tienes que subir las dos imágenes secundarias."
      );

      return;
    }

    const alreadyExists =
      services.some(
        (service) =>
          service.id ===
          editingService.id
      );

    if (alreadyExists) {
      setServices((current) =>
        current.map((service) =>
          service.id ===
          editingService.id
            ? editingService
            : service
        )
      );
    } else {
      if (
        services.length >=
        MAX_SERVICES
      ) {
        return;
      }

      setServices((current) => [
        ...current,
        editingService,
      ]);
    }

    setEditingService(null);

    setFormOpen(false);
  }

  function cancelEditing() {
    setEditingService(null);

    setFormOpen(false);
  }

  /* =====================================================
     UI
  ====================================================== */

  return (
    <main className="min-h-screen bg-[#f4f4f2] text-neutral-950">

      <div className="mx-auto min-h-screen max-w-3xl bg-white shadow-xl">

        {/* ===============================================
            HEADER NEGOKIT
        ================================================ */}

        <header className="border-b border-neutral-100 px-5 py-7 sm:px-8">

          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-400">
            NegoKit
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-[-0.04em]">
            Edita tu catálogo
          </h1>

          <p className="mt-2 max-w-xl text-sm leading-6 text-neutral-500">
            Configura tu negocio y los servicios
            que quieres mostrar a tus clientes.
          </p>

        </header>

        {/* ===============================================
            DATOS DEL NEGOCIO
        ================================================ */}

        <section className="border-b border-neutral-100 px-5 py-8 sm:px-8">

          <SectionTitle
            label="Perfil"
            title="Tu negocio"
            description="Estos datos aparecerán en la parte superior de tu catálogo."
          />

          {/* LOGO */}

          <div className="mt-7">

            <FieldTitle
              title="Logo"
              description="Opcional. Puedes utilizar tu logo o una imagen de marca."
            />

            <ImageUploader
              preview={business.logo}
              compact
              onChange={(event) =>
                uploadImage(
                  event,
                  (url) =>
                    updateBusiness(
                      "logo",
                      url
                    )
                )
              }
            />

          </div>

          {/* NEGOCIO */}

          <div className="mt-6">

            <FieldTitle
              title="Nombre del negocio"
              required
            />

            <input
              value={
                business.businessName
              }
              onChange={(event) =>
                updateBusiness(
                  "businessName",
                  event.target.value
                )
              }
              maxLength={80}
              placeholder="Ej. Your Braind Style"
              className="input"
            />

          </div>

          {/* PERSONA */}

          <div className="mt-6">

            <FieldTitle
              title="Tu nombre"
              description="Opcional. El nombre de la persona detrás del negocio."
            />

            <input
              value={
                business.ownerName
              }
              onChange={(event) =>
                updateBusiness(
                  "ownerName",
                  event.target.value
                )
              }
              maxLength={80}
              placeholder="Ej. Andrea"
              className="input"
            />

          </div>

          {/* SLOGAN */}

          <div className="mt-6">

            <FieldTitle
              title="Qué haces"
              required
              description="Una frase corta para que el cliente lo entienda al instante."
            />

            <input
              value={
                business.slogan
              }
              onChange={(event) =>
                updateBusiness(
                  "slogan",
                  event.target.value
                )
              }
              maxLength={100}
              placeholder="Ej. Trenzas · Cortes · Peluquería"
              className="input"
            />

          </div>

          {/* UBICACIÓN */}

          <div className="mt-6">

            <FieldTitle
              title="Ubicación"
              description="Opcional."
            />

            <input
              value={
                business.location
              }
              onChange={(event) =>
                updateBusiness(
                  "location",
                  event.target.value
                )
              }
              placeholder="Ej. Madrid · Vallecas"
              className="input"
            />

          </div>

          {/* WHATSAPP */}

          <div className="mt-6">

            <FieldTitle
              title="WhatsApp"
              required
              description="Número al que llegarán las solicitudes."
            />

            <input
              value={
                business.whatsapp
              }
              onChange={(event) =>
                updateBusiness(
                  "whatsapp",
                  event.target.value.replace(
                    /[^0-9]/g,
                    ""
                  )
                )
              }
              inputMode="numeric"
              placeholder="Ej. 34600123456"
              className="input"
            />

          </div>

          {/* REDES */}

          <div className="mt-8 rounded-2xl border border-neutral-200 p-5">

            <h3 className="text-sm font-bold">
              Redes y enlaces
            </h3>

            <p className="mt-1 text-xs text-neutral-400">
              Todos son opcionales.
            </p>

            <div className="mt-5 space-y-4">

              <div>

                <label className="text-xs font-semibold">
                  Instagram
                </label>

                <input
                  value={
                    business.instagram
                  }
                  onChange={(event) =>
                    updateBusiness(
                      "instagram",
                      event.target.value
                    )
                  }
                  type="url"
                  placeholder="https://instagram.com/..."
                  className="input"
                />

              </div>

              <div>

                <label className="text-xs font-semibold">
                  TikTok
                </label>

                <input
                  value={
                    business.tiktok
                  }
                  onChange={(event) =>
                    updateBusiness(
                      "tiktok",
                      event.target.value
                    )
                  }
                  type="url"
                  placeholder="https://tiktok.com/@..."
                  className="input"
                />

              </div>

              <div>

                <label className="text-xs font-semibold">
                  Web
                </label>

                <input
                  value={
                    business.website
                  }
                  onChange={(event) =>
                    updateBusiness(
                      "website",
                      event.target.value
                    )
                  }
                  type="url"
                  placeholder="https://..."
                  className="input"
                />

              </div>

            </div>

          </div>

          {/* GUARDAR NEGOCIO */}

          <button
            onClick={saveBusiness}
            className="mt-6 w-full rounded-xl bg-neutral-950 px-5 py-4 text-sm font-bold text-white transition hover:bg-neutral-800"
          >
            {businessSaved
              ? "✓ Datos guardados"
              : "Guardar datos del negocio"}
          </button>

        </section>

        {/* ===============================================
            SERVICIOS
        ================================================ */}

        <section className="px-5 py-8 sm:px-8">

          <div className="flex items-end justify-between gap-4">

            <SectionTitle
              label="Catálogo"
              title="Tus servicios"
              description="Puedes añadir hasta 10 servicios."
            />

            <span className="rounded-full bg-neutral-950 px-3 py-1.5 text-[10px] font-bold text-white">

              {services.length} /{" "}
              {MAX_SERVICES}

            </span>

          </div>

          {/* LISTADO */}

          <div className="mt-7 space-y-3">

            {services.map(
              (service, index) => (

                <article
                  key={service.id}
                  className="rounded-2xl border border-neutral-200 p-4"
                >

                  <div className="flex gap-4">

                    {/* MINIATURA */}

                    <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-neutral-100">

                      {service.mainImage ? (
                        <img
                          src={
                            service.mainImage
                          }
                          alt={
                            service.title
                          }
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <span>
                          📷
                        </span>
                      )}

                    </div>

                    {/* INFO */}

                    <div className="min-w-0 flex-1">

                      <p className="text-[9px] font-bold uppercase tracking-widest text-neutral-400">
                        Servicio{" "}
                        {index + 1}
                      </p>

                      <h3 className="mt-1 truncate font-bold">
                        {service.title ||
                          "Sin nombre"}
                      </h3>

                      <p className="mt-1 line-clamp-2 text-xs leading-5 text-neutral-500">
                        {
                          service.description
                        }
                      </p>

                      <div className="mt-3 flex flex-wrap gap-1.5">

                        {service.showPrice && (
                          <Badge>
                            {service.price} €
                          </Badge>
                        )}

                        {service.secondaryImage1 && (
                          <Badge>
                            + fotos
                          </Badge>
                        )}

                        {service.showBeforeAfter && (
                          <Badge>
                            Antes / Después
                          </Badge>
                        )}

                      </div>

                    </div>

                  </div>

                  {/* BOTONES */}

                  <div className="mt-4 flex gap-2 border-t border-neutral-100 pt-4">

                    <button
                      onClick={() =>
                        editService(
                          service
                        )
                      }
                      className="flex-1 rounded-xl border border-neutral-200 py-3 text-xs font-bold"
                    >
                      Editar
                    </button>

                    <button
                      onClick={() =>
                        deleteService(
                          service.id
                        )
                      }
                      className="rounded-xl border border-red-100 px-4 py-3 text-xs font-bold text-red-500"
                    >
                      Eliminar
                    </button>

                  </div>

                </article>

              )
            )}

          </div>

          {/* AÑADIR */}

          {services.length <
            MAX_SERVICES && (

            <button
              onClick={addService}
              className="mt-5 w-full rounded-2xl border border-dashed border-neutral-300 py-5 text-sm font-bold text-neutral-500 transition hover:bg-neutral-50 hover:text-neutral-950"
            >
              + Añadir servicio
            </button>

          )}

        </section>

        {/* ===============================================
            EDITOR SERVICIO
        ================================================ */}

        {formOpen &&
          editingService && (

          <section
            id="service-editor"
            className="border-t border-neutral-200 bg-[#fafaf9] px-5 py-8 sm:px-8"
          >

            <SectionTitle
              label="Editor"
              title={
                services.some(
                  (service) =>
                    service.id ===
                    editingService.id
                )
                  ? "Editar servicio"
                  : "Nuevo servicio"
              }
            />

            <form
              onSubmit={
                saveService
              }
              className="mt-7"
            >

              {/* FOTO PRINCIPAL */}

              <FieldTitle
                title="Foto principal"
                required
                description="Es la imagen más importante del servicio."
              />

              <ImageUploader
                preview={
                  editingService.mainImage
                }
                onChange={(event) =>
                  uploadImage(
                    event,
                    (url) =>
                      updateServiceField(
                        "mainImage",
                        url
                      )
                  )
                }
              />

              {/* TÍTULO */}

              <div className="mt-7">

                <FieldTitle
                  title="Nombre del servicio"
                  required
                />

                <input
                  value={
                    editingService.title
                  }
                  onChange={(event) =>
                    updateServiceField(
                      "title",
                      event.target.value
                    )
                  }
                  maxLength={80}
                  placeholder="Ej. Trenzas de raíz"
                  className="input"
                />

              </div>

              {/* DESCRIPCIÓN */}

              <div className="mt-6">

                <FieldTitle
                  title="Descripción"
                  required
                />

                <textarea
                  value={
                    editingService.description
                  }
                  onChange={(event) =>
                    updateServiceField(
                      "description",
                      event.target.value
                    )
                  }
                  maxLength={
                    MAX_DESCRIPTION
                  }
                  rows={5}
                  placeholder="Describe brevemente el servicio..."
                  className="input resize-none"
                />

                <p className="mt-1 text-right text-[10px] text-neutral-400">
                  {
                    editingService
                      .description.length
                  }{" "}
                  / {MAX_DESCRIPTION}
                </p>

              </div>

              {/* PRECIO */}

              <OptionBox
                title="Mostrar precio"
                description="Opcional."
                checked={
                  editingService.showPrice
                }
                onChange={(value) =>
                  updateServiceField(
                    "showPrice",
                    value
                  )
                }
              >

                <div className="relative mt-4">

                  <input
                    value={
                      editingService.price
                    }
                    onChange={(event) =>
                      updateServiceField(
                        "price",
                        event.target.value.replace(
                          /[^0-9.]/g,
                          ""
                        )
                      )
                    }
                    type="text"
                    inputMode="decimal"
                    placeholder="Ej. 35"
                    className="input pr-12"
                  />

                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-neutral-400">
                    €
                  </span>

                </div>

              </OptionBox>

              {/* =====================================
                  IMÁGENES SECUNDARIAS
              ====================================== */}

              <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-4">

                <FieldTitle
                  title="Fotos adicionales"
                  description="Opcional. Puedes añadir un máximo de dos fotos adicionales."
                />

                <div className="mt-4 grid grid-cols-2 gap-3">

                  <ImageUploader
                    compact
                    preview={
                      editingService.secondaryImage1
                    }
                    onChange={(event) =>
                      uploadImage(
                        event,
                        (url) =>
                          updateServiceField(
                            "secondaryImage1",
                            url
                          )
                      )
                    }
                  />

                  <ImageUploader
                    compact
                    preview={
                      editingService.secondaryImage2
                    }
                    onChange={(event) =>
                      uploadImage(
                        event,
                        (url) =>
                          updateServiceField(
                            "secondaryImage2",
                            url
                          )
                      )
                    }
                  />

                </div>

                {/* ANTES DESPUÉS */}

                <div className="mt-5 border-t border-neutral-100 pt-4">

                  <div className="flex items-start justify-between gap-4">

                    <div>

                      <p className="text-sm font-bold">
                        Mostrar como Antes / Después
                      </p>

                      <p className="mt-1 text-xs leading-5 text-neutral-400">
                        La primera foto será
                        &quot;Antes&quot; y la segunda
                        &quot;Después&quot;.
                      </p>

                    </div>

                    <Switch
                      checked={
                        editingService.showBeforeAfter
                      }
                      onChange={(value) =>
                        updateServiceField(
                          "showBeforeAfter",
                          value
                        )
                      }
                    />

                  </div>

                </div>

              </div>

              {/* BOTONES */}

              <div className="mt-8 flex gap-3">

                <button
                  type="button"
                  onClick={
                    cancelEditing
                  }
                  className="flex-1 rounded-xl border border-neutral-200 bg-white px-5 py-4 text-sm font-bold"
                >
                  Cancelar
                </button>

                <button
                  type="submit"
                  className="flex-[1.5] rounded-xl bg-neutral-950 px-5 py-4 text-sm font-bold text-white"
                >
                  Guardar servicio
                </button>

              </div>

            </form>

          </section>

        )}

      </div>

    </main>
  );
}

/* =========================================================
   COMPONENTES
========================================================= */

function SectionTitle({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div>

      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
        {label}
      </p>

      <h2 className="mt-1 text-2xl font-bold tracking-[-0.04em]">
        {title}
      </h2>

      {description && (
        <p className="mt-1 text-sm text-neutral-500">
          {description}
        </p>
      )}

    </div>
  );
}

function FieldTitle({
  title,
  description,
  required,
}: {
  title: string;
  description?: string;
  required?: boolean;
}) {
  return (
    <div>

      <p className="text-sm font-bold">

        {title}

        {required && (
          <span className="ml-1 text-red-400">
            *
          </span>
        )}

      </p>

      {description && (
        <p className="mt-1 text-xs text-neutral-400">
          {description}
        </p>
      )}

    </div>
  );
}

function Badge({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[9px] font-semibold text-neutral-500">
      {children}
    </span>
  );
}

function ImageUploader({
  preview,
  onChange,
  compact = false,
}: {
  preview: string;

  onChange: (
    event: ChangeEvent<HTMLInputElement>
  ) => void;

  compact?: boolean;
}) {
  return (
    <label
      className={`flex cursor-pointer items-center justify-center overflow-hidden rounded-2xl border border-dashed border-neutral-300 bg-white transition hover:border-neutral-500 ${
        compact
          ? "h-32"
          : "mt-2 h-52"
      }`}
    >

      {preview ? (

        <div className="group relative h-full w-full">

          <img
            src={preview}
            alt="Vista previa"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/40">

            <span className="rounded-full bg-white px-3 py-2 text-[10px] font-bold opacity-0 transition group-hover:opacity-100">
              Cambiar
            </span>

          </div>

        </div>

      ) : (

        <div className="px-3 text-center">

          <span className="text-xl">
            📷
          </span>

          <p className="mt-2 text-[11px] font-bold">
            Subir foto
          </p>

          <p className="mt-1 text-[9px] text-neutral-400">
            JPG · PNG · WEBP
          </p>

        </div>

      )}

      <input
        type="file"
        accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp"
        onChange={onChange}
        className="hidden"
      />

    </label>
  );
}

function Switch({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <button
      type="button"
      onClick={() =>
        onChange(!checked)
      }
      className={`relative h-6 w-11 shrink-0 rounded-full transition ${
        checked
          ? "bg-neutral-950"
          : "bg-neutral-200"
      }`}
    >

      <span
        className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow transition-all ${
          checked
            ? "left-6"
            : "left-1"
        }`}
      />

    </button>
  );
}

function OptionBox({
  title,
  description,
  checked,
  onChange,
  children,
}: {
  title: string;
  description: string;
  checked: boolean;
  onChange: (value: boolean) => void;
  children: ReactNode;
}) {
  return (
    <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-4">

      <div className="flex items-start justify-between gap-4">

        <div>

          <p className="text-sm font-bold">
            {title}
          </p>

          <p className="mt-1 text-xs text-neutral-400">
            {description}
          </p>

        </div>

        <Switch
          checked={checked}
          onChange={onChange}
        />

      </div>

      {checked && children}

    </div>
  );
}