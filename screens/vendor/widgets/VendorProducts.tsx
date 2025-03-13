"use client";
import ProductCard from "@/components/common/card/ProductCard";

import { useLayout } from "@/hooks/useLayout";
import { motion, AnimatePresence } from "framer-motion";

const VendorProducts = () => {
  const { layout } = useLayout();

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="w-full flex-1 mt-4">
      <motion.div
        key={layout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className={`grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4`}
      >
        <AnimatePresence>
          {[...Array(20)].map((_, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <ProductCard />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default VendorProducts;
