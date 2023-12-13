
import { useState } from "react";
import axios from "axios";
import HomePage from "./HomePage";
import Login from "./Login";
import Register from "../Register";
import React from "react";
import ForgotPassword from "./ForgotPassword";
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
function App() {
	const [user, setUser] = useState("");
    function changeUser(userId){
       setUser(userId);
	};
	return (
		<React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Login user={user} state={changeUser} />} />
        <Route path='/admin/login' element={<Login user={user} state={changeUser}></Login>}> </Route>
        <Route path='/register' element={<Register user={user}  state={changeUser}></Register>}></Route>
        <Route path='/admin/homepage' element={(user!=="")?<HomePage user={user} state={changeUser}></HomePage>:<Navigate to='/admin/login'></Navigate>}></Route>
        <Route path='/admin/addbook' element={(user!=="")?<AddBook user={user} state={changeUser}></AddBook>:<Navigate to='/login'></Navigate>}></Route>
        <Route path='/admin/managebook/:bookId' element={(user!=="")?<EditBook user={user} state={changeUser}></EditBook>:<Navigate to='/admin/login'></Navigate>}></Route>
        <Route path="/admin/managebook" element={(user!=="")?<ManageBook user={user} state={changeUser}></ManageBook>:<Navigate to ='/admin/login'></Navigate>}></Route>
        <Route path='/admin/manageloan/:billID' element={(user!=="")?<LoanDetail user={user} state={changeUser}></LoanDetail>:<Navigate to='/admin/login'></Navigate>}></Route>
        <Route path='/admin/manageloan' element={(user!=="")?<ManageLoan user={user} state={changeUser}></ManageLoan>:<Navigate to='/admin/login'></Navigate>}></Route>
        <Route path='/admin/purchasehistory' element={(user!=="")?<PurchaseHistory user={user} state={changeUser}></PurchaseHistory>:<Navigate to='/admin/login'></Navigate>}></Route>
        <Route path='/admin/plans' element={(user!=="")?<Plan user={user} state={changeUser}></Plan>:<Navigate to='/admin/login'></Navigate>}></Route>
        <Route path='/admin/adduser' element={(user!=="")?<AddUser user={user} state={changeUser}></AddUser>:<Navigate to='/admin/login'></Navigate>}></Route>
        <Route path='/admin/manageuser' element={(user!=="")?<ManageUser user={user} state={changeUser}></ManageUser>:<Navigate to='/admin/login'></Navigate>}></Route>
 
        <Route path="/forgot-password" element={<ForgotPassword></ForgotPassword>}></Route>
      </Routes>
    </BrowserRouter>
    </React.StrictMode>
	);
}

export default App;