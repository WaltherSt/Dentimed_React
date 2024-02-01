// rfce

interface DateAppointment {
  nameDoctor: string;
  place: string;
  date: string;
  time: string;
}

const DateAppointment: React.FC<DateAppointment> = ({
  nameDoctor,
  place,
  date,
  time,
}) => {
  return (
    <div
      className="mx-10 flex gap-10 w-full h-auto justify-around rounded-xl
     text-lg hover:bg-gray-50 duration-300"
    >
    
      <div
        className="flex pr-5 text-center place-items-center w-full justify-around gap-10 
      text-dentimed-blue"
      >
          <h2>{nameDoctor}</h2>
          <h2>{place}</h2>
          <h2>{date}</h2>
          <h2>{time}</h2>
      </div>

      <div className="flex gap-7 pr-5">
        <button
          className="bg-sky-300 text-white rounded-md my-2.5 px-2 py-1
      hover:bg-dentimed-blue hover:-translate-x-0.5 duration-300 cursor-pointer"
        >
          Reprogramar 
        </button>
        <button
          className="bg-red-300 text-white px-3 rounded-md my-2.5 
      hover:bg-dentimed-danger hover:-translate-x-0.5 duration-300 cursor-pointer"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default DateAppointment;
