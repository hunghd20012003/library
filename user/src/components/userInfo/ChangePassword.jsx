import Navigator from "../common/Navigator"
import InfoDashboard from "./InfoDashboard"
function ChangePassword(){
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
                                            <div className="col-md-6 text-start">
                                                <div className="mb-3"><label className="form-label" for="username"><strong>Mật khẩu hiện tại</strong></label><input className="form-control" type="password" id="password" placeholder="Password" /></div>
                                            </div>
                                            <div className="col-md-6 text-start"></div>
                                            <div className="col-md-6 text-start">
                                                <div className="mb-3"><label className="form-label" for="username"><strong>Mật khẩu mới</strong></label><input className="form-control" type="password" id="verifyPassword-2" placeholder="Password" /></div>
                                            </div>
                                            <div className="col-md-6 text-start"></div>
                                            <div className="col-md-6 text-start">
                                                <div className="mb-3"><label className="form-label" for="username"><strong>Nhập lại mật khẩu mới</strong></label><input className="form-control" type="password" id="verifyPassword-3" placeholder="Password" /></div>
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
export default ChangePassword