import { ReactNode } from "react";

interface ItemMenu {
  name: string;
  icon: ReactNode;
}

const ItemMenu: React.FC<ItemMenu> = ({ name, icon }) => {
  return (
    <a href="" className="flex gap-2 p-3 text-gray-400  hover:bg-dentimed-blue hover:text-white duration-100">
      {" "}
      {icon} {name}
    </a>
  );
};

export default ItemMenu;
