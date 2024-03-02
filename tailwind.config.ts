/** @format */

import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                nutmeg: "var(--nutmeg)",
                "dark-raspberry": "var(--dark-raspberry)",
                white: "var(--white)",
                "rose-white": "var(--rose-white)",
                eggshell: "var(--eggshell)",
                "light-grey": "var(--light-grey)",
                "wenge-brown": "var(--wenge-brown)",
                "dark-charcoal": "var(--dark-charcoal)",
            },
        },
    },
    plugins: [],
};
export default config;
