
import avatar from '../img/koduck.png'
import axios from 'axios';
import {React, useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
const URL="http://localhost:5000/";
function Register(pros){
    // const registerWithGoogle = () => {
	// 	window.open(
	// 		`${URL}auth/google/library`,
	// 		"_self"
	// 	);
	// };
    // const registerWithFacebook=()=>{
    //     window.open(
    //         `${URL}auth/facebook/library`,
    //         "_self"
    //     );
    // };
    let navigate=useNavigate()
    const [userInfo,stateUserInfo]=useState({
        name:"",
        phone:"",
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
                    name:userInfo.name,
                    phone:userInfo.phone,
                    email:userInfo.email,
                    password:userInfo.password
                }});
                console.log(res);
                if(res.data.state==="oke"){
                    pros.state(res.data.userId);
                }
                else{
                    alert("Bạn đã có tài khoản, chuyển tới trang đăng nhập");
                }
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        }
    }
    useEffect(()=>{
        if(pros.user!==null){
          console.log(pros.user);
          navigate("/homepage")
        }
      },[pros.user]);
   return (
  <div className='page registration-page'>
     <section className="clean-block clean-form dark">
            <div className="container">
                <div className="block-heading">
                    <h2 className="text-info">Đăng ký</h2>
                    <p>Đăng ký tài khoản để có thể mượn sách và nhận những thông tin mới nhất về sách</p>
                </div>
                <form onSubmit={register}>
              
                    <div className="mb-3">
                        <p>Họ và tên</p><input className="form-control" type="name" name='name' onChange={changeInfo} value={userInfo.name}/>
                    </div>
                    <div className="mb-3">
                        <p>Số điện thoại</p><input className="form-control" name="phone" onChange={changeInfo} value={userInfo.phone}/>
                    </div>
                    <div className="mb-3">
                        <p>Email</p><input className="form-control item" name="email" type="email" id="email" data-bs-theme="light" onChange={changeInfo} value={userInfo.email}/>
                    </div>
                    <div className="mb-3">
                        <p>Nhập mật khẩu</p><input className="form-control item" type="password" id="password" data-bs-theme="light" placeholder="Password" name="password" onChange={changeInfo} value={userInfo.password}/>
                    </div>
                    <div className="mb-3">
                        <p>Nhập lại mật khẩu</p><input className="form-control item" type="password" id="password-1" data-bs-theme="light" placeholder="Password" name="password_repeat" onChange={changeInfo} value={userInfo.password_repeat}/>
                    </div>
                    <button className="btn btn-primary" type="submit">Đăng ký</button>
                </form>
            </div>
        </section>
  </div>
   );
}
export default  Register;