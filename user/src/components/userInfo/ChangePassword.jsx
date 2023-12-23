import Navigator from "../common/Navigator"
import InfoDashboard from "./InfoDashboard"
import {React, useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
const URL="http://localhost:5000/";
function ChangePassword(pros){
    const navigate=useNavigate();
    const [password, changeUserPassword]=useState({
        oldPassword:"",
        newPassword:"",
        repeatNewPassword:"",
    })
    function update(e){
        changeUserPassword(previousState=>{
         return {...previousState, [e.target.name]:e.target.value}
        });
     };
     async function  onSubmit(e){
        e.preventDefault();
        if(password.newPassword!==password.repeatNewPassword){
            alert("Mật khẩu nhập lại chưa chính xác!");
        }
        else{
            try {
                const res= await axios.post(`${URL}userInfors/changePassword`,{params: {
                    userId:pros.user.id,
                    oldPassword:password.oldPassword,
                    newPassword:password.newPassword
                }});
                console.log(res.data)
                console.log(password);
                if(res.data==="ok"){
                    alert("Đã cập nhật thông tin cá nhân");
                    navigate("/main-info");
                }
                else{
                    alert("Mật khẩu hiện tại không chính xác");
                }
            } catch (error) {
                console.log(error);
            }
        }
       
    }

    return (
        <div>
            <Navigator user={pros.user}></Navigator>
            <main className="page">
        <section className="clean-block about-us">
            <div className="container containerUsser">
                <div className="row rowUserInfor">
                   <InfoDashboard state="class4"  user={pros.user}></InfoDashboard>
                    <div className="col-md-6 col-xl-8">
                        <div className="divChangeTT">
                            <div className="card shadow mb-3">
                                <div className="card-body">
                                    <form onSubmit={onSubmit}>
                                        <div className="row" style={{ marginBottom: 25, textAlign: "left" }}>
                                            <div className="col-md-6 text-start">
                                                <div className="mb-3"><label className="form-label" htmlFor="username"><strong>Mật khẩu hiện tại</strong></label><input className="form-control" type="password" id="password" placeholder="Password" name="oldPassword" value={password.oldPassword} onChange={update}/></div>
                                            </div>
                                            <div className="col-md-6 text-start"></div>
                                            <div className="col-md-6 text-start">
                                                <div className="mb-3"><label className="form-label" htmlFor="username="><strong>Mật khẩu mới</strong></label><input className="form-control" type="password" id="verifyPassword-2" placeholder="Password" name="newPassword" value={password.newPassword} onChange={update}/></div>
                                            </div>
                                            <div className="col-md-6 text-start"></div>
                                            <div className="col-md-6 text-start">
                                                <div className="mb-3"><label className="form-label" htmlFor="username"><strong>Nhập lại mật khẩu mới</strong></label><input className="form-control" type="password" id="verifyPassword-3" placeholder="Password" name="repeatNewPassword" value={password.repeatNewPassword} onChange={update} /></div>
                                            </div>
                                            <div className="col-md-12" style={{ textAlign: "right", marginTop: 5 }}><button className="btn btn-primary btn-sm" id="submitBtn" type="submit" onClick={onSubmit}>Save Settings</button></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
        </div>
    )
}
export default ChangePassword