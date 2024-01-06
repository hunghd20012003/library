
import { useState } from "react";
import axios from "axios";
import HomePage from "./HomePage";
import Login from "./Login";
import React from "react";
import AddBook from "./Book/AddBook";
import EditBook from "./Book/EditBook";
import LoanDetail from "./Book/LoanDetail";
import ManageLoan from "./Book/ManageLoan";
import {BrowserRouter, Route,Navigate , Routes} from 'react-router-dom'
import ManageBook from "./Book/ManageBook";
import PurchaseHistory from "./Plan/PurchaseHistory";
import Plan from "./Plan/Plan";
import AddUser from "./ManageUser/AddUser";
import ManageUser from "./ManageUser/ManageUser";
import AddNotification from '../components/Notification/AddNotification'
function App() {
	const [admin, setAdmin] = useState("");
    function changeAdmin(adminId){
       setAdmin(adminId);
	};
	return (
		<React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Login admin={admin} state={changeAdmin} />} />
        <Route path='/login' element={<Login admin={admin} state={changeAdmin}></Login>}> </Route>
        <Route path='/homepage' element={(admin!=="")?<HomePage admin={admin} state={changeAdmin}></HomePage>:<Navigate to='/login'></Navigate>}></Route>
        <Route path='/addbook' element={(admin!=="")?<AddBook admin={admin} state={changeAdmin}></AddBook>:<Navigate to='/login'></Navigate>}></Route>
        <Route path='/managebook/:bookId' element={(admin!=="")?<EditBook admin={admin} state={changeAdmin}></EditBook>:<Navigate to='/login'></Navigate>}></Route>
        <Route path="/managebook" element={(admin!=="")?<ManageBook admin={admin} state={changeAdmin}></ManageBook>:<Navigate to ='/login'></Navigate>}></Route>
        <Route path='/manageloan/:billID' element={(admin!=="")?<LoanDetail admin={admin} state={changeAdmin}></LoanDetail>:<Navigate to='/login'></Navigate>}></Route>
        <Route path='/manageloan' element={(admin!=="")?<ManageLoan admin={admin} state={changeAdmin}></ManageLoan>:<Navigate to='/login'></Navigate>}></Route>
        <Route path='/purchasehistory' element={(admin!=="")?<PurchaseHistory admin={admin} state={changeAdmin}></PurchaseHistory>:<Navigate to='/login'></Navigate>}></Route>
        <Route path='/plans' element={(admin!=="")?<Plan admin={admin} state={changeAdmin}></Plan>:<Navigate to='/login'></Navigate>}></Route>
        <Route path='/adduser' element={(admin!=="")?<AddUser admin={admin} state={changeAdmin}></AddUser>:<Navigate to='/login'></Navigate>}></Route>
        <Route path='/manageuser' element={(admin!=="")?<ManageUser admin={admin} state={changeAdmin}></ManageUser>:<Navigate to='/login'></Navigate>}></Route>
        <Route path='/addnotification' element={(admin!=="")?<AddNotification admin={admin} state={changeAdmin}></AddNotification>:<Navigate to='/login'></Navigate>}></Route>
      </Routes>
    </BrowserRouter>
    </React.StrictMode>
	);
}

export default App;