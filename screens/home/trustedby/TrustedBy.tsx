import React from "react";
import partner1 from "@/public/partner1.png";
import partner2 from "@/public/partner2.png";
import partner3 from "@/public/partner3.png";
import partner4 from "@/public/partner4.png";
import partner5 from "@/public/partner5.png";
import partner6 from "@/public/partner6.png";
import Image from "next/image";

const TrustedBy = () => {
  return (
    <section className="h-28 bg-white py-4 px-2 mt-12 flex items-center justify-between">
      {[partner1, partner2, partner3, partner4, partner5, partner6].map(
        (partner, idx) => (
          <Image key={idx} src={partner} alt="Partner Image" />
        )
      )}
    </section>
  );
};

export default TrustedBy;
