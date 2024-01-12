import { Link } from "react-router-dom";
import avatar from '../../img/koduck.png'
import {React, useState,useEffect} from 'react'
import Footer from "../common/Footer";
function InfoDashboard(pros){
    const classOne="border rounded-pill border-3 shadow nav-item-user-1"
    const classTwo="bg-warning-subtle border rounded-pill border-3 shadow nav-item-user-1"
    const [colour,setColour]=useState({
        class1:classTwo,
        class2:classOne,
        class3:classOne,
        class4:classOne
    })
    function changeColour(){
        if(pros.state==="class1"){
            setColour({
                class1:classTwo,
                class2:classOne,
                class3:classOne,
                class4:classOne
            })
        }
        if(pros.state==="class2"){
            setColour({
                class1:classOne,
                class2:classTwo,
                class3:classOne,
                class4:classOne
            })
        }
        if(pros.state==="class3"){
            setColour({
                class1:classOne,
                class2:classOne,
                class3:classTwo,
                class4:classOne
            })
        }
        if(pros.state==="class4"){
            setColour({
                class1:classOne,
                class2:classOne,
                class3:classOne,
                class4:classTwo
            })
        }
    }
    useEffect(()=>{
     changeColour();
    },[])
    return (
        <div className="col-md-6 col-xl-3 col1">
        <div className="sidenav-header"><Link className="navbar-brand m-0" to="/main-info"><img className="navbar-brand-img h-100 w-15" src={pros.user.avatar||avatar} alt='Ảnh' /><span className="ms-2 font-weight-bolder">{pros.user.name}</span></Link><span><br/><br/></span>
            <ul className="navbar-nav">
                <li className={colour.class1} ><Link className="nav-link active" to="/main-info"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-house-fill active icon icon-shape icon-sm shadow border-radius-md text-center me-2 d-flex align-items-center justify-content-center_1">
                            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"></path>
                            <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"></path>
                        </svg>
                        <div className="divcayvl"  ><span className="nav-link-text ms-1">Trang chủ</span></div>
                    </Link></li>
                <li className={colour.class2}  ><Link className="nav-link active"  to="/transaction-history"><i className="fas fa-money-bill-wave active icon icon-shape icon-sm shadow border-radius-md text-center me-2 d-flex align-items-center justify-content-center_1"></i>
                        <div className="divcayvl" ><span className="nav-link-text ms-1" >Lịch sử GD</span></div>
                    </Link></li>
                <li className={colour.class3} ><Link className="nav-link active" to="/change-info"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-telephone-fill active icon icon-shape icon-sm shadow border-radius-md text-center me-2 d-flex align-items-center justify-content-center_1">
                            <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
                        </svg>
                        <div className="divcayvl"><span className="nav-link-text ms-1" >Thay đổi thông tin</span></div>
                    </Link></li>
                {(pros.user.googleId=="" &&pros.user.facebookId=="")?( <li className={colour.class4} ><Link className="nav-link active" to="/change-password"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-shield-lock-fill active icon icon-shape icon-sm shadow border-radius-md text-center me-2 d-flex align-items-center justify-content-center_1">
                            <path fillRule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5z"></path>
                        </svg>
                        <div className="divcayvl"><span className="nav-link-text ms-1">Đổi mật khẩu</span></div>
                    </Link></li>):null}
            </ul>
        </div>
    </div>
    ) 
}
export default InfoDashboard;