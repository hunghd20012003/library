import image from '../../img/koduck.png'
function Persion(){
    return (
        <li className="nav-item dropdown no-arrow">
  <div className="nav-item dropdown no-arrow">
    <a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#">
      <span className="d-none d-lg-inline me-2 text-gray-600 small">Hello admin</span>
      <img className="border rounded-circle img-profile" src={image} />
    </a>
    <div className="dropdown-menu shadow dropdown-menu-end animated--grow-in">
      <a className="dropdown-item" href="/login">
        <i className="fas fa-user fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Profile </a>
      <a className="dropdown-item" href="/login">
        <i className="fas fa-cogs fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Settings </a>
      <a className="dropdown-item" href="/login">
        <i className="fas fa-list fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Activity log </a>
      <div className="dropdown-divider"></div>
      <a className="dropdown-item" href="/login">
        <i className="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Logout </a>
    </div>
  </div>
</li>
    );
}
 export default Persion;