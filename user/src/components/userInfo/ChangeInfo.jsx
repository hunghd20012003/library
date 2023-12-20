import { Link } from "react-router-dom";
import avatar from '../../img/koduck.png'
import Navigator from "../common/Navigator";
import InfoDashboard from "./InfoDashboard";
function ChangeInfo(){
  return (
    <div>
        <Navigator></Navigator>
        <main className="page">
        <section className="clean-block about-us">
            <div className="container containerUsser">
                <div className="row rowUserInfor">
                        <InfoDashboard></InfoDashboard>
           
                    <div className="col-md-6 col-xl-8">
                        <div className="divChangeTT">
                            <div className="card shadow mb-3">
                                <div className="card-body">
                                    <form>
                                        <div className="row" style={{ marginBottom: 25, textAlign: "left" }}>
                                            <div className="col-sm-4 col-md-4 col-lg-3 col-xl-2 col-xxl-2"  style={{ display: "inline", textAlign: "center", marginBottom: 25 }}><img className="rounded-circle dmigmg" src={avatar} alt="ảnh" style={{ display: "inline", maxHeight: 110 }} /><br/><button className="btn btn-primary btn-sm btthayanh" id="photoBtn" type="button">Thay ảnh</button></div>
                                            <div className="col-sm-8 col-md-8 col-lg-9 col-xl-10 col-xxl-10 align-self-center">
                                                <div className="row">
                                                    <div className="col-md-12 text-start">
                                                        <div className="mb-3"><label className="form-label" for="email"><strong>Email mới</strong></label><input className="form-control" type="email" id="email" placeholder="user@example.com" name="email" required="" /></div>
                                                    </div>
                                                    <div className="col-md-12 text-start">
                                                        <div className="mb-3"><label className="form-label" for="username"><strong>Tên người dùng mới</strong></label><input className="form-control" type="text" placeholder="Tên người dùng" name="username" required="" /></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <p id="emailErrorMsg" className="text-danger"  style={{ display: "none" }}></p>
                                                <p id="passwordErrorMsg" className="text-danger"  style={{ display: "none" }}></p>
                                            </div>
                                            <div className="col-md-12" style={{ textAlign: "right", marginTop: 5 }}><button className="btn btn-primary btn-sm" id="submitBtn" type="submit">Save Settings</button></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    </div>
  )
}
export default ChangeInfo;