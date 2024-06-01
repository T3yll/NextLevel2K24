import Link from "next/link";
import React from "react";

const Tabs = () => {
  const links = [
    {
      name: "Users",
      href: "/admin/users",
    },
    {
      name: "Games",
      href: "/admin/games",
    },
    {
      name: "Purchases",
      href: "/admin/buys",
    },
  ];
  return (
    <div className="flex flex-wrap md:flex-row gap-5 md:gap-10 md:flex-nowrap items-center justify-center my-4">
      {links.map((link) => (
        <Link key={link.href} className="px-4 py-3 shadow-sm rounded-md cursor-pointer bg-gray-700 text-white  bg-opacity-50 backdrop-filter backdrop-blur-lg" href={link.href}>
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
