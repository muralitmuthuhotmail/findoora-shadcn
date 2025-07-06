import { memo } from "react";
import { cn } from "@workspace/ui/lib/utils";
import {
  SectionLayout,
  SectionHeader,
  SectionTwoColumn,
} from "@/components/layout";
import {
  FAQList,
  type FAQItem,
} from "@/components/blocks/hero/core";
import { DEFAULT_FAQ_DATA } from "./core/faq-data";

interface FAQProps {
  title?: string;
  data?: readonly FAQItem[];
  className?: string;
}

const FAQ = memo<FAQProps>(
  ({
    title = "Frequently Asked Questions",
    data = DEFAULT_FAQ_DATA,
    className = "",
  }) => {
    return (
      <SectionLayout
        variant="fullscreen"
        spacing="normal"
        align="center"
        className={cn("w-full", className)}
        id="faq"
      >
        <SectionTwoColumn
          sidebar={
            <SectionHeader
              title={title}
              className="text-center md:text-left mt-0 md:mt-4"
            />
          }
          sidebarPosition="left"
          gap="md"
        >
          <FAQList items={[...data]} />
        </SectionTwoColumn>
      </SectionLayout>
    );
  },
);

FAQ.displayName = "FAQ";

export default FAQ;
