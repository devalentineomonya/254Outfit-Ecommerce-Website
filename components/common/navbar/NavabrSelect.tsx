import React, { useState } from "react";

interface NavabrSelectProps {
  options: string[];
  initialSelected?: string;
  onSelect?: (value: string) => void;
}

const NavabrSelect: React.FC<NavabrSelectProps> = ({
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
      className="relative inline-block cursor-pointer text-sm"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="px-3  bg-white  hover:text-blue-600">{selected}</div>
      {isOpen && (
        <ul className="absolute left-0 w-full mt-1 bg-white animate-drop shadow-md  hover:text-blue-600">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              className="pr-10 pl-1 py-1  hover:bg-gray-100 "
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavabrSelect;
