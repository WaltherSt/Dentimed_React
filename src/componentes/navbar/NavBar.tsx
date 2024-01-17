import React from "react";
import LoginIcon from "../icons/LoginIcon";
import ItemNav from "./ItemNav";
import Logo from "./Logo";

interface NavBar {
  list: string[];
}

const NavBar: React.FC<NavBar> = ({ list }) => {
  return (
    <div className=" flex w-full border-b-2 border-dentimed-blue font-lexed justify-between items-center">
      <div className="pl-2">
        <Logo />
      </div>
      <div className="flex gap-16">
        {list.map((item) => (
          <ItemNav name={item} />
        ))}
      </div>

      <div className="mr-5 h-4/5 flex justify-center p-2 text-sky-400 rounded gap-1 cursor-pointer duration-200 hover:bg-slate-100">
        <a className="">Login</a>
        <LoginIcon />
      </div>
    </div>
  );
};

export default NavBar;
