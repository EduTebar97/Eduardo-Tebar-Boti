import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Panel de Administración</h1>
        <button onClick={() => signOut(auth)} className="text-red-600 hover:text-red-800">
          Cerrar Sesión
        </button>
      </header>
      <main className="flex-1 p-8 container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Bienvenido, Admin</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Link to="/editor" className="block p-6 bg-white border rounded shadow hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2">Crear Nueva Publicación</h3>
            <p className="text-gray-600">Escribe y guarda borradores o publica contenido.</p>
          </Link>
          <div className="p-6 bg-white border rounded shadow opacity-50">
            <h3 className="text-xl font-bold mb-2">Gestionar Publicaciones (Próximamente)</h3>
            <p className="text-gray-600">Edita o elimina publicaciones existentes.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
