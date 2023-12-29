export default function FormRegister() {
  return (
    <form action="" className="flex flex-col gap-3 w-96 shadow-large  p-5 h-full rounded-lg">


      <input className="p-2" type="text" placeholder="Nombres" />
      <input className="p-2" type="text" placeholder="Apellidos" />
      <input className="p-2" type="email" placeholder="Correo" />
      <input className="p-2" type="number" placeholder="Telefono" />
      <select className="p-2" name="" id="">
        <option value="masculino">Masculino</option>
        <option value="femenino">Femenino</option>
      </select>
      <input className="p-2" type="date" placeholder="Fecha de nacimiento" />
      <input className="p-2" type="password" placeholder="Contraseña" />

      <input
        className="bg-sky-300 text-white p-2 rounded-md hover:bg-dentimed-blue cursor-pointer"
        type="submit"
        value="Registrar"
      />
    </form>
  );
}
