import localFont from "next/font/local";

const bold = localFont({
    src: "../app/fonts/akira_bold-webfont.woff2",
    weight: "400",
});

const outline = localFont({
    src: "../app/fonts/akira_outline-webfont.woff2",
    weight: "400",
});

const superBold = localFont({
    src: "../app/fonts/akira_super_bold-webfont.woff2",
    weight: "400",
});

export default function AkiraFont({
    variant,
    children,
}: {
    variant: "bold" | "outline" | "superBold";
    children: React.ReactNode;
}) {
    if (variant === "bold") {
        return <div className={bold.className}>{children}</div>;
    }
    if (variant === "outline") {
        return <div className={outline.className}>{children}</div>;
    }
    if (variant === "superBold") {
        return <div className={superBold.className}>{children}</div>;
    }
}
