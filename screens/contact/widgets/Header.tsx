import { FaEnvelope, FaHeadphones, FaMapMarkerAlt, FaFax } from "react-icons/fa";

const Header = () => {
  return (
    <section className="px-4 py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        <div className="flex flex-col items-center">
          <FaEnvelope className="text-blue-600 text-4xl mb-3" />
          <h3 className="font-bold">E-mail Address</h3>
          <p className="text-gray-600">mail@example.com</p>
        </div>

        <div className="flex flex-col items-center">
          <FaHeadphones className="text-blue-600 text-4xl mb-3" />
          <h3 className="font-bold">Phone Number</h3>
          <p className="text-gray-600">(123) 456-7890 / (123) 456-9870</p>
        </div>

        <div className="flex flex-col items-center">
          <FaMapMarkerAlt className="text-blue-600 text-4xl mb-3" />
          <h3 className="font-bold">Address</h3>
          <p className="text-gray-600">Lawrence, NY 11345, USA</p>
        </div>

        <div className="flex flex-col items-center">
          <FaFax className="text-blue-600 text-4xl mb-3" />
          <h3 className="font-bold">Fax</h3>
          <p className="text-gray-600">1-123-456-7890</p>
        </div>
      </div>
    </section>
  );
};

export default Header
