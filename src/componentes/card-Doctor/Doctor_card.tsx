
function Doctor_card() {
  return (
    <div className='h-min w- shadow-xl rounded hover:translate-y-1 duration-300' >
        <div className='border-black border-1'>
        <img
        src='https://medlink.la/v3/assets/images/doctor.jpg?v=1698219837'
        alt='Perfil de Doctor'
        className='w-60 m-auto'
        />
        </div>
        
        <h1 className='p-2 font-normal text-dentimed-blue'>Nombre</h1>
        <h2 className='w-72 pl-2 pb-3'>Cristian Camilo Torres Trujillo</h2>
        
        <h1 className='p-2 font-normal text-dentimed-blue'>Especialidad</h1>
        <h2 className='w-72 pl-2 pb-3'>ODONTOLOGO</h2>

        <div 
        className='pt-6 pb-6 border-t-1 border-dentimed-blue px-8 cursor-pointer 
        ease-in-out flex justify-around hover:bg-dentimed-blue hover:text-white
        duration-300 rounded-b items-center'
        >
        <span>Más información</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="currentColor"
          className="w-10 "
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
        </div>
    </div>
  )
}

export default Doctor_card