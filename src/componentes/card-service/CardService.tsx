import CardStyles from "./CardStyles.module.css";

interface CardService {
  title: string;
  list: string[];
}

const CardService: React.FC<CardService> = ({ title, list }) => {
  return (
    <div className="shadow-lg w-72 rounded hover:-translate-y-1 duration-300 h-full ">
      <div className="flex py-4 px-8 justify-between items-center">
        <img className="logo" src="src/assets/molar.svg" alt="logo" />
        <h1 className="card-title text-dentimed-blue font-normal text-lg ">{title}</h1>
      </div>
      <div className="py-4 border-t-1 px-8 border-dentimed-blue">
        <ul className="flex flex-col gap-y-5">
          {list.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
      <div className={CardStyles.card_footer}>
        <div>
          <span>Obtenga más información sobre los {title}.</span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="currentColor"
          className="w-20 h-20"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default CardService;
