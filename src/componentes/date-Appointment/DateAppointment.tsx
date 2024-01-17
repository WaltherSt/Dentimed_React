// rfce

interface DateAppointment {
  nameDoctor: string;
  place: string;
  date: string;
  time: string;
}

const DateAppointment: React.FC<DateAppointment> = ({nameDoctor, place, date, time}) => {
  return (
    <div className="flex gap-10 w-4/5 justify-around h-16 rounded-xl
    bg-gray-100 text-lg">
      
      <div id="" className="flex ml-5 text-center items-center gap-20 
      text-dentimed-blue font-medium">
        <h2>{nameDoctor}</h2>
        <h2>{place}</h2>
        <h2>{date}</h2>
        <h2>{time}</h2>
      </div>

      <div className="flex gap-5 font-medium">
      <button className="bg-sky-300 text-white p-2 rounded-md m-2.5 
      hover:bg-dentimed-blue cursor-pointer">Reprogramar</button>
      <button className="bg-red-300 text-white p-2 rounded-md m-2.5 
      hover:bg-dentimed-danger cursor-pointer">Cancelar</button>
      </div>
      
    </div>
  );
}

export default DateAppointment;
