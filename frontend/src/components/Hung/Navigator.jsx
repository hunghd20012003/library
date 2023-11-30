function Navigator(){
    return (
        <nav className="navbar align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0 navbar-dark">
   <div className="container-fluid d-flex flex-column p-0">
     <a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="/login">
       <div className="sidebar-brand-icon rotate-n-15">
         <i className="fas fa-laugh-wink"></i>
       </div>
       <div className="sidebar-brand-text mx-3">
         <span>Library</span>
       </div>
     </a>
     <hr className="sidebar-divider my-0" />
     <ul className="navbar-nav text-light" id="accordionSidebar">
       <li className="nav-item">
         <a className="nav-link" href="index.html">
           <i className="fas fa-tachometer-alt"></i>
           <span>Dashboard</span>
         </a>
       </li>
       <li className="nav-item dropdown">
         <a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="/login">
           <i className="fas fa-book-open" style={{fontSize:"13px"}}></i>&nbsp;Book Management </a>
         <div className="dropdown-menu">
           <a className="dropdown-item" href="add-book.html" style={{paddingLeft:"30px"}}>
             <i className="fas fa-plus"></i>&nbsp;Add new </a>
           <a className="dropdown-item" href="manage-book.html" style={{paddingLeft:"30px"}}>
             <i className="fas fa-bars"></i>&nbsp;Manage all </a>
         </div>
       </li>
       <li className="nav-item dropdown">
         <a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="/login">
           <i className="fas fa-users" style={{fontSize:"13px"}}></i>&nbsp;Manage User </a>
         <div className="dropdown-menu">
           <a className="dropdown-item" href="add-user.html" style={{paddingLeft:"30px"}}>
             <i className="fas fa-plus"></i>&nbsp;Add new </a>
           <a className="dropdown-item" href="manage-user.html" style={{paddingLeft:"30px"}}>
             <i className="fas fa-bars"></i>&nbsp;Manage all </a>
         </div>
       </li>
       <li className="nav-item dropdown">
         <a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="/login">
           <i className="fas fa-book-reader" style={{fontSize:"13px"}}></i>&nbsp;Books Loan </a>
         <div className="dropdown-menu">
           <a className="dropdown-item" href="add-loan.html" style={{paddingLeft:"30px"}}>
             <i className="fas fa-plus"></i>&nbsp;Add new </a>
           <a className="dropdown-item" href="manage-loan.html" style={{paddingLeft:"30px"}}>
             <i className="fas fa-bars"></i>&nbsp;Manage all </a>
         </div>
       </li>
       <li className="nav-item dropdown">
         <a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="/login">
           <i className="fas fa-dollar-sign" style={{fontSize:"13px"}}></i>&nbsp;Subscriptions </a>
         <div className="dropdown-menu">
           <a className="dropdown-item" href="plans.html" style={{paddingLeft:"30px"}}>
             <i className="fas fa-plus"></i>&nbsp;Plans </a>
           <a className="dropdown-item" href="purchase-history.html" style={{paddingLeft:"30px"}}>
             <i className="fas fa-bars"></i>&nbsp;Purchase History </a>
         </div>
       </li>
       <li className="nav-item"></li>
       <li className="nav-item"></li>
       <li className="nav-item"></li>
       <li className="nav-item">
         <a className="nav-link" href="../register.html">
           <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-box-arrow-right">
             <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"></path>
             <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"></path>
           </svg>
           <span>&nbsp;Logout</span>
         </a>
       </li>
     </ul>
     <div className="text-center d-none d-md-inline">
       <button className="btn rounded-circle border-0" id="sidebarToggle" type="button"></button>
     </div>
   </div>
 </nav>
    );
}
export default Navigator;