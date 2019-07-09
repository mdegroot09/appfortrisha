import React from 'react';
import Navbar from './Components/Navbar/Navbar'
import './App.scss'
import {Provider} from 'react-redux'
import store from './redux/store'
import {HashRouter} from 'react-router-dom'
import router from './router'

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="App">
          <Navbar/>
          {router}
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
