import { FunctionComponent } from "react";

import { Patient } from "../../redux/service/patientApi";
import Pagination from "./Pagination";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

interface TableProps {
  headers: string[];
  handleDeleteClick: (
    e: React.MouseEvent<SVGElement, MouseEvent>
  ) => Promise<void>;
  handleEditClick: (
    e: React.MouseEvent<SVGElement, MouseEvent>
  ) => Promise<void>;
  data: Patient[] | undefined;
}

const Table: FunctionComponent<TableProps> = ({
  headers,
  handleDeleteClick,
  handleEditClick,
  data,
}) => {
  return (
    <>
      <table className="w-full bg-white shadow">
        <TableHeader headers={headers} />
        <TableBody
          deleteRegisterHandle={handleDeleteClick}
          editRegisterHandle={handleEditClick}
          data={data}
        />
      </table>

      <Pagination />
    </>
  );
};

export default Table;
