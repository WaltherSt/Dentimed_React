import { useForm } from "react-hook-form";

function FormRegister_2() {
  const { 
    register, 
    handleSubmit, 
    formState: {errors},
    reset
} = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log (data)

    alert ('Enviando Datos De Registtro')
    reset()
})

  return (
    <form onSubmit={onSubmit}
    className="flex flex-col gap-5 w-full border-1 border-black px-10">

      <div>
        <input type="number" placeholder="N cedula" 
        {...register("cedula", {
            required: {value:true, message:"Número de cédula requerido"}, 
            minLength: {value:8, message:"Minimo debe tener 8 números"}, 
            maxLength: {value:10, message:"Maximo debe tener 10 números"},
        })}
        />
         {errors.cedula && 
        <span className="text-dentimed-danger text-sm">{errors.cedula.message}</span>
        }
      </div>

      <div>
        <input type="text" placeholder="Nombres" 
        {...register("nombres", {
            required: {value:true, message:"Nombres requeridos"},
            minLength: {value:3, message:"Minimo debe tener 3 letras"},
            maxLength: {value:20, message:"Maximo debe tener 20 letras"},
        })}
        />
        {errors.nombres && <span className="text-dentimed-danger text-sm">{errors.nombres.message}</span>}
      </div>

      <div>
        <input type="text" placeholder="Apellidos" 
        {...register("apellidos", {
            required: {value:true, message:"Apellidos requeridos"},
            minLength: {value:5, message:"Minimo debe tener 5 letras"},
            maxLength: {value:30, message:"Maximo debe tener 30 letras"},
        })}
        />
        {errors.apellidos && <span className="text-dentimed-danger text-sm">{errors.apellidos.message}</span>}
      </div>

      <div>
        <input type="number" placeholder="N telefono" 
        {...register("telefono", {
            required: {value:true, message:"Telefono requerido"},
            minLength: {value:7, message:"Minimo debe tener 7 números"},
            maxLength: {value:10, message:"Maximo debe tener 10 números"},
        })}
        />
        {errors.telefono && <span className="text-dentimed-danger text-sm">{errors.telefono.message}</span>}
      </div>

      <div>
        <input type="email" placeholder="correo electronico" 
        {...register("correo", {
            required: {value:true, message:"Correo requerido"},
            pattern: {value:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: "Correo no valido",
        }
        })}
        />
        {errors.correo && <span className="text-dentimed-danger text-sm">{errors.correo.message}</span>}
      </div>

      <div>
        <input type="text" placeholder="direccion" 
        {...register("direccion", {
          required: {value:true, message:"Dirección requerida"}
        })}
        />
        {errors.direccion && <span className="text-dentimed-danger text-sm">{errors.direccion.message}</span>}
      </div>

      <button typeof="submit">Enviar</button>
    </form>
  );
}

export default FormRegister_2;
