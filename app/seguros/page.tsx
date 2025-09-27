"use client";

import { motion } from "framer-motion";
import { ShieldCheck, HeartPulse, Home, Car, Users } from "lucide-react";

export default function SegurosPage() {
    const planes = [
        {
            titulo: "Seguro de Auto",
            descripcion: "Cobertura total contra accidentes, robos y daños.",
            icono: Car,
        },
        {
            titulo: "Seguro de Salud",
            descripcion: "Atención médica y hospitalaria para ti y tu familia.",
            icono: HeartPulse,
        },
        {
            titulo: "Seguro de Hogar",
            descripcion: "Protección ante incendios, robos y desastres naturales.",
            icono: Home,
        },
        {
            titulo: "Seguro de Vida",
            descripcion: "Garantiza el bienestar de tus seres queridos.",
            icono: Users,
        },
    ];

    return (
        <section>
            {/* Hero */}
            <div className="bg-gradient-to-r from-red-700 to-red-500 text-white text-center py-24 px-6">
                <motion.h1
                    className="text-5xl font-extrabold drop-shadow-lg"
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    Nuestros Seguros
                </motion.h1>
                <motion.p
                    className="mt-4 text-lg text-red-100 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    Elige el plan que mejor se adapte a tus necesidades con Primac.
                </motion.p>
            </div>

            {/* Planes */}
            <div className="container mx-auto py-20 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {planes.map((plan, index) => {
                    const Icono = plan.icono;
                    return (
                        <motion.div
                            key={index}
                            className="p-8 bg-white shadow-lg rounded-2xl border-t-4 border-red-600 text-center flex flex-col items-center"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            whileHover={{ y: -8, scale: 1.03 }}
                        >
                            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6 shadow-md">
                                <Icono className="w-8 h-8" />
                            </div>
                            <h2 className="text-2xl font-bold text-red-600">
                                {plan.titulo}
                            </h2>
                            <p className="mt-4 text-gray-600">{plan.descripcion}</p>
                            <motion.button
                                className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 hover:shadow-lg transition"
                                whileTap={{ scale: 0.95 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                Cotizar
                            </motion.button>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
