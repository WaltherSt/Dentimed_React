import { FunctionComponent } from "react";
import Item from "./Item";

interface RowPrimaryProps {
  nums: number[];
}

const RowPrimary: FunctionComponent<RowPrimaryProps> = ({ nums }) => {


  return (
    <div className="flex gap-5 ">
      {nums.map((num) => (
        <Item key={num} num={num} />
      ))}
    </div>
  );
};

export default RowPrimary;
