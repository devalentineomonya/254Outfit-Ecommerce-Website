import Image from "next/image";
import React from "react";
import Link from"next/link"

import articleimage from "@/public/products/image3.png";
import { GoChevronRight } from "react-icons/go";
const ArticleCard = () => {
  return (
    <article className="p-3 bg-white">
      <figure className="w-full bg-red-200 h-52 rounded-md overflow-hidden">
        <Image
          src={articleimage}
          alt="Article Image"
          className="object-cover w-full h-full"
        />
      </figure>
      <article className="mt-2">
        <p className="text-[10px] font-light text-[#999999]">
          <span>Fashion, </span>
          <span>Hobby. </span>
        </p>
        <p className="text-sm font-extralight my-1 text-[#222222]">
          JANUARY 10, 2024
        </p>
        <h3 className="font-semibold truncate text-[#222222] text-sm -mt-1">
          4k uhd 3840 x 2160 32 inch 240hz monitor
        </h3>
        <p className="text-[13px] text-[#666666] my-3">

          Aliquam tincidunt mauris eurisus Sed pretium, ligula sollicitudin Sed
          pretium, ligula sollicitudin laoreet viverra, tortor libero sodales
          leo, eget blandit nunc tortor eu nibh. Suspendisse potenti.Sed egstas,
          ant at vulputate volutpat, uctus metus…
        </p>
        <Link href="#" className="flex items-center justify-start  gap-x-2 text-xs mt-1">

        <span>View More</span>
        <span className="bg-blue-600 text-white grid place-content-center rounded-full ">
            <GoChevronRight/>
        </span>

        </Link>
      </article>
    </article>
  );
};

export default ArticleCard;
