"use client";
import NavbarSelect from "./NavbarSelect";

const NavbarSelector = () => {
  const handleLanguageSelect = (value: string) => {
    console.log("Selected language:", value);
  };

  const handleCurrencySelect = (value: string) => {
    console.log("Selected currency:", value);
  };

  return (
    <div className="hidden sm:flex relative px-3">
      <NavbarSelect
        options={["ENG", "FRA"]}
        initialSelected="ENG"
        onSelect={handleLanguageSelect}
      />
      <NavbarSelect
        options={["KES", "USD"]}
        initialSelected="KES"
        onSelect={handleCurrencySelect}
      />
    </div>
  );
};

export default NavbarSelector;
