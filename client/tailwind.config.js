const colors = require('tailwindcss/colors');

module.exports = {
    purge: [
        './src/**/*.{js,jsx,ts,tsx}',
        './public/index.html',
        './src/**/**/*.js',
        './src/**/**/**/*.js',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            zIndex: {
                '-1': '-1',
                '-2': '-2',
                '-3': '-3',
            },
            spacing: {
                100: '26rem',
                105: '28rem',
                110: '30rem',
                115: '35rem',
            },
            colors: {
                darkGray: {
                    50: '#f8f8f8',
                    100: '#dbe1e8',
                    200: '#b2becd',
                    300: '#6c7983',
                    400: '#454e56',
                    500: '#2a2a35',
                    600: '#12181b',
                },
                orange: {
                    100: '#FFC966',
                    200: '#FFC04D',
                    300: '#FFB733',
                    400: '#FFAE19',
                    500: '#ffa500',
                    600: '#E69400',
                    700: '#CC8400',
                    800: '#B37300',
                    900: '#996300',
                },
            },
            width: {
                38: '15rem',
            },
            transitionProperty: {
                height: 'height',
            },
            lineClamp: {
                8: '8',
                9: '9',
            },
        },
    },
    variants: {
        extend: {
            pointerEvents: ['hover'],
            opacity: ['disabled'],
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
        require('tailwindcss-textshadow'),
    ],
};
