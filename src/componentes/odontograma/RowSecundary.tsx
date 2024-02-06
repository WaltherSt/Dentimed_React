import { FunctionComponent } from "react";

import Item from "./Item";

interface RowSecundaryProps {
  nums: number[];
}

const RowSecundary: FunctionComponent<RowSecundaryProps> = ({ nums }) => {
  const medium1 = nums.slice(0, nums.length / 2);
  const medium2 = nums.slice(nums.length / 2, nums.length);

  return (
    <div className=" grid grid-cols-2 gap-10">
      <div className="flex justify-end gap-5">
        {medium1.map((num) => (
          <Item key={num} num={num} />
        ))}
      </div>
      <div className="flex justify-start gap-5">
        {medium2.map((num) => (
          <Item key={num} num={num} />
        ))}
      </div>
    </div>
  );
};

export default RowSecundary;
