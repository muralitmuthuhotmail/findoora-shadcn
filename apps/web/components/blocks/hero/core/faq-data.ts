import { FAQItem } from "./faq-core";

// Default FAQ Data (can be overridden)

export const DEFAULT_FAQ_DATA: readonly FAQItem[] = [
  {
    id: "return-policy",
    question: "What is your return policy?",
    answer: "You can return unused items in their original packaging within 30 days for a refund or exchange. Contact support for assistance.",
  },
  {
    id: "order-tracking",
    question: "How do I track my order?",
    answer: "Track your order using the link provided in your confirmation email, or log into your account to view tracking details.",
  },
  {
    id: "international-shipping",
    question: "Do you ship internationally?",
    answer: "Yes, we ship worldwide. Shipping fees and delivery times vary by location, and customs duties may apply for some countries.",
  },
  {
    id: "payment-methods",
    question: "What payment methods do you accept?",
    answer: "We accept Visa, MasterCard, American Express, PayPal, Apple Pay, and Google Pay, ensuring secure payment options for all customers.",
  },
  {
    id: "damaged-items",
    question: "What if I receive a damaged item?",
    answer: "Please contact our support team within 48 hours of delivery with photos of the damaged item. We'll arrange a replacement or refund.",
  },
];
