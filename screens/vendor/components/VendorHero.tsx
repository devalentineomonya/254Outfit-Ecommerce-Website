import Image from "next/image";
import { BiLocationPlus, BiLogoFacebook } from "react-icons/bi";
import { BsHandbag, BsPhone, BsStarFill } from "react-icons/bs";
import { LiaGoogle } from "react-icons/lia";
import {
  PiXLogo,
  PiYoutubeLogoThin,
  PiInstagramLogoLight,
} from "react-icons/pi";
import { FaPinterestP } from "react-icons/fa";

const VendorHero = () => {
  const vendorInfo = [
    {
      icon: <BiLocationPlus size={24} />,
      text: "Steven Street, El Carjon California, United States (US)",
    },
    {
      icon: <BsPhone />,
      text: "+254786133220",
    },
    {
      icon: <BsStarFill />,
      text: "3.26 rating from 23 reviews",
    },
    {
      icon: <BsHandbag />,
      text: "Shop Closed",
    },
  ];
  const socialIcons = [
    { icon: <BiLogoFacebook size={16} />, name: "facebook" },
    { icon: <LiaGoogle size={16} />, name: "google" },
    { icon: <PiXLogo size={16} />, name: "twitter" },
    { icon: <PiYoutubeLogoThin size={16} />, name: "youtube" },
    { icon: <PiInstagramLogoLight size={16} />, name: "instagram" },
    { icon: <FaPinterestP size={16} />, name: "pinterest" },
  ];
  return (
    <div className="w-full aspect-[20/9] rounded-md overflow-hidden grid grid-cols-12 relative">
      <div className=" col-span-12 lg:col-span-4 bg-black/80 text-white h-full relative z-10 e"></div>p-10">
        <div className="w-16 aspect-square rounded-full overflow-hidden">
          <Image
            src="/avatar.png"
            alt="Vendor Profile"
            width={100}
            height={100}
          />
        </div>
        <h2 className="text-lg font-semibold my-4 ">Vendor 1</h2>
        <ul className="text-gray-200 space-y-5">
          {vendorInfo.map((item, index) => (
            <li key={index} className="flex items-center gap-x-2">
              {item.icon}
              <span className="text-sm">{item.text}</span>
            </li>
          ))}
        </ul>

        <ul className="flex items-center gap-x-4 mt-12           ">
          {socialIcons.map((social) => (
            <li
              key={social.name}
              className="hover:text-primary transition-colors"
            >
              <button className="text-xl rounded-full  p-2 border border-white">
                {social.icon}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <Image
        fill
        priority
        className="object-cover absolute w-full h-full"
        src="/store-banner.png"
        alt="Store Banner"
      />
    </div>
  );
};

export default VendorHero;
