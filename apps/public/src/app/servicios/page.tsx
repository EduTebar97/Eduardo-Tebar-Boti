import ServicesTabs from "@/components/ServicesTabs";




export const metadata = {
  title: "Services | Dr. Eduardo Tébar",
  description: "Consultoría estadística y servicios médicos especializados.",
};

export default function ServicesPage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-slate-50 font-display">

      {/* 2. HERO SECTION "TECH" */}
      <section className="relative bg-primary pt-16 pb-20 overflow-hidden">
          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

          <div className="container mx-auto px-4 relative z-10 text-center lg:text-left grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-2xl mx-auto lg:mx-0">
                  <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-100 text-xs font-bold uppercase tracking-widest mb-4 border border-blue-400/30">
                      Bioestadística & Medicina
                  </span>
                  <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-6">
                      Ciencia de Datos.<br/>
                      <span className="text-blue-200">Visión Clínica.</span>
                  </h1>
                  <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                      Transformo datos complejos en evidencia científica sólida. Servicios de consultoría estadística diseñados por un cirujano para médicos.
                  </p>
              </div>
              {/* Decorative Visual for Desktop */}
              <div className="hidden lg:block relative h-full min-h-[300px]">
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-2xl border border-white/10 backdrop-blur-sm flex items-center justify-center">
                     <span className="material-symbols-outlined text-9xl text-white/20">analytics</span>
                  </div>
              </div>
          </div>
      </section>

      {/* 3. MAIN CONTENT */}
      <main className="flex-1 bg-gray-50 pb-24">
          <div className="container mx-auto px-4 -mt-10 relative z-20">

              {/* SECTION: SERVICES TABS */}
              <div className="max-w-6xl mx-auto">
                 <ServicesTabs />
              </div>

              {/* SECTION: TARGET AUDIENCE */}
              <div className="mt-20 text-center max-w-4xl mx-auto">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-10">A quién va dirigido</h3>

                  <div className="grid md:grid-cols-2 gap-10 items-center">
                      {/* Venn Diagram */}
                      <div className="relative h-64 w-full flex justify-center items-center">
                          <div className="absolute left-1/2 -translate-x-2/3 w-48 h-48 rounded-full bg-blue-500/80 mix-blend-multiply flex items-center justify-center p-6 animate-pulse-slow">
                              <span className="text-sm font-bold text-white text-left -ml-10">Rama<br/>Bio-Sanitaria</span>
                          </div>
                          <div className="absolute right-1/2 translate-x-2/3 w-48 h-48 rounded-full bg-teal-500/80 mix-blend-multiply flex items-center justify-center p-6 animate-pulse-slow" style={{ animationDelay: '1s' }}>
                              <span className="text-sm font-bold text-white text-right -mr-10">Estudios<br/>Científicos</span>
                          </div>
                          <div className="absolute z-10 bg-white shadow-xl px-4 py-2 rounded-full border border-gray-100">
                              <span className="text-sm font-black text-gray-800">BIOESTADÍSTICA</span>
                          </div>
                      </div>

                      {/* Audience List */}
                      <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center gap-3 hover:-translate-y-1 transition-transform">
                              <span className="material-symbols-outlined text-primary text-3xl">school</span>
                              <span className="text-sm font-bold text-gray-800">Doctorandos</span>
                          </div>
                          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center gap-3 hover:-translate-y-1 transition-transform">
                              <span className="material-symbols-outlined text-primary text-3xl">local_hospital</span>
                              <span className="text-sm font-bold text-gray-800">Hospitales</span>
                          </div>
                          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center gap-3 hover:-translate-y-1 transition-transform">
                              <span className="material-symbols-outlined text-primary text-3xl">science</span>
                              <span className="text-sm font-bold text-gray-800">Pharma</span>
                          </div>
                          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center gap-3 hover:-translate-y-1 transition-transform">
                              <span className="material-symbols-outlined text-primary text-3xl">medical_services</span>
                              <span className="text-sm font-bold text-gray-800">Clínicas</span>
                          </div>
                      </div>
                  </div>
              </div>

          </div>

          {/* SECTION: AUTHORITY / STRENGTHS (Full Width) */}
          <div className="mt-20 bg-[#101622] text-white py-16 lg:py-24 relative overflow-hidden">
              <div className="container mx-auto px-4 relative z-10">
                  <div className="flex flex-col md:flex-row gap-12 items-start max-w-5xl mx-auto">
                      <div className="md:w-1/2">
                          <div className="flex items-center gap-2 mb-6">
                              <span className="material-symbols-outlined text-yellow-500">verified</span>
                              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Valor Diferencial</span>
                          </div>
                          <h3 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                              No soy solo un analista de datos. <br/>
                              <span className="text-primary">Soy médico.</span>
                          </h3>
                          <p className="text-gray-400 text-lg leading-relaxed">
                              Entiendo el contexto clínico porque lo vivo cada día. Sé que detrás de cada variable hay un paciente, y que un P-valor no sirve si no tiene relevancia clínica.
                          </p>
                      </div>

                      <div className="md:w-1/2 space-y-8 bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                          <div className="flex gap-5">
                              <div className="w-1.5 bg-gradient-to-b from-primary to-transparent rounded-full h-full min-h-[60px]"></div>
                              <div>
                                  <h4 className="font-bold text-xl mb-2">30 Años de Experiencia Clínica</h4>
                                  <p className="text-gray-400">Especialista en Cirugía Cardiaca. Comprendo la fisiopatología y las variables de confusión que un estadístico puro pasaría por alto.</p>
                              </div>
                          </div>
                          <div className="flex gap-5">
                              <div className="w-1.5 bg-gradient-to-b from-teal-500 to-transparent rounded-full h-full min-h-[60px]"></div>
                              <div>
                                  <h4 className="font-bold text-xl mb-2">Formación Estadística Profunda</h4>
                                  <p className="text-gray-400">Diplomado en Estadística y experto en modelado complejo (Fechite). La combinación exacta entre rigor matemático y aplicabilidad médica.</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          {/* SECTION: PORTFOLIO CAROUSEL (Responsive) */}
          <div className="container mx-auto px-4 mt-20 max-w-6xl">
              <h3 className="text-xl font-bold text-gray-900 mb-8 flex justify-between items-center">
                  <span>Proyectos Recientes</span>
                  <div className="hidden md:flex gap-2">
                      <button className="size-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"><span className="material-symbols-outlined">arrow_back</span></button>
                      <button className="size-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"><span className="material-symbols-outlined">arrow_forward</span></button>
                  </div>
              </h3>

              <div className="flex overflow-x-auto hide-scrollbar gap-6 pb-4 snap-x">
                  {/* Case 1 */}
                  <div className="snap-center shrink-0 w-80 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col hover:shadow-md transition-shadow">
                      <span className="text-xs font-bold text-teal-600 uppercase mb-3 bg-teal-50 px-2 py-1 rounded w-fit">Cardiología</span>
                      <h4 className="font-bold text-lg mb-2 text-gray-900">Modelo predictivo mortalidad UCI</h4>
                      <p className="text-sm text-gray-500 mb-6 flex-1">Validación y recalibración del score EuroSCORE II en población local española.</p>
                      <div className="mt-auto flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-bold text-gray-600">Regresión Logística</span>
                          <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-bold text-gray-600">ROC Curves</span>
                      </div>
                  </div>
                   {/* Case 2 */}
                   <div className="snap-center shrink-0 w-80 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col hover:shadow-md transition-shadow">
                      <span className="text-xs font-bold text-primary uppercase mb-3 bg-blue-50 px-2 py-1 rounded w-fit">Oncología</span>
                      <h4 className="font-bold text-lg mb-2 text-gray-900">Supervivencia post-cirugía</h4>
                      <p className="text-sm text-gray-500 mb-6 flex-1">Análisis de factores de riesgo a 5 años en pacientes con resección tumoral.</p>
                      <div className="mt-auto flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-bold text-gray-600">Kaplan-Meier</span>
                          <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-bold text-gray-600">Cox</span>
                      </div>
                  </div>
                  {/* Case 3 */}
                  <div className="snap-center shrink-0 w-80 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col hover:shadow-md transition-shadow">
                      <span className="text-xs font-bold text-purple-600 uppercase mb-3 bg-purple-50 px-2 py-1 rounded w-fit">Gestión</span>
                      <h4 className="font-bold text-lg mb-2 text-gray-900">Optimización de Quirófanos</h4>
                      <p className="text-sm text-gray-500 mb-6 flex-1">Modelo de Poisson para predecir la demanda y optimizar turnos.</p>
                      <div className="mt-auto flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-bold text-gray-600">Poisson</span>
                          <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-bold text-gray-600">Series Temporales</span>
                      </div>
                  </div>
              </div>
          </div>

          {/* SECTION: METHODOLOGY */}
          <div className="container mx-auto px-4 mt-20 mb-20 max-w-4xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">Mi Método de Trabajo</h3>

              <div className="relative">
                  {/* Vertical Line */}
                  <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 hidden md:block"></div>
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 md:hidden"></div>

                  <div className="space-y-12">
                      {/* Step 1 */}
                      <div className="relative pl-16 md:pl-0 md:flex md:justify-between group">
                          <div className="md:w-[45%] md:text-right md:pr-10">
                              <h4 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">1. Consulta Inicial</h4>
                              <p className="text-sm text-gray-500 mt-2">Reunión para entender tus objetivos clínicos, revisar el estado de tus datos y definir la viabilidad del estudio.</p>
                          </div>
                          <div className="absolute left-6 md:left-1/2 -translate-x-1/2 size-12 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold border-4 border-white shadow-lg z-10">1</div>
                          <div className="md:w-[45%] hidden md:block"></div>
                      </div>

                      {/* Step 2 */}
                      <div className="relative pl-16 md:pl-0 md:flex md:justify-between group">
                          <div className="md:w-[45%] hidden md:block"></div>
                          <div className="absolute left-6 md:left-1/2 -translate-x-1/2 size-12 rounded-full bg-white text-gray-400 flex items-center justify-center text-lg font-bold border-2 border-gray-200 z-10 group-hover:border-primary group-hover:text-primary transition-colors">2</div>
                          <div className="md:w-[45%] md:pl-10">
                              <h4 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">2. Diseño y Limpieza</h4>
                              <p className="text-sm text-gray-500 mt-2">Estructuramos la base de datos (depuración) y definimos el plan de análisis estadístico (SAP) detallado.</p>
                          </div>
                      </div>

                      {/* Step 3 */}
                      <div className="relative pl-16 md:pl-0 md:flex md:justify-between group">
                          <div className="md:w-[45%] md:text-right md:pr-10">
                              <h4 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">3. Análisis & Informe</h4>
                              <p className="text-sm text-gray-500 mt-2">Ejecución de modelos, interpretación clínica de resultados y redacción de informe listo para publicación.</p>
                          </div>
                          <div className="absolute left-6 md:left-1/2 -translate-x-1/2 size-12 rounded-full bg-white text-gray-400 flex items-center justify-center text-lg font-bold border-2 border-gray-200 z-10 group-hover:border-primary group-hover:text-primary transition-colors">3</div>
                          <div className="md:w-[45%] hidden md:block"></div>
                      </div>
                  </div>
              </div>
          </div>

      </main>

      {/* 4. FOOTER / CTA (Sticky Bottom on Mobile, Regular on Desktop) */}
      <div className="fixed bottom-0 w-full bg-white border-t border-gray-200 p-4 z-50 md:hidden">
          <button className="w-full bg-primary text-white py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-primary/30 flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">calendar_clock</span>
              Solicitar Consultoría
          </button>
      </div>

      {/* Desktop CTA Section */}
      <section className="hidden md:block bg-primary py-16 text-center">
          <h2 className="text-3xl font-black text-white mb-6">¿Listo para elevar el nivel de tu investigación?</h2>
          <button className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-transform">
              Agendar Videollamada Gratuita
          </button>
      </section>

    </div>
  );
}
