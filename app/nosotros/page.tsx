/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NosotrosPage() {
    return (
        <section>
            {/* Hero */}
            <div className="bg-red-600 text-white text-center py-20">
                <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl font-extrabold"
                >
                    Sobre Nosotros
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mt-4 text-lg max-w-2xl mx-auto"
                >
                    Conoce más acerca de Primac Seguros y nuestro compromiso contigo.
                </motion.p>
            </div>

            {/* Información */}
            <div className="bg-white py-20">
                <div className="container mx-auto px-6 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Nuestra Historia
                        </h2>
                        <p className="mt-4 text-gray-700 leading-relaxed">
                            En Primac Seguros trabajamos desde hace más de 20 años brindando
                            confianza y protección a miles de familias. Nuestro enfoque está en
                            ofrecer soluciones claras, transparentes y adaptadas a cada necesidad.
                        </p>
                        <Link
                            href="/contacto"
                            className="inline-block mt-6 px-6 py-3 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
                        >
                            Contáctanos
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex justify-center"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                            alt="Equipo Primac"
                            className="rounded-2xl shadow-xl transform hover:scale-105 transition duration-300"
                        />
                    </motion.div>
                </div>
            </div>

            {/* Valores */}
            <div className="bg-gray-50 py-20">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {[
                        {
                            title: "Confianza",
                            text: "Transparencia en cada paso para que siempre sepas que estás en buenas manos.",
                        },
                        {
                            title: "Cercanía",
                            text: "Nos preocupamos por ti y tu familia, escuchando siempre tus necesidades.",
                        },
                        {
                            title: "Innovación",
                            text: "Buscamos nuevas formas de mejorar tu experiencia y protección.",
                        },
                    ].map((valor, index) => (
                        <motion.div
                            key={valor.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 * index }}
                            viewport={{ once: true }}
                            className="p-6 bg-white rounded-xl shadow border-t-4 border-red-600 transform hover:scale-105 hover:shadow-lg transition"
                        >
                            <h3 className="text-xl font-bold text-gray-900">{valor.title}</h3>
                            <p className="mt-2 text-gray-700">{valor.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Compromiso */}
            <div className="bg-red-600 text-white py-16 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold"
                >
                    Nuestro Compromiso
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mt-4 text-lg max-w-2xl mx-auto"
                >
                    Tu tranquilidad es nuestra misión. En Primac Seguros, estamos contigo en
                    cada paso, asegurando lo que más valoras.
                </motion.p>
            </div>
        </section>
    );
}
