import React from "react";
const Loader = () => {
  return (
    <div className="flex-col gap-4 w-full h-full flex items-center justify-center">
      <div className=" w-full max-w-12 aspect-square border-4 border-transparent text-blue-700 text-4xl animate-spin flex items-center justify-center border-t-blue-700 rounded-full">
        <div className="w-full max-w-10 aspect-square border-4 border-transparent text-sky-700 text-2xl animate-spin flex items-center justify-center border-t-sky-600 rounded-full"></div>
      </div>
    </div>
  );
};

export default Loader;
