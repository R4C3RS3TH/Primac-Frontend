"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const { user, logout, loading } = useAuth();
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);

    if (loading) return null;

    const handleLogout = () => {
        logout();
        router.push("/");
    };

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-red-600 shadow-md sticky top-0 z-50"
        >
            <nav className="container mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <h1 className="text-2xl font-bold text-white">
                    <Link href="/">Primac</Link>
                </h1>

                {/* Desktop Links */}
                <ul className="hidden md:flex gap-6 text-white items-center font-medium">
                    <li><Link href="/">Inicio</Link></li>
                    <li><Link href="/seguros">Seguros</Link></li>
                    <li><Link href="/nosotros">Nosotros</Link></li>
                    <li><Link href="/contacto">Contacto</Link></li>

                    {!user ? (
                        <li>
                            <Link
                                href="/login"
                                className="bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
                            >
                                Iniciar sesión
                            </Link>
                        </li>
                    ) : (
                        <li className="flex items-center gap-3">
                            <span className="text-sm">👋 {user.username}</span>
                            <Link
                                href="/cuenta"
                                className="bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
                            >
                                Cuenta
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="bg-gray-200 text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 transition"
                            >
                                Cerrar sesión
                            </button>
                        </li>
                    )}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <motion.ul
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden bg-red-700 text-white flex flex-col gap-4 p-6 font-medium"
                >
                    <li><Link href="/" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
                    <li><Link href="/seguros" onClick={() => setMenuOpen(false)}>Seguros</Link></li>
                    <li><Link href="/nosotros" onClick={() => setMenuOpen(false)}>Nosotros</Link></li>
                    <li><Link href="/contacto" onClick={() => setMenuOpen(false)}>Contacto</Link></li>

                    {!user ? (
                        <li>
                            <Link
                                href="/login"
                                onClick={() => setMenuOpen(false)}
                                className="block bg-white text-red-600 px-4 py-2 rounded-lg font-semibold text-center hover:bg-gray-100 transition"
                            >
                                Iniciar sesión
                            </Link>
                        </li>
                    ) : (
                        <>
                            <li className="text-sm">👋 {user.username}</li>
                            <li>
                                <Link
                                    href="/cuenta"
                                    onClick={() => setMenuOpen(false)}
                                    className="block bg-white text-red-600 px-4 py-2 rounded-lg font-semibold text-center hover:bg-gray-100 transition"
                                >
                                    Cuenta
                                </Link>
                            </li>
                            <li>
                                <button
                                    onClick={() => {
                                        handleLogout();
                                        setMenuOpen(false);
                                    }}
                                    className="w-full bg-gray-200 text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 transition"
                                >
                                    Cerrar sesión
                                </button>
                            </li>
                        </>
                    )}
                </motion.ul>
            )}
        </motion.header>
    );
}
