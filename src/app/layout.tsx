import type { Metadata } from "next";
import ClientProvider from "@/src/ClientProvider";
import "./globals.css";

export const metadata: Metadata = {
    title: "Your App Title",
    description: "Your App Description",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className="antialiased">
        <ClientProvider>{children}</ClientProvider>
        </body>
        </html>
    );
}
