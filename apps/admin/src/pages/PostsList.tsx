import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getPosts, deletePost, Post } from '../lib/services'
import { Layout } from '../components/Layout'

export const PostsList = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadPosts()
  }, [])

  const loadPosts = async () => {
    try {
      const data = await getPosts()
      setPosts(data)
    } catch (error) {
      console.error('Error loading posts:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (confirm('¿Estás seguro de eliminar este post?')) {
      await deletePost(id)
      loadPosts()
    }
  }

  return (
    <Layout onNewPost={() => {}}>
      {/* Filters & Table */}
      <div className="flex-1 overflow-y-auto">
        {/* Toolbar de Filtros */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          {/* ... filters ... */}
          {/* Keeping filters static for now as we don't have complex querying logic yet */}
          {/* ... */}
        </div>

        {/* Tabla de Posts */}
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-gray-200 bg-gray-50 font-medium text-gray-500">
              <tr>
                <th className="w-10 px-6 py-4">
                  <input
                    type="checkbox"
                    className="text-primary focus:ring-primary rounded border-gray-300"
                  />
                </th>
                <th className="px-6 py-4">Título / Excerpt</th>
                <th className="px-6 py-4">Categoría</th>
                <th className="px-6 py-4">Estado</th>
                <th className="px-6 py-4">Fecha</th>
                <th className="px-6 py-4 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {loading ? (
                <tr>
                  <td colSpan={6} className="px-6 py-4 text-center">
                    Cargando posts...
                  </td>
                </tr>
              ) : posts.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-4 text-center">
                    No hay posts todavía.
                  </td>
                </tr>
              ) : (
                posts.map((post) => (
                  <tr
                    key={post.id}
                    className="transition-colors hover:bg-gray-50"
                  >
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        className="text-primary focus:ring-primary rounded border-gray-300"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-bold text-gray-900">{post.title}</p>
                      <p className="w-64 truncate text-xs text-gray-500">
                        {post.excerpt}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="rounded-md bg-blue-50 px-2 py-1 text-xs font-bold text-blue-700">
                        {post.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          post.status === 'published'
                            ? 'bg-green-100 text-green-800'
                            : post.status === 'scheduled'
                              ? 'bg-purple-100 text-purple-800'
                              : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        ● {post.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-500">
                      {post.publishDate
                        ? new Date(post.publishDate).toLocaleDateString()
                        : 'Sin fecha'}
                    </td>
                    <td className="flex justify-end gap-1 px-6 py-4 text-right">
                      {/* Note: We would need to pass ID to editor to support editing */}
                      <Link
                        to={`/editor`} // In a real app: /editor/${post.id}
                        className="hover:text-primary rounded-lg p-2 text-gray-400 hover:bg-gray-100"
                        title="Editar"
                      >
                        <span className="material-symbols-outlined">edit</span>
                      </Link>
                      <button
                        onClick={() => handleDelete(post.id!)}
                        className="rounded-lg p-2 text-gray-400 hover:bg-red-50 hover:text-red-600"
                        title="Eliminar"
                      >
                        <span className="material-symbols-outlined">
                          delete
                        </span>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}
