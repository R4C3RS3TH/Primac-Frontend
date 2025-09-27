"use client";

import { useState } from "react";
import axios from "axios";

export default function RegisterPage() {
    const [form, setForm] = useState({
        username: "",
        correo: "",
        password: "",
    });
    const [mensaje, setMensaje] = useState("");

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await axios.post("/api/register", form);
            setMensaje(`Usuario ${res.data.username} registrado correctamente`);
        } catch (err) {
            setMensaje("Error al registrarse");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Registro</h1>
            <form onSubmit={handleRegister} className="flex flex-col gap-2 w-64">
                <input
                    type="text"
                    placeholder="Usuario"
                    value={form.username}
                    onChange={(e) => setForm({ ...form, username: e.target.value })}
                    className="border p-2 rounded"
                />
                <input
                    type="email"
                    placeholder="Correo"
                    value={form.correo}
                    onChange={(e) => setForm({ ...form, correo: e.target.value })}
                    className="border p-2 rounded"
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    className="border p-2 rounded"
                />
                <button type="submit" className="bg-green-500 text-white p-2 rounded">
                    Registrarse
                </button>
            </form>
            {mensaje && <p className="mt-2">{mensaje}</p>}
        </div>
    );
}
