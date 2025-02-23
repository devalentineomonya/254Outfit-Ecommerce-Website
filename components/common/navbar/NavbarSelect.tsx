"use client"
import React, { useState } from "react";
interface NavbarSelectProps {
  options: string[];
  initialSelected?: string;
  onSelect?: (value: string) => void;
}

const NavbarSelect: React.FC<NavbarSelectProps> = ({
  options,
  initialSelected,
  onSelect,
}) => {
  const [selected, setSelected] = useState(initialSelected || options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value: string) => {
    setSelected(value);
    setIsOpen(false);
    if (onSelect) {
      onSelect(value);
    }
  };

  return (
    <div
      className="relative inline-block cursor-pointer text-sm  py-7"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="px-3  bg-white  hover:text-blue-700">{selected}</div>
      {isOpen && (
        <ul className="absolute left-0 w-full mt-1 bg-white animate-drop shadow-md ">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              className="pr-10 pl-1 py-1  hover:bg-gray-100  hover:text-blue-700 "
            >
             <span>{option}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavbarSelect;
