import React, { ReactNode } from "react";
import ItemNav from "./ItemNav";
import Logo from "./Logo";

interface NavBar {
  list: string[];
  login?:ReactNode;
  user?:ReactNode
}

const NavBar: React.FC<NavBar> = ({ list, login, user}) => {
  return (
    <div className=" flex w-full border-b-2 border-dentimed-blue font-lexed justify-between items-center">
      <div className="pl-2">
        <Logo />
      </div>
      <div className="flex gap-16">
        {list.map((item) => (
          <ItemNav name={item} key={item}/>
        ))}
      </div>
      {login}
      {user}
    </div>
  );
};

export default NavBar;
