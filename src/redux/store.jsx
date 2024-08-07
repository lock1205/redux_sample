//2. createStore import
import { createStore } from 'redux';
//3.redux react-redux 모듈 설치 //npm -i react react-redux
//다른 프레임 워크에서도 redux를 사용하기에  react-redux 다음과 같이 명명할 수도 있다.

//5.reducer 생성 index.js로 이동
function reducer(currentState, action) {
  //첫번째 인자는 초기상태, 두번째 인자는 변경할 액션
  const newState = { ...currentState }; // 새로운 상태를 생성할 때 기존 상태를 불변하게 유지 하기 위해 spread 연산자 사용

  if (currentState === undefined) {
    return { number: 2 }; //초기상태를 반환
  }

  //   if (action.type === 'increment') {
  //     newState.number = currentState.number + 1;
  //   } else if (action.type === 'decrement') {
  //     newState.number = currentState.number - 1;
  //   }

  switch (action.type) {
    case 'increment':
      newState.number = currentState.number + 1;
      break;
    case 'decrement':
      newState.number = currentState.number - 1;
      break;
  }

  return newState; //변경된 상태를 반환
}

//4. 스토어에 저장할 상태를 export
export const store = createStore(reducer);
