
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
        <Route path='/login' element={<Login user={user} state={changeUser}></Login>}> </Route>
        <Route path='/register' element={<Register user={user}  state={changeUser}></Register>}></Route>
        <Route path='/homepage' element={(user!=="")?<HomePage user={user} state={changeUser}></HomePage>:<Navigate to='/login'></Navigate>}></Route>
        <Route path='/addbook' element={(user!=="")?<AddBook user={user} state={changeUser}></AddBook>:<Navigate to='/login'></Navigate>}></Route>
        <Route path='/managebook/:bookId' element={(user!=="")?<EditBook user={user} state={changeUser}></EditBook>:<Navigate to='/login'></Navigate>}></Route>
        <Route path="/managebook" element={(user!=="")?<ManageBook user={user} state={changeUser}></ManageBook>:<Navigate to ='/login'></Navigate>}></Route>
        <Route path='/manageloan/:billID' element={(user!=="")?<LoanDetail user={user} state={changeUser}></LoanDetail>:<Navigate to='/login'></Navigate>}></Route>
        <Route path='/manageloan' element={(user!=="")?<ManageLoan user={user} state={changeUser}></ManageLoan>:<Navigate to='/login'></Navigate>}></Route>
        <Route path='/purchasehistory' element={(user!=="")?<PurchaseHistory user={user} state={changeUser}></PurchaseHistory>:<Navigate to='/login'></Navigate>}></Route>
        <Route path='/plans' element={(user!=="")?<Plan user={user} state={changeUser}></Plan>:<Navigate to='/login'></Navigate>}></Route>

        <Route path="/forgot-password" element={<ForgotPassword></ForgotPassword>}></Route>
      </Routes>
    </BrowserRouter>
    </React.StrictMode>
	);
}

export default App;