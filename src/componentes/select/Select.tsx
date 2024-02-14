import { FunctionComponent, MouseEvent, useState } from "react";
import ArrowBotton from "../icons/ArrowBottom";
import ArrowTop from "../icons/ArrowTop";

interface SelectProps {
  label?: string;
  list: string[];
  onClick?: (event: MouseEvent) => void;
}

const Select: FunctionComponent<SelectProps> = ({ label, list, onClick }) => {
  const [active, setActive] = useState(false);
  const [position, setPosition] = useState(list[0]);

  function handleActive() {
    setActive(!active);
  }

  function handlePosition(e: MouseEvent) {
    setPosition((e.target as HTMLButtonElement).innerText);
    handleActive();
    onClick(e);
  }

  return (
    <div className="flex flex-col relative w-full">
      <button
        className="flex gap-5 items-center px-3 bg-gray-50 rounded-md"
        onClick={handleActive}
      >
        <div className="flex flex-col w-full text-start ">
          {label ? (
            <p className="capitalize text-[10px] pt-1 ">{label}</p>
          ) : null}

          {label ? (
            <p className="capitalize text-gray-500">{position}</p>
          ) : (
            <p className="capitalize text-gray-500 p-2">{position}</p>
          )}
        </div>

        {active ? <ArrowTop /> : <ArrowBotton />}
      </button>

      {active ? (
        <div className=" flex flex-col mt-12 absolute bg-white w-full shadow ">
          {list.map((e) => (
            <button
              className="p-2  capitalize cursor-pointer hover:bg-gray-200 rounded-md bg-white text-start pr-1 border-b-1 border-gray-100"
              key={e}
              onClick={handlePosition}
              data-value={e}
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
