import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import PropsExample from './component/PropsExample';

function App() {
  return (
    <div className="App">
      
      <Navbar/> 
      <PropsExample prop1="Brie" prop2="Juan" prop3="Niko"/>
      
    </div>
  );
}

export default App;

// create prop, place inside chevrons Example (<PropName prop1="value"/>)