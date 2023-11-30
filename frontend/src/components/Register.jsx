
import avatar from '../img/koduck.png'
import axios from 'axios';
import {React, useState} from 'react';
import { useNavigate } from 'react-router-dom';
const URL="http://localhost:5000/";
function Register(pros){
    const registerWithGoogle = () => {
		window.open(
			`${URL}auth/google/library`,
			"_self"
		);
	};
    const registerWithFacebook=()=>{
        window.open(
            `${URL}auth/facebook/library`,
            "_self"
        );
    };
    let navigate=useNavigate()
    const [userInfo,stateUserInfo]=useState({
        first_name:"",
        last_name:"",
        email:"",
        password:"",
        password_repeat:""
    })
    function changeInfo(e){
        stateUserInfo(pre=>{
            return {...pre,[e.target.name]:e.target.value}
        })
    }
    async function register(e){
        e.preventDefault();
        if(userInfo.password!==userInfo.password_repeat){
            alert("Mật khẩu không khớp");
        }
        else{
            try {
                const res= await axios.post(URL+"logins/register",{params: {
                    first_name:userInfo.first_name,
                    last_name:userInfo.last_name,
                    email:userInfo.email,
                    password:userInfo.password
                }});
                console.log(res);
                if(res.data.state==="oke"){
                    pros.state(res.data.userId);
                    navigate("/homepage");
                }
                else{
                    alert("Bạn đã có tài khoản, chuyển tới trang đăng nhập")
                }
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        }
    }
   return (
  <div  className="bg-gradient-primary">
<div className="container">
        <div className="card shadow-lg o-hidden border-0 my-5">
            <div className="card-body p-0">
                <div className="row">
                    <div className="col-lg-5 d-none d-lg-flex">
                        <div className="flex-grow-1 bg-register-image" style={{backgroundImage: "url(" + avatar+ ")"}}></div>
                    </div>
                    <div className="col-lg-7">
                        <div className="p-5">
                            <div className="text-center">
                                <h4 className="text-dark mb-4">Create an Account!</h4>
                            </div>
                            <form className="user" onSubmit={register}>
                                <div className="row mb-3">
                                    <div className="col-sm-6 mb-3 mb-sm-0"><input className="form-control form-control-user" type="text" id="exampleFirstName" placeholder="First Name" name="first_name" value={userInfo.first_name} onChange={changeInfo}/></div>
                                    <div className="col-sm-6"><input className="form-control form-control-user" type="text" id="exampleLastName" placeholder="Last Name" name="last_name" value={userInfo.last_name} onChange={changeInfo}/></div>
                                </div>
                                <div className="mb-3"><input className="form-control form-control-user" type="email" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Email Address" name="email" value={userInfo.email} onChange={changeInfo}/></div>
                                <div className="row mb-3">
                                    <div className="col-sm-6 mb-3 mb-sm-0"><input className="form-control form-control-user" type="password" id="examplePasswordInput" placeholder="Password" name="password" value={userInfo.password} onChange={changeInfo}/></div>
                                    <div className="col-sm-6"><input className="form-control form-control-user" type="password" id="exampleRepeatPasswordInput" placeholder="Repeat Password" name="password_repeat" value={userInfo.password_repeat} onChange={changeInfo}/></div>
                                </div>
                                <button className="btn btn-primary d-block btn-user w-100" type="submit">Register Account</button>
                                
                                <hr/>
                                <a className="btn btn-primary d-block btn-google btn-user w-100 mb-2" role="button" onClick={registerWithGoogle}><i className="fab fa-google"></i>&nbsp; Register with Google</a>
                                <a className="btn btn-primary d-block btn-facebook btn-user w-100" role="button" onClick={registerWithFacebook}><i className="fab fa-facebook-f"></i>&nbsp; Register with Facebook</a>
                                <hr/>
                                
                            </form>
                            <div className="text-center"><a className="small" href="forgot-password.html">Forgot Password?</a></div>
                            <div className="text-center"><a className="small" href="/login">Already have an account? Login!</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
   );
}
export default  Register;