import { Layout } from '../components/Layout';

export const Categories = () => {
  return (
    <Layout onNewPost={() => {}}>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Columna Izq: Formulario (Editar/Crear) */}
        <div className="h-fit rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-bold">Editar Categoría</h3>
          <form className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-bold text-gray-700">
                Nombre
              </label>
              <input
                type="text"
                defaultValue="Estadística Médica"
                className="w-full rounded-lg border-gray-300 text-sm focus:border-primary focus:ring-primary"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-bold text-gray-700">
                Slug (URL)
              </label>
              <input
                type="text"
                defaultValue="estadistica-medica"
                className="w-full rounded-lg border-gray-300 bg-gray-50 text-sm text-gray-500"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-bold text-gray-700">
                Descripción
              </label>
              <textarea
                rows={4}
                defaultValue="Contenido relacionado con bioestadística, RStudio, análisis de supervivencia y diseño de estudios clínicos."
                className="w-full rounded-lg border-gray-300 text-sm focus:border-primary focus:ring-primary"
              ></textarea>
              <p className="mt-1 text-xs text-gray-400">
                Aparece en las metaetiquetas para SEO.
              </p>
            </div>
            <div className="pt-2">
              <button
                type="button"
                className="w-full rounded-lg bg-primary py-2 font-bold text-white transition-colors hover:bg-blue-700"
              >
                Guardar Cambios
              </button>
            </div>
          </form>
        </div>

        {/* Columna Der: Listado */}
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm lg:col-span-2">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-gray-200 bg-gray-50 font-medium text-gray-500">
              <tr>
                <th className="px-6 py-3">Nombre</th>
                <th className="px-6 py-3">Descripción</th>
                <th className="px-6 py-3">Posts</th>
                <th className="px-6 py-3">Slug</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50">
                <td className="flex items-center gap-2 px-6 py-4 font-bold text-primary">
                  <span className="material-symbols-outlined text-lg">
                    analytics
                  </span>{' '}
                  Estadística
                </td>
                <td className="px-6 py-4 text-gray-500">
                  Bioestadística, RStudio, Cox...
                </td>
                <td className="px-6 py-4">
                  <span className="rounded bg-gray-100 px-2 py-1 text-xs font-bold">
                    8
                  </span>
                </td>
                <td className="px-6 py-4 font-mono text-xs text-gray-400">
                  /estadistica
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="flex items-center gap-2 px-6 py-4 font-bold text-teal-600">
                  <span className="material-symbols-outlined text-lg">
                    diversity_3
                  </span>{' '}
                  Gestión
                </td>
                <td className="px-6 py-4 text-gray-500">
                  Liderazgo y psicología clínica...
                </td>
                <td className="px-6 py-4">
                  <span className="rounded bg-gray-100 px-2 py-1 text-xs font-bold">
                    5
                  </span>
                </td>
                <td className="px-6 py-4 font-mono text-xs text-gray-400">
                  /gestion-equipos
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="flex items-center gap-2 px-6 py-4 font-bold text-rose-600">
                  <span className="material-symbols-outlined text-lg">
                    favorite
                  </span>{' '}
                  Hábitos
                </td>
                <td className="px-6 py-4 text-gray-500">
                  Prevención y oncología...
                </td>
                <td className="px-6 py-4">
                  <span className="rounded bg-gray-100 px-2 py-1 text-xs font-bold">
                    4
                  </span>
                </td>
                <td className="px-6 py-4 font-mono text-xs text-gray-400">
                  /habitos
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="flex items-center gap-2 px-6 py-4 font-bold text-indigo-600">
                  <span className="material-symbols-outlined text-lg">
                    neurology
                  </span>{' '}
                  Neurociencia
                </td>
                <td className="px-6 py-4 text-gray-500">
                  Bases biológicas de la decisión...
                </td>
                <td className="px-6 py-4">
                  <span className="rounded bg-gray-100 px-2 py-1 text-xs font-bold">
                    2
                  </span>
                </td>
                <td className="px-6 py-4 font-mono text-xs text-gray-400">
                  /neurociencia
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};
