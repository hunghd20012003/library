function Notification(){
    return (
        <li className="nav-item dropdown no-arrow mx-1">
  <div className="nav-item dropdown no-arrow">
    <a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="/login">
      <span className="badge bg-danger badge-counter">3+</span>
      <i className="fas fa-bell fa-fw"></i>
    </a>
    <div className="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
      <h6 className="dropdown-header">alerts center</h6>
      <a className="dropdown-item d-flex align-items-center" href="/login">
        <div className="me-3">
          <div className="bg-primary icon-circle">
            <i className="fas fa-file-alt text-white"></i>
          </div>
        </div>
        <div>
          <span className="small text-gray-500">December 12, 2019</span>
          <p>A new monthly report is ready to download!</p>
        </div>
      </a>
      <a className="dropdown-item d-flex align-items-center" href="/login">
        <div className="me-3">
          <div className="bg-success icon-circle">
            <i className="fas fa-donate text-white"></i>
          </div>
        </div>
        <div>
          <span className="small text-gray-500">December 7, 2019</span>
          <p>$290.29 has been deposited into your account!</p>
        </div>
      </a>
      <a className="dropdown-item d-flex align-items-center" href="/login">
        <div className="me-3">
          <div className="bg-warning icon-circle">
            <i className="fas fa-exclamation-triangle text-white"></i>
          </div>
        </div>
        <div>
          <span className="small text-gray-500">December 2, 2019</span>
          <p>Spending Alert: We've noticed unusually high spending for your account.</p>
        </div>
      </a>
      <a className="dropdown-item text-center small text-gray-500" href="/login">Show All Alerts</a>
    </div>
  </div>
</li>
    );
}
export default Notification;