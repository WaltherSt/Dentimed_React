import { Component } from "react";
import DeleteIcon from "../icons/DeleteIcon";
import EditIcon from "../icons/EditIcon";

export default class ItemMeet extends Component {
  render() {
    return (
      <div className="flex gap-3 bg-slate-50 w-full justify-between items-center px-3 text-dentimed-blue p-2 hover:bg-slate-100 cursor-pointer">
        <p>Dr Antonia Gonzales</p>
        <p>Endodoncia</p>
        <p>25/06/2025</p>
        <p>09:30 am</p>

        <div className="flex gap-3">
          <EditIcon />
          <DeleteIcon />
        </div>
      </div>
    );
  }
}
