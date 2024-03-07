import './App.css';
import React, { useState } from 'react';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const[alert, setAlert] = useState(null);
  const[mode, setMode] = useState('light')
  const controlSwitch  = () =>{
       if(mode === 'light'){
        setMode('dark')
        showAlert('Dark mode is enabled', 'success')
       }
       else{
        setMode('light')
        showAlert('Light mode is enabled', 'success' )
       }
  }
  
  const showAlert = (message, type) =>{
       setAlert({
        message:message,
        type:type
       })
       setTimeout(()=>{
        setAlert(null);
       }, 1500)
  }

  return (
    <>
    <BrowserRouter>
    <Navbar title = "Textutils" mode={mode} controlSwitch={controlSwitch}/>
    <Alert alert={alert}/>
    <Routes>
      <Route  exact path = "/"
      element={<Textform  mode={mode} showAlert={showAlert}/> }
      ></Route>

      <Route exact path = "/about" element={<About/>}>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
