import Image from "next/image";
import React from "react";
import notFoundImage from "@/public/404.png";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
const NotFound = () => {
  return (
    <div className="min-h-[calc(100vh-2rem)] bg-gray-50 grid place-content-center">
      <div>
        <Image src={notFoundImage} alt="Page Not Found" priority />
      </div>
      <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-center mt-8">
        <span className="text-amber-500">Oops!!!</span> Something Went Wrong
        Here
      </h1>
      <p className="text-center text-sm text-gray-500 font-light my-5">
        There may be a misspelling in the URL entered, or the page you are
        looking for may no longer exi
      </p>
      <Link
        href="/"
        className="transition-all ease-in-out duration-300 bg-gray-900 hover:bg-gray-800 flex gap-x-3 items-center justify-center py-2 text-white px-4 "
      >
        <span>Go Back Home</span>
        <BsArrowRight />
      </Link>

      </div>
    </div>
  );
};

export default NotFound;
