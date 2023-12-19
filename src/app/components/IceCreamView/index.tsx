import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { iceCreamActions } from "../../redux/Features/iceCream/iceCreamSlice";

const IceCreamView = () => {
  const numOfIceCreams = useAppSelector(
    (state) => state.iceCream.numOfIceCreams
  );
  const dispatch = useAppDispatch();

  const [value, setValue] = useState<number>(1);

  return (
    <>
      <div className="font-bold text-xl mb-2">Number of Cakes: {numOfIceCreams}</div>

      <div className="flex w-full items-center justify-between">
     
        <div className="w-1/3 bg-gray-300 py-6 m-1">
          <button onClick={() => dispatch(iceCreamActions.ordered())} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Order</button>
        </div>

        <div className="w-3/5 bg-gray-300 m-1 flex font-bold pl-1">
          <input
            className="w-12 rounded pl-1.5"
            type="number"
            onChange={(e) => {
              setValue(parseInt(e.target.value));
            }}
            placeholder="1"
          />
          <button onClick={() => dispatch(iceCreamActions.restocked(value))} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Restock
          </button>
        </div>

      </div>
    </>
  );
};

export default IceCreamView;
