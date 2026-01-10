import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from '../lib/firebase'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate('/')
    } catch (err: any) {
      setError('Error al iniciar sesión. Verifica tus credenciales.')
      console.error(err)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4 font-sans text-gray-900">
      <div className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-8 shadow-xl">
        <div className="mb-8 flex flex-col items-center">
          <div className="bg-primary/10 text-primary flex size-12 items-center justify-center rounded-xl">
            <span className="material-symbols-outlined text-3xl">
              admin_panel_settings
            </span>
          </div>
          <h1 className="mt-4 text-2xl font-bold tracking-tight text-gray-900">
            Admin Login
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Acceso restringido a personal autorizado
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          {error && (
            <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
              {error}
            </div>
          )}
          <div>
            <label className="mb-1 block text-sm font-bold text-gray-700">
              Correo Electrónico
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="focus:border-primary focus:ring-primary w-full rounded-lg border-gray-300 p-2.5 text-sm outline-none focus:ring-1"
              placeholder="admin@ejemplo.com"
              required
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-bold text-gray-700">
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="focus:border-primary focus:ring-primary w-full rounded-lg border-gray-300 p-2.5 text-sm outline-none focus:ring-1"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-primary w-full rounded-lg py-2.5 font-bold text-white shadow-lg shadow-blue-500/30 transition-all hover:bg-blue-700 active:scale-95"
          >
            Iniciar Sesión
          </button>
        </form>
        <div className="mt-6 text-center text-xs text-gray-400">
          &copy; 2024 Dr. Tebar Boti. Todos los derechos reservados.
        </div>
      </div>
    </div>
  )
}
