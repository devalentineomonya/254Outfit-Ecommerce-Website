"use client"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";

const faqItems = [
  {
    question: "How can I cancel my order?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "Why is my registration delayed?",
    answer: "Your registration might be delayed due to verification.",
  },
  {
    question: "What do I need to buy products?",
    answer: "You need to create an account and add a payment method.",
  },
  {
    question: "How can I track an order?",
    answer: "You can track your order from the dashboard under 'Orders'.",
  },
  {
    question: "How can I get money back?",
    answer: "Refunds are processed within 3-5 business days.",
  },
];

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(5, "Message must be at least 5 characters long"),
});

type FormData = z.infer<typeof formSchema>;

const Form = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="max-w-5xl mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold">People usually ask these</h2>
          <div className="mt-4 space-y-2">
            {faqItems.map((item, index) => (
              <div key={index} className="border rounded-md overflow-hidden">
                <button
                  className="w-full p-4 text-left font-semibold bg-gray-100 flex justify-between"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  {item.question}
                  <span>{openIndex === index ? "−" : "+"}</span>
                </button>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="p-4 bg-white"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold">Send Us a Message</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                {...register("name")}
                className="w-full p-3 border rounded-md"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="Your Email"
                {...register("email")}
                className="w-full p-3 border rounded-md"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div>
              <textarea
                placeholder="Your Message"
                {...register("message")}
                className="w-full p-3 border rounded-md"
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white p-3 rounded-md font-semibold"
            >
              SEND NOW
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
