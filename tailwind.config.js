const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",],

    theme: {
        extend: {
            backgroundImage:{
                'authImage':"url('/public/assets/auth.jpg')"
            },
        },
    },
    darkMode: "class",
    plugins: [nextui()],
}

