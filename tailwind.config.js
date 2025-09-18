/** @type {import('tailwindcss  ').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}"
    ],
    theme: {
        container: { center: true, padding: { DEFAULT: '1rem', sm: '1.5rem', lg: '2rem' } },
        extend: {
            fontFamily: {
                crimson: ['"Crimson Pro"','serif'],
                sans: ['Inter','ui-sans-serif','system-ui'],
            },
            colors: {
                line: '#e9e9e9',
                ink: '#0f0f0f',
                muted: '#6b7280'
            },
            borderRadius: { '30': '30px' }, // para imágenes/clips exactos
            boxShadow: {
                card: '0 1px 2px rgba(0,0,0,.04),0 8px 24px rgba(0,0,0,.06)',
            },
        },
    },
    darkMode: 'class',
    plugins: [],
};