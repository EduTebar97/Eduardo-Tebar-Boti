export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML content
  category: "Estadística" | "Gestión Equipos" | "Hábitos" | "Neurociencia";
  author: string;
  publishedAt: string; // ISO date
  readTime: string;
  coverImage: string;
  tags: string[];
}

export const CATEGORIES = [
  { name: "Estadística", icon: "analytics", color: "text-primary", bg: "bg-blue-50" },
  { name: "Gestión Equipos", icon: "diversity_3", color: "text-accent", bg: "bg-teal-50" },
  { name: "Hábitos", icon: "favorite", color: "text-rose-500", bg: "bg-rose-50" },
  { name: "Neurociencia", icon: "neurology", color: "text-indigo-500", bg: "bg-indigo-50" },
] as const;

export const MOCK_POSTS: BlogPost[] = [
  {
    slug: "interpretacion-regresion-cox",
    title: "Interpretación de la Regresión de Cox en estudios clínicos",
    excerpt: "La base de una buena investigación clínica reside en la correcta interpretación de los modelos de supervivencia. No basta con mirar el P-valor.",
    category: "Estadística",
    author: "Dr. Profile",
    publishedAt: "2026-01-02T10:00:00Z",
    readTime: "5 min",
    coverImage: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80",
    tags: ["Investigación", "RStudio", "Fechite"],
    content: `
      <p class="lead text-xl text-gray-600 dark:text-gray-300 italic mb-8 border-l-4 border-primary pl-4">
          La base de una buena investigación clínica reside en la correcta interpretación de los modelos de supervivencia...
      </p>
      <h2>¿Qué es un Hazard Ratio (HR)?</h2>
      <p>
          En el análisis de supervivencia, el modelo de riesgos proporcionales de Cox es fundamental.
          Un HR > 1 indica aumento de riesgo.
      </p>
      <div class="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-primary p-6 my-8 rounded-r-lg">
          <h4 class="text-sm font-bold text-primary mb-2 flex items-center gap-2 uppercase tracking-wide">
              <span class="material-symbols-outlined text-lg">lightbulb</span> Nota Clínica
          </h4>
          <p class="text-sm text-blue-900 dark:text-blue-100">
              Si el intervalo de confianza cruza el 1 (ej. 0.8 - 1.2), el resultado no es estadísticamente significativo.
          </p>
      </div>
    `
  },
  {
    slug: "liderazgo-uci-alta-presion",
    title: "Liderazgo y gestión de estrés en la UCI",
    excerpt: "Estrategias psicológicas para mantener la cohesión del equipo médico en situaciones de alta presión.",
    category: "Gestión Equipos",
    author: "Dr. Profile",
    publishedAt: "2025-12-28T15:30:00Z",
    readTime: "7 min",
    coverImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
    tags: ["Liderazgo", "Psicología", "UCI"],
    content: `
      <p class="lead text-xl text-gray-600 dark:text-gray-300 italic mb-8 border-l-4 border-accent pl-4">
          Mantener la calma cuando todo pita: esa es la verdadera labor del jefe de sección.
      </p>
      <h2>El factor humano</h2>
      <p>
          En situaciones críticas, la técnica se da por supuesta. Lo que falla es la comunicación.
      </p>
    `
  },
  {
    slug: "habitos-prevencion-cardiovascular",
    title: "Hábitos de vida: más allá de la prescripción",
    excerpt: "Cómo integrar la educación en hábitos saludables en la consulta diaria de cirugía cardiaca.",
    category: "Hábitos",
    author: "Dr. Profile",
    publishedAt: "2025-12-15T09:00:00Z",
    readTime: "4 min",
    coverImage: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80",
    tags: ["Prevención", "Cardiología", "Estilo de Vida"],
    content: `
      <h2>La prevención secundaria</h2>
      <p>Después de la cirugía, el paciente pregunta: "¿Y ahora qué?". Esa es nuestra ventana de oportunidad.</p>
    `
  },
  {
    slug: "neurobiologia-toma-decisiones",
    title: "Neurobiología de la decisión clínica",
    excerpt: "Por qué tomamos las decisiones que tomamos bajo incertidumbre. Un análisis desde la neurociencia.",
    category: "Neurociencia",
    author: "Dr. Profile",
    publishedAt: "2025-11-30T12:20:00Z",
    readTime: "10 min",
    coverImage: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80",
    tags: ["Neurociencia", "Decisiones", "Incertidumbre"],
    content: `
      <h2>Sesgos cognitivos en quirófano</h2>
      <p>El cerebro busca atajos. En cirugía, esos atajos pueden ser fatales o salvadores.</p>
    `
  }
];

export function getAllPosts() {
  return MOCK_POSTS;
}

export function getPostBySlug(slug: string) {
  return MOCK_POSTS.find(post => post.slug === slug);
}
