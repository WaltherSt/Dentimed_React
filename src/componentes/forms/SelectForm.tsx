import { useState } from "react";
import ArrowBotton from "../icons/ArrowBottom";
import ArrowTop from "../icons/ArrowTop";
interface SetSelect {
  list: string[];
}
const SelectForm: React.FC<SetSelect> = ({ list }) => {
  const [state, setState] = useState(false);
  const [position, setPosition] = useState("Genero");

  function handlePosition(e: MouseEvent) {
    setPosition((e.target as HTMLButtonElement).innerText);
    setState(!state);
  }

  return (
    <div>
      <div className="flex justify-between h-10  p-2 items-center">
        <p className="text-gray-400">{position}</p>{" "}
        <button
          type="button"
          className="text-gray-400"
          onClick={() => setState(!state)}
        >
          {" "}
          {state ? <ArrowTop /> : <ArrowBotton />}
        </button>
      </div>

      {state ? (
        <div className="w-full relative">
          <div className="bg-gray-100 absolute w-full rounded">
            {list.map((e) => (
              <button
                key={e}
                type="button"
                className="p-2 text-start border-b-1 border-white hover:bg-gray-200 cursor-pointer rounded w-full"
                onClick={(e) => handlePosition(e)}
              >
                <p className="capitalize">{e}</p>
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default SelectForm;
