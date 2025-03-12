import VendorCard from "../components/VendorCard";

    const VendorsList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 ">
      <VendorCard />
      <VendorCard />
      <VendorCard />
    </div>
  );
};

export default VendorsList;
