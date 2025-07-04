import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { Separator } from "@workspace/ui/components/separator";
import Link from "next/link";
import Logo from "@workspace/ui/components/logo";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { memo } from "react";

const FOOTER_SECTIONS = [
  {
    title: "Product",
    links: [
      { title: "Features", href: "#" },
      { title: "Pricing", href: "#" },
      { title: "Documentation", href: "#" },
      { title: "API Reference", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About", href: "#" },
      { title: "Blog", href: "#" },
      { title: "Careers", href: "#" },
      { title: "Contact", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { title: "Help Center", href: "#" },
      { title: "Community", href: "#" },
      { title: "Status", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { title: "Privacy", href: "#" },
      { title: "Terms", href: "#" },
      { title: "Security", href: "#" },
    ],
  },
] as const;

const SOCIAL_LINKS = [
  {
    href: "https://twitter.com",
    icon: FaTwitter,
    label: "Follow us on Twitter",
  },
  {
    href: "https://instagram.com",
    icon: FaInstagram,
    label: "Follow us on Instagram",
  },
  {
    href: "https://linkedin.com",
    icon: FaLinkedin,
    label: "Follow us on LinkedIn",
  },
  {
    href: "https://github.com",
    icon: FaGithub,
    label: "Follow us on GitHub",
  },
] as const;

const LEGAL_LINKS = [
  { href: "/privacy", title: "Privacy" },
  { href: "/terms", title: "Terms" },
  { href: "/cookies", title: "Cookies" },
] as const;

const CURRENT_YEAR = new Date().getFullYear();

// Newsletter Section Component
const NewsletterSection = memo(() => (
  <div className="lg:col-span-1">
    <div className="max-w-md justify-center mx-auto text-center lg:justify-start lg:text-left">
      <h2 className="text-lg font-semibold mb-2">Stay updated</h2>
      <p className="text-muted-foreground mb-6 text-sm">
        Subscribe to our newsletter for the latest updates.
      </p>
      <form className="flex gap-2">
        <Input type="email" placeholder="Enter your email" className="flex-2" />
        <Button type="submit">Subscribe</Button>
      </form>
    </div>
  </div>
));

NewsletterSection.displayName = "NewsletterSection";

// Footer Links Section Component
const FooterLinksSection = memo(() => (
  <div className="lg:col-span-2 hidden md:block">
    <div className="grid grid-cols-4 gap-8">
      {FOOTER_SECTIONS.map((section) => (
        <div key={section.title} className="space-y-4">
          <h3 className="font-semibold text-foreground text-sm tracking-wide">
            {section.title}
          </h3>
          <ul className="space-y-3">
            {section.links.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
));

FooterLinksSection.displayName = "FooterLinksSection";

// Social Links Component
const SocialLinks = memo(() => (
  <div className="flex items-center gap-3">
    {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
      <Link
        key={href}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-foreground transition-colors p-1.5 hover:bg-accent rounded-lg"
        aria-label={label}
      >
        <Icon className="h-4 w-4" />
      </Link>
    ))}
  </div>
));

SocialLinks.displayName = "SocialLinks";

// Legal Links Component
const LegalLinks = memo(() => (
  <div className="flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-2 text-sm">
    <span className="text-muted-foreground text-sm">
      © {CURRENT_YEAR} Findoora Inc. All rights reserved.
    </span>
    <span className="text-muted-foreground text-sm hidden sm:block">{"|"}</span>
    <div className="flex flex-wrap items-center justify-center space-x-2">
      {LEGAL_LINKS.map(({ href, title }) => (
        <Link
          key={href}
          href={href}
          className="text-muted-foreground hover:text-foreground transition-colors underline hover:no-underline"
        >
          {title}
        </Link>
      ))}
    </div>
  </div>
));

LegalLinks.displayName = "LegalLinks";

// Main Footer Component
const SiteFooter = () => {
  return (
    <footer className="bg-card border-t px-4">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Section & Links Grid - Left-Right Layout */}
        <div className="py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 ">
            <NewsletterSection />
            <FooterLinksSection />
          </div>
        </div>
      </div>

      <Separator />

      {/* Bottom Section - Single Line Layout */}
      <div className="max-w-7xl mx-auto">
        <div className="py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Left: Logo */}
            <div className="flex items-center">
              <Logo size="sm" />
            </div>

            {/* Center: Legal Links */}
            <LegalLinks />

            {/* Right: Social Links */}
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
