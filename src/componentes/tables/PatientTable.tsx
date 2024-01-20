
import { Component } from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

export default class PatientTable extends Component {
  render() {
    const colums = ["paciente", "telefono", "correo", "dirección", "estado"];
    const item = ["walter fernando gómez","987456321","wfgomez@gmail.com","cl 93b # 9-92","activo"]
    return (
      <div className=" w-3/5">
        <TableHeader list={colums} />
        <TableBody register={item} />
        <TableBody register={item} />
        <TableBody register={item} />
        <TableBody register={item} />
        <TableBody register={item} />
        <TableBody register={item} />

      </div>
    );
  }
}
