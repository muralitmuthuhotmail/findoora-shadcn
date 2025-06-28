import React from "react";
import { Logo } from "./logo";
import { Heart, Star, Zap, Shield, Rocket, Sparkles } from "lucide-react";

/**
 * Comprehensive examples showing all Logo component features
 * This file demonstrates the flexibility and customization options
 * available in the optimized Logo component.
 */
export const LogoExamples: React.FC = () => {
  const handleLogoClick = () => {
    console.log("Logo clicked!");
  };

  return (
    <div className="space-y-12 p-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Size Variants</h2>
        <div className="flex flex-wrap items-center gap-6">
          <Logo size="xs" text="XS Logo" />
          <Logo size="sm" text="SM Logo" />
          <Logo size="md" text="MD Logo" />
          <Logo size="lg" text="LG Logo" />
          <Logo size="xl" text="XL Logo" />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Icon Variants</h2>
        <div className="flex flex-wrap items-center gap-6">
          <Logo iconVariant="default" text="Default" />
          <Logo iconVariant="secondary" text="Secondary" />
          <Logo iconVariant="outline" text="Outline" />
          <Logo iconVariant="ghost" text="Ghost" />
          <Logo iconVariant="gradient" text="Gradient" />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Icon Shapes</h2>
        <div className="flex flex-wrap items-center gap-6">
          <Logo iconShape="square" text="Square" />
          <Logo iconShape="rounded" text="Rounded" />
          <Logo iconShape="circle" text="Circle" />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Custom Icons</h2>
        <div className="flex flex-wrap items-center gap-6">
          <Logo icon={Heart} text="Heart Icon" iconVariant="gradient" />
          <Logo icon={Star} text="Star Icon" iconVariant="outline" />
          <Logo icon={Zap} text="Zap Icon" iconVariant="secondary" />
          <Logo icon={Shield} text="Shield Icon" iconVariant="default" />
          <Logo icon={Rocket} text="Rocket Icon" iconVariant="gradient" />
          <Logo icon={Sparkles} text="Sparkles" iconVariant="ghost" />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Orientations</h2>
        <div className="flex flex-wrap items-start gap-8">
          <Logo orientation="horizontal" text="Horizontal" size="md" />
          <Logo orientation="vertical" text="Vertical" size="md" />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Text Weights</h2>
        <div className="flex flex-wrap items-center gap-6">
          <Logo textWeight="normal" text="Normal Weight" />
          <Logo textWeight="medium" text="Medium Weight" />
          <Logo textWeight="semibold" text="Semibold Weight" />
          <Logo textWeight="bold" text="Bold Weight" />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Interactive States</h2>
        <div className="flex flex-wrap items-center gap-6">
          <Logo text="Static Logo" />
          <Logo text="Interactive Logo" interactive onClick={handleLogoClick} />
          <Logo
            text="Link Logo"
            asLink
            href="https://example.com"
            target="_blank"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Icon Only</h2>
        <div className="flex flex-wrap items-center gap-6">
          <Logo hideText size="xs" aria-label="XS Icon Only" />
          <Logo hideText size="sm" aria-label="SM Icon Only" />
          <Logo hideText size="md" aria-label="MD Icon Only" />
          <Logo hideText size="lg" aria-label="LG Icon Only" />
          <Logo hideText size="xl" aria-label="XL Icon Only" />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Custom Styling</h2>
        <div className="flex flex-wrap items-center gap-6">
          <Logo
            text="Custom Colors"
            className="text-blue-600"
            iconClassName="bg-blue-100 text-blue-600 border border-blue-200"
            textClassName="font-bold"
          />
          <Logo
            text="Custom Size"
            customIconSize="3rem"
            textClassName="text-purple-600 font-extrabold text-xl"
            iconClassName="bg-purple-100 text-purple-600"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Real-world Examples</h2>
        <div className="space-y-6">
          {/* Header Logo */}
          <div className="border rounded-lg p-4">
            <h3 className="text-sm font-medium text-gray-500 mb-2">
              Header Logo
            </h3>
            <Logo
              text="Findoora"
              size="md"
              asLink
              href="/"
              iconVariant="gradient"
              textWeight="semibold"
            />
          </div>

          {/* Sidebar Logo */}
          <div className="border rounded-lg p-4 bg-gray-50">
            <h3 className="text-sm font-medium text-gray-500 mb-2">
              Sidebar Logo (Collapsed)
            </h3>
            <Logo
              hideText
              size="sm"
              iconShape="rounded"
              aria-label="Findoora Dashboard"
              interactive
              onClick={handleLogoClick}
            />
          </div>

          {/* Loading/Brand Logo */}
          <div className="border rounded-lg p-4 text-center">
            <h3 className="text-sm font-medium text-gray-500 mb-4">
              Brand/Loading Logo
            </h3>
            <Logo
              text="Findoora Inc."
              size="xl"
              orientation="vertical"
              iconVariant="gradient"
              iconShape="circle"
              textWeight="bold"
            />
          </div>

          {/* Footer Logo */}
          <div className="border rounded-lg p-4 bg-gray-900 text-white">
            <h3 className="text-sm font-medium text-gray-400 mb-2">
              Footer Logo
            </h3>
            <Logo
              text="Findoora"
              size="sm"
              iconVariant="ghost"
              textClassName="text-gray-300"
              iconClassName="text-gray-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoExamples;
