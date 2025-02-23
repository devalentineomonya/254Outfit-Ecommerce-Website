"use client";
import { BiChevronDown } from "react-icons/bi";
import { useRecentlyViewed } from "@/hooks/useRecentlyViewed";
import { RxReload } from "react-icons/rx";

const RecentlyViewedDropdown = () => {
  const { isVisible, show, hide } = useRecentlyViewed();

  return (
    <div className="flex items-center gap-x-2 relative ">
      <div className="p-1 grid place-content-center rounded-full w-11 aspect-square bg-white">
        <RxReload className="-rotate-90" size={20} />
      </div>
      <p
        className="flex items-center gap-x-1 cursor-pointer"
        onMouseEnter={show}
      >
        <span>Recently Viewed</span>
        <BiChevronDown />
      </p>

      {isVisible && (
        <div
          onMouseLeave={hide}
          className="absolute top-full right-0 mt-2 w-screen max-w-8xl bg-white rounded-md shadow-lg min-h-14 flex px-3 items-center animate-drop before:absolute before:w-0 before:h-0 before:border-l-8 before:border-r-8 before:border-b-8 before:border-l-transparent before:border-r-transparent before:border-b-white before:content-[''] before:-top-2 before:right-14"
        >
          <p>There are no recently viewed items.</p>
        </div>
      )}
    </div>
  );
};

export default RecentlyViewedDropdown;
