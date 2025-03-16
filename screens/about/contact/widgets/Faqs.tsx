import { EnvelopeIcon, PhoneIcon, MapPinIcon, DocumentTextIcon } from "@heroicons/react/24/outline";

const ContactInfo = () => {
  return (
    <div className="max-w-5xl mx-auto py-12 text-center">
      <h2 className="text-2xl font-bold">Contact Information</h2>
      <p className="text-gray-500 mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
        {[
          { icon: EnvelopeIcon, label: "E-mail Address", info: "mail@example.com" },
          { icon: PhoneIcon, label: "Phone Number", info: "(123) 456-7890 / (123) 456-9870" },
          { icon: MapPinIcon, label: "Address", info: "Lawrence, NY 11345, USA" },
          { icon: DocumentTextIcon, label: "Fax", info: "1-123-456-7890" },
        ].map(({ icon: Icon, label, info }, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <Icon className="h-10 w-10 text-blue-500" />
            <p className="font-semibold">{label}</p>
            <p className="text-gray-500">{info}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
