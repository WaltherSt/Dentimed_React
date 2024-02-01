import { FunctionComponent } from "react";
import ArrowLeft from "../icons/ArrowLeft";
import ArrowRight from "../icons/ArrowRight";

interface PaginationProps {}

const Pagination: FunctionComponent<PaginationProps> = () => {
  return (
    <div className="flex gap-2 p-2 justify-center mt-5 ">
      <button className="text-sky-400 hover:text-sky-600 duration-500">
        <ArrowLeft />
      </button>

      <button className="bg-sky-400 w-8 text-center text-white rounded hover:bg-sky-500 duration-400">
        1
      </button>
      <button className="bg-sky-400 w-8 text-center text-white rounded hover:bg-sky-500 duration-400">
        2
      </button>
      <button className="bg-sky-400 w-8 text-center text-white rounded hover:bg-sky-500 duration-400">
        3
      </button>
      <button className="bg-sky-400 w-8 text-center text-white rounded hover:bg-sky-500 duration-400">
        4
      </button>
      <button className="bg-sky-400 w-8 text-center text-white rounded hover:bg-sky-500 duration-400">
        5
      </button>
      <button className="bg-sky-400 w-8 text-center text-white rounded hover:bg-sky-500 duration-400">
        6
      </button>
      <button className="bg-sky-400 w-8 text-center text-white rounded hover:bg-sky-500 duration-400">
        7
      </button>
      <button className="bg-sky-400 w-8 text-center text-white rounded hover:bg-sky-500 duration-400">
        8
      </button>

      <button className="text-sky-400 hover:text-sky-600 duration-500">
        <ArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
