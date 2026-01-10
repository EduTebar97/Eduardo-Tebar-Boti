"use client";

import { useState } from "react";

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState<"design" | "modeling">("design");

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden flex flex-col md:flex-row min-h-[600px]">

      {/* Sidebar / Tabs */}
      <div className="md:w-1/3 bg-slate-50 border-r border-gray-100 flex flex-col">
        <div className="p-8 pb-4">
             <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Servicios Principales</h3>
             <p className="text-gray-500 text-sm">Selecciona una especialidad para ver el detalle técnico.</p>
        </div>

        <div className="flex flex-col gap-2 p-4">
            <button
                onClick={() => setActiveTab("design")}
                className={`text-left p-4 rounded-xl transition-all duration-300 flex items-start gap-4 ${
                    activeTab === "design"
                    ? "bg-white shadow-md border border-gray-100 ring-2 ring-primary/5"
                    : "hover:bg-white/50 hover:shadow-sm"
                }`}
            >
                <div className={`size-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${activeTab === "design" ? "bg-primary text-white" : "bg-gray-100 text-gray-400"}`}>
                    <span className="material-symbols-outlined">architecture</span>
                </div>
                <div>
                    <h4 className={`font-bold transition-colors ${activeTab === "design" ? "text-primary" : "text-gray-600"}`}>Diseño de Estudios</h4>
                    <p className="text-xs text-gray-400 mt-1 line-clamp-2">Planificación, validación y protocolos para ensayos y tesis.</p>
                </div>
            </button>

            <button
                onClick={() => setActiveTab("modeling")}
                className={`text-left p-4 rounded-xl transition-all duration-300 flex items-start gap-4 ${
                    activeTab === "modeling"
                    ? "bg-white shadow-md border border-gray-100 ring-2 ring-teal-500/5"
                    : "hover:bg-white/50 hover:shadow-sm"
                }`}
            >
                <div className={`size-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${activeTab === "modeling" ? "bg-teal-500 text-white" : "bg-gray-100 text-gray-400"}`}>
                    <span className="material-symbols-outlined">model_training</span>
                </div>
                <div>
                    <h4 className={`font-bold transition-colors ${activeTab === "modeling" ? "text-teal-600" : "text-gray-600"}`}>Modelización Avanzada</h4>
                    <p className="text-xs text-gray-400 mt-1 line-clamp-2">Regresiones, predicción y análisis multivariante complejo.</p>
                </div>
            </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="md:w-2/3 p-8 md:p-12 bg-white relative">

        {/* DESIGN CONTENT */}
        <div className={`transition-all duration-500 absolute inset-0 p-8 md:p-12 overflow-y-auto ${activeTab === "design" ? "opacity-100 translate-y-0 z-10" : "opacity-0 translate-y-4 -z-10 pointer-events-none"}`}>
            <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-wider">Metodología</span>
                <span className="px-3 py-1 rounded-full bg-gray-50 text-gray-500 text-xs font-bold uppercase tracking-wider">Protocolos</span>
            </div>
            <h2 className="text-3xl font-black text-gray-900 mb-6">Diseño de Estudios Epidemiológicos</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
                La base de cualquier evidencia es un diseño sólido. Te ayudo a estructurar tu investigación desde la hipótesis cero para evitar sesgos y asegurar la publicabilidad.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <div className="size-10 rounded-full bg-blue-50 flex items-center justify-center text-primary mb-2">
                        <span className="material-symbols-outlined">flag</span>
                    </div>
                    <h4 className="font-bold text-gray-900">Definición de Objetivos</h4>
                    <p className="text-sm text-gray-500">Clarificación de endpoints primarios y secundarios. Formulación precisa de hipótesis.</p>
                 </div>
                 <div className="space-y-2">
                    <div className="size-10 rounded-full bg-blue-50 flex items-center justify-center text-primary mb-2">
                        <span className="material-symbols-outlined">category</span>
                    </div>
                    <h4 className="font-bold text-gray-900">Tipología de Estudio</h4>
                    <p className="text-sm text-gray-500">Elección óptima: Cohortes, Casos-Controles, Transversal o Ensayo Clínico.</p>
                 </div>
                 <div className="space-y-2">
                    <div className="size-10 rounded-full bg-blue-50 flex items-center justify-center text-primary mb-2">
                        <span className="material-symbols-outlined">groups</span>
                    </div>
                    <h4 className="font-bold text-gray-900">Cálculo Muestral</h4>
                    <p className="text-sm text-gray-500">Estimación de potencia estadística para garantizar resultados significativos.</p>
                 </div>
                 <div className="space-y-2">
                    <div className="size-10 rounded-full bg-blue-50 flex items-center justify-center text-primary mb-2">
                        <span className="material-symbols-outlined">rule</span>
                    </div>
                    <h4 className="font-bold text-gray-900">Variables y CRD</h4>
                    <p className="text-sm text-gray-500">Diseño del Cuaderno de Recogida de Datos y diccionario de variables.</p>
                 </div>
            </div>
        </div>

        {/* MODELING CONTENT */}
        <div className={`transition-all duration-500 absolute inset-0 p-8 md:p-12 overflow-y-auto ${activeTab === "modeling" ? "opacity-100 translate-y-0 z-10" : "opacity-0 translate-y-4 -z-10 pointer-events-none"}`}>
            <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-teal-50 text-teal-600 text-xs font-bold uppercase tracking-wider">Matemática</span>
                <span className="px-3 py-1 rounded-full bg-gray-50 text-gray-500 text-xs font-bold uppercase tracking-wider">Algoritmos</span>
            </div>
            <h2 className="text-3xl font-black text-gray-900 mb-6">Modelización Estadística Avanzada</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
                Voy más allá del P-valor. Implemento modelos complejos para aislar factores de confusión y predecir resultados con precisión clínica.
            </p>

            <div className="space-y-6">
                <div className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <span className="material-symbols-outlined text-teal-600 text-2xl shrink-0">bar_chart</span>
                    <div>
                        <h4 className="font-bold text-gray-900">Estadística Inferencial</h4>
                        <p className="text-sm text-gray-500">Pruebas paramétricas (T-Student, ANOVA) y no paramétricas (Mann-Whitney, Kruskal-Wallis) rigurosas.</p>
                    </div>
                </div>
                <div className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <span className="material-symbols-outlined text-teal-600 text-2xl shrink-0">linear_scale</span>
                    <div>
                        <h4 className="font-bold text-gray-900">Regresión Multivariante</h4>
                        <p className="text-sm text-gray-500">Modelos Lineales, Logísticos (Binaria/Multinomial) y Poisson para ajuste de riesgos.</p>
                    </div>
                </div>
                <div className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <span className="material-symbols-outlined text-teal-600 text-2xl shrink-0">timer</span>
                    <div>
                        <h4 className="font-bold text-gray-900">Análisis de Supervivencia</h4>
                        <p className="text-sm text-gray-500">Curvas Kaplan-Meier, Log-Rank test y Modelos de Riesgos Proporcionales de Cox.</p>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}
