import Filters from "@/screens/shop/widgets/Filters";
import VendorPage from "@/screens/vendor/widgets/VendorPage";
import MobileFilter from "@/screens/shop/widgets/MobileFilter";
import FilterToggler from "@/screens/vendor/components/FilterToggler";

const Vendor = () => {
  return (
    <section className="flex mt-12  px-2">
      <Filters />
      <VendorPage />
      <MobileFilter />
      <FilterToggler/>
    </section>
  );
};
export default Vendor;
