"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CgChevronDown } from "react-icons/cg";

interface AccordionProps {
  question: string;
  answer: string;
}

const FaqAccordion = ({ question, answer }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-3 rounded-sm text-left bg-gray-200"
      >
        <span className="text-base font-medium text-gray-900">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="ml-4 h-5 w-5 shrink-0"
        >
          <CgChevronDown />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="bg-white p-4 border border-gray-200">
              <p className="text-gray-500">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FaqAccordion;
