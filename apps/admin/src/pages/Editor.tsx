import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { savePost, uploadImage, Post } from '../lib/services'
import RichTextEditor from '../components/RichTextEditor'

export const Editor = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('') // In a real app, this would be a refined WYSIWYG state
  const [status, setStatus] = useState<Post['status']>('draft')
  const [category, setCategory] = useState('Estadística')
  const [slug, setSlug] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [coverImage, setCoverImage] = useState('')
  const [tags, setTags] = useState('') // Comma separated string for editing
  const [author, setAuthor] = useState('Dr. Profile')

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      try {
        setLoading(true)
        const url = await uploadImage(e.target.files[0])
        setCoverImage(url)
      } catch (error) {
        console.error('Error uploading image:', error)
        alert('Error al subir imagen')
      } finally {
        setLoading(false)
      }
    }
  }

  const handleSave = async () => {
    try {
      setLoading(true)
      await savePost({
        title,
        slug: slug || title.toLowerCase().replace(/ /g, '-'),
        content,
        excerpt,
        status,
        category,
        coverImage,
        author,
        tags: tags
          .split(',')
          .map((t) => t.trim())
          .filter(Boolean)
      })
      alert('Post guardado correctamente')
      navigate('/posts')
    } catch (error) {
      console.error('Error saving post:', error)
      alert('Error al guardar el post')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-gray-100 font-sans text-gray-900">
      {/* HEADER DEL EDITOR */}
      <header className="z-20 flex h-16 shrink-0 items-center justify-between border-b border-gray-200 bg-white px-6">
        <div className="flex items-center gap-4">
          <Link
            to="/posts"
            className="flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-900"
          >
            <span className="material-symbols-outlined">arrow_back</span> Volver
          </Link>
          <div className="h-6 w-px bg-gray-200"></div>
          <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
            {loading ? 'Guardando...' : 'Editando Post'}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-bold text-gray-600 transition-colors hover:bg-gray-50">
            Vista Previa
          </button>
          <button
            onClick={handleSave}
            disabled={loading}
            className="bg-primary flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition-colors hover:bg-blue-700 disabled:opacity-50"
          >
            <span>{status === 'published' ? 'Publicar' : 'Guardar'}</span>
            <span className="material-symbols-outlined text-sm">
              rocket_launch
            </span>
          </button>
        </div>
      </header>

      {/* ÁREA DE TRABAJO */}
      <div className="flex flex-1 overflow-hidden">
        {/* 1. COLUMNA PRINCIPAL (Contenido) */}
        <main className="flex-1 overflow-y-auto bg-gray-100 p-8">
          <div className="mx-auto max-w-4xl space-y-6">
            {/* Título */}
            <input
              type="text"
              placeholder="Escribe un título impactante aquí..."
              className="w-full border-none bg-transparent px-0 text-4xl font-bold text-gray-900 placeholder:text-gray-300 focus:ring-0"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            {/* Editor WYSIWYG Container */}
            {/* Editor WYSIWYG Container */}
            <RichTextEditor content={content} onChange={setContent} />
          </div>
        </main>

        {/* 2. COLUMNA LATERAL (Configuración) */}
        <aside className="z-10 w-80 shrink-0 overflow-y-auto border-l border-gray-200 bg-white">
          <div className="space-y-8 p-6">
            {/* Panel: Publicación */}
            <div>
              <h3 className="mb-4 border-b pb-2 text-xs font-bold uppercase tracking-wider text-gray-400">
                Publicación
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Estado
                  </label>
                  <select
                    className="focus:border-primary focus:ring-primary w-full rounded-lg border-gray-300 text-sm"
                    value={status}
                    onChange={(e) => setStatus(e.target.value as any)}
                  >
                    <option value="draft">Borrador</option>
                    <option value="published">Publicado</option>
                    <option value="scheduled">Programado</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Panel: Categorías */}
            <div>
              <h3 className="mb-4 border-b pb-2 text-xs font-bold uppercase tracking-wider text-gray-400">
                Categoría
              </h3>
              <div className="space-y-2">
                {[
                  'Estadística',
                  'Gestión de Equipos',
                  'Hábitos Saludables',
                  'Neurociencia'
                ].map((cat) => (
                  <label
                    key={cat}
                    className="flex cursor-pointer items-center gap-3 rounded p-2 hover:bg-gray-50"
                  >
                    <input
                      type="radio"
                      name="cat"
                      className="text-primary focus:ring-primary border-gray-300"
                      checked={category === cat}
                      onChange={() => setCategory(cat)}
                    />
                    <span className="text-sm font-medium text-gray-700">
                      {cat}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Panel: Imagen */}
            <div>
              <h3 className="mb-4 border-b pb-2 text-xs font-bold uppercase tracking-wider text-gray-400">
                Imagen Principal
              </h3>
              <div
                className="hover:border-primary group relative flex aspect-video cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-100 transition-colors hover:bg-blue-50"
                onClick={() =>
                  document.getElementById('hidden-file-input')?.click()
                }
              >
                {coverImage ? (
                  <img
                    src={coverImage}
                    alt="Preview"
                    className="absolute inset-0 size-full rounded-lg object-cover"
                  />
                ) : (
                  <>
                    <span className="material-symbols-outlined group-hover:text-primary mb-1 text-gray-400">
                      add_photo_alternate
                    </span>
                    <span className="group-hover:text-primary text-xs font-medium text-gray-500">
                      Subir Imagen
                    </span>
                  </>
                )}
                {/* ID must be unique and match the click handler above */}
                <input
                  type="file"
                  id="hidden-file-input"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </div>
            </div>

            {/* Panel: Tags & Meta */}
            <div>
              <h3 className="mb-4 border-b pb-2 text-xs font-bold uppercase tracking-wider text-gray-400">
                Metadatos
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Autor
                  </label>
                  <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full rounded-lg border-gray-300 bg-gray-50 text-sm"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Tags (separados por coma)
                  </label>
                  <input
                    type="text"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    placeholder="Investigación, RStudio, ..."
                    className="w-full rounded-lg border-gray-300 bg-gray-50 text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Panel: SEO */}
            <div>
              <h3 className="mb-4 border-b pb-2 text-xs font-bold uppercase tracking-wider text-gray-400">
                SEO Optimization
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    URL Slug
                  </label>
                  <input
                    type="text"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    placeholder="interpretacion-cox-supervivencia"
                    className="w-full rounded-lg border-gray-300 bg-gray-50 font-mono text-sm text-gray-600"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Meta Description (Excerpt)
                  </label>
                  <textarea
                    rows={3}
                    value={excerpt}
                    onChange={(e) => setExcerpt(e.target.value)}
                    className="focus:border-primary focus:ring-primary w-full rounded-lg border-gray-300 text-sm"
                    placeholder="Breve resumen para Google..."
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
