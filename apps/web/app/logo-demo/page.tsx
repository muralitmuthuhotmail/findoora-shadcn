"use client";
import React from "react";
import { Logo } from "@/components/logo";
import { Heart, Star, Zap, Shield } from "lucide-react";

export default function LogoDemoPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Optimized Logo Component Demo
          </h1>
          <p className="text-xl text-gray-600">
            A professional, customizable, and reusable logo component
          </p>
        </div>

        <div className="grid gap-12">
          {/* Size Variants */}
          <section className="bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Size Variants</h2>
            <div className="flex flex-wrap items-center gap-8">
              <Logo size="xs" text="XS" />
              <Logo size="sm" text="Small" />
              <Logo size="md" text="Medium" />
              <Logo size="lg" text="Large" />
              <Logo size="xl" text="Extra Large" />
            </div>
          </section>

          {/* Icon Variants */}
          <section className="bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Icon Variants</h2>
            <div className="flex flex-wrap items-center gap-8">
              <Logo iconVariant="default" text="Default" />
              <Logo iconVariant="secondary" text="Secondary" />
              <Logo iconVariant="outline" text="Outline" />
              <Logo iconVariant="ghost" text="Ghost" />
              <Logo iconVariant="gradient" text="Gradient" />
            </div>
          </section>

          {/* Custom Icons */}
          <section className="bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Custom Icons</h2>
            <div className="flex flex-wrap items-center gap-8">
              <Logo icon={Heart} text="Heart Brand" iconVariant="gradient" />
              <Logo icon={Star} text="Star Co." iconVariant="outline" />
              <Logo icon={Zap} text="Zap Inc." iconVariant="secondary" />
              <Logo icon={Shield} text="Shield Corp" iconVariant="default" />
            </div>
          </section>

          {/* Interactive Examples */}
          <section className="bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Interactive Examples</h2>
            <div className="flex flex-wrap items-center gap-8">
              <Logo
                text="Clickable Logo"
                interactive
                onClick={() => alert("Logo clicked!")}
              />
              <Logo
                text="Link Logo"
                asLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Link logo clicked!");
                }}
              />
              <Logo
                hideText
                size="md"
                interactive
                aria-label="Icon-only interactive logo"
                onClick={() => alert("Icon clicked!")}
              />
            </div>
          </section>

          {/* Real-world Examples */}
          <section className="bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Real-world Use Cases</h2>

            {/* Header Style */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">
                Header Logo
              </h3>
              <div className="border border-gray-200 rounded-lg p-4">
                <Logo
                  text="Findoora"
                  size="md"
                  asLink
                  href="/"
                  iconVariant="gradient"
                  textWeight="semibold"
                />
              </div>
            </div>

            {/* Sidebar Style */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">
                Sidebar (Collapsed)
              </h3>
              <div className="bg-gray-100 border border-gray-200 rounded-lg p-4 inline-block">
                <Logo
                  hideText
                  size="sm"
                  iconShape="rounded"
                  aria-label="Findoora Dashboard"
                  interactive
                />
              </div>
            </div>

            {/* Brand/Loading Style */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">
                Brand/Loading Screen
              </h3>
              <div className="border border-gray-200 rounded-lg p-8 text-center bg-gray-50">
                <Logo
                  text="Findoora Inc."
                  size="xl"
                  orientation="vertical"
                  iconVariant="gradient"
                  iconShape="circle"
                  textWeight="bold"
                />
              </div>
            </div>

            {/* Footer Style */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3">
                Footer Logo
              </h3>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                <Logo
                  text="Findoora"
                  size="sm"
                  iconVariant="ghost"
                  textClassName="text-gray-300"
                  iconClassName="text-gray-300"
                />
              </div>
            </div>
          </section>
        </div>

        {/* Features List */}
        <section className="mt-12 bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6">✨ Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              <span>Highly customizable with multiple variants</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              <span>Full TypeScript support</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              <span>Accessibility built-in (ARIA, keyboard navigation)</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              <span>Responsive design</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              <span>Performance optimized</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              <span>Flexible rendering (div, link, button)</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              <span>Custom icon support</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              <span>Theme-aware styling</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
