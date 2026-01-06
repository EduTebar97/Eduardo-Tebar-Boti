export const PostsTable = () => {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50/50 px-6 py-4">
        <h3 className="font-bold text-gray-800">Últimas publicaciones</h3>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Buscar..."
            className="rounded-lg border-gray-300 px-3 py-1.5 text-sm focus:border-primary focus:ring-primary"
          />
          <button className="rounded-lg border border-gray-300 bg-white p-1.5 text-gray-500 hover:bg-gray-100">
            <span className="material-symbols-outlined text-lg">
              filter_list
            </span>
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-gray-200 bg-gray-50 font-medium text-gray-500">
            <tr>
              <th className="px-6 py-3">Título</th>
              <th className="px-6 py-3">Estado</th>
              <th className="px-6 py-3">Categoría</th>
              <th className="px-6 py-3">Fecha</th>
              <th className="px-6 py-3 text-right">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {/* Row 1 */}
            <tr className="group transition-colors hover:bg-gray-50">
              <td className="px-6 py-4 font-medium text-gray-900">
                Interpretación de Cox en supervivencia
              </td>
              <td className="px-6 py-4">
                <span className="rounded bg-green-100 px-2 py-0.5 text-xs font-bold text-green-700">
                  Publicado
                </span>
              </td>
              <td className="px-6 py-4 text-gray-500">Estadística</td>
              <td className="px-6 py-4 text-gray-500">Hoy, 10:30</td>
              <td className="px-6 py-4 text-right">
                <button className="p-1 text-gray-400 hover:text-primary">
                  <span className="material-symbols-outlined text-lg">
                    edit
                  </span>
                </button>
                <button className="p-1 text-gray-400 hover:text-red-500">
                  <span className="material-symbols-outlined text-lg">
                    delete
                  </span>
                </button>
              </td>
            </tr>
            {/* Row 2 */}
            <tr className="group transition-colors hover:bg-gray-50">
              <td className="px-6 py-4 font-medium text-gray-900">
                Gestión del estrés en residentes
              </td>
              <td className="px-6 py-4">
                <span className="rounded bg-yellow-100 px-2 py-0.5 text-xs font-bold text-yellow-700">
                  Borrador
                </span>
              </td>
              <td className="px-6 py-4 text-gray-500">Gestión</td>
              <td className="px-6 py-4 text-gray-500">Ayer, 18:15</td>
              <td className="px-6 py-4 text-right">
                <button className="p-1 text-gray-400 hover:text-primary">
                  <span className="material-symbols-outlined text-lg">
                    edit
                  </span>
                </button>
                <button className="p-1 text-gray-400 hover:text-red-500">
                  <span className="material-symbols-outlined text-lg">
                    delete
                  </span>
                </button>
              </td>
            </tr>
            {/* Row 3 */}
            <tr className="group transition-colors hover:bg-gray-50">
              <td className="px-6 py-4 font-medium text-gray-900">
                Neurobiología de la decisión médica
              </td>
              <td className="px-6 py-4">
                <span className="rounded bg-purple-100 px-2 py-0.5 text-xs font-bold text-purple-700">
                  Programado
                </span>
              </td>
              <td className="px-6 py-4 text-gray-500">Neurociencia</td>
              <td className="px-6 py-4 text-gray-500">Mañana, 09:00</td>
              <td className="px-6 py-4 text-right">
                <button className="p-1 text-gray-400 hover:text-primary">
                  <span className="material-symbols-outlined text-lg">
                    edit
                  </span>
                </button>
                <button className="p-1 text-gray-400 hover:text-red-500">
                  <span className="material-symbols-outlined text-lg">
                    delete
                  </span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="flex items-center justify-between border-t border-gray-200 bg-gray-50 px-6 py-3">
        <span className="text-xs text-gray-500">Mostrando 1-3 de 16</span>
        <div className="flex gap-2">
          <button className="rounded border border-gray-300 bg-white px-3 py-1 text-xs hover:bg-gray-50">
            Anterior
          </button>
          <button className="rounded border border-gray-300 bg-white px-3 py-1 text-xs hover:bg-gray-50">
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};
