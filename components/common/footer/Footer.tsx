import React from "react";
import footerLinksData from "./footerLinksData";
import FooterLinks from "./FooterLinks";
import Logo from "../logo/Logo";
import Image from "next/image";
import Link from "next/link";
import AppleStore from "@/public/apple.png";
import GooglePlay from "@/public/playstore.png";
import payment from "@/public/payment.png";
import { BiChevronRight } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-start mt-12">
      <div className="max-w-8xl w-full px-6">
        <div className="py-12 border-b border-b-gray-300">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-6 xl:grid-cols-5">
            {footerLinksData.map((footerLink) => (
              <FooterLinks
                title={footerLink.title}
                links={footerLink.links}
                key={footerLink.title}
              />
            ))}
          </div>
        </div>

        <div className="py-12 border-b border-b-gray-300">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-7 w-full">
            <div>
              <Logo  />
              <p className="font-light text-sm text-gray-500 my-4 leading-relaxed">
                Esse pariatur magna in reprehenderit tempor id magna pariatur
                amet adipisicing cillum cupidatat adipisicing velit. Magna culpa
                magna do incididunt veniam.
              </p>
              <div className="flex gap-x-3">
                <Image src={AppleStore} alt="Download on the App Store" />
                <Image src={GooglePlay} alt="Get it on Google Play" />
              </div>
            </div>

            <div>
              <h2 className="font-semibold text-gray-900 text-lg leading-loose">
                Service Center
              </h2>
              <p className="font-light text-sm text-gray-500 mt-6 leading-loose">
                02 Birch Coppice Business Park, Morson, Tamworth, B78 1SE
              </p>
              <p className="font-light text-sm text-gray-500 my-3">
                <Link className="hover:underline" href="tel:+254712345678">
                  Tel: +254 712 345 678
                </Link>
                <br />
                <Link className="hover:underline" href="mailto:254outfits@gmail.com">
                  E-mail: 254outfits@gmail.com
                </Link>
              </p>
              <div className="group">
                <Link
                  href="#"
                  className="text-xs font-extralight transition-all ease-in-out duration-300 flex items-center"
                >
                  View map
                  <span className="ml-0 transition-all group-hover:ml-2">
                    &gt;
                  </span>
                </Link>
              </div>
            </div>

            <div>
              <h2 className="font-semibold text-gray-900 text-lg leading-loose">
                Shipping Center
              </h2>
              <p className="font-light text-sm text-gray-500 my-3">
                <Link className="hover:underline" href="tel:+254712345678">
                  Tel: +254 712 345 678
                </Link>
                /
                <Link className="hover:underline" href="tel:+254712345678">
                  Hotline: +254 712 345 678
                </Link>
                <br />
                <Link className="hover:underline mt-3" href="mailto:254outfits@gmail.com">
                  E-mail: 254outfits@gmail.com
                </Link>
              </p>
              <div className="group">
                <Link
                  href="#"
                  className="text-xs font-extralight transition-all ease-in-out duration-300 flex items-center"
                >
                  View map
                  <span className="ml-0 transition-all group-hover:ml-2">
                    <BiChevronRight />
                  </span>
                </Link>
              </div>
            </div>

            <div>
              <h2 className="font-semibold text-gray-900 text-lg leading-loose">
                Newsletter
              </h2>
              <p className="font-light text-sm text-gray-500 my-2">
                Be the First to Know. Sign up to newsletter today.
              </p>
              <form className="mt-2">
                <div className="w-full flex items-center justify-between py-1 px-3 rounded-full border border-gray-300">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                    className="bg-transparent text-sm w-full outline-none placeholder-gray-400"
                  />
                  <button className="h-8 rounded-full aspect-square bg-blue-600 grid place-content-center text-white">
                    <BiChevronRight />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="py-3 flex items-center justify-between font-light text-xs text-gray-500">
          <p>
            Copyright © {new Date().getFullYear()}{" "}
            <Link
              href="https://devalentineomonya.vercel.app"
              target="_blank"
              className="hover:underline"
            >
              Devalentine
            </Link>
            . All Rights Reserved.
          </p>
          <Image src={payment} alt="Accepted payment methods" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
