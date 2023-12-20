import Login from './Login'
import HomePage from './HomePage'
import Register from './Register'
import ForgotPassword from './ForgotPassword'
import ConfirmPassword from  './ConfirmPassword'
import MainInfo from './userInfo/MainInfo'
import { useState } from "react";
import React from 'react';
import { useEffect } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom'
import {BrowserRouter, Route,Navigate , Routes} from 'react-router-dom'
const URL="http://localhost:5000/";
function App() {
  const [user, setUser] = useState(null);
  
	const getUser = async () => {
		try {
			const url = URL+`auth/login/success`;
			const { data } = await axios.get(url, { withCredentials: true });
      setUser(data.user);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
    getUser();
	}, []);
  const [resetPassword,stateresetPassword]=useState("");
  function changeResetPassword(email){
    stateresetPassword(email);
  }
  return (
    <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={user?<Navigate to="/homepage"></Navigate>:<Navigate to="/login"></Navigate>}></Route>
        <Route path="/login" element={<Login user={user} state={setUser}></Login>}></Route>
        <Route path="/register" element={<Register user={user} state={setUser}></Register>}></Route>
        <Route path="/homepage" element={user?<HomePage user={user}></HomePage>:<Navigate to="/login"></Navigate>}></Route>
        <Route path='/main-info' element={user?<MainInfo user={user}></MainInfo>:<Navigate to="/login"></Navigate>}></Route>
        <Route path="/forgot-password" element={<ForgotPassword resetPassword={resetPassword} reset={changeResetPassword}></ForgotPassword>}></Route>
        <Route path='/reset-password' element={<ConfirmPassword resetPassword={resetPassword} reset={changeResetPassword}></ConfirmPassword>}></Route>  
      </Routes>
    </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
