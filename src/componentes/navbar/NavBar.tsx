import React, { ReactNode } from "react";
import ItemNav from "./ItemNav";
import Logo from "./Logo";

interface NavBar {
  list: string[];
  component?: ReactNode;
}

const NavBar: React.FC<NavBar> = ({ list, component }) => {
  return (
    <div className=" flex w-full shadow-md font-lexed justify-between items-center h-16 px-4">
      <div>
        <Logo />
      </div>
      <div className="flex gap-16">
        {list.map((item) => (
          <ItemNav name={item} key={item} />
        ))}
      </div>
      {component}
    </div>
  );
};

export default NavBar;
