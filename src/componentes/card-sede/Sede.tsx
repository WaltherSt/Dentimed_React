import Button from "../button/Button";
import AgendarIcon from "../icons/AgendarIcon";

export default function Blog() {
  return (
    <div className="flex h-48 flex-col gap-4 shadow-large justify-center px-5 rounded hover:translate-y-1 duration-300 w-96">
      <h1 className="text-center text-dentimed-blue text-lg font-normal">
        DentiMed CC Titan Plaza - Test
      </h1>
      <div className="flex gap-3 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
          />
        </svg>

        <p>Locales 117-al -128 Av. Pradilla # 9-00 Este, Chía</p>
      </div>
      <div className="flex justify-between w-full pr-3">
        <div className="flex gap-3 items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            />
          </svg>

          <p className="inline-block ">601 745438</p>
        </div>

        <div className="">
          <Button
            label="Agendar"
            background="Primary"
            svgIcon={<AgendarIcon />}
          />
        </div>
      </div>
    </div>
  );
}
