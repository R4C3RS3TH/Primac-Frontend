"use client";

import "./globals.css";
import Navbar from "./components/Navbar";
import { usePathname } from "next/navigation";
import { AuthProvider } from "@/context/AuthContext";  // 👈 importamos el provider

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Ocultar Navbar en la ruta de login
  const hideNavbar = pathname === "/login";

  return (
    <html lang="es">
      <body className="font-sans bg-gray-50 text-gray-800 flex flex-col min-h-screen">
        <AuthProvider>  {/* 👈 ahora todo tu frontend tiene acceso a la auth */}

          {/* Navbar solo si no estamos en /login */}
          {!hideNavbar && <Navbar />}

          {/* Contenido */}
          <main className="flex-grow">{children}</main>

          {/* Footer */}
          <footer className="bg-gray-900 text-white text-center py-6">
            <p>© {new Date().getFullYear()} Primac Seguros - Todos los derechos reservados</p>
          </footer>
        </AuthProvider>
      </body>
    </html>
  );
}
