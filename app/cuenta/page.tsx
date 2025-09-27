"use client";

import { useEffect, useState } from "react";

export default function CuentaPage() {
    const [user, setUser] = useState<any>(null);
    const [payments, setPayments] = useState<any[]>([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) return;

        // Obtener usuario
        fetch("http://localhost:4000/api/auth/me", {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data && data.username) {
                    setUser(data);
                    localStorage.setItem("user", JSON.stringify(data));
                }
            })
            .catch(() => setUser(null));

        // Obtener historial de pagos
        fetch("http://localhost:4000/api/payments", {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((res) => res.json())
            .then((data) => setPayments(data))
            .catch(() => setPayments([]));
    }, []);

    if (!user) {
        return <p className="p-6">No has iniciado sesión.</p>;
    }

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold mb-6 text-red-600">Mi Cuenta</h2>

            {/* Card de perfil */}
            <div className="bg-white shadow-lg rounded-xl p-6 flex items-center gap-6 mb-10">
                {/* Avatar */}
                <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center text-white text-2xl font-bold">
                    {user.username[0].toUpperCase()}
                </div>

                {/* Info */}
                <div className="grid grid-cols-2 gap-4 w-full">
                    <p><span className="font-semibold">Usuario:</span> {user.username}</p>
                    <p><span className="font-semibold">Correo:</span> {user.email}</p>
                    <p><span className="font-semibold">Teléfono:</span> {user.phone}</p>
                    <p><span className="font-semibold">Rol:</span> {user.role}</p>
                    <p className="col-span-2">
                        <span className="font-semibold">Dirección:</span> {user.street}, {user.city}, {user.state}
                    </p>
                    <p><span className="font-semibold">Registrado el:</span> {new Date(user.createdAt).toLocaleDateString()}</p>
                    <p><span className="font-semibold">Última actualización:</span> {new Date(user.updatedAt).toLocaleDateString()}</p>
                </div>
            </div>

            {/* Historial de pagos */}
            <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-700">Historial de Pagos</h3>
                <div className="overflow-x-auto shadow-lg rounded-xl">
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                        <thead className="bg-red-600 text-white">
                            <tr>
                                <th className="px-6 py-3 text-left">Fecha</th>
                                <th className="px-6 py-3 text-left">Tipo de Seguro</th>
                                <th className="px-6 py-3 text-left">Monto</th>
                                <th className="px-6 py-3 text-left">Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {payments.length > 0 ? (
                                payments.map((p) => (
                                    <tr key={p.id} className="border-b">
                                        <td className="px-6 py-4">{new Date(p.date).toLocaleDateString()}</td>
                                        <td className="px-6 py-4">{p.concept}</td>
                                        <td className="px-6 py-4 text-green-600 font-semibold">S/ {p.amount.toFixed(2)}</td>
                                        <td className="px-6 py-4">
                                            {p.status === "PAGADO" ? (
                                                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-md text-sm">Pagado</span>
                                            ) : (
                                                <span className="bg-red-100 text-red-700 px-2 py-1 rounded-md text-sm">Pendiente</span>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={4} className="px-6 py-4 text-center text-gray-500">
                                        No hay pagos registrados.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
