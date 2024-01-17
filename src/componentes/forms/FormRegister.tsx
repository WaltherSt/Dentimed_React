import Button from "../button/Button";
import Input from "./Input";
import Select from "./Select";

export default function FormRegister() {
  const lista = ["Masculino", "Femenino"];
  return (
    <form
      action=""
      className="flex flex-col gap-3 w-96 shadow-large  p-5 h-full rounded-lg"
    >
      <Input placeholder="Nombres" type="text" />
      <Input placeholder="Apellidos" type="text" />{" "}
      <Input placeholder="Correo" type="email" />{" "}
      <Input placeholder="Telefono" type="tel" />
      <Select items={lista} />
      <Input placeholder="Fecha de nacimiento" type="date" />{" "}
      <Input placeholder="Contraseña" type="password" />
      <div className="w-full">
        <Button label="Registrar" background="Primary" />
      </div>
    </form>
  );
}
