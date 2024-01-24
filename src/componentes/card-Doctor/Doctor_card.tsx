import Dentista from "../card-Doctor/img/Dentista.jpeg";

function Doctor_card() {
  return (
    <div className="h-min w- shadow-xl rounded cursor-pointer hover:translate-y-1 duration-300">
      <div className="">
        <img src={Dentista} className="w-64 m-auto" />
      </div>

      <div className="p-3 pt-5 w-72">
        <h1 className="font-normal text-dentimed-blue">Nombre</h1>
        <h2 className="">Cristian Camilo Torres Trujillo</h2>
      </div>

      <div className="p-3 pb-5 w-72">
        <h1 className="font-normal text-dentimed-blue">Especialidad</h1>
        <h2 className="">ODONTOLOGO</h2>
      </div>

    </div>
  );
}

export default Doctor_card;
