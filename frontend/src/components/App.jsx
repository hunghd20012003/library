
import { useEffect, useState } from "react";
import axios from "axios";
import HomePage from "./HomePage";
import Login from "./Login";
import Register from "./Register";
import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {
	const [user, setUser] = useState(null);

	const getUser = async () => {
		try {
			const url = `${process.env.SERVER_URL}auth/login/success`;
			const { data } = await axios.get(url, { withCredentials: true });
			setUser(data.user._json);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getUser();
	}, []);

	return (
		<React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path='/login' element={<Login></Login>}> </Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/homepage' element={<HomePage></HomePage>}></Route>

      </Routes>
    </BrowserRouter>
    </React.StrictMode>
	);
}

export default App;