import { FunctionComponent, MouseEvent, useState } from "react";
import ArrowBotton from "../icons/ArrowBottom";
import ArrowTop from "../icons/ArrowTop";

interface SelectProps {
  label: string;
  list: string[];
}

const Select: FunctionComponent<SelectProps> = ({ label, list }) => {
  const [active, setActive] = useState(false);
  const [position, setPosition] = useState(list[0]);

  function handleActive() {
    setActive(!active);
  }

  function handlePosition(e: MouseEvent) {
    setPosition(e.target.innerText);
    handleActive();
  }

  return (
    <div className="flex flex-col relative w-40">
      <button
        className="flex gap-5 items-center px-3 bg-gray-50 rounded-md"
        onClick={handleActive}
      >
        <div className="flex flex-col w-full text-start ">
          <p className="capitalize text-[10px] text-gray-500">{label}</p>
          <p className="capitalize text-gray-500">{position}</p>
        </div>

        {active ? <ArrowTop /> : <ArrowBotton />}
      </button>

      {active ? (
        <div className=" flex flex-col mt-12 absolute bg-white w-full">
          {list.map((e) => (
            <button
              className="p-2 capitalize cursor-pointer hover:bg-gray-200 text-black rounded-md bg-white text-start"
              key={e}
              onClick={handlePosition}
            >
              {e}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Select;
