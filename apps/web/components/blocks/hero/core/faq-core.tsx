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

// Default FAQ Data (can be overridden)
export const DEFAULT_FAQ_DATA: readonly FAQItem[] = [
  {
    id: "return-policy",
    question: "What is your return policy?",
    answer:
      "You can return unused items in their original packaging within 30 days for a refund or exchange. Contact support for assistance.",
  },
  {
    id: "order-tracking",
    question: "How do I track my order?",
    answer:
      "Track your order using the link provided in your confirmation email, or log into your account to view tracking details.",
  },
  {
    id: "international-shipping",
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship worldwide. Shipping fees and delivery times vary by location, and customs duties may apply for some countries.",
  },
  {
    id: "payment-methods",
    question: "What payment methods do you accept?",
    answer:
      "We accept Visa, MasterCard, American Express, PayPal, Apple Pay, and Google Pay, ensuring secure payment options for all customers.",
  },
  {
    id: "damaged-items",
    question: "What if I receive a damaged item?",
    answer:
      "Please contact our support team within 48 hours of delivery with photos of the damaged item. We'll arrange a replacement or refund.",
  },
];

export { FAQList };
