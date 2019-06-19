import React from 'react';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar'
import './App.scss'

function App() {
  // window.onScroll=()=>{() => console.log('scroll:', window.scrollY)}
  return (
    <div className="App">
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
