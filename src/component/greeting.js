import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadgreet } from '../Redux/greetings/greeting';

const Firstcont = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadgreet());
  }, []);

  const greets = useSelector((state) => state.storeSlice);

  return (
    <div>
      <h1>{greets.message}</h1>
    </div>
  );
};

export default Firstcont;
