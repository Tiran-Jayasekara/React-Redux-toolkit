import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered , restocked } from "./cakeSlice";

const CakeView = () => {
  // Read data in th ereact-redux store we used useSelector Hook
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <>
      <h2>Number Of Cakes {numOfCakes}</h2>
      <button onClick={()=> dispatch(ordered(1))}>Order Cake</button>
      <button onClick={()=>dispatch(restocked(5))}>ReStoked Cake</button>
    </>
  );
};

export default CakeView;
