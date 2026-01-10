import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative flex flex-col w-full overflow-hidden pt-10 pb-12 lg:pt-16 lg:pb-20">
        <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="flex flex-col gap-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 self-start bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
              </span>
              <span className="text-xs font-bold text-primary uppercase tracking-wide">Disponible para consultoría</span>
            </div>

            <h1 className="text-[#0d121b] dark:text-white text-4xl lg:text-5xl font-black leading-[1.15] tracking-tight">
              Cirugía cardiaca, investigación y <span className="text-primary">rigor estadístico</span>.
            </h1>

            <p className="text-slate-600 dark:text-gray-300 text-lg leading-relaxed max-w-lg">
              Ayudo a equipos clínicos a diseñar estudios sólidos y analizo datos complejos para convertirlos en evidencia publicable.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <Link href="/contact" className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary text-white text-base font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-700 hover:-translate-y-0.5 transition-all">
                Agendar llamada
              </Link>
              <Link href="#servicios" className="flex items-center justify-center rounded-lg h-12 px-8 bg-white border border-gray-200 text-slate-800 text-base font-bold hover:bg-gray-50 transition-colors">
                Ver áreas de interés
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full relative group perspective-1000">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl transform translate-x-3 translate-y-3 -z-10"></div>
            <div
              className="relative w-full aspect-[4/3] bg-slate-200 rounded-2xl overflow-hidden shadow-2xl"
              style={{ backgroundImage: 'url("/Fotomarca.png")', backgroundSize: 'cover', backgroundPosition: 'center 22%' }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-full text-green-700">
                      <span className="material-symbols-outlined">school</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase">Especialización</p>
                      <p className="text-sm font-bold text-gray-900">Cirugía Cardiovascular + Bioestadística</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Timeline: Quién soy */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col items-center mb-10 text-center">
            <h3 className="text-primary font-bold text-sm uppercase tracking-widest mb-2">Trayectoria Profesional</h3>
            <h2 className="text-[#0d121b] text-3xl font-black tracking-tight">Mi evolución como cirujano cardiaco</h2>
          </div>

          <div className="relative pl-4 sm:pl-0">
            {/* Vertical Line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 hidden sm:block"></div>
            <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gray-200 sm:hidden"></div>

            <div className="flex flex-col gap-10">

              {/* Item 1: MIR 1992 */}
              <div className="relative sm:flex sm:items-center sm:justify-between group">
                <div className="sm:w-5/12 sm:text-right sm:pr-8 pl-8 sm:pl-0">
                  <span className="inline-block px-3 py-1 mb-2 text-xs font-bold tracking-wider text-white bg-slate-400 rounded-full group-hover:bg-primary transition-colors">OCTUBRE 1992</span>
                  <h4 className="text-lg font-bold text-gray-900">Acceso especialidad MIR</h4>
                  <p className="text-sm text-gray-500 mt-1">Nº 19 en examen MIR nacional.</p>
                </div>
                <div className="absolute left-2 sm:left-1/2 -translate-x-[5px] sm:-translate-x-1/2 size-4 bg-white border-[3px] border-slate-400 rounded-full z-10 group-hover:border-primary group-hover:scale-125 transition-all"></div>
                <div className="sm:w-5/12 sm:pl-8 hidden sm:block"></div>
              </div>

              {/* Item 2: Residencia 1993-1997 */}
              <div className="relative sm:flex sm:items-center sm:justify-between group">
                <div className="sm:w-5/12 sm:text-right hidden sm:block"></div>
                <div className="absolute left-2 sm:left-1/2 -translate-x-[5px] sm:-translate-x-1/2 size-4 bg-white border-[3px] border-slate-400 rounded-full z-10 group-hover:border-primary group-hover:scale-125 transition-all"></div>
                <div className="sm:w-5/12 sm:pl-8 pl-8 sm:pl-0">
                  <span className="inline-block px-3 py-1 mb-2 text-xs font-bold tracking-wider text-white bg-slate-400 rounded-full group-hover:bg-primary transition-colors">1993 - 1997</span>
                  <h4 className="text-lg font-bold text-gray-900">Residencia Cirugía Cardiovascular</h4>
                  <p className="text-sm text-gray-500 mt-1 font-medium">Clínica Puerta de Hierro (Madrid)</p>
                </div>
              </div>

              {/* Item 3: Adjunto 1998-2010 */}
              <div className="relative sm:flex sm:items-center sm:justify-between group">
                <div className="sm:w-5/12 sm:text-right sm:pr-8 pl-8 sm:pl-0">
                  <span className="inline-block px-3 py-1 mb-2 text-xs font-bold tracking-wider text-white bg-slate-400 rounded-full group-hover:bg-primary transition-colors">1998 - 2010</span>
                  <h4 className="text-lg font-bold text-gray-900">Adjunto Especialista</h4>
                  <p className="text-sm text-gray-500 mt-1 font-medium">Hospital Clínico Universitario de Valencia</p>
                </div>
                <div className="absolute left-2 sm:left-1/2 -translate-x-[5px] sm:-translate-x-1/2 size-4 bg-white border-[3px] border-slate-400 rounded-full z-10 group-hover:border-primary group-hover:scale-125 transition-all"></div>
                <div className="sm:w-5/12 hidden sm:block"></div>
              </div>

              {/* Item 4: Jefe Servicio 2010-2020 */}
              <div className="relative sm:flex sm:items-center sm:justify-between group">
                <div className="sm:w-5/12 hidden sm:block"></div>
                <div className="absolute left-2 sm:left-1/2 -translate-x-[5px] sm:-translate-x-1/2 size-4 bg-white border-[3px] border-slate-400 rounded-full z-10 group-hover:border-primary group-hover:scale-125 transition-all"></div>
                <div className="sm:w-5/12 sm:pl-8 pl-8 sm:pl-0">
                  <span className="inline-block px-3 py-1 mb-2 text-xs font-bold tracking-wider text-white bg-slate-400 rounded-full group-hover:bg-primary transition-colors">2010 - 2020</span>
                  <h4 className="text-lg font-bold text-gray-900">Jefe de Servicio Cirugía Cardiaca</h4>
                  <p className="text-sm text-gray-500 mt-1 font-medium">Hospital Universitario del Vinalopó</p>
                </div>
              </div>

              {/* Item 5: Actualidad */}
              <div className="relative sm:flex sm:items-center sm:justify-between group">
                <div className="sm:w-5/12 sm:text-right sm:pr-8 pl-8 sm:pl-0">
                  <span className="inline-block px-3 py-1 mb-2 text-xs font-bold tracking-wider text-white bg-primary rounded-full shadow-lg shadow-primary/30">2020 - ACTUALIDAD</span>
                  <h4 className="text-lg font-bold text-gray-900">Jefe de Sección Cirugía Cardiaca</h4>
                  <p className="text-sm text-gray-500 mt-1 font-medium">Hospital Universitario y Politécnico La Fe (Valencia)</p>
                  <p className="text-xs text-primary font-semibold mt-1 bg-primary/10 inline-block px-2 py-0.5 rounded">Tutor de residentes desde 2023</p>
                </div>
                <div className="absolute left-2 sm:left-1/2 -translate-x-[5px] sm:-translate-x-1/2 size-5 bg-primary border-[4px] border-blue-100 rounded-full z-10 shadow-lg"></div>
                <div className="sm:w-5/12 hidden sm:block"></div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Areas of Interest / Services */}
      <section id="servicios" className="py-16 bg-slate-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white to-transparent opacity-50"></div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="mb-12">
            <h3 className="text-primary font-bold text-sm uppercase tracking-widest mb-2">Áreas de Valor</h3>
            <h2 className="text-[#0d121b] text-3xl font-black tracking-tight max-w-2xl">
              4 áreas que añaden valor a mi actividad clínica
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl">
              Más allá del quirófano, integro estas disciplinas para ofrecer una visión holística y rigurosa en medicina.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Card 1: Estadistica */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="size-12 rounded-xl bg-blue-50 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">analytics</span>
              </div>
              <h4 className="font-bold text-xl text-gray-900 mb-3 leading-tight">Diseño de estudios y modelado estadístico en Ciencias de la Salud</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-accent text-lg shrink-0 mt-0.5">school</span>
                  <div className="text-sm text-gray-600">
                    <strong>Diplomatura en Estadística en Ciencias de la Salud</strong><br/>
                    Universidad Autónoma de Barcelona
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-accent text-lg shrink-0 mt-0.5">verified</span>
                  <div className="text-sm text-gray-600">
                    <strong>Estadística y Epidemiología Clínica</strong><br/>
                    Formación Fechite. Juan Arévalo Serrano (Univ. Alcalá)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-accent text-lg shrink-0 mt-0.5">verified</span>
                  <div className="text-sm text-gray-600">
                    <strong>Supervivencia y Regresión (Lineal, Logística, Cox)</strong><br/>
                    Formación Fechite. Juan Arévalo Serrano (Univ. Alcalá)
                  </div>
                </li>
              </ul>
            </div>

            {/* Card 2: Gestion Equipos */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="size-12 rounded-xl bg-teal-50 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">diversity_3</span>
              </div>
              <h4 className="font-bold text-xl text-gray-900 mb-3 leading-tight">Gestión de equipos y pacientes en entornos de alta presión</h4>
              <p className="text-sm text-gray-500 mb-4">
                Liderazgo en entornos hospitalarios de alta responsabilidad.
              </p>
              <div className="inline-flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg border border-gray-100 w-full">
                <span className="material-symbols-outlined text-gray-400 text-sm">school</span>
                <span className="text-xs font-bold text-gray-700">Estudiante de Psicología (UNED)</span>
              </div>
            </div>

            {/* Card 3: Habitos Saludables */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="size-12 rounded-xl bg-rose-50 flex items-center justify-center text-rose-500 mb-6 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">cardiology</span>
              </div>
              <h4 className="font-bold text-xl text-gray-900 mb-3">Hábitos de vida saludables</h4>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Prevención cardiovascular y Cáncer.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-rose-50 text-rose-700 text-xs font-bold rounded-md">Prevención</span>
                <span className="px-3 py-1 bg-rose-50 text-rose-700 text-xs font-bold rounded-md">Oncología</span>
              </div>
            </div>

            {/* Card 4: Neurociencia */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="size-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">neurology</span>
              </div>
              <h4 className="font-bold text-xl text-gray-900 mb-3">Neurociencia y neurobiología</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Estudio de los mecanismos biológicos del comportamiento y la toma de decisiones clínicas.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Logos Carousel */}
      <section className="py-10 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Estándares y Herramientas</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-xl font-bold text-slate-800 flex items-center gap-1"><span className="material-symbols-outlined">description</span>TRIPOD</div>
            <div className="text-xl font-bold text-slate-800 flex items-center gap-1"><span className="material-symbols-outlined">description</span>STROBE</div>
            <div className="text-xl font-bold text-slate-800 flex items-center gap-1"><span className="material-symbols-outlined">code</span>R-Studio</div>
            <div className="text-xl font-bold text-slate-800 flex items-center gap-1"><span className="material-symbols-outlined">data_object</span>Python</div>
            <div className="text-xl font-bold text-slate-800 flex items-center gap-1"><span className="material-symbols-outlined">table_chart</span>SPSS</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background-light" id="contact">
        <div className="container mx-auto px-4 max-w-xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-[#0d121b] text-2xl font-black tracking-tight mb-2">Hablemos de tu proyecto</h3>
            <p className="text-gray-500 mb-8">Cuéntame brevemente qué necesitas. La primera aproximación es clave.</p>

            <form className="flex flex-col gap-5">
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-gray-700">Nombre completo</label>
                <input type="text" placeholder="Dr. Nombre Apellido" className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring-primary shadow-sm h-12 p-3" />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-bold text-gray-700">Email institucional</label>
                <input type="email" placeholder="nombre@hospital.com" className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring-primary shadow-sm h-12 p-3" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-gray-700">Tipo de proyecto</label>
                  <select className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring-primary shadow-sm h-12 p-3">
                    <option>Investigación Clínica</option>
                    <option>Análisis Estadístico</option>
                    <option>Consultoría de Gestión</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-gray-700">Plazo</label>
                  <select className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring-primary shadow-sm h-12 p-3">
                    <option>1 mes</option>
                    <option>3 meses</option>
                    <option>6+ meses</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-bold text-gray-700">Objetivo principal</label>
                <textarea rows={3} className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring-primary shadow-sm p-3" placeholder="Ej: Publicar en Q1, tesis doctoral, mejorar eficiencia de equipo..."></textarea>
              </div>

              <div className="pt-2">
                <button type="submit" className="flex w-full cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-lg font-bold shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all hover:scale-[1.01]">
                  Agendar llamada
                </button>
                <p className="text-xs text-center text-gray-400 mt-4">
                  Privacidad garantizada. Responderé en 24–48h.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
