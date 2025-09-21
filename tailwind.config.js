/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#D32F2F", // Rojo principal
                    light: "#EF5350",   // Rojo claro
                    dark: "#B71C1C",    // Rojo oscuro
                },
                secondary: {
                    DEFAULT: "#000000", // Negro
                    light: "#424242",   // Gris oscuro
                },
                base: {
                    DEFAULT: "#FFFFFF", // Blanco
                },
            },
        },
    },
    plugins: [],
}
