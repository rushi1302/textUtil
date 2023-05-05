// import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link,
} from "react-router-dom";


import './App.css';
import Navbar from './components/Navbar';
import React,{useState} from 'react'
import TextForm from './components/TextForm'
import Alert from './components/Alert';

import About from './components/About'
// Block-SmbShareAccess




function App() {
  const[mode,setMode] = useState("light")
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been set","success");
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been set","success");
    }
  }

  const [alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
    
  }

  return (
    <>
    <Router>
    <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <Routes>
          <Route path="/About" element={<About mode={mode}/>}/>
        
          <Route path="/" element={<TextForm heading="Enter Your Text here" showAlert={showAlert} mode={mode}/>}/>
          {/* <Route element={<TextForm heading="Enter Your Text here" showAlert={showAlert} mode={mode}}/> */}
    </Routes>
    <div className="container">
    </div>
    </Router>
   
    </>
  );
}

export default App;
