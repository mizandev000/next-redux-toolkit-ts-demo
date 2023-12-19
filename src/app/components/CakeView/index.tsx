import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { cakeActions } from "../../redux/Features/cake/cakeSlice";

const CakeView = () => {
  const numOfCakes = useAppSelector((state) => state.cake.numOfCakes);
  const dispatch = useAppDispatch();
  return (
    <>
    <div className="font-bold text-xl mb-2">Number of Cakes: {numOfCakes}</div>

    <div className="flex w-full items-center justify-between mt-9">
      <button onClick={() => dispatch(cakeActions.ordered())} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Order</button>
      <button onClick={() => dispatch(cakeActions.restocked(3))} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Restock
      </button>
    </div>
    </>
  );
};

export default CakeView;
