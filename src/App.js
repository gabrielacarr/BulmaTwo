import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import PropsExample from './component/PropsExample';
import FormField from './component/FormField'; 

function App() {
  return (
    <div className="App">
      
      <Navbar/> 
      <PropsExample prop1="Brie" prop2="Juan" prop3="Niko"/>
      <FormField/>
      
    </div>
  );
}

export default App;

// create prop, place inside chevrons Example (<PropName prop1="value"/>)