import React from "react";
import VendorsList from "@/screens/vendor/widgets/VendorsList";
import VendorHeader from "@/screens/vendor/widgets/VendorHeader";

const Vendor = () => {
  return (
    <div className="mt-12">
      <VendorHeader />
      <VendorsList />
    </div>
  );
};

export default Vendor;
