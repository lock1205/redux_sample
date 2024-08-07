import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//6. provider와 store 경로를 임포트
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 7.Provider의 속성으로 store를 저장하여 App 컴포넌트를 감싼다 */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
