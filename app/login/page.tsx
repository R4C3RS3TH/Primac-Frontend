"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { motion } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect } from "react";
import { loadSlim } from "@tsparticles/slim";

export default function LoginPage() {
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();
    const { login } = useAuth();

    // Inicializar partículas
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine); // carga la versión ligera
        });
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        const success = await login(correo, password);

        if (success) {
            router.push("/cuenta");
        } else {
            setError("Correo o contraseña incorrectos");
        }
    };

    return (
        <div className="relative flex justify-center items-center min-h-screen bg-gradient-to-br from-red-50 to-red-100 overflow-hidden">
            {/* Fondo de partículas */}
            <Particles
                id="tsparticles"
                className="absolute inset-0"
                options={{
                    background: { color: "#fff0f0" },
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onHover: { enable: true, mode: "repulse" },
                        },
                        modes: {
                            repulse: { distance: 100, duration: 0.4 },
                        },
                    },
                    particles: {
                        color: { value: "#ef4444" }, // rojo tailwind-500
                        links: {
                            enable: true,
                            color: "#ef4444",
                            distance: 120,
                            opacity: 0.4,
                        },
                        move: {
                            enable: true,
                            speed: 2,
                        },
                        number: { value: 40 },
                        opacity: { value: 0.6 },
                        size: { value: { min: 1, max: 4 } },
                    },
                    detectRetina: true,
                }}
            />

            {/* Formulario */}
            <motion.form
                onSubmit={handleSubmit}
                className="relative bg-white p-8 rounded-2xl shadow-xl w-96 z-10"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {/* Logo */}
                <motion.div
                    className="flex justify-center mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
                >
                    <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-md">
                        🔒
                    </div>
                </motion.div>

                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                    Iniciar Sesión
                </h2>

                {error && (
                    <motion.p
                        className="text-red-500 text-center mb-4 text-sm bg-red-50 py-2 rounded-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        {error}
                    </motion.p>
                )}

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1 text-gray-700">
                        Correo
                    </label>
                    <input
                        type="email"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                        placeholder="ejemplo@correo.com"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium mb-1 text-gray-700">
                        Contraseña
                    </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                        placeholder="••••••••"
                        required
                    />
                </div>

                <motion.button
                    type="submit"
                    className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 hover:shadow-lg transition"
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.02 }}
                >
                    Ingresar
                </motion.button>
            </motion.form>
        </div>
    );
}
