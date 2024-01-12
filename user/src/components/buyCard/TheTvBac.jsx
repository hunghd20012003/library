import React from 'react';
import Navigator from '../common/Navigator';
import Footer from '../common/Footer';
const TheTvBac = (pros) => {
  return (
    <div>
    <Navigator user={pros.user}></Navigator>
        <main className="page">
      <section className="sectionthetvbac">
        <div className="container">
          <div className="block-heading">
            <h2 className="text-info">THẺ THÀNH VIÊN BẠC</h2>
            <p>Thanh toán qua số tài khoản phía bên dưới, chờ đợi quản trị viên thư viện xác nhận giao dịch và kích hoạt (Xem trạng thái thẻ viên trong profile cá nhân sau khi chuyển khoản tối thiểu 6 giờ)</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-6 col-lg-4 columtheTVBAC">
              <div className="card text-center ditconmecuthat">
                <img className="card-img-top w-100 d-block anh1" src="assets/img/scenery/403422006_1365387844122590_1087129210639016194_n.jpg" alt="Step 1" />
                <div className="card-body cardbodygido">
                  <h4 className="card-title">BƯỚC 1: QUÉT MÃ QR TRÊN</h4>
                  <p className="card-text cartex1">Hoặc điền stk</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="card text-center thumbailCKtheTVBac">
                <img className="card-img-top w-100 d-block anh2" src="assets/img/scenery/398301572_880441743812570_3284523488362210817_n.jpg" alt="Step 2" />
                <div className="card-body info">
                  <h4 className="card-title">BƯỚC 2: ĐIỀN NỘI DUNG CHUYỂN</h4>
                  <p className="card-text cartex1">Nội dung chuyển khoản là ID Tài khoản</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer></Footer>
    </div>
    
  );
};

export default TheTvBac;