import Navigator from "../common/Navigator";
import avatar from '../../img/koduck.png'
import {React, useEffect,useState} from 'react'
import InfoDashboard from "./InfoDashboard";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const URL="http://localhost:5000/";
function MainInfo(pros){
    const navigate=useNavigate();
   const [info,changeInfo]=useState({
    name:"",
    phone:"",
    email:"",
    plan:"",
    endDate:""
   })
    useEffect(()=>{
        const getUser=async()=>{
            try {
                const res=await axios.post(`${URL}userInfors/getuserInfor`,{
                    params:{
                        userId:pros.user.id
                    }
                });
                changeInfo((prevInfo) => ({
                    ...prevInfo,
                    name: res.data.name,
                    phone: res.data.phone,
                    email: res.data.email,
                    plan: res.data.plan,
                    endDate: res.data.endDate
                  }));
            } catch (error) {
                
            }
        };
        getUser();
    },[]);
    useEffect(()=>{
        if(pros.user!==null){
          console.log(pros.user);
          navigate("/main-info")
        }
      },[pros.user]);
 return (
    <div>
        <Navigator user={pros.user}></Navigator>
    <main className="page">
        <section className="clean-block about-us">
            <div className="container containerUsser">
                <div className="row rowUserInfor">
                    <InfoDashboard state="class1" user={pros.user}></InfoDashboard>
                    <div className="col-md-6 col-xl-8">
                        <div className="border rounded-0 shadow-lg divuserInfor2">
                            <div className="divlor">
                                <div className="divEmail1" style={{ marginLeft: "1rem" }}><span className="emailUser"><strong>Email:</strong></span><span className="spanEmail1">{info.email}</span></div>
                                <div className="divEmail2"><span className="emailUser"><strong>Thẻ thành viên hiện tại:</strong></span><span className="spanEmail1">{info.plan}</span></div>
                                <div className="divEmail3"><span className="emailUser"><strong>Thời hạn:</strong></span><span className="spanEmail1"><strong><span style={{ color: "rgb(131, 151, 171)" }}>{info.endDate}</span></strong></span></div>
                            </div>
                        </div>
                        <div className="border rounded-0 shadow-lg divuserInfor1">
                            <div><img className="imginfor" src={avatar} alt="Ảnh" /></div>
                            <div><span className="spanname1">{info.name}</span></div>
                            <div><span className="spanname2">PHONE: {info.phone}</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    </div>
 )
}
export default MainInfo;