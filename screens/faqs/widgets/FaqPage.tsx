import FaqAccordion from "../components/FaqAccordion";

const faqData = [
  {
    section: "Shipping Information",
    items: [
      {
        question: "What Shipping Methods are Available?",
        answer: "We offer standard and expedited shipping options...",
      },
      {
        question: "Do You Ship Internationally?",
        answer: "Yes, we ship to most countries worldwide...",
      },
      {
        question: "How Long Will it Take to Get My Package?",
        answer: "Standard shipping typically takes 3-5 business days...",
      },
    ],
  },
  {
    section: "Payment",
    items: [
      {
        question: "What Payment Methods are Accepted?",
        answer: "We accept all major credit cards and PayPal...",
      },
      {
        question: "Is Buying On-Line Safe?",
        answer:
          "Our website uses SSL encryption to ensure secure transactions...",
      },
    ],
  },
  {
    section: "Orders & Returns",
    items: [
      {
        question: "How do I Place an Order?",
        answer: "Select your items and proceed to checkout...",
      },
      {
        question: "How Can I Change My Order?",
        answer:
          "Contact our support team immediately for order modifications...",
      },
      {
        question: "Do I Need an Account to Place an Order?",
        answer: "No, you can checkout as a guest...",
      },
      {
        question: "How do I Track Order?",
        answer: "Tracking information will be emailed to you...",
      },
      {
        question: "How Can I Return a Product?",
        answer: "Initiate returns through your account dashboard...",
      },
      {
        question: "How Can I Return a Product?",
        answer: "Initiate returns through your account dashboard...",
      },
    ],
  },
];

const FaqPage = () => {
  return (
    <div className="px-4 py-12">
      <div className="flex flex-col items-center justify-center py-5">
        <h1 className=" mb-2 text-3xl font-bold text-gray-900">
          Frequent Asked Questions
        </h1>
        <p>You can show the faqs with Wolmart Elements easily.</p>
      </div>
      {faqData.map((section) => (
        <div key={section.section} className="mb-12">
          <h2 className="my-6 text-2xl font-semibold text-gray-900 text-center">
            {section.section}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {section.items.map((item, index) => (
              <FaqAccordion
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqPage;
