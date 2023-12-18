import { useParams,redirect,useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import avatar from '../img/koduck.png'
import Navigator from './Navigator';
import HomePage from './HomePage';
import Login from './Login';
function CheckLogin(){
    const { userID } = useParams();
    let navigate=useNavigate();
    useEffect(()=>{
       console.log(userID);
        if(userID){
            navigate("/homepage");
        }
        else navigate('/login');
},[]);
  return <div>

  </div>
} 
export default CheckLogin