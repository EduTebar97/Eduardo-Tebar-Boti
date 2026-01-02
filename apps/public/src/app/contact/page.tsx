
export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Contacto</h1>
      <div className="bg-white p-8 rounded shadow-sm border">
        <p className="mb-6 text-gray-600">
          Si estás interesado en colaborar o contratar mis servicios, no dudes en escribirme.
        </p>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Nombre</label>
            <input type="text" className="w-full p-2 border rounded" placeholder="Tu nombre" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input type="email" className="w-full p-2 border rounded" placeholder="tu@email.com" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Mensaje</label>
            <textarea className="w-full p-2 border rounded h-32" placeholder="¿En qué puedo ayudarte?"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 font-semibold">
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  );
}
