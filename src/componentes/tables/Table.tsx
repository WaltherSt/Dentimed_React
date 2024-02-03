import { FunctionComponent } from "react";
import { PacienteI } from "../../interfaces/PacienteI";
import Pagination from "./Pagination";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

interface TableProps {
  items: PacienteI[];
}

const Table: FunctionComponent<TableProps> = ({ items }) => {
  const headers = Object.keys(items[0]);

  return (
    <>
      <table className="w-full bg-white shadow">
        <TableHeader headers={headers} />
        <TableBody data={items} />
      </table>

      <Pagination />
    </>
  );
};

export default Table;
