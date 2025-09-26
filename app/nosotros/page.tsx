/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

export default function NosotrosPage() {
    return (
        <section>
            {/* Hero */}
            <div className="bg-red-600 text-white text-center py-20">
                <h1 className="text-4xl font-bold">Sobre Nosotros</h1>
                <p className="mt-4 text-lg">
                    Conoce más acerca de Primac Seguros y nuestro compromiso contigo.
                </p>
            </div>

            {/* Información */}
            <div className="bg-white py-16">
                <div className="container mx-auto px-6 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900">Nuestra Historia</h2>
                        <p className="mt-4 text-gray-700 leading-relaxed">
                            En Primac Seguros trabajamos desde hace más de 20 años brindando
                            confianza y protección a miles de familias. Nuestro enfoque está en
                            ofrecer soluciones claras, transparentes y adaptadas a cada
                            necesidad.
                        </p>
                    </div>
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                            alt="Equipo Primac"
                            className="rounded-xl shadow-lg"
                        />
                    </div>
                </div>
            </div>

            {/* Valores */}
            <div className="bg-gray-50 py-16">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-6 bg-white rounded-xl shadow border-t-4 border-red-600">
                        <h3 className="text-xl font-bold text-gray-900">Confianza</h3>
                        <p className="mt-2 text-gray-700">
                            Transparencia en cada paso para que siempre sepas que estás en buenas manos.
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow border-t-4 border-red-600">
                        <h3 className="text-xl font-bold text-gray-900">Cercanía</h3>
                        <p className="mt-2 text-gray-700">
                            Nos preocupamos por ti y tu familia, escuchando siempre tus necesidades.
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow border-t-4 border-red-600">
                        <h3 className="text-xl font-bold text-gray-900">Innovación</h3>
                        <p className="mt-2 text-gray-700">
                            Buscamos nuevas formas de mejorar tu experiencia y protección.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
}
