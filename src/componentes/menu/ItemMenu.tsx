import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface ItemMenu {
  name: string;
  icon: ReactNode;
  path: string;
}

const ItemMenu: React.FC<ItemMenu> = ({ name, icon, path }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive
          ? "flex gap-3 px-4 py-3 text-white bg-dentimed-blue duration-100"
          : "flex gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 duration-100"
      }
    >
      {" "}
      {icon} {name}
    </NavLink>
  );
};

export default ItemMenu;
