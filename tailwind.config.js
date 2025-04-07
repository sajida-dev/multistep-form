module.exports = {
    content: [
        "./pages/**/*.{js,jsx}",
        "./components/**/*.{js,jsx}"
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0548A0",
                secondary: "#36519D",
                accent: "#8AC4DD",
                light: "#EEF4FA",
            },
            backgroundImage: {
                'custom-gradient': "linear-gradient(rgb(5, 72, 160), rgba(54, 61, 157, 0.803), rgba(138, 146, 212, 0.864), rgba(133, 196, 221, 0.88))"
            }
        }
    },
    plugins: [],
};