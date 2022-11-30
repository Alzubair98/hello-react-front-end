import React from "react";
import { useSelector } from "react-redux";

const Firstcont = () => {
  const greets = useSelector((state) => state.storeSlice);

  return (
    <div>
      {greets.map((greet) => (
        <div key={greet.id}>
          <h1>{greet.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Firstcont;
