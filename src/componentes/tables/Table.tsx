import { Component } from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

export default class PatientTable extends Component {
  render() {
    const data = [
      {
        paciente: "Juan Pérez",
        telefono: "555-1234",
        correo: "juan.perez@example.com",
        dirección: "Calle Principal 123",
        estado: "Activo",
      },
      {
        paciente: "María González",
        telefono: "555-5678",
        correo: "maria.gonzalez@example.com",
        dirección: "Avenida Central 456",
        estado: "Activo",
      },
      {
        paciente: "Carlos Rodríguez",
        telefono: "555-9876",
        correo: "carlos.rodriguez@example.com",
        dirección: "Calle Secundaria 789",
        estado: "Inactivo",
      },
      {
        paciente: "Ana Martínez",
        telefono: "555-4321",
        correo: "ana.martinez@example.com",
        dirección: "Plaza Principal 321",
        estado: "Activo",
      },
      {
        paciente: "Luis Hernández",
        telefono: "555-8765",
        correo: "luis.hernandez@example.com",
        dirección: "Calle Peatonal 654",
        estado: "Inactivo",
      },
    ];

    const headers = Object.keys(data[0]);

    return (
      <table className="w-full m-2 p-2">
        <TableHeader headers={headers} />
        <TableBody data={data} />
      </table>
    );
  }
}
