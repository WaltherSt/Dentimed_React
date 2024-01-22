import { Component } from "react";
import Button from "../button/Button";
import Input from "./Input";

export default class FormLogin extends Component {
  render() {
    return (
      <form
        action=""
        className="flex flex-col gap-3 w-96 shadow-large  px-4 pt-8 pb-2 h-full rounded-lg m-10"
      >
        <Input placeholder="Correo" type="email" />
        <Input placeholder="Contraseña" type="password" />{" "}
        <div className="w-full">
          <Button label="Login" background="Primary" />
        </div>
        <div className="flex justify-between pb-2">

            <a className="text-sky-300 text-xs hover:text-sky-400" href="">
              ¿Olvidó su contraseña?
            </a>
            <a className="text-sky-300 text-xs hover:text-sky-400" href="">
              Crear cuenta
            </a>

        </div>
      </form>
    );
  }
}
