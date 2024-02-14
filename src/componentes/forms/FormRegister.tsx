import Button from "../button/Button";
import Input from "./Input";

export default function FormRegister() {

 return (
    <form className="flex flex-col gap-2 w-full">
      <Input placeholder="Nº Identificación" type="number" name="cedula" />
      <Input placeholder="Nombres" type="text" name="nombres" />{" "}
      <Input placeholder="Apellidos" type="text" name="apellidos" />{" "}
      <Input placeholder="Telefono" type="tel" name="telefono" />
      <Input placeholder="Email" type="email" name="correo" />
      <Input placeholder="Dirección" type="text" name="direccion" />
      <div className="w-full">
        <Button label="Crear" background="Primary" />
      </div>
    </form>
  );
}
