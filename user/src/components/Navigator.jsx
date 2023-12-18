import avatar from "../img/koduck.png"
function Navigator(){
    return (
        <nav className="navbar navbar-expand-lg fixed-top bg-body clean-navbar navbar-light">
        <div className="container"><a className="navbar-brand logo" href="#">THƯ VIỆN SÁCH</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navcol-1">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <div></div><a className="nav-link active" href="index.html">Home</a>
                    </li>
                    <li className="nav-item"><a className="nav-link" href="features.html">ABOUT US</a></li>
                    <li className="nav-item"><a className="nav-link" href="sach.html">SÁCH</a></li>
                    <li className="nav-item"><a className="nav-link" href="about-us.html">THẺ THÀNH VIÊN</a></li>
                    <li className="nav-item"><a className="nav-link" href="gioHang.html">GIỎ HÀNG&nbsp;<i className="fa fa-shopping-cart text-primary"></i></a></li>
                    <li className="nav-item dropdown no-arrow mx-1">
                        <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><span className="badge bg-danger badge-counter">3+</span><i className="fas fa-bell fa-fw"></i></a>
                            <div className="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
                                <h6 className="dropdown-header">alerts center</h6><a className="dropdown-item d-flex align-items-center" href="#">
                                    <div className="me-3">
                                        <div className="bg-primary icon-circle"><i className="fas fa-file-alt text-white"></i></div>
                                    </div>
                                    <div><span className="small text-gray-500">December 12, 2019</span>
                                        <p>A new monthly report is ready to download!</p>
                                    </div>
                                </a><a className="dropdown-item d-flex align-items-center" href="#">
                                    <div className="me-3">
                                        <div className="bg-success icon-circle"><i className="fas fa-donate text-white"></i></div>
                                    </div>
                                    <div><span className="small text-gray-500">December 7, 2019</span>
                                        <p>$290.29 has been deposited into your account!</p>
                                    </div>
                                </a><a className="dropdown-item d-flex align-items-center" href="#">
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
                    <li className="nav-item dropdown no-arrow mx-1"><a className="nav-link active" href="#">alex sandra&nbsp;&nbsp;<img src={avatar} /></a></li>
                </ul>
            </div>
        </div>
        </nav>
    );
}
export default Navigator;