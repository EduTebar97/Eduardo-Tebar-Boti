interface EditorModalProps {
  onClose: () => void;
}

export const EditorModal = ({ onClose }: EditorModalProps) => {
  return (
    <div className="black/50 fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="flex h-[90vh] w-full max-w-5xl animate-fade-in-up flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
        {/* Modal Header */}
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-gray-200 bg-white px-6">
          <div className="flex items-center gap-3">
            <button
              className="text-gray-500 hover:text-gray-900"
              onClick={onClose}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <span className="text-gray-300">|</span>
            <input
              type="text"
              placeholder="Escribe el título aquí..."
              className="w-96 border-none text-lg font-bold placeholder-gray-400 focus:ring-0"
            />
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden text-xs text-gray-500 sm:block">
              Guardado hace 2m
            </span>
            <button className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-bold text-gray-600 transition-colors hover:bg-gray-200">
              Guardar Borrador
            </button>
            <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition-colors hover:bg-blue-700">
              <span>Publicar</span>
              <span className="material-symbols-outlined text-sm">
                rocket_launch
              </span>
            </button>
          </div>
        </div>

        {/* Modal Body (Split View) */}
        <div className="flex flex-1 overflow-hidden">
          {/* Main Editor Area */}
          <div className="flex-1 overflow-y-auto bg-gray-50 p-8">
            <div className="mx-auto min-h-[500px] max-w-3xl rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
              {/* Toolbar simulada */}
              <div className="sticky top-0 mb-4 flex items-center gap-2 border-b border-gray-100 bg-white pb-4 text-gray-500">
                <button className="rounded p-1 hover:bg-gray-100">
                  <span className="material-symbols-outlined">format_bold</span>
                </button>
                <button className="rounded p-1 hover:bg-gray-100">
                  <span className="material-symbols-outlined">
                    format_italic
                  </span>
                </button>
                <button className="rounded p-1 hover:bg-gray-100">
                  <span className="material-symbols-outlined">format_h1</span>
                </button>
                <button className="rounded p-1 hover:bg-gray-100">
                  <span className="material-symbols-outlined">
                    format_list_bulleted
                  </span>
                </button>
                <span className="mx-1 h-4 w-px bg-gray-200"></span>
                <button className="rounded p-1 hover:bg-gray-100">
                  <span className="material-symbols-outlined">link</span>
                </button>
                <button className="rounded p-1 hover:bg-gray-100">
                  <span className="material-symbols-outlined">image</span>
                </button>
              </div>

              {/* Content Area */}
              <div className="prose min-h-[300px] max-w-none text-gray-600 focus:outline-none">
                <p>Escribe tu contenido aquí...</p>
              </div>
            </div>
          </div>

          {/* Sidebar Settings */}
          <div className="hidden w-80 shrink-0 overflow-y-auto border-l border-gray-200 bg-white p-6 lg:block">
            {/* Estado & Visibilidad */}
            <div className="mb-6 space-y-3">
              <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
                Publicación
              </h4>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Estado</span>
                <span className="rounded bg-yellow-50 px-2 py-0.5 text-xs font-bold text-yellow-600">
                  Borrador
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Visibilidad</span>
                <span className="font-medium text-gray-900">Público</span>
              </div>
              <div className="pt-2">
                <label className="mb-1 block text-xs text-gray-500">
                  Programar fecha
                </label>
                <input
                  type="datetime-local"
                  className="w-full rounded-lg border-gray-300 text-sm focus:border-primary focus:ring-primary"
                />
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Categorías */}
            <div className="my-6">
              <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
                Categoría
              </h4>
              <div className="space-y-2">
                <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-700">
                  <input
                    type="radio"
                    name="category"
                    className="text-primary focus:ring-primary"
                  />{' '}
                  Estadística
                </label>
                <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-700">
                  <input
                    type="radio"
                    name="category"
                    className="text-primary focus:ring-primary"
                  />{' '}
                  Gestión de Equipos
                </label>
                <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-700">
                  <input
                    type="radio"
                    name="category"
                    className="text-primary focus:ring-primary"
                  />{' '}
                  Hábitos Saludables
                </label>
                <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-700">
                  <input
                    type="radio"
                    name="category"
                    className="text-primary focus:ring-primary"
                  />{' '}
                  Neurociencia
                </label>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Imagen Destacada */}
            <div className="my-6">
              <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
                Imagen Destacada
              </h4>
              <div className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 p-6 text-center transition-colors hover:border-primary hover:bg-gray-50">
                <span className="material-symbols-outlined mb-2 text-3xl text-gray-400">
                  add_photo_alternate
                </span>
                <span className="text-xs text-gray-500">
                  Haz click para subir
                </span>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* SEO */}
            <div className="mt-6 space-y-3">
              <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
                SEO Metadata
              </h4>
              <div>
                <label className="mb-1 block text-xs text-gray-500">
                  URL Slug
                </label>
                <input
                  type="text"
                  placeholder="mi-articulo-nuevo"
                  className="w-full rounded-lg border-gray-300 bg-gray-50 text-sm focus:border-primary focus:ring-primary"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs text-gray-500">
                  Excerpt (Resumen)
                </label>
                <textarea
                  rows={3}
                  className="w-full rounded-lg border-gray-300 text-sm focus:border-primary focus:ring-primary"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
