import React from 'react';
import Right2 from './Right2';
import { type } from '@testing-library/user-event/dist/type';
import { useDispatch } from 'react-redux';

const Right1 = ({ to }) => {
  const disPatch = useDispatch();
  return (
    <div>
      <h1>Right1 : {to}</h1>
      {/* redux 사용 전 */}

      {/* <Right2 props={to} onIncrease={() => onIncrease} /> */}
      <button onClick={() => disPatch({ type: 'decrement' })}>-</button>
      <Right2 />
    </div>
  );
};

export default Right1;
