const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",],

    theme: {
        extend: {
            backgroundImage:{

                'authImage':"url('/public/assets/auth.jpg')",
                'profile':"url(/public/assets/profile.jpg)",

            },
            fontFamily:{
                'abril':['Abril Fatface'],
                'shadows':['Shadows Into Light'],
                'rubic':['Rubik'],
                'poppins':['Poppins'],
            },



        },
    },
    darkMode: "class",
    plugins: [nextui()],
}

