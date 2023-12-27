
import React from "react";
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


function AddNotification(){
    const URL="http://localhost:5000/";
    const font_size = {
        fontSize: '13px',
      };

    const padding_left = {
        paddingLeft: '30px',
      };

    const margin_top = {
        marginTop: '12px',
    };

    const margin_left_top = {
        marginLeft: '15px',
        marginTop: '15px',
    };
    const buttonStyle = {
        border: 'none',
        padding: '0px 0px',
    };

    const [notification, setNotification] = useState({
        title: '',
        content:'',
    });

    const update= (event, field) => {
        setNotification({ ...notification, [field]: event.target.value });

    };

    const onUpdate = async (event) => {
        try {
            const res = await axios.post(URL+"addnotifications/addnotification",{params: {
                title: notification.title,
                content: notification.content,
            }});
            if(res.data=="oke"){
                alert("Thêm thành công");
            }
            console.log(res.data);
        } catch (error) {
            alert("Có lỗi");
            console.log(error);
        }
    }

    return (
        <div id="page-top">
            <div id="wrapper">
        <nav class="navbar align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0 navbar-dark">
            <div class="container-fluid d-flex flex-column p-0"><a class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
                    <div class="sidebar-brand-icon rotate-n-15"><i class="fas fa-laugh-wink"></i></div>
                    <div class="sidebar-brand-text mx-3"><span>Library</span></div>
                </a>
                <hr class="sidebar-divider my-0"/>
                <ul class="navbar-nav text-light" id="accordionSidebar">
                <li className="nav-item"><a className="nav-link" href="index.html"><i className="fas fa-tachometer-alt"></i><span>Dashboard</span></a></li>
                    <li className="nav-item dropdown"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><i className="fas fa-book-open" style={font_size}></i>&nbsp;Book Management</a>
                        <div className="dropdown-menu"><a className="dropdown-item" href="add-book.html" style={padding_left}><i className="fas fa-plus"></i>&nbsp;Add new</a><a className="dropdown-item" href="manage-book.html" style={padding_left}><i className="fas fa-bars"></i>&nbsp;Manage all</a></div>
                    </li>
                    <li className="nav-item dropdown"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><i className="fas fa-users" style={font_size}></i>&nbsp;Manage User</a>
                        <div className="dropdown-menu"><a className="dropdown-item" href="add-user.html" style={padding_left}><i className="fas fa-plus"></i>&nbsp;Add new</a><a className="dropdown-item" href="/manageuser" style={padding_left}><i className="fas fa-bars"></i>&nbsp;Manage all</a></div>
                    </li>
                    <li className="nav-item dropdown"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><i className="fas fa-book-reader" style={font_size}></i>&nbsp;Books Loan</a>
                        <div className="dropdown-menu"><a className="dropdown-item" href="manage-loan.html" style={padding_left}><i className="fas fa-bars"></i>&nbsp;Manage all</a></div>
                    </li>
                    <li className="nav-item dropdown"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><i className="fas fa-dollar-sign" style={font_size}></i>&nbsp;Subscriptions</a>
                        <div className="dropdown-menu"><a className="dropdown-item" href="plans.html" style={padding_left}><i className="fas fa-plus"></i>&nbsp;Plans</a><a className="dropdown-item" href="purchase-history.html" style={padding_left}><i className="fas fa-bars"></i>&nbsp;Purchase History</a></div>
                    </li>
                    <li class="nav-item"><a class="nav-link" href="add-notification.html"><i class="icon ion-android-notifications"></i>&nbsp;Notification<span></span></a></li>
                    <li class="nav-item"></li>
                    <li class="nav-item"></li>
                    <li class="nav-item"><a class="nav-link" href="../register.html"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-box-arrow-right">
                                <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"></path>
                                <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"></path>
                            </svg><span>&nbsp;Logout</span></a></li>
                </ul>
                <div class="text-center d-none d-md-inline"><button class="btn rounded-circle border-0" id="sidebarToggle" type="button"></button></div>
            </div>
        </nav>
        <div class="d-flex flex-column" id="content-wrapper">
            <div id="content">
                <nav class="navbar navbar-expand bg-white shadow mb-4 topbar static-top navbar-light">
                    <div class="container-fluid">
                        <form class="d-none d-sm-inline-block me-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search">
                            <div class="input-group"></div>
                        </form>
                        <ul class="navbar-nav flex-nowrap ms-auto">
                            <li class="nav-item dropdown d-sm-none no-arrow"><a class="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><i class="fas fa-search"></i></a>
                                <div class="dropdown-menu dropdown-menu-end p-3 animated--grow-in" aria-labelledby="searchDropdown">
                                    <form class="me-auto navbar-search w-100">
                                        <div class="input-group"><input class="bg-light form-control border-0 small" type="text" placeholder="Search for ..."/>
                                            <div class="input-group-append"><button class="btn btn-primary py-0" type="button"><i class="fas fa-search"></i></button></div>
                                        </div>
                                    </form>
                                </div>
                            </li>
                            <li class="nav-item dropdown no-arrow mx-1">
                                <div class="nav-item dropdown no-arrow"><a class="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><span class="badge bg-danger badge-counter">3+</span><i class="fas fa-bell fs-5 fa-fw"></i></a>
                                    <div class="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
                                        <h6 class="dropdown-header">alerts center</h6><a class="dropdown-item d-flex align-items-center" href="#">
                                            <div class="me-3">
                                                <div class="bg-primary icon-circle"><i class="fas fa-file-alt text-white"></i></div>
                                            </div>
                                            <div><span class="small text-gray-500">December 12, 2019</span>
                                                <p>A new monthly report is ready to download!</p>
                                            </div>
                                        </a><a class="dropdown-item d-flex align-items-center" href="#">
                                            <div class="me-3">
                                                <div class="bg-success icon-circle"><i class="fas fa-donate text-white"></i></div>
                                            </div>
                                            <div><span class="small text-gray-500">December 7, 2019</span>
                                                <p>$290.29 has been deposited into your account!</p>
                                            </div>
                                        </a><a class="dropdown-item d-flex align-items-center" href="#">
                                            <div class="me-3">
                                                <div class="bg-warning icon-circle"><i class="fas fa-exclamation-triangle text-white"></i></div>
                                            </div>
                                            <div><span class="small text-gray-500">December 2, 2019</span>
                                                <p>Spending Alert: We've noticed unusually high spending for your account.</p>
                                            </div>
                                        </a><a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item dropdown no-arrow mx-1">
                                <div class="nav-item dropdown no-arrow"><a class="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><span class="badge bg-danger badge-counter">7</span><i class="fas fa-envelope fs-5 fa-fw"></i></a>
                                    <div class="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
                                        <h6 class="dropdown-header">alerts center</h6><a class="dropdown-item d-flex align-items-center" href="#">
                                            <div class="dropdown-list-image me-3"><img class="rounded-circle" src="../assets/img/avatars/avatar4.jpeg"/>
                                                <div class="bg-success status-indicator"></div>
                                            </div>
                                            <div class="fw-bold">
                                                <div class="text-truncate"><span>Hi there! I am wondering if you can help me with a problem I've been having.</span></div>
                                                <p class="small text-gray-500 mb-0">Emily Fowler - 58m</p>
                                            </div>
                                        </a><a class="dropdown-item d-flex align-items-center" href="#">
                                            <div class="dropdown-list-image me-3"><img class="rounded-circle" src="../assets/img/avatars/avatar2.jpeg"/>
                                                <div class="status-indicator"></div>
                                            </div>
                                            <div class="fw-bold">
                                                <div class="text-truncate"><span>I have the photos that you ordered last month!</span></div>
                                                <p class="small text-gray-500 mb-0">Jae Chun - 1d</p>
                                            </div>
                                        </a><a class="dropdown-item d-flex align-items-center" href="#">
                                            <div class="dropdown-list-image me-3"><img class="rounded-circle" src="../assets/img/avatars/avatar3.jpeg"/>
                                                <div class="bg-warning status-indicator"></div>
                                            </div>
                                            <div class="fw-bold">
                                                <div class="text-truncate"><span>Last month's report looks great, I am very happy with the progress so far, keep up the good work!</span></div>
                                                <p class="small text-gray-500 mb-0">Morgan Alvarez - 2d</p>
                                            </div>
                                        </a><a class="dropdown-item d-flex align-items-center" href="#">
                                            <div class="dropdown-list-image me-3"><img class="rounded-circle" src="../assets/img/avatars/avatar5.jpeg"/>
                                                <div class="bg-success status-indicator"></div>
                                            </div>
                                            <div class="fw-bold">
                                                <div class="text-truncate"><span>Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...</span></div>
                                                <p class="small text-gray-500 mb-0">Chicken the Dog · 2w</p>
                                            </div>
                                        </a><a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                                    </div>
                                </div>
                                <div class="shadow dropdown-list dropdown-menu dropdown-menu-end" aria-labelledby="alertsDropdown"></div>
                            </li>
                            <div class="d-none d-sm-block topbar-divider"></div>
                            <li class="nav-item dropdown no-arrow">
                                <div class="nav-item dropdown no-arrow"><a class="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><span class="d-none d-lg-inline me-2 text-gray-600 small">Hello admin</span><img class="border rounded-circle img-profile" src="../assets/img/avatars/avatar1.jpeg"/></a>
                                    <div class="dropdown-menu shadow dropdown-menu-end animated--grow-in"><a class="dropdown-item" href="#"><i class="fas fa-user fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Profile</a><a class="dropdown-item" href="#"><i class="fas fa-cogs fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Settings</a><a class="dropdown-item" href="#"><i class="fas fa-list fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Activity log</a>
                                        <div class="dropdown-divider"></div><a class="dropdown-item" href="#"><i class="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Logout</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div class="container-fluid">
                    <h3 class="text-dark mb-4"><strong>Create notification</strong></h3>
                    <div class="row mb-3 d-none">
                        <div class="col">
                            <div class="card text-white bg-primary shadow">
                                <div class="card-body">
                                    <div class="row mb-2">
                                        <div class="col">
                                            <p class="m-0">Peformance</p>
                                            <p class="m-0"><strong>65.2%</strong></p>
                                        </div>
                                        <div class="col-auto"><i class="fas fa-rocket fa-2x"></i></div>
                                    </div>
                                    <p class="text-white-50 small m-0"><i class="fas fa-arrow-up"></i>&nbsp;5% since last month</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card text-white bg-success shadow">
                                <div class="card-body">
                                    <div class="row mb-2">
                                        <div class="col">
                                            <p class="m-0">Peformance</p>
                                            <p class="m-0"><strong>65.2%</strong></p>
                                        </div>
                                        <div class="col-auto"><i class="fas fa-rocket fa-2x"></i></div>
                                    </div>
                                    <p class="text-white-50 small m-0"><i class="fas fa-arrow-up"></i>&nbsp;5% since last month</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="card shadow mb-3">
                                <div class="card-header py-3">
                                    <p class="text-primary m-0 fw-bold">Fill the blank to create notification for user</p>
                                </div>
                                <div class="card-body">
                                    <form onSubmit={onUpdate}>
                                        <div class="row">
                                            <div class="col">
                                                <div class="mb-3"><label class="form-label" for="username"><strong>Title</strong></label><input class="form-control" type="text" id="title" placeholder="Title" name="Titile" value={notification.title} onChange={(e) => update(e, "title")} /></div>
                                            </div>
                                            <div class="col">
                                                <div class="mb-3"><label class="form-label" for="username"><strong>User</strong></label><select class="form-select" id="select_user_notification">
                                                        <option value="12">All user</option>
                                                        <option value="13">20215346</option>
                                                        <option value="14">20210399</option>
                                                        <option value="" selected="">None</option>
                                                    </select></div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <div class="mb-3"><label class="form-label" for="first_name"><strong>Message content</strong></label></div><textarea class="form-control" id="detail_notification" rows="10" value={notification.content} onChange={(e) => update(e, "content")} ></textarea>
                                            </div>
                                        </div>
                                        <div class="mb-3"><button class="btn btn-primary btn-sm" type="submit" style ={margin_top}>Create notification</button></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer class="bg-white sticky-footer"></footer>
        </div><a class="border rounded d-inline scroll-to-top" href="#page-top"><i class="fas fa-angle-up"></i></a>
    </div>
        </div>
        
    );
}
export default AddNotification;