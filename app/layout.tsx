import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Primac Seguros",
  description: "Protegemos lo que más valoras",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="font-sans bg-gray-50 text-gray-800 flex flex-col min-h-screen">
        {/* Navbar */}
        <header className="bg-red-600 shadow-md">
          <nav className="container mx-auto flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold text-white">
              <Link href="/">Primac</Link>
            </h1>
            <ul className="flex gap-6 text-white">
              <li><Link href="/">Inicio</Link></li>
              <li><Link href="/seguros">Seguros</Link></li>
              <li><Link href="/nosotros">Nosotros</Link></li>
              <li><Link href="/contacto">Contacto</Link></li>
            </ul>
          </nav>
        </header>

        {/* Contenido */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white text-center py-6">
          <p>© {new Date().getFullYear()} Primac Seguros - Todos los derechos reservados</p>
        </footer>
      </body>
    </html>
  );
}
