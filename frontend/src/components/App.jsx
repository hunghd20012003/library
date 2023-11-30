
import { useState } from "react";
import axios from "axios";
import HomePage from "./HomePage";
import Login from "./Login";
import Register from "./Register";
import React from "react";
import {BrowserRouter, Route,Navigate , Routes} from 'react-router-dom'
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

      </Routes>
    </BrowserRouter>
    </React.StrictMode>
	);
}

export default App;