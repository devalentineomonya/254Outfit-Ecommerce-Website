import { BsArrowRight } from "react-icons/bs";

const Newsletter = () => {
  return (
    <section className="px-4 py-16">
      <div className=" text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          SUBSCRIBE TO OUR NEWSLETTER
        </h2>

        <p className="text-gray-600 mb-8 text-lg">
          Get all the latest information on Events, Sales and Offers.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <input
            type="email"
            placeholder="Your E-mail Address"
            className="flex-1 min-w-[250px] px-6 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="flex items-center gap-x-3 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
            <span>SUBSCRIBE</span>
            <BsArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};
export default Newsletter;
