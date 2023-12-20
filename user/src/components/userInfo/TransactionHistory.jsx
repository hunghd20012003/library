import avatar from '../../img/koduck'
import { Link } from 'react-router-dom'
import Navigator from '../common/Navigator'
import InfoDashboard from './InfoDashboard'
function TransactionHistory(){
    return (
        <div>
            <Navigator></Navigator>
        <main className="page">
        <section className="clean-block about-us">
            <div className="container containerUsser">
                <div className="row rowUserInfor">
                    <InfoDashboard></InfoDashboard>
                    <div className="col-md-6 col-xl-8">
                        <div className="divGD">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Ngày GD</th>
                                            <th>Thao tác</th>
                                            <th>Đơn giá (VNĐ)</th>
                                            <th>Chi tiết</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>19/12/2023</td>
                                            <td>Mua TTV Bạc</td>
                                            <td>100.000</td>
                                            <td>Xem</td>
                                        </tr>
                                    </tbody>
                                </table>
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
export default TransactionHistory