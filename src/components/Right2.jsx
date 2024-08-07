import React from 'react';
import Right3 from './Right3';

const Right2 = (props) => {
  return (
    <div>
      <h2>Right2: </h2>
      {/* redux 사용 전 */}
      {/* <Right3 props={props.to} onIncrease={() => props.onIncrease()} /> */}
      <Right3 />
    </div>
  );
};

export default Right2;
