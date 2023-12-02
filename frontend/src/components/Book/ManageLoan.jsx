function ManageLoan(){
    return (
        <div id="wrapper">
        <nav className="navbar align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0 navbar-dark">
            <div className="container-fluid d-flex flex-column p-0"><a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="http://localhost:3000/">
                    <div className="sidebar-brand-icon rotate-n-15"><i className="fas fa-laugh-wink"></i></div>
                    <div className="sidebar-brand-text mx-3"><span>Library</span></div>
                </a>
                <hr className="sidebar-divider my-0"/>
                <ul className="navbar-nav text-light" id="accordionSidebar">
                    <li className="nav-item"><a className="nav-link" href="index.html"><i className="fas fa-tachometer-alt"></i><span>Dashboard</span></a></li>
                    <li className="nav-item dropdown"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="http://localhost:3000/"><i className="fas fa-book-open" style={{fontSize: 13}}></i>&nbsp;Book Management</a>
                        <div className="dropdown-menu"><a className="dropdown-item" href="add-book.html" style={{paddingLeft: 30}}><i className="fas fa-plus"></i>&nbsp;Add new</a><a className="dropdown-item" href="manage-book.html" style={{paddingLeft: 30}}><i className="fas fa-bars"></i>&nbsp;Manage all</a></div>
                    </li>
                    <li className="nav-item dropdown"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="http://localhost:3000/"><i className="fas fa-users" style={{fontSize: 13}}></i>&nbsp;Manage User</a>
                        <div className="dropdown-menu"><a className="dropdown-item" href="add-user.html" style={{paddingLeft: 30}}><i className="fas fa-plus"></i>&nbsp;Add new</a><a className="dropdown-item" href="manage-user.html" style={{paddingLeft: 30}}><i className="fas fa-bars"></i>&nbsp;Manage all</a></div>
                    </li>
                    <li className="nav-item dropdown"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="http://localhost:3000/"><i className="fas fa-book-reader" style={{fontSize: 13}}></i>&nbsp;Books Loan</a>
                        <div className="dropdown-menu"><a className="dropdown-item" href="manage-loan.html" style={{paddingLeft: 30}}><i className="fas fa-bars"></i>&nbsp;Manage all</a></div>
                    </li>
                    <li className="nav-item dropdown"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="http://localhost:3000/"><i className="fas fa-dollar-sign" style={{fontSize: 13}}></i>&nbsp;Subscriptions</a>
                        <div className="dropdown-menu"><a className="dropdown-item" href="plans.html" style={{paddingLeft: 30}}><i className="fas fa-plus"></i>&nbsp;Plans</a><a className="dropdown-item" href="purchase-history.html" style={{paddingLeft: 30}}><i className="fas fa-bars"></i>&nbsp;Purchase History</a></div>
                    </li>
                    <li className="nav-item"></li>
                    <li className="nav-item"></li>
                    <li className="nav-item"></li>
                    <li className="nav-item"><a className="nav-link" href="../register.html"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-box-arrow-right">
                                <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"></path>
                                <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"></path>
                            </svg><span>&nbsp;Logout</span></a></li>
                </ul>
                <div className="text-center d-none d-md-inline"><button className="btn rounded-circle border-0" id="sidebarToggle" type="button"></button></div>
            </div>
        </nav>
        <div className="d-flex flex-column" id="content-wrapper">
            <div id="content">
                <nav className="navbar navbar-expand bg-white shadow mb-4 topbar static-top navbar-light">
                    <div className="container-fluid"><button className="btn btn-link d-md-none rounded-circle me-3" id="sidebarToggleTop" type="button"><i className="fas fa-bars"></i></button>
                        <form className="d-none d-sm-inline-block me-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search">
                            <div className="input-group"><input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..."/><button className="btn btn-primary py-0" type="button"><i className="fas fa-search"></i></button></div>
                        </form>
                        <ul className="navbar-nav flex-nowrap ms-auto">
                            <li className="nav-item dropdown d-sm-none no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="http://localhost:3000/"><i className="fas fa-search"></i></a>
                                <div className="dropdown-menu dropdown-menu-end p-3 animated--grow-in" aria-labelledby="searchDropdown">
                                    <form className="me-auto navbar-search w-100">
                                        <div className="input-group"><input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..."/>
                                            <div className="input-group-append"><button className="btn btn-primary py-0" type="button"><i className="fas fa-search"></i></button></div>
                                        </div>
                                    </form>
                                </div>
                            </li>
                            <li className="nav-item dropdown no-arrow mx-1">
                                <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="http://localhost:3000/"><span className="badge bg-danger badge-counter">3+</span><i className="fas fa-bell fs-5 fa-fw"></i></a>
                                    <div className="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
                                        <h6 className="dropdown-header">alerts center</h6><a className="dropdown-item d-flex align-items-center" href="http://localhost:3000/">
                                            <div className="me-3">
                                                <div className="bg-primary icon-circle"><i className="fas fa-file-alt text-white"></i></div>
                                            </div>
                                            <div><span className="small text-gray-500">December 12, 2019</span>
                                                <p>A new monthly report is ready to download!</p>
                                            </div>
                                        </a><a className="dropdown-item d-flex align-items-center" href="http://localhost:3000/">
                                            <div className="me-3">
                                                <div className="bg-success icon-circle"><i className="fas fa-donate text-white"></i></div>
                                            </div>
                                            <div><span className="small text-gray-500">December 7, 2019</span>
                                                <p>$290.29 has been deposited into your account!</p>
                                            </div>
                                        </a><a className="dropdown-item d-flex align-items-center" href="http://localhost:3000/">
                                            <div className="me-3">
                                                <div className="bg-warning icon-circle"><i className="fas fa-exclamation-triangle text-white"></i></div>
                                            </div>
                                            <div><span className="small text-gray-500">December 2, 2019</span>
                                                <p>Spending Alert: We've noticed unusually high spending for your account.</p>
                                            </div>
                                        </a><a className="dropdown-item text-center small text-gray-500" href="http://localhost:3000/">Show All Alerts</a>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown no-arrow mx-1">
                                <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="http://localhost:3000/"><span className="badge bg-danger badge-counter">7</span><i className="fas fa-envelope fs-5 fa-fw"></i></a>
                                    <div className="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
                                        <h6 className="dropdown-header">alerts center</h6><a className="dropdown-item d-flex align-items-center" href="http://localhost:3000/">
                                            <div className="dropdown-list-image me-3"><img className="rounded-circle" src="../assets/img/avatars/avatar4.jpeg" alt="xyz"/>
                                                <div className="bg-success status-indicator"></div>
                                            </div>
                                            <div className="fw-bold">
                                                <div className="text-truncate"><span>Hi there! I am wondering if you can help me with a problem I've been having.</span></div>
                                                <p className="small text-gray-500 mb-0">Emily Fowler - 58m</p>
                                            </div>
                                        </a><a className="dropdown-item d-flex align-items-center" href="http://localhost:3000/">
                                            <div className="dropdown-list-image me-3"><img className="rounded-circle" src="../assets/img/avatars/avatar2.jpeg" alt="xyz"/>
                                                <div className="status-indicator"></div>
                                            </div>
                                            <div className="fw-bold">
                                                <div className="text-truncate"><span>I have the photos that you ordered last month!</span></div>
                                                <p className="small text-gray-500 mb-0">Jae Chun - 1d</p>
                                            </div>
                                        </a><a className="dropdown-item d-flex align-items-center" href="http://localhost:3000/">
                                            <div className="dropdown-list-image me-3"><img className="rounded-circle" src="../assets/img/avatars/avatar3.jpeg" alt="xyz"/>
                                                <div className="bg-warning status-indicator"></div>
                                            </div>
                                            <div className="fw-bold">
                                                <div className="text-truncate"><span>Last month's report looks great, I am very happy with the progress so far, keep up the good work!</span></div>
                                                <p className="small text-gray-500 mb-0">Morgan Alvarez - 2d</p>
                                            </div>
                                        </a><a className="dropdown-item d-flex align-items-center" href="http://localhost:3000/">
                                            <div className="dropdown-list-image me-3"><img className="rounded-circle" src="../assets/img/avatars/avatar5.jpeg" alt="xyz"/>
                                                <div className="bg-success status-indicator"></div>
                                            </div>
                                            <div className="fw-bold">
                                                <div className="text-truncate"><span>Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...</span></div>
                                                <p className="small text-gray-500 mb-0">Chicken the Dog · 2w</p>
                                            </div>
                                        </a><a className="dropdown-item text-center small text-gray-500" href="http://localhost:3000/">Show All Alerts</a>
                                    </div>
                                </div>
                                <div className="shadow dropdown-list dropdown-menu dropdown-menu-end" aria-labelledby="alertsDropdown"></div>
                            </li>
                            <div className="d-none d-sm-block topbar-divider"></div>
                            <li className="nav-item dropdown no-arrow">
                                <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="http://localhost:3000/"><span className="d-none d-lg-inline me-2 text-gray-600 small">Hello admin</span><img className="border rounded-circle img-profile" src="../assets/img/avatars/avatar1.jpeg" alt="xyz"/></a>
                                    <div className="dropdown-menu shadow dropdown-menu-end animated--grow-in"><a className="dropdown-item" href="http://localhost:3000/"><i className="fas fa-user fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Profile</a><a className="dropdown-item" href="http://localhost:3000/"><i className="fas fa-cogs fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Settings</a><a className="dropdown-item" href="http://localhost:3000/"><i className="fas fa-list fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Activity log</a>
                                        <div className="dropdown-divider"></div><a className="dropdown-item" href="http://localhost:3000/"><i className="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Logout</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="container-fluid">
                    <h3 className="text-dark mb-4"><strong>MANAGE LOAN</strong></h3>
                    <div className="card shadow">
                        <div className="card-header py-3">
                            <p className="text-primary m-0 fw-bold">All loans</p>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6 text-nowrap">
                                    <div id="dataTable_length" className="dataTables_length" aria-controls="dataTable"><label className="form-label">Show&nbsp;<select className="d-inline-block form-select form-select-sm">
                                                <option value="10" selected="">10</option>
                                                <option value="25">25</option>
                                                <option value="50">50</option>
                                                <option value="100">100</option>
                                            </select>&nbsp;</label></div>
                                </div>
                                <div className="col-md-6">
                                    <div className="text-md-end dataTables_filter" id="dataTable_filter"><label className="form-label"><input type="search" className="form-control form-control-sm" aria-controls="dataTable" placeholder="Search"/></label></div>
                                </div>
                            </div>
                            <div className="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                                <table className="table table-striped my-0" id="dataTable">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Bill ID</th>
                                            <th>Student ID</th>
                                            <th>Student name</th>
                                            <th>Loan Date</th>
                                            <th>Return date</th>
                                            <th>Status</th>
                                            <th>Detail</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>283u21</td>
                                            <td>3 books</td>
                                            <td>Trương Công Đạt</td>
                                            <td>2008/11/28</td>
                                            <td>2008/11/28</td>
                                            <td>Waiting</td>
                                            <td><a className="btn btn-primary btn-sm border rounded-pill" role="button" href="loan-detail.html">View</a></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>987213</td>
                                            <td>1</td>
                                            <td>Hoàng Đình Hùng</td>
                                            <td>2008/11/28</td>
                                            <td>2009/10/09<br/></td>
                                            <td>Borrowed</td>
                                            <td><a className="btn btn-primary btn-sm border rounded-pill" role="button" href="loan-detail.html">View</a></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>971311</td>
                                            <td>2 books</td>
                                            <td>Nguyễn Hoàng Phúc</td>
                                            <td>2008/11/28</td>
                                            <td>2009/01/12<br/></td>
                                            <td>Overdue</td>
                                            <td><a className="btn btn-primary btn-sm border rounded-pill" role="button" href="loan-detail.html">View</a></td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td><strong>#</strong></td>
                                            <td><strong>Bill ID</strong></td>
                                            <td><strong>Student ID</strong></td>
                                            <td><strong>Student name</strong></td>
                                            <td><strong>Load Date</strong></td>
                                            <td><strong>Return date</strong></td>
                                            <td><strong>Status</strong></td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            <div className="row">
                                <div className="col-md-6 align-self-center">
                                    <p id="dataTable_info" className="dataTables_info" role="status" aria-live="polite">Showing 1 to 10 of 27</p>
                                </div>
                                <div className="col-md-6">
                                    <nav className="d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers">
                                        <ul className="pagination">
                                            <li className="page-item disabled"><a className="page-link" aria-label="Previous" href="http://localhost:3000/"><span aria-hidden="true">«</span></a></li>
                                            <li className="page-item active"><a className="page-link" href="http://localhost:3000/">1</a></li>
                                            <li className="page-item"><a className="page-link" href="http://localhost:3000/">2</a></li>
                                            <li className="page-item"><a className="page-link" href="http://localhost:3000/">3</a></li>
                                            <li className="page-item"><a className="page-link" aria-label="Next" href="http://localhost:3000/"><span aria-hidden="true">»</span></a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="bg-white sticky-footer">
                <div className="container my-auto">
                    <div className="text-center my-auto copyright"><span>Copyright © Brand 2023</span></div>
                </div>
            </footer>
        </div><a className="border rounded d-inline scroll-to-top" href="#page-top"><i className="fas fa-angle-up"></i></a>
    </div>
    )
}

export default ManageLoan;