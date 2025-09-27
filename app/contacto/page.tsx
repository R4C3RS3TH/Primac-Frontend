"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function ContactoPage() {
    const [enviado, setEnviado] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setEnviado(true);
        setTimeout(() => setEnviado(false), 2500); // vuelve al estado normal después de 2.5s
    };

    return (
        <section className="bg-white text-gray-900">
            {/* Hero */}
            <motion.div
                className="bg-gradient-to-r from-red-700 to-red-500 text-white text-center py-20 px-6"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                <h1 className="text-5xl font-extrabold drop-shadow-lg">Contáctanos</h1>
                <p className="mt-4 text-lg text-red-100 max-w-2xl mx-auto">
                    Estamos aquí para ayudarte. Escríbenos y te responderemos pronto.
                </p>
            </motion.div>

            {/* Formulario y datos */}
            <div className="container mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Formulario */}
                <motion.div
                    className="bg-white p-8 shadow-lg rounded-2xl border-t-4 border-red-600"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-2xl font-bold mb-6 text-red-600">
                        Envíanos un mensaje
                    </h2>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="font-medium">Nombre</label>
                            <input
                                type="text"
                                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition"
                                placeholder="Tu nombre"
                                required
                            />
                        </div>
                        <div>
                            <label className="font-medium">Correo electrónico</label>
                            <input
                                type="email"
                                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition"
                                placeholder="tucorreo@ejemplo.com"
                                required
                            />
                        </div>
                        <div>
                            <label className="font-medium">Mensaje</label>
                            <textarea
                                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition"
                                rows={5}
                                placeholder="Escribe tu mensaje aquí..."
                                required
                            ></textarea>
                        </div>
                        <motion.button
                            type="submit"
                            disabled={enviado}
                            className={`w-full py-3 font-semibold rounded-lg transition flex items-center justify-center ${enviado
                                    ? "bg-green-600 text-white"
                                    : "bg-red-600 text-white hover:bg-red-700 hover:shadow-lg"
                                }`}
                            whileHover={!enviado ? { scale: 1.03 } : {}}
                            whileTap={!enviado ? { scale: 0.95 } : {}}
                        >
                            {enviado ? (
                                <motion.div
                                    className="flex items-center space-x-2"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <CheckCircle className="w-6 h-6 text-white" />
                                    <span>¡Enviado!</span>
                                </motion.div>
                            ) : (
                                "Enviar mensaje"
                            )}
                        </motion.button>
                    </form>
                </motion.div>

                {/* Datos de contacto */}
                <div className="flex flex-col justify-center space-y-6">
                    {[
                        {
                            icon: <Phone className="w-6 h-6 text-red-600" />,
                            title: "Teléfono",
                            value: "+51 961062998",
                        },
                        {
                            icon: <Mail className="w-6 h-6 text-red-600" />,
                            title: "Correo",
                            value: "Primacseguros@primac.com",
                        },
                        {
                            icon: <MapPin className="w-6 h-6 text-red-600" />,
                            title: "Dirección",
                            value: "Jr Medrano Silva 165, Lima, Perú",
                        },
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="flex items-start space-x-4 bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition"
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            whileHover={{ scale: 1.03 }}
                        >
                            <div className="flex-shrink-0">{item.icon}</div>
                            <div>
                                <h3 className="text-lg font-bold">{item.title}</h3>
                                <p className="mt-1 text-gray-700">{item.value}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
