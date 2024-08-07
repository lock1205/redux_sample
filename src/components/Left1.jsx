import React from 'react';
import Left2 from './Left2';

const Left1 = ({ to }) => {
  return (
    <div>
      <h1> Left1 :</h1>
      {/* redux 사용 전 */}
      {/* <Left2 props={to} /> */}
      <Left2 />
    </div>
  );
};

export default Left1;
