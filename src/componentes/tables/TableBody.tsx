import { FunctionComponent } from "react";

interface Props {
  register: string[];

}

const TableBody: FunctionComponent<Props> = ({ register}) => {
  const classBody = `grid grid-cols-${register.length} text-center py-2 hover:bg-gray-100 rounded text-dentimed-blue shadow mb-2`;
  const registerItem = [];

  for (let i = 0; i < register.length; i++) {
    registerItem.push(
      <a className="capitalize" href="">
        {register[i]}
      </a>
    );
  }
  return <div className={classBody}>{registerItem}</div>;
};

export default TableBody;
