import Image from "next/image"; import { BiLocationPlus, BiLogoFacebook } from "react-icons/bi";
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
    <div className="w-full xl:aspect-[20/9] rounded-md overflow-hidden grid grid-cols-12 relative border border-gray-300">
      <div className="relative flex xl:hidden w-full h-96 col-span-12">
        <Image
          fill
          priority
          className="object-cover absolute w-full h-full "
          src="/store-banner.png"
          alt="Store Banner"
      />
      </div>
      <div className=" col-span-12 xl:col-span-4 xl:bg-black/80  xl:text-white h-full relative z-10 p-10 pb-4 xl:pb-10 flex items-center justify-center flex-col">
        <div className="w-20 xl:w-16 aspect-square rounded-full overflow-hidden xl:static absolute -top-10">
          <Image
            src="/avatar.png"
            alt="Vendor Profile"
            width={100}
            height={100}
          />
        </div>
        <h2 className="text-lg font-semibold my-4 ">Vendor 1</h2>
        <ul className="text-gray-600 xl:text-gray-200 space-y-2 xl:space-y-5  flex flex-col items-center xl:block">
          {vendorInfo.map((item, index) => (
            <li key={index} className="flex items-center gap-x-2 xl:text-start text-center">
              <span className="hidden xl:inline-block">{item.icon}</span>
              <span className="text-sm">{item.text}</span>
            </li>
          ))}
        </ul>

        <ul className="flex items-center gap-x-4 mt-6 xl:mt-12           ">
          {socialIcons.map((social) => (
            <li
              key={social.name}
              className="hover:text-primary transition-colors"
            >
              <button className="text-xl rounded-full  p-2 border border-gray-400 xl:border-white">
                {social.icon}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <Image
        fill
        priority
        src="/store-banner.png"
        className="object-cover absolute w-full h-full hidden xl:inline-block "
        alt="Store Banner"
      />
    </div>
  );
};
export default VendorHero;
