import { homePageMetadata } from "@/app/metadata";

export const metadata = homePageMetadata;

export default function Page() {
  return (
    <div className="nx-prose nx-prose-slate nx-max-w-none dark:nx-prose-invert">
      <h1>Welcome to Findoora Documentation</h1>
      
      <p className="nx-text-lg">
        This documentation will help you get started with using the Findoora application
        and make the most of its features.
      </p>

      <div className="nx-mt-8 nx-grid nx-grid-cols-1 md:nx-grid-cols-2 nx-gap-6">
        <div className="nx-rounded-lg nx-border nx-p-6">
          <h3>🚀 Getting Started</h3>
          <p>Learn the basics of using Findoora and set up your account.</p>
          <a href="/getting-started" className="nx-text-blue-600 hover:nx-text-blue-800">
            Get started →
          </a>
        </div>

        <div className="nx-rounded-lg nx-border nx-p-6">
          <h3>🔧 Features</h3>
          <p>Explore all the powerful features that Findoora has to offer.</p>
          <a href="/features" className="nx-text-blue-600 hover:nx-text-blue-800">
            View features →
          </a>
        </div>

        <div className="nx-rounded-lg nx-border nx-p-6">
          <h3>📚 API Reference</h3>
          <p>Detailed API documentation for developers and integrations.</p>
          <a href="/api" className="nx-text-blue-600 hover:nx-text-blue-800">
            API docs →
          </a>
        </div>

        <div className="nx-rounded-lg nx-border nx-p-6">
          <h3>❓ FAQ</h3>
          <p>Find answers to commonly asked questions about Findoora.</p>
          <a href="/faq" className="nx-text-blue-600 hover:nx-text-blue-800">
            View FAQ →
          </a>
        </div>
      </div>
    </div>
  );
}
