import Login from './Login'
import HomePage from './HomePage'
import Register from './Register'
import ForgotPassword from './ForgotPassword'
import ConfirmPassword from  './ConfirmPassword'
import { useState } from "react";
import React from 'react';
import axios from "axios";
import {BrowserRouter, Route,Navigate , Routes} from 'react-router-dom'
import CheckLogin from './CheckLogin';
function App() {
  const [resetPassword,stateresetPassword]=useState("");
  function changeResetPassword(email){
    stateresetPassword(email);
  }
  return (
    <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path='/:userID' element={<CheckLogin></CheckLogin>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/homepage" element={<HomePage></HomePage>}></Route>
        <Route path="/forgot-password" element={<ForgotPassword resetPassword={resetPassword} reset={changeResetPassword}></ForgotPassword>}></Route>
        <Route path='/reset-password' element={<ConfirmPassword resetPassword={resetPassword} reset={changeResetPassword}></ConfirmPassword>}></Route>
      </Routes>
    </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
