"use client"
import ProductCard from "@/components/common/card/ProductCard";
import SortingControls from "../components/SortingControls";
import PaginationControls from "../components/PaginationControls";
import LayoutControls from "../components/LayoutControls";
import ProductCardList from "@/components/common/card/ProductCardList";
import { useLayout } from "@/hooks/useLayout";
import { motion, AnimatePresence } from "framer-motion";
import { useShopFilter } from "@/hooks/useFilter";

const Products = () => {
  const { layout } = useLayout();
  const {
    toggleMobileFilter,
  } = useShopFilter();
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <div className="w-full flex-1">
      <div className="flex items-center justify-between mb-4">
<button  onClick={toggleMobileFilter}>open</button>
        <SortingControls />
        <div className="flex items-center gap-x-2">
          <PaginationControls />
          <LayoutControls />
        </div>
      </div>

      <motion.div
        key={layout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className={`grid gap-4 ${
          layout === "grid"
            ? "grid-cols-2 lg:grid-cols-4"
            : " grid-cols-2 xs:grid-cols-1"
        }`}
      >
        <AnimatePresence mode="wait">
          {[...Array(20)].map((_, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              {layout === "grid" ? (
                <ProductCard />
              ) : (
                <ProductCardList />
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Products;
