export const appConfig = {
    transition:false,
    transitionDuration: 300,
    transitionDelay: 0,
    maxWidth: "7xl",
    sections: [
        "hero",
        "features",
        "pricing",
        "testimonial",
        "faq",
        "footer",
    ],
    logo: {
        asLink: true,
        href: "/",
        text: "findoora",
        textClassName: "font-bold",
        className: "py-4 flex justify-center item-center",
        size: "md" as const,
        iconVariant: "secondary",
    },
    navbar: {
        hasBlur: true,
        className: "md:hidden mb-6",
        authButton: {
            text: "Need help?",
            variant: "link",
            href: "/",
        },
        showThemeToggle: false,
    },
}