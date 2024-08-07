import React from 'react';
import Left3 from './Left3';

const Left2 = ({ props }) => {
  return (
    <div>
      <h2>Left2 : </h2>
      {/* redux 사용 전 */}
      {/* <Left3 props={props} /> */}
      <Left3 />
    </div>
  );
};

export default Left2;
