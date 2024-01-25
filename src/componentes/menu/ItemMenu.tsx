import { ReactNode } from "react";

interface ItemMenu {
  name: string;
  icon: ReactNode;
}

const ItemMenu: React.FC<ItemMenu> = ({ name, icon }) => {
  return (
    <a href="home" className="flex gap-3 px-4 py-3 text-gray-400  hover:bg-sky-400 hover:text-white duration-100 shadow-sm">
      {" "}
      {icon} {name}
    </a>
  );
};

export default ItemMenu;
