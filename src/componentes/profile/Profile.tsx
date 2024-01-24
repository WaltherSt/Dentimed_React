import { FunctionComponent, useState } from "react";
import ArrowBotton from "../icons/ArrowBotton";
import LogOutIcon from "../icons/LogOutIcon";
import SettingIcon from "../icons/SettingIcon";
import UserIcon from "../icons/UserIcon";
import LiProfile from "./LiProfile";

interface ProfileProps {
  srcImage: string;
}

const Profile: FunctionComponent<ProfileProps> = ({ srcImage }) => {
  const [accordion, setAccordion] = useState(false);

  function handleAccordion() {
    setAccordion(!accordion);
  }

  return (
    <div className="relative mb-2 ">
      <div className="flex gap-4 h-12 px-2">
        <div className="flex flex-col justify-center text-right">
          <p className="text-sm">Monica Martinez</p>
          <p className="text-xs text-gray-400">Odontologo</p>
        </div>
        <div>
          <img className="h-12 w-12 rounded-full" src={srcImage} alt="doctor" />
        </div>

        <button className="flex items-center" onClick={handleAccordion}>
          <ArrowBotton />
        </button>
      </div>

      {accordion ? (
        <div className="absolute text-gray-400 bg-white w-full border-gray-100">
          <div className="mt-2 border-b-1 border-gray-100">
            <LiProfile title="perfil" icon={<UserIcon />} high="4" />
            <LiProfile title="configuración" icon={<SettingIcon />} high="4" />
          </div>

          <div>
            <LiProfile title="log out" icon={<LogOutIcon />} high="5" />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Profile;
