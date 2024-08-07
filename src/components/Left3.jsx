import React from 'react';
import { useSelector } from 'react-redux';

//8.store에 있는 값을 가져오기 위해 useSelector 임포트

const Left3 = () => {
  const number = useSelector((state) => state.number); //9. store에 있는 상태값을 받아서 저장
  console.log(number);
  return (
    <div>
      <h3>Left3 : {number}</h3>
    </div>
  );
};

export default Left3;
