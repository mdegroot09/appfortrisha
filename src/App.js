import React from 'react';
import Navbar from './Components/Navbar/Navbar'
import './App.scss'
import {Provider} from 'react-redux'
import store from './redux/store'
import {HashRouter} from 'react-router-dom'
import router from './router'

function App() {
  // Hide showing dropdown navbar menu on any non-navbar button click
  let showHideMenu = () => {
    let showMenu = document.getElementsByClassName('showMenu')[0]
    let homeMainDiv = document.getElementsByClassName('homeMainDiv')[0]
    if (showMenu){
      showMenu.className = 'navMainInit hideMenu'
      setTimeout(() => {
        homeMainDiv.style.zIndex = 0
      }, 250);
    } 
  }

  return (
    <Provider store={store}>
      <HashRouter>
        <div className="App">
          <Navbar/>
          <div className='App' onClick={() => showHideMenu()}>
            {router}
          </div>
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
