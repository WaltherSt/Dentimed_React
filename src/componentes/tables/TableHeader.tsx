import { FunctionComponent } from "react";

interface Props {
  headers: string[];
}

const TableHeader: FunctionComponent<Props> = ({ headers }) => {
  return (
    <thead className="bg-dentimed-blue text-white">
      <tr>
        {headers.map((title) => (
          <th className="p-2 uppercase font-bold text-start" key={title}>{title}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
