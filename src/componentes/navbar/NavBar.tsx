import React from "react";
import ItemNav from "./ItemNav";
import Logo from "./Logo";

interface NavBar {
  lista: string[];
}

const NavBar: React.FC<NavBar> = ({ lista }) => {
  return (
    <div className=" flex flex-row w-full border-b-2 border-dentimed-blue font-lexed">
      <div className="w-1/4 pl-2">
        <Logo />
      </div>
      <div className="flex justify-around w-3/4">
        {lista.map((item) => (
          <ItemNav name={item} />
        ))}
      </div>
    </div>
  );
};

export default NavBar;
