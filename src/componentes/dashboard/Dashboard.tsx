import { FunctionComponent, useState } from "react";
import { Outlet } from "react-router-dom";
import Menu from "../menu/Menu";
import Profile from "../profile/Profile";

interface DashboardProps {}

const Dashboard: FunctionComponent<DashboardProps> = () => {
  const [modal, setModal] = useState<boolean>(false);
  return (
    <div className="flex flex-row bg-gray-50  h-screen">
      <div className="">
        <Menu />
      </div>

      <div className="flex flex-col w-full ">
        <div className="py-2 flex justify-end items-center px-4 h-[81px]">
          <Profile srcImage="https://media.istockphoto.com/id/1317241131/es/foto/imagen-de-estudio-de-una-joven-empresaria-confiada-posando-sobre-un-fondo-gris.jpg?s=2048x2048&w=is&k=20&c=PkLplO4CdvIgn1O13k4o_3_x5Igaopf8M9llahm4BV0=" />
        </div>

        <div className="">
          <div className="px-4">
            <Outlet context={{ modal, setModal }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
