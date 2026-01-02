import { useState } from "react";
import { Link } from "react-router-dom";
// import { collection, addDoc } from "firebase/firestore";
// import { db } from "../lib/firebase";

export default function Editor() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSaveDraft = async () => {
    alert("Función de guardar borrador pendiente de implementar con firebase.");
    // await addDoc(collection(db, "posts_draft"), { title, content, ... });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gray-700 hover:text-black">&larr; Volver</Link>
        <div className="space-x-4">
          <button className="text-gray-600 hover:text-black">Guardar Borrador</button>
          <button onClick={handleSaveDraft} className="bg-blue-600 text-white px-4 py-2 rounded">Publicar</button>
        </div>
      </header>
      <main className="flex-1 p-8 container mx-auto max-w-4xl">
        <input
          type="text"
          placeholder="Título de la publicación"
          className="w-full text-4xl font-bold border-none outline-none bg-transparent mb-8 placeholder-gray-400"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Escribe tu contenido aquí..."
          className="w-full h-96 p-4 text-lg border-none outline-none resize-none bg-white rounded shadow-sm"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </main>
    </div>
  );
}
