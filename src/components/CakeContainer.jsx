import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/cake/cakeAction";

const CakeContainer = () => {
  const [value, setValue] = useState("");
  const { numOfCakes } = useSelector((state) => state.cake);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>number of cake - {numOfCakes}</h2>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => dispatch(buyCake(value))}>buy cake</button>
    </div>
  );
};

export default CakeContainer;
