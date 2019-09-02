import React from 'react';

import { Provider } from 'react-redux'
import store from './store'

import TodoApp from './containers/TodoApp'

import './App.css';

function App() {
  return (
      <Provider store={ store }>
          <div className="App">
              <TodoApp />
          </div>
      </Provider>
  );
}

export default App;
