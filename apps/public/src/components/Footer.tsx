export default function Footer() {
  return (
    <footer className="bg-[#101622] text-white pt-16 pb-8 border-t border-gray-800">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <span className="material-symbols-outlined text-3xl text-primary">cardiology</span>
                        <h4 className="text-xl font-bold">Dr. Profile</h4>
                    </div>
                    <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
                        Ciencia de datos rigurosa y gestión humana para la práctica clínica real.
                    </p>
                </div>

                <div className="flex gap-12">
                    <div className="flex flex-col gap-3">
                        <h5 className="font-bold text-sm text-gray-500 uppercase tracking-wide">Legal</h5>
                        <a href="#" className="text-gray-300 text-sm hover:text-primary transition-colors">Aviso Legal</a>
                        <a href="#" className="text-gray-300 text-sm hover:text-primary transition-colors">Privacidad</a>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h5 className="font-bold text-sm text-gray-500 uppercase tracking-wide">Conectar</h5>
                        <a href="#" className="text-gray-300 text-sm hover:text-primary transition-colors">LinkedIn</a>
                        <a href="#" className="text-gray-300 text-sm hover:text-primary transition-colors">ResearchGate</a>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800 pt-8">
                <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700/50 mb-6">
                    <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-yellow-500/80 text-xl mt-0.5">warning</span>
                        <p className="text-xs text-gray-400 leading-relaxed">
                            <strong>Medical Disclaimer:</strong> La información contenida en este sitio web y los servicios de bioestadística no sustituyen el juicio clínico profesional. Los modelos predictivos son herramientas de apoyo a la decisión.
                        </p>
                    </div>
                </div>
                <div className="text-center text-xs text-gray-600">
                    © 2026 Dr. Profile. Todos los derechos reservados.
                </div>
            </div>
        </div>
    </footer>
  );
}
