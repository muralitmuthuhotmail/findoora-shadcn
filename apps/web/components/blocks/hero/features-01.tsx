"use client";

import { Button } from "@workspace/ui/components/button";
import { ArrowRight, Blocks, Settings2 } from "lucide-react";
import {
  SectionLayout,
  SectionHeader,
  SectionContent,
} from "@/components/layout";

const Features01 = () => {
  return (
    <SectionLayout variant="fullscreen" spacing="normal" align="center">
      <SectionContent maxWidth="full" className="space-y-14">
        <SectionHeader
          title="Design and Engage"
          subtitle="Build Smarter Spaces and Strategies"
        />

        <div className="grid sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-card rounded-xl pt-6 md:pt-8 pb-6 px-6 col-span-1 md:col-span-2 lg:col-span-1 border-1">
            {/* Media 1 Mobile */}
            <div className="md:hidden mb-6 aspect-video w-full bg-card rounded-xl"></div>

            <h3 className="text-2xl font-semibold tracking-tight">
              Plan Smarter
            </h3>

            <ul className="mt-6 space-y-4">
              <li>
                <div className="flex items-start gap-3">
                  <Settings2 className="shrink-0" />
                  <p className="-mt-0.5 text-left">
                    Design your space with drag-and-drop simplicity—create
                    grids, lists, or galleries in seconds.
                  </p>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <Blocks className="shrink-0" />
                  <p className="-mt-0.5 text-left">
                    Embed polls, quizzes, or forms to keep your audience
                    engaged.
                  </p>
                </div>
              </li>
            </ul>

            <Button className="mt-12 w-full text-md" size={"lg"}>
              Build your strategy <ArrowRight />
            </Button>
          </div>

          {/* Media 1 Desktop */}
          <div className="hidden md:block border border-border/80 bg-card rounded-xl col-span-1 md:col-span-3 lg:col-span-2"></div>

          {/* Media 2 Desktop */}
          <div className="hidden md:block border border-border/80 bg-card rounded-xl col-span-1 md:col-span-3 lg:col-span-2"></div>

          {/* Card 2 */}
          <div className="bg-card rounded-xl pt-6 md:pt-8 pb-6 px-6 col-span-1 md:col-span-2 lg:col-span-1 border-1">
            {/* Media 2 Mobile */}
            <div className="md:hidden mb-6 aspect-video w-full bg-card rounded-xl"></div>

            <h3 className="text-2xl font-semibold tracking-tight">
              Engage Better
            </h3>

            <ul className="mt-6 space-y-4">
              <li>
                <div className="flex items-start gap-3">
                  <Settings2 className="shrink-0" />
                  <p className="-mt-0.5 text-left">
                    Design your space with drag-and-drop simplicity—create
                    grids, lists, or galleries in seconds.
                  </p>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <Blocks className="shrink-0" />
                  <p className="-mt-0.5 text-left">
                    Embed polls, quizzes, or forms to keep your audience
                    engaged.
                  </p>
                </div>
              </li>
            </ul>

            <Button className="mt-12 w-full text-md" size={"lg"}>
              Build your strategy <ArrowRight />
            </Button>
          </div>
        </div>
      </SectionContent>
    </SectionLayout>
  );
};

export default Features01;
