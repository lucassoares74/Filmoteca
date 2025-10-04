import {  useContext, useState } from "react";
import { AppContext } from './contexts/AppContext';
import Navbar from './components/Navbar';


function App() {
  const { usuario} = useContext(AppContext);

  return (
    <div>
     <Navbar></Navbar>
    </div>
  );
}

export default App;
