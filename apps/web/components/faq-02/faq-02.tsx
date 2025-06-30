import { memo } from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@workspace/ui/components/accordion";
import { cn } from "@workspace/ui/lib/utils";

interface FAQItem {
	id: string;
	question: string;
	answer: string;
}

const FAQ_DATA: readonly FAQItem[] = [
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

interface FAQ02Props {
	title?: string;
	className?: string;
}

const FAQ02 = memo<FAQ02Props>(({ 
	title = "Frequently Asked Questions",
	className = "" 
}) => {
	return (
		<section 
			className={cn(`min-h-screen flex items-center justify-center py-12 w-full`,className)}
			aria-labelledby="faq-title"
		>
			<div className="flex flex-col md:flex-row gap-x-12 gap-y-6 w-full">
				<header className="min-w-sm">
					<h2 
						id="faq-title"
						className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tighter max-w-sm text-center md:text-left w-full mt-0 lg:mt-4"
					>
						{title}
					</h2>
				</header>
				
				<div className="w-full">
					<Accordion
						type="single"
						defaultValue="return-policy"
						className="min-w-full"
					>
						{FAQ_DATA.map(({ id, question, answer }) => (
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
				</div>
			</div>
		</section>
	);
});

FAQ02.displayName = "FAQ02";

export default FAQ02;
