import localFont from "next/font/local";

export const JacquesSans = localFont({
    src: [
        {
            path: "public/font/font/ppneuemontreal-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "public/font/font/ppneuemontreal-Medium.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "public/font/font/ppneuemontreal-Bold.woff2",
            weight: "700",
            style: "normal",
        }
    ],
    variable: "--font-jacques-sans",
    display: "swap",
    fallback: [
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "sans-serif",
    ],
    adjustFontFallback: "Arial",
    preload: true
});

export const JacquesMono = localFont({
    src: [
        {
            path: "public/font/InstagramSans-Regular.woff2",
            weight: "400",
            style: "monospace",
        },
        {
            path: "public/font/InstagramSans-Medium.woff2",
            weight: "500",
            style: "monospace",
        }
    ],
    variable: "--font-mono",
    display: "swap",
    fallback: [
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "sans-serif",
    ],
    adjustFontFallback: "Arial",
    preload: true
});

export const FONT_CHARACTERS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@._-⟶";