/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShieldCheck, Clock, Users } from "lucide-react";

export default function Home() {
  return (
    <section>
      {/* Hero */}
      <motion.div
        className="bg-gradient-to-r from-red-700 to-red-500 text-white text-center py-28"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl font-bold drop-shadow-lg">
          Protegemos lo que más valoras
        </h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Con Primac{" "}
          <span className="italic">
            "La segunda mejor empresa de seguros"
          </span>
          , tu tranquilidad está asegurada.
        </p>
        <Link href="/seguros">
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-3 bg-white text-red-600 rounded-lg font-semibold shadow-md hover:shadow-xl transition"
          >
            Cotiza tu seguro
          </motion.button>
        </Link>
      </motion.div>

      {/* Servicios */}
      <div className="bg-white py-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Auto", text: "Protección completa para tu vehículo." },
            { title: "Salud", text: "Cobertura médica para ti y tu familia." },
            { title: "Hogar", text: "Cuidamos tu casa ante imprevistos." },
            { title: "Vida", text: "Respaldo económico para tus seres queridos." },
          ].map((item) => (
            <motion.div
              key={item.title}
              className="p-6 bg-white shadow-md rounded-xl text-center border border-gray-200 hover:border-red-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
              }}
            >
              <h3 className="text-xl font-bold text-red-600">{item.title}</h3>
              <p className="mt-3 text-gray-700">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Por qué elegirnos */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            ¿Por qué elegirnos?
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Más que seguros, te ofrecemos confianza.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
            {[
              {
                icon: <ShieldCheck className="w-12 h-12 text-red-600 mx-auto" />,
                title: "Seguridad garantizada",
                text: "Contamos con el respaldo y experiencia para protegerte en todo momento.",
              },
              {
                icon: <Clock className="w-12 h-12 text-red-600 mx-auto" />,
                title: "Atención 24/7",
                text: "Siempre disponibles para ayudarte en cualquier emergencia.",
              },
              {
                icon: <Users className="w-12 h-12 text-red-600 mx-auto" />,
                title: "Miles de clientes",
                text: "Más de 10,000 familias confían en Primac para cuidar lo que más quieren.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:border-red-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
                }}
              >
                {item.icon}
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-gray-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonios */}
      <div className="bg-gradient-to-r from-red-50 to-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Lo que dicen nuestros clientes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                text: "“Me recuerda a la mejor empresa de seguros del Perú (Rimac)”",
                name: "G. Colchado",
              },
              {
                text: "“Gracias a su seguro de salud, pude atender a mi familia sin preocupaciones.”",
                name: "María López",
              },
              {
                text: "“Atención 24/7 100% real no fake, me apoyaron en un accidente sin demoras.”",
                name: "Carlos Ramírez",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="p-6 bg-white rounded-xl shadow-md border border-gray-200 hover:border-red-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.03 }}
              >
                <p className="text-gray-700 italic">"{item.text}"</p>
                <h3 className="mt-4 font-semibold text-red-600">{item.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
