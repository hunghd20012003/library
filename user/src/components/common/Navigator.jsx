import avatar from "../../img/koduck.png"
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios'
function Navigator(pros){
    const URL="http://localhost:5000/";

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [notifications, setNotifications] = useState([]);
    const [users, setUsers] = useState([]);
    const [selectedNotification, setSelectedNotification] = useState(null);

    const handleNotificationClick = (notificationData) => {
        setSelectedNotification(notificationData);
        setModalIsOpen(true);
      };
    
      const closeModal = () => {
        setModalIsOpen(false);
      };
        const logout = () => {
            if(pros.user.googleId!== ""||pros.user.facebookId!=="")
            {
                window.open(`${URL}auth/logout`, "_self");
            }
           
        };
    useEffect(() => {
        const fetchDataFromApi = async () => {
            const response = await axios.get(URL+"notifications/listnotification");
            try {
                setNotifications(response.data.reverse());
            } catch (error) {
                console.log(error);
            }
        }
        fetchDataFromApi();
    }, []);

    const renderNotifications = () => {
       
        return notifications.slice(0,5)
                .map((notificationData, index)=>(
              <><a  onClick={() => handleNotificationClick(notificationData)} className="dropdown-item d-flex align-items-center" href="#" >
                        <div className="me-3">
                            <div className="bg-warning icon-circle"><i className="fas fa-exclamation-triangle text-white"></i></div>
                        </div>
                        <div><span className="small text-gray-500">{notificationData.date}</span>
                            <p>{notificationData.title}</p>
                        </div>
                    </a>
                    <Modal
                        show={modalIsOpen} onHide={closeModal}
                    >
                        {selectedNotification && (
                        <div className="notification-details">
                            <h2>{selectedNotification.title}</h2>
                            <pre>{selectedNotification.content}</pre>
                            <button onClick={closeModal}>Close</button>
                        </div>
                        )}
                    </Modal>
                    </>
                ));
      };

    return (
        <nav className="navbar navbar-expand-lg fixed-top bg-body clean-navbar navbar-light">
        <div className="container"><Link className="navbar-brand logo" to="/homepage"><strong>THƯ VIỆN SÁCH</strong></Link><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navcol-1">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <div></div><Link className="nav-link active" to="/homepage">Home</Link>
                    </li>
                    <li className="nav-item"><a className="nav-link" href="about-us.html">ABOUT US</a></li>
                    <li className="nav-item"><Link className="nav-link" to="/book">SÁCH</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/muathetv">THẺ THÀNH VIÊN</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/cart">GIỎ HÀNG&nbsp;<i className="fa fa-shopping-cart text-primary"></i></Link></li>
                    <li className="nav-item dropdown no-arrow mx-1">
                        <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><span className="badge bg-danger badge-counter">3+</span><i className="fas fa-bell fa-fw"></i></a>
                            <div className="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
                                <h6 className="dropdown-header">alerts center</h6>
                                {renderNotifications()}
                                <a className="dropdown-item d-flex align-items-center" href="#">
                                    <div className="me-3">
                                        <div className="bg-warning icon-circle"><i className="fas fa-exclamation-triangle text-white"></i></div>
                                    </div>
                                    <div><span className="small text-gray-500">December 2, 2019</span>
                                        <p>Spending Alert: We've noticed unusually high spending for your account.</p>
                                    </div>
                                </a><a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item dropdown no-arrow mx-1">
                        <div className="nav-item dropdown">
                        <a className="dropdown-toggle dropdowninfor" aria-expanded="false" data-bs-toggle="dropdown" href="#">{pros.user.name}&nbsp;
                        <img src={pros.user.avatar||avatar} /></a>
                            <div className="dropdown-menu menusize"><Link className="dropdown-item fontItemUsser" to="/main-info">Thông tin cá nhân</Link>
                            {(pros.user.googleId===""&&pros.user.facebookId==="")?<a className="dropdown-item fontItemUsser"  href="/login"><i className="fa fa-sign-out"></i>&nbsp;Đăng xuất</a>:
                            <a className="dropdown-item fontItemUsser" onClick={logout}><i className="fa fa-sign-out"></i>&nbsp;Đăng xuất</a>}
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
}
export default Navigator;