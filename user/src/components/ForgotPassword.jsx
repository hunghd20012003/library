
import avatar from '../img/koduck.png'
import {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const URL="http://localhost:5000/";
function ForgotPassword(pros){
    const navigate=useNavigate();
    const [email, stateEmail]=useState("");
    function update(e){
        e.preventDefault();
     stateEmail(e.target.value);
     };
    async function forgotPassword(e){
        e.preventDefault();
        try {
            const res= await axios.post(URL+"logins/forgot-password",{params: {
                email:email,
            }});
            console.log(res);
            if(res.data.status==="User Not Exists!!")alert("Tài khoản chưa được đăng ký");
            else{
              pros.reset(email);
              navigate("/reset-password");
            }
        } catch (error) {
            console.log(error);
            alert("Server đang bị lỗi, vui lòng thử lại sau");
        }
    }
    return (
        <div className="page contact-us-page">
    <section className="clean-block clean-form dark">
            <div className="container">
                <div className="block-heading">
                    <h2 className="text-info">Quên mật khẩu</h2>
                </div>
                <form onSubmit={forgotPassword}>
                    <div className="mb-3">
                        <p>Nhập địa chỉ email đăng ký</p><input className="form-control item" type="email" id="email" data-bs-theme="light" name='email' value={email} onChange={update} />
                    </div><button className="btn btn-primary" type="submit">Gửi mã xác nhận</button>
                </form>
            </div>
        </section>
        </div>
    );
}
export default ForgotPassword;