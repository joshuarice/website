import { Figtree } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { StrictMode } from "react";

export const metadata = {
    title: "Portfolio of Joshua Rice",
    description:
        "Full-stack Developer, UI/UX Designer, and Drone Pilot/Racer from Loveland, Colorado",
};

const figtree = Figtree({
    display: "swap",
    subsets: ["latin"],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <StrictMode>
            <html
                lang="en"
                className={figtree.className}
                suppressHydrationWarning
            >
                <body className="bg-background text-foreground">
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        {children}
                    </ThemeProvider>
                </body>
            </html>
        </StrictMode>
    );
}
