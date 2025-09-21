export default function SegurosPage() {
    return (
        <section>
            {/* Hero */}
            <div className="bg-red-600 text-white text-center py-20">
                <h1 className="text-4xl font-bold">Nuestros Seguros</h1>
                <p className="mt-4 text-lg">
                    Elige el plan que mejor se adapte a tus necesidades con Primac.
                </p>
            </div>

            {/* Planes */}
            <div className="container mx-auto py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="p-6 bg-white shadow-md rounded-xl border-t-4 border-red-600 text-center">
                    <h2 className="text-2xl font-bold text-red-600">Seguro de Auto</h2>
                    <p className="mt-4 text-gray-700">
                        Cobertura total contra accidentes, robos y daños.
                    </p>
                    <button className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                        Cotizar
                    </button>
                </div>

                <div className="p-6 bg-white shadow-md rounded-xl border-t-4 border-red-600 text-center">
                    <h2 className="text-2xl font-bold text-red-600">Seguro de Salud</h2>
                    <p className="mt-4 text-gray-700">
                        Atención médica y hospitalaria para ti y tu familia.
                    </p>
                    <button className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                        Cotizar
                    </button>
                </div>

                <div className="p-6 bg-white shadow-md rounded-xl border-t-4 border-red-600 text-center">
                    <h2 className="text-2xl font-bold text-red-600">Seguro de Hogar</h2>
                    <p className="mt-4 text-gray-700">
                        Protección ante incendios, robos y desastres naturales.
                    </p>
                    <button className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                        Cotizar
                    </button>
                </div>

                <div className="p-6 bg-white shadow-md rounded-xl border-t-4 border-red-600 text-center">
                    <h2 className="text-2xl font-bold text-red-600">Seguro de Vida</h2>
                    <p className="mt-4 text-gray-700">
                        Garantiza el bienestar de tus seres queridos.
                    </p>
                    <button className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                        Cotizar
                    </button>
                </div>
            </div>
        </section>
    );
}
