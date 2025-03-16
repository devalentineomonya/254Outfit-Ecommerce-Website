import { Accordion } from "../compoents/Accordion";
import Image from "next/image";

const Services = () => {
  const accordionItems = [
    {
      title: "Sales Management",
      content: "Lorem ipsum dolor sit eiusamet, consectetur adipiscing elit...",
    },
    {
      title: "Sales Management",
      content: "Lorem ipsum dolor sit eiusamet, consectetur adipiscing elit...",
    },
    {
      title: "Sales Management",
      content: "Lorem ipsum dolor sit eiusamet, consectetur adipiscing elit...",
    },
  ];

  return (
    <section className="px-4 grid grid-cols-2 h-[520px] justify-center items-center gap-x-8 my-6">
      <div className="h-full w-full ">
        <h1 className="text-2xl md:text-3xl font-bold  mb-12">
          We Provide Continuous & Kind Service for Customers
        </h1>

        <Accordion items={accordionItems} />
      </div>
      <div className="relative w-full h-full rounded-md overflow-hidden ">
        <Image
          src="/about.png"
          className="absolute object-cover w-full h-full"
          alt="About image"
          fill
          quality={100}
          priority
        />
      </div>
    </section>
  );
};
export default Services;
