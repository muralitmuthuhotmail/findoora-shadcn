import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@workspace/ui/components/accordion";


const faq = [
	{
		question: "What is your return policy?",
		answer:
			"You can return unused items in their original packaging within 30 days for a refund or exchange. Contact support for assistance.",
	},
	{
		question: "How do I track my order?",
		answer:
			"Track your order using the link provided in your confirmation email, or log into your account to view tracking details.",
	},
	{
		question: "Do you ship internationally?",
		answer:
			"Yes, we ship worldwide. Shipping fees and delivery times vary by location, and customs duties may apply for some countries.",
	},
	{
		question: "What payment methods do you accept?",
		answer:
			"We accept Visa, MasterCard, American Express, PayPal, Apple Pay, and Google Pay, ensuring secure payment options for all customers.",
	},
	{
		question: "What if I receive a damaged item?",
		answer:
			"Please contact our support team within 48 hours of delivery with photos of the damaged item. We’ll arrange a replacement or refund.",
	},
];

const FAQ02 = () => {
	return (
		<div className="min-h-screen flex items-center justify-center px-6 py-12 space-y-14">
      <div className="flex flex-col md:flex-row gap-x-12 gap-y-6 w-full">
				<h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tighter max-w-sm text-center md:text-left w-full mt-0 lg:mt-4">
					Frequently Asked Questions
				</h2>
			
			<div className="w-full mx-auto">
				<Accordion
					type="single"
					defaultValue="question-0"
					className="mx-auto"
				>
					{faq.map(({ question, answer }, index) => (
						<AccordionItem key={question} value={`question-${index}`}>
							<AccordionTrigger className="text-left text-lg">
								{question}
							</AccordionTrigger>
							<AccordionContent>{answer}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
      </div>
      </div>
	);
};

export default FAQ02;
