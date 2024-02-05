import { FunctionComponent } from "react";
import { decrement, increment } from "../redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const count = useAppSelector((state) => state.counterSlice.value);
  const dispatch = useAppDispatch();

  return (
    <div className=" flex w-full justify-center items-center ">
      <h1>{count}</h1>

      <div className="flex gap-5 m-5">
        <button
          onClick={() => dispatch(increment())}
          className="p-2 bg-orange-500 rounded"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="p-2 bg-lime-500 rounded"
        >
          Decrement
        </button>
      </div>


    </div>


  );
};

export default Home;
