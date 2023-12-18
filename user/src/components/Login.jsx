
import React from "react";
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import avatar from "../img/koduck.png"
const URL="http://localhost:5000/";
function Login(){
        const loginWithGoogle = () => {
            window.open(
                `${URL}auth/google/library`,
                "_self"
            );
        };
    const loginWithFacebook=()=>{
        console.log("abdlkjd");
        window.open(
            `${URL}auth/facebook/library`,
            "_self"
        );
    }
    let navigate=useNavigate();
    const [user, stateUser]=useState({
       email:"",
       password:""
    });
    function update(e){
       stateUser(previousState=>{
        return {...previousState, [e.target.name]:e.target.value}
       });
    };
    async function  onLogin(e){
        e.preventDefault();
        try {
            const res= await axios.post(URL+"logins/login",{params: {
                email:user.email,
                password:user.password
            }});
            if(res.data.state==="ok"){
                navigate("/homepage");
            }
            else{
                alert("Mật khẩu không chính xác hoặc tài khoản chưa đăng kí");
            }
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="page login-page">
            <section className="clean-block clean-form dark">
            <div className="container">
                <div className="block-heading">
                    <h2 className="text-info">Đăng nhập</h2>
                    <p></p>
                </div>
                <form onSubmit={onLogin}>
                    <div className="mb-3">
                        <p>Email</p><input className="form-control item" type="email" id="email" data-bs-theme="light" name="email" value={user.email} onChange={update} />
                    </div>
                    <div className="mb-3">
                        <p>Password</p><input className="form-control" type="password" id="password" data-bs-theme="light" name="password" value={user.password} onChange={update} />
                    </div>
                    <div className="mb-3">
                        <div className="form-check"><input className="form-check-input" type="checkbox" id="checkbox" data-bs-theme="light" /><label className="form-check-label" htmlFor="checkbox">Remember me</label></div>
                    </div>
                    <div><a className="btn btn-primary" type="submit" onClick={onLogin} >Đăng nhập</a>
                    <span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></div>
                    
                    <a className="btn btn-primary text-bg-success" role="button" onClick={loginWithFacebook}><i className="fa fa-facebook" ></i>Đăng nhập với Facebook</a>
                    <a className="btn btn-primary d-block btn-google btn-user w-100 mb-2" role="button"  onClick={loginWithGoogle}><i className="fab fa-google"></i>&nbsp; Login with Google</a><span>&nbsp; &nbsp;&nbsp;</span>
                    <div className="m-auto"><a href="quenPass.html">Quên mật khẩu?</a></div>
                    <div className="m-auto">
                        <p>Nếu bạn chưa có tài khoản -&gt; đăng ký</p>
                    </div>
                    <div className="m-auto"><a className="btn btn-info link-light" role="button" href="dangKy.html">Đăng ký</a></div>
                </form>
            </div>
        </section>
        </div>
    );
}
export default Login;