
import { describe, it } from 'vitest';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

describe('Seed Post', () => {
  it('should create a sample published post', async () => {
    const postData = {
        title: "Bienvenido a mi nuevo blog",
        slug: "bienvenido-nuevo-blog",
        excerpt: "Este es el primer artículo de ejemplo generado para verificar la integración entre el panel de administración y el sitio público.",
        content: "<h2>Hola Mundo</h2><p>Si estás viendo esto, significa que <strong>Firebase Firestore</strong> está conectado correctamente con tu aplicación Next.js.</p><p>Puedes editar o borrar este post desde el panel de administración.</p>",
        status: "published",
        publishedAt: Timestamp.now(),
        publishDate: Timestamp.now(), // For compatibility with different queries
        author: "Dr. Eduardo Tebar",
        category: "Cardiología",
        tags: ["Bienvenida", "Tech"],
        readTime: "1 min",
        coverImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80"
    };

    await addDoc(collection(db, 'posts'), postData);
    console.log("✅ Sample post created successfully!");
  });
});
