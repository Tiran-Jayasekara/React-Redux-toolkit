import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered ,restoked } from "./iceCreamSlice";

const IceCreamView = () => {
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();

  const [value , setValue] = useState()
  return (
    <>
      <h2>Number Of IceCreams {numOfIceCreams}</h2>
      <input type="number" value={value} onChange={e => setValue(parseInt(e.target.value))}/>
      <button onClick={()=>dispatch(ordered(value))}>Orderd IceCream</button>
      
      <button onClick={()=>dispatch(restoked(value))} >ReStock IceCreame</button>
    </>
  );
};

export default IceCreamView;
