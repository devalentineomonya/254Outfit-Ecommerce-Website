"use client";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { FaList } from "react-icons/fa6";
import { useLayout } from "@/hooks/useLayout";

const LayoutControls = () => {
  const { layout, setGridLayout, setListLayout } = useLayout();

  return (
    <div className="hidden xs:flex items-center gap-x-1 ">
      <button
        onClick={setGridLayout}
        className={`p-2 rounded-md transition-colors ${
          layout === "grid"
            ? "text-blue-600 bg-blue-50"
            : "text-gray-400 hover:bg-gray-100"
        }`}
      >
        <TfiLayoutGrid3Alt
          size={22}
          className={` ${
            layout === "grid" ? "text-blue-600" : "text-gray-400"
          }`}
        />
      </button>
      <button
        onClick={setListLayout}
        className={`p-2 rounded-md transition-colors ${
          layout === "list"
            ? "text-blue-600 bg-blue-50"
            : "text-gray-400 hover:bg-gray-100"
        }`}
      >
        <FaList
          size={25}
          className={`transition-colors ${
            layout === "list" ? "text-blue-600" : "text-gray-400"
          }`}
        />
      </button>
    </div>
  );
};

export default LayoutControls;
