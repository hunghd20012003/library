import Login from './Login'
import HomePage from './HomePage'
import Register from './Register'
import ForgotPassword from './ForgotPassword'
import ConfirmPassword from  './ConfirmPassword'
import MainInfo from './userInfo/MainInfo'
import TransactionHistory from './userInfo/TransactionHistory'
import ChangeInfo from './userInfo/ChangeInfo'
import ChangePassword from './userInfo/ChangePassword'
import { useState } from "react";
import React from 'react';
import { useEffect } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom'
import {BrowserRouter, Route,Navigate , Routes} from 'react-router-dom'
import TheTvBac from './buyCard/TheTvBac'
import MuaTheTv from './buyCard/MuaTheTv'
import GioHang from  './book/GioHang'
import Sach from './book/Sach'
import XemChiTiet from './book/XemChiTiet'
const URL="http://localhost:5000/";
function App() {
  const [user, setUser] = useState(null);
	const getUser = async () => {
		try {
			const url = URL+`auth/login/success`;
			const { data } = await axios.get(url, { withCredentials: true });
      setUser(data.user);
      console.log(user);
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
        <Route path='/transaction-history' element={user?<TransactionHistory user={user}></TransactionHistory>:<Navigate to="/login"></Navigate>}></Route>
        <Route path='/change-info' element={user?<ChangeInfo user={user}></ChangeInfo>:<Navigate to='/login'></Navigate>}></Route>
        <Route path='/muathetv' element={(user)?<MuaTheTv user={user} ></MuaTheTv>:<Navigate to='/login'></Navigate>}></Route>
        <Route path='/detail-purchase' element={(user)?<TheTvBac user={user} ></TheTvBac>:<Navigate to='/login'></Navigate>}></Route>
        <Route path='/cart' element={(user)?<GioHang user={user} ></GioHang>:<Navigate to='/login'></Navigate>}></Route>
        <Route path='/book' element={(user)?<Sach user={user} ></Sach>:<Navigate to='/login'></Navigate>}></Route>
        <Route path='/book-detail/:bookId' element={(user)?<XemChiTiet user={user} ></XemChiTiet>:<Navigate to='/login'></Navigate>}></Route>
        <Route path='/change-password' element={user?<ChangePassword user={user}></ChangePassword>:<Navigate to='/login'></Navigate>}></Route>
        <Route path="/forgot-password" element={<ForgotPassword user={user} resetPassword={resetPassword} reset={changeResetPassword}></ForgotPassword>}></Route>
        <Route path='/reset-password' element={<ConfirmPassword user={user} resetPassword={resetPassword} reset={changeResetPassword}></ConfirmPassword>}></Route>  
      </Routes>
    </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
