import { FunctionComponent, useState } from "react";
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
    <div className="relative rounded-md px-4">
      <div className="flex gap-4 h-12">
        <div className="flex flex-col justify-center text-right">
          <p className="text-sm">Monica Martinez</p>
          <p className="text-xs text-gray-400">Odontologo</p>
        </div>
        <button className=" cursor-pointer" onClick={handleAccordion}>
          <img className="h-12 w-12 rounded-full" src={srcImage} alt="doctor" />
        </button>
      </div>

      {accordion ? (
        <div className="absolute text-gray-400 bg-white w-full mt-4 shadow-lg">
          <div className="border-gray-100">
            <LiProfile title="perfil" icon={<UserIcon />} height={4} />
            <LiProfile
              title="configuración"
              icon={<SettingIcon />}
              height={4}
            />
            <LiProfile
              title="configuración"
              icon={<SettingIcon />}
              height={4}
            />{" "}
          </div>

          <div className="border-t-3 border-gray-100">
            <LiProfile title="log out" icon={<LogOutIcon />} height={4} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Profile;
