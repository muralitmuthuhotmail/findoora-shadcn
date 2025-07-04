import { Metadata } from "next";

const baseDescription =
  "Findoora helps you discover resources, learn new skills, and grow your knowledge.";
const baseKeywords = [
  "Findoora",
  "learning",
  "resources",
  "community",
  "education",
];
const baseImage = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Findoora Open Graph Image",
};
const baseOpenGraph = {
  siteName: "Findoora",
  images: [baseImage],
  type: "website" as const,
  url: "/",
};
const baseTwitter = {
  card: "summary_large_image" as const,
  images: ["/og-image.png"],
};

export const metadata: Metadata = {
  title: {
    default: "Findoora",
    template: "%s | Findoora",
  },
  description: baseDescription,
  keywords: baseKeywords,
  openGraph: {
    ...baseOpenGraph,
    title: "Findoora",
    description: baseDescription,
  },
  twitter: {
    ...baseTwitter,
    title: "Findoora",
    description: baseDescription,
  },
};

export const homePageMetadata: Metadata = {
  title: "Findoora - Discover, Learn, and Grow",
  description:
    baseDescription + " Join our community and start your journey today.",
  keywords: baseKeywords,
  openGraph: {
    ...baseOpenGraph,
    title: "Findoora - Discover, Learn, and Grow",
    description: baseDescription,
  },
  twitter: {
    ...baseTwitter,
    title: "Findoora - Discover, Learn, and Grow",
    description: baseDescription,
  },
};

export const authPageMetadata: Metadata = {
  title: "Findoora - Authentication",
  description: "Login or register to access your Findoora account.",
  keywords: [...baseKeywords, "authentication", "login", "register"],
  openGraph: {
    ...baseOpenGraph,
    title: "Findoora - Authentication",
    description: "Login or register to access your Findoora account.",
  },
  twitter: {
    ...baseTwitter,
    title: "Findoora - Authentication",
    description: "Login or register to access your Findoora account.",
  },
};

export const loginPageMetadata: Metadata = {
  title: "Findoora - Login",
  description: "Login to your Findoora account to access resources.",
  keywords: [...baseKeywords, "login", "authentication"],
  openGraph: {
    ...baseOpenGraph,
    title: "Findoora - Login",
    description: "Login to your Findoora account to access resources.",
  },
  twitter: {
    ...baseTwitter,
    title: "Findoora - Login",
    description: "Login to your Findoora account to access resources.",
  },
};
export const registerPageMetadata: Metadata = {
  title: "Findoora - Register",
  description: "Create a new Findoora account to start learning.",
  keywords: [...baseKeywords, "register", "signup", "authentication"],
  openGraph: {
    ...baseOpenGraph,
    title: "Findoora - Register",
    description: "Create a new Findoora account to start learning.",
  },
  twitter: {
    ...baseTwitter,
    title: "Findoora - Register",
    description: "Create a new Findoora account to start learning.",
  },
};
export const forgotPasswordPageMetadata: Metadata = {
  title: "Findoora - Forgot Password",
  description: "Reset your Findoora account password.",
  keywords: [...baseKeywords, "forgot password", "reset password"],
  openGraph: {
    ...baseOpenGraph,
    title: "Findoora - Forgot Password",
    description: "Reset your Findoora account password.",
  },
  twitter: {
    ...baseTwitter,
    title: "Findoora - Forgot Password",
    description: "Reset your Findoora account password.",
  },
};
export const resetPasswordPageMetadata: Metadata = {
  title: "Findoora - Reset Password",
  description: "Set a new password for your Findoora account.",
  keywords: [...baseKeywords, "reset password", "authentication"],
  openGraph: {
    ...baseOpenGraph,
    title: "Findoora - Reset Password",
    description: "Set a new password for your Findoora account.",
  },
  twitter: {
    ...baseTwitter,
    title: "Findoora - Reset Password",
    description: "Set a new password for your Findoora account.",
  },
};
