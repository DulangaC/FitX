
import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Authentication from './pages/Authentication/Authentication';
import HomePage from './pages/Authentication/HomePage/Home';
import Register from './pages/Authentication/Register';
import Login from './pages/Authentication/Login';

function App() {
  return (
    <div className="">

      <Routes>
         <Route path = '/*' element={<Authentication/>} /> 
        <Route path = '/home' element={<HomePage/>} />
        {/* <Route path = '/register' element={<Register/>} />
        <Route path = '/login' element={<Login/>} /> */}


      </Routes>

      
     
     
    </div>
  );
}

export default App;
