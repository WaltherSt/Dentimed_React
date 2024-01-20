import { FunctionComponent } from "react";

interface Props {
  list: string[];
}

const TableHeader: FunctionComponent<Props> = ({ list }) => {
  const cHeader = `grid grid-cols-${list.length} text-center py-2 bg-dentimed-blue rounded text-white border-b-2 border-white mb-2`;
  const colums = [];

  for (let i = 0; i < list.length; i++) {
    colums.push(
      <a className="font-medium uppercase" href="">
        {list[i]}
      </a>
    );
  }
  return <div className={cHeader}>{colums}</div>;
};

export default TableHeader;
