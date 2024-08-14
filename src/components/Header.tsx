import React from "react";
import Colors from "@/contants/Colors";
import Content from "@/contants/Content";

const Header = () => {
  return (
    <div className="flex bg-white p-5 items-center justify-between mx-[10vmax] my-2">
      <h3
        className="text-red-500 font-extrabold text-2xl"
        style={{ color: Colors.primary }}
      >
        Adacode.
      </h3>
      <ul className="flex gap-10">
        {Content.navItems.map((item, key) => (
          <li className="text-black" key={key}>
            {item}
          </li>
        ))}
      </ul>
      <button
        className="text-md mx-3 rounded-md px-3 py-1 hover:bg-black ease-in-out "
        style={{ backgroundColor: Colors.buttonBg }}
      >
        Enroll Now
      </button>
    </div>
  );
};

export default Header;
