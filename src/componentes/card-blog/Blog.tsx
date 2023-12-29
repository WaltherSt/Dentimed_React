export default function Blog() {
  return (
    <div className="flex gap-5 shadow-lg rounded-md relative hover:translate-y-1 duration-300 w-700 h-213">
      <div className="">
        <img
          src="https://img.freepik.com/foto-gratis/joven-bella-modelo-femenino-cabello-castano-sosteniendo-palma-mejilla-expresando-infelicidad-cansancio-frustracion_176420-15369.jpg?w=1380&t=st=1703794351~exp=1703794951~hmac=1583e391b693f306a461637f91f241fb3805c1605af7b167a58373cd65979314"
          alt="imagen"
          className="rounded-l-md w-80"
        />
      </div>
      <div className="flex flex-col gap-3 pr-8 w-80">
        <h1 className=" font-bold text-dentimed-blue text-xl">
          Alveolitis dental: qué es, causas, tipos y tratamiento
        </h1>
        <span className="text-xs text-zinc-800">
          Por Dentimed | 31/03/2023 | Odontología General
        </span>
        <p className="text-sm text-justify">
          Lorem ipsum dolor sit amet consectetur. Feugiat non consequat
          porttitor nisl. Tortor sed risus fames bibendum id integer laoreet
          egestas viverra. Eget commodo euismod viverra phasellus risus.
        </p>
      </div>
      <button
        className="flex gap-2 p-2 bg-dentimed-blue
       text-white
       font-medium absolute
       -bottom-unit-5 right-6
       rounded-md text-xs
       items-center
       shadow-lg
       hover:bg-sky-500"
      >
        Leer Más{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
}
