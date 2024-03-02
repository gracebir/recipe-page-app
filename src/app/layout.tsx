/** @format */

import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
    title: "recipe app",
    description: "this is a recipe app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className={outfit.className}>{children}</body>
        </html>
    );
}
