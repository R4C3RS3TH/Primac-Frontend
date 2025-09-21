export default function ContactoPage() {
    return (
        <section className="bg-white text-gray-900">
            {/* Hero */}
            <div className="bg-red-600 text-white text-center py-20">
                <h1 className="text-4xl font-bold">Contáctanos</h1>
                <p className="mt-4 text-lg">
                    Estamos aquí para ayudarte. Escríbenos y te responderemos pronto.
                </p>
            </div>

            {/* Formulario y datos */}
            <div className="container mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Formulario */}
                <div className="bg-white p-8 shadow-md rounded-xl">
                    <h2 className="text-2xl font-bold mb-6">
                        Envíanos un mensaje
                    </h2>
                    <form className="space-y-4">
                        <div>
                            <label>Nombre</label>
                            <input
                                type="text"
                                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                                placeholder="Tu nombre"
                            />
                        </div>
                        <div>
                            <label>Correo electrónico</label>
                            <input
                                type="email"
                                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                                placeholder="tucorreo@ejemplo.com"
                            />
                        </div>
                        <div>
                            <label>Mensaje</label>
                            <textarea
                                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                                rows={5}
                                placeholder="Escribe tu mensaje aquí..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
                        >
                            Enviar mensaje
                        </button>
                    </form>
                </div>

                {/* Datos de contacto */}
                <div className="flex flex-col justify-center space-y-6">
                    <div>
                        <h3 className="text-xl font-bold">Teléfono</h3>
                        <p className="mt-1">+51 961062998</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">Correo</h3>
                        <p className="mt-1">Primacseguros@primac.com</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">Dirección</h3>
                        <p className="mt-1">Jr Medrano Silva 165, Lima, Perú</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
