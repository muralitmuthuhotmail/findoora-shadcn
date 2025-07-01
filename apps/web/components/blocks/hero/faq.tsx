import { memo } from "react";
import { cn } from "@workspace/ui/lib/utils";
import {
  SectionLayout,
  SectionHeader,
  SectionTwoColumn,
} from "@/components/layout";
import {
  FAQList,
  DEFAULT_FAQ_DATA,
  type FAQItem,
} from "@/components/blocks/hero/core";

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
        className={cn(className)}
        id="faq"
      >
        <SectionTwoColumn
          sidebar={
            <SectionHeader
              title={title}
              align="left"
              titleClassName="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tighter max-w-sm text-center md:text-left w-full mt-0 lg:mt-4 text-wrap"
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
