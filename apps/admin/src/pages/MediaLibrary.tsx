import { useEffect, useState } from 'react'
import { Layout } from '../components/Layout'
import { uploadImage, getImages } from '../lib/services'

export const MediaLibrary = () => {
  const [images, setImages] = useState<{ name: string; url: string }[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadImages()
  }, [])

  const loadImages = async () => {
    try {
      const data = await getImages()
      setImages(data)
    } catch (error) {
      console.error('Error loading images:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      try {
        setLoading(true)
        await uploadImage(e.target.files[0])
        loadImages() // Refresh
      } catch (error) {
        console.error('Error uploading:', error)
        alert('Error al subir imagen')
      } finally {
        setLoading(false)
      }
    }
  }

  return (
    <Layout onNewPost={() => {}}>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-xl font-bold text-gray-800">Librería Multimedia</h2>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Buscar archivo..."
            className="focus:border-primary focus:ring-primary w-48 rounded-lg border-gray-300 text-sm"
          />
          <button
            onClick={() => document.getElementById('media-upload')?.click()}
            className="bg-primary shadow-primary/20 flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-bold text-white shadow-lg hover:bg-blue-700"
          >
            <span className="material-symbols-outlined">cloud_upload</span>{' '}
            Subir
          </button>
          <input
            type="file"
            id="media-upload"
            className="hidden"
            accept="image/*"
            onChange={handleUpload}
          />
        </div>
      </div>

      {/* Upload Area */}
      <div
        onClick={() => document.getElementById('media-upload')?.click()}
        className="mb-8 flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 p-8 text-center transition-colors hover:border-blue-300 hover:bg-blue-50"
      >
        <span className="material-symbols-outlined mb-2 text-4xl text-gray-400">
          upload_file
        </span>
        <p className="font-medium text-gray-600">
          Arrastra imágenes aquí o haz click para seleccionar
        </p>
        <p className="mt-1 text-xs text-gray-400">JPG, PNG, WEBP (Max 5MB)</p>
      </div>

      {/* Grid */}
      <h3 className="mb-4 font-bold text-gray-700">Archivos recientes</h3>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
        {loading ? (
          <div className="col-span-full py-8 text-center text-gray-500">
            Cargando imágenes...
          </div>
        ) : images.length === 0 ? (
          <div className="col-span-full py-8 text-center text-gray-500">
            No hay imágenes.
          </div>
        ) : (
          images.map((img) => (
            <div
              key={img.url}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg border border-gray-200 bg-gray-200"
            >
              <img
                src={img.url}
                className="size-full object-cover transition-transform group-hover:scale-105"
                alt={img.name}
              />
              <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                <button className="text-white hover:text-red-400">
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </Layout>
  )
}
