import Link from "next/link";
import React from "react";  
interface LinkItem {
  label: string;
  href: string;
}
interface FooterLinksProps {
  title: string;
  links: LinkItem[];
}
const FooterLinks: React.FC<FooterLinksProps> = ({ title, links }) => {
  return (
    <div className="">
      <h2 className="font-semibold text-gray-900 text-lg">{title}</h2>
      <ul className="mt-3 ">
        {links.map((link,idx) => (
          <li className="my-3 font-normal text-sm text-gray-600" key={link.href+idx}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
