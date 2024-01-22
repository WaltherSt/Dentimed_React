import { FunctionComponent } from "react";

interface Props {
  headers: string[];
}

const TableHeader: FunctionComponent<Props> = ({ headers }) => {
  return (
    <thead className="bg-dentimed-blue text-white">
      <tr>
        {headers.map((title) => (
          <th className="p-2 uppercase font-bold " key={title}>{title}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
