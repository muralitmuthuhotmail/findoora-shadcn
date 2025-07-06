import { memo } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@workspace/ui/components/accordion";

// Types
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQListProps {
  items: FAQItem[];
  defaultValue?: string;
  className?: string;
  type?: "single" | "multiple";
}

// Core FAQ List Component
const FAQList = memo<FAQListProps>(
  ({ items, defaultValue, className = "", type = "single" }) => {
    if (type === "single") {
      return (
        <Accordion
          type="single"
          defaultValue={defaultValue || items[0]?.id}
          className={`min-w-full ${className}`}
        >
          {items.map(({ id, question, answer }) => (
            <AccordionItem key={id} value={id}>
              <AccordionTrigger className="text-left text-lg font-medium">
                {question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-left">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      );
    }

    return (
      <Accordion type="multiple" className={`min-w-full ${className}`}>
        {items.map(({ id, question, answer }) => (
          <AccordionItem key={id} value={id}>
            <AccordionTrigger className="text-left text-lg font-medium">
              {question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  },
);

FAQList.displayName = "FAQList";
export { FAQList };
