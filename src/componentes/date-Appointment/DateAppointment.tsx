// rfce

interface DateAppointment {
  nameDoctor: string;
  place: string;
  date: string;
  time: string;
}

const DateAppointment: React.FC<DateAppointment> = ({nameDoctor, place, date, time}) => {
  return (
    <div className="flex gap-10 w-4/5 h-16 justify-around rounded-xl
    bg-gray-100 text-lg hover:bg-gray-200 hover:-translate-y-0.5 duration-300">
      
      <div id="" className="flex text-center items-center gap-20 
      text-dentimed-blue font-medium  ">
        <h2 className="max-w-52">{nameDoctor}</h2>
        <h2 className="max-w-52">{place}</h2>
        <h2 className="max-w-52">{date}</h2>
        <h2 className="max-w-52">{time}</h2>
      </div>

      <div className="flex gap-5 font-medium">
      <button className="bg-sky-300 text-white p-2 rounded-md m-2.5 
      hover:bg-dentimed-blue duration-300 cursor-pointer">Reprogramar</button>
      <button className="bg-red-300 text-white p-2 rounded-md m-2.5 
      hover:bg-dentimed-danger duration-300 cursor-pointer">Cancelar</button>
      </div>
      
    </div>
  );
}

export default DateAppointment;
