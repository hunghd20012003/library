import avatar from '../../img/koduck.png'
import { Link } from 'react-router-dom'
import Navigator from '../common/Navigator'
import InfoDashboard from './InfoDashboard'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {React,useEffect,useState} from "react"
import Footer from '../common/Footer'
const URL="http://localhost:5000/";
function TransactionHistory(pros){
     const navigate=useNavigate();
        const [plan, changePlan]=useState([]);
        useEffect(()=>{
            const getAllPlans=async()=>{
                try {
                    const res=await axios.post(`${URL}userInfors/getAllPlans`,{
                        params:{
                            userId:pros.user.id
                        }
                    });
                    changePlan(res.data);
                } catch (error) {
                    
                }
            };
            getAllPlans();
        },[]);

    return (
        <div>
            <Navigator user={pros.user}></Navigator>
        <main className="page">
        <section className="clean-block about-us">
            <div className="container containerUsser">
                <div className="row rowUserInfor">
                    <InfoDashboard state="class2" user={pros.user}></InfoDashboard>
                    <div className="col-md-6 col-xl-8">
                        <div className="divGD">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Ngày GD</th>
                                            <th>Gói dịch vụ</th>
                                            <th>Ngày kết thúc</th>
                                            <th>Trạng thái</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                      {
                                        plan.map((item)=>(
                                           <tr>
                                           <td>{item.startDate}</td>
                                            <td>{item.planName}</td>
                                            <td>{item.endDate}</td>
                                            <td>{item.status}</td>
                                           </tr>
                                        ))
                                      }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <Footer></Footer>
        </div>
    )
}
export default TransactionHistory