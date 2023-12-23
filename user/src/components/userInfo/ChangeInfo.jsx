import { Link } from "react-router-dom";
import avatar from '../../img/koduck.png'
import Navigator from "../common/Navigator";
import InfoDashboard from "./InfoDashboard";
import {React,useState,useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
const URL="http://localhost:5000/";

function ChangeInfo(pros){
    const navigate=useNavigate();
    const [userInfo, changeUserInfo]=useState({
        name:"",
        phone:"",
    })
    function update(e){
        changeUserInfo(previousState=>{
         return {...previousState, [e.target.name]:e.target.value}
        });
     };
     async function  onSubmit(e){
        e.preventDefault();
        try {
            const res= await axios.post(`${URL}userInfors/changeInfo`,{params: {
                userId:pros.user.id,
                name:userInfo.name,
                phone:userInfo.phone
            }});
            if(res.data==="ok"){
                alert("Đã cập nhật thông tin cá nhân");
                navigate("/main-info");
            }
            else{
                alert("Lỗi hệ thống, vui lòng thử lại sau");
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        if(pros.user!==null){
          console.log(pros.user);
          navigate("/change-info");
        }
      },[pros.user]);
  return (
    <div>
        <Navigator user={pros.user}></Navigator>
        <main className="page">
        <section className="clean-block about-us">
            <div className="container containerUsser">
                <div className="row rowUserInfor">
                        <InfoDashboard state="class3" user={pros.user}></InfoDashboard>
           
                    <div className="col-md-6 col-xl-8">
                        <div className="divChangeTT">
                            <div className="card shadow mb-3">
                                <div className="card-body">
                                    <form onSubmit={onSubmit}>
                                        <div className="row" style={{ marginBottom: 25, textAlign: "left" }}>
                                            <div className="col-sm-4 col-md-4 col-lg-3 col-xl-2 col-xxl-2"  style={{ display: "inline", textAlign: "center", marginBottom: 25 }}><img className="rounded-circle dmigmg" src={avatar} alt="ảnh" style={{ display: "inline", maxHeight: 110 }} /><br/><button className="btn btn-primary btn-sm btthayanh" id="photoBtn" type="button">Thay ảnh</button></div>
                                            <div className="col-sm-8 col-md-8 col-lg-9 col-xl-10 col-xxl-10 align-self-center">
                                                <div className="row">
                                                    <div className="col-md-12 text-start">
                                                        <div className="mb-3"><label className="form-label" htmlFor="username"><strong>Tên người dùng mới:</strong></label><input className="form-control" type="name" id="name" placeholder="Nguyễn Văn A"  name="name" value={userInfo.name} onChange={update} required="" /></div>
                                                    </div>
                                                    <div className="col-md-12 text-start">
                                                        <div className="mb-3"><label className="form-label" htmlFor="phone" ><strong>Số điện thoại mới:</strong></label><input className="form-control" type="text" placeholder="0375838482" name="phone" value={userInfo.phone} onChange={update} required="" /></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <p id="emailErrorMsg" className="text-danger"  style={{ display: "none" }}></p>
                                                <p id="passwordErrorMsg" className="text-danger"  style={{ display: "none" }}></p>
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
export default ChangeInfo;