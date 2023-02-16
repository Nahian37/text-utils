import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled", "success");
    }else{
      setMode('dark');
      document.body.style.backgroundColor='#2F2E2E';//'black';
      showAlert("Dark mode has been enabled", "success");
    }
  }
  return (
    <>
    <BrowserRouter>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below"  mode={mode}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
