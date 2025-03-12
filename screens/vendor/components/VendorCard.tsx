import Image from "next/image";
import Link from "next/link";
import { BiPhoneCall } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

const VendorCard = () => {
  return (
    <div className="w-full aspect-video border rounded-lg shadow-md bg-white group/vendor-card cursor-pointer  ">
      <figure className="relative w-full h-4/5">
        <Image
          priority
          src="/default-store.png"
          alt="Vendor"
          fill
          className="object-cover rounded-lg"
        />
        <div className="relative z-10  p-6">
          <Link
            href="/vendor/name"
            className="text-lg font-semibold hover:text-blue-600 transition-color ease-in-out duration-300 "
          >
            Vendor 1
          </Link>
          <p className="mt-2 font-medium flex items-center gap-x-1">
            <BiPhoneCall />
            <span>0768133220</span>
          </p>
        </div>
      </figure>
      <div className="border-t border-gray-200 py-6 relative">
        <Link
          href="/vendor/1"
          className={`group/link relative font-semibold flex items-center gap-2 px-4 `}
        >
          <span>VISIT STORE</span>
          <BsArrowRight
            className="group-hover/link:translate-x-2 transition-all duration-300"
            size={20}
          />
        </Link>
        <div className="flex items-center gap-2 w-20 aspect-square rounded-full bg-[#ff9742] absolute right-10 -top-10">
          <Image
            width={100}
            height={100}
            className="object-cover w-full h-full group-hover/vendor-card:-translate-y-2 duration-300 transition-all ease-in-out rounded-full "
            src="/avatar.png"
            alt="Vendor Image"
          />
        </div>
      </div>
    </div>
  );
};

export default VendorCard;
