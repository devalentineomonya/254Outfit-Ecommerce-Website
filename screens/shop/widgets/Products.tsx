import ProductCard from "@/components/common/card/ProductCard";
import SortingControls from "../components/SortingControls";
import PaginationControls from "../components/PaginationControls";
import LayoutControls from "../components/LayoutControls";
import ProductCardList from "@/components/common/card/ProductCardList";

const Products = () => {
  return (
    <div className="w-full flex-1">
      <div className="flex items-center justify-between mb-4">
        <SortingControls />
        <div className="flex items-center gap-x-2">
          <PaginationControls />
          <LayoutControls />
        </div>
      </div>

      <div className="grid gap-2" >{/*  gap-2"*/}
        {[...Array(20)].map((_, index) => (
        //   <ProductCard key={index} />
        <ProductCardList key={index}/>
        ))}
      </div>
    </div>
  );
};

export default Products;
