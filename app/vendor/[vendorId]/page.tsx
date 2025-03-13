import Filters from "@/screens/shop/widgets/Filters";
import VendorPage from "@/screens/vendor/widgets/VendorPage";
import MobileFilter from "@/screens/shop/widgets/MobileFilter";

const Vendor = () => {
  return (
    <section className="flex mt-12  px-2">
      <Filters />
      <VendorPage />
      <MobileFilter />
    </section>
  );
};
export default Vendor;
