import { FunctionComponent } from "react";
import Item from "./Item";

interface RowPrimaryProps {
  nums: number[];
}

const RowPrimary: FunctionComponent<RowPrimaryProps> = ({ nums }) => {
  return (
    <div className="flex gap-5 ">
      {nums.map((num) => (
        <Item num={num} key={num} />

        // <div key={num} className="relative">
        //   <Item num={num} key={num} />
        //   <div className="absolute top-6">
        //   <Extraccion/>
        //   </div>
        // </div>
      ))}
    </div>
  );
};

export default RowPrimary;
