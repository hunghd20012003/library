import { Link } from "react-router-dom";
function Footer(){
    return  <footer className="page-footer dark">
    <div className="container">
        <div className="row">
            <div className="col-sm-3">
                <h5>Get started</h5>
                <ul>
                    <li><Link to="/homepage">Trang chủ</Link></li>
                    <li><Link to="/book">Sách</Link></li>
                    <li><Link to="/muathetv">Thẻ thành viên</Link></li>
                    <li><Link to="/main-info">Thông tin cá nhân</Link></li>
                </ul>
            </div>
            {/* <div className="col-sm-3">
                <h5>About us</h5>
                <ul>
                    <li><Link to="/aboutus">Constact us</Link></li>
                    <li><Link to="http://localhost:4000/">Hoàng Đình Hùng</Link></li>
                    <li><Link to="http://localhost:4000/">Reviews</Link></li>
                </ul>
            </div>
            <div className="col-sm-3">
                <h5>Support</h5>
                <ul>
                    <li><a href="http://localhost:4000/">FAQ</a></li>
                    <li><a href="http://localhost:4000/">Help desk</a></li>
                    <li><a href="http://localhost:4000/">Forums</a></li>
                </ul>
            </div>
            <div className="col-sm-3">
                <h5>Legal</h5>
                <ul>
                    <li><a href="http://localhost:4000/">Terms of Service</a></li>
                    <li><a href="http://localhost:4000/">Terms of Use</a></li>
                    <li><a href="http://localhost:4000/">Privacy Policy</a></li>
                </ul>
            </div> */}
        </div>
    </div>
    <div className="footer-copyright">
        <p>© 2023 Copyright Text</p>
    </div>
</footer> 
}
export default Footer;