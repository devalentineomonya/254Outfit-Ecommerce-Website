"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

const AccordionItem = ({ title, children }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div className="border-b border-gray-200">
      <motion.button
        className="flex w-full items-center justify-between py-4 text-left hover:bg-gray-50"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ backgroundColor: '#f9fafb' }}
      >
        <span className="text-lg font-semibold">{title}</span>
        <motion.span
          className="ml-4"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <FiMinus className="h-6 w-6 text-gray-600" />
          ) : (
            <FiPlus className="h-6 w-6 text-gray-600" />
          )}
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: 'auto',
              transition: { duration: 0.3 }
            }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-4 text-gray-600">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

interface AccordionProps {
  items: Array<{
    title: string;
    content: string;
  }>;
}

export const Accordion = ({ items }: AccordionProps) => {
  return (
    <motion.div className="border-y border-gray-200">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title}>
          {item.content}
        </AccordionItem>
      ))}
    </motion.div>
  );
};
