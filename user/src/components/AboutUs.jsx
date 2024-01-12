import React from 'react';
import avatar from "../img/book.jpg"
import avatar1 from "../img/contact1.jpg"
import Navigator from './common/Navigator';
import Footer from './common/Footer';
function AboutUs(pros){
 return  <div>
     <Navigator user={pros.user}></Navigator>
    <main className="page" style={{backgroundColor:"#64AEF9"}}>
          
          <section className="clean-block about-us" >
            <div className="container-fluid">
              <div className="text-white mb-4 text-center" style={{ margin: '100' }}>
             
                <h2 className="text-info text-white" >About Us</h2>
              
                <p style={{ paddingLeft: '3em', paddingRight: '3em' }}>Dự án web cho mượn sách của chúng tôi là một nền tảng hiện đại và thuận tiện, được thiết kế để kết nối những người yêu sách và chia sẻ đam mê đọc sách. Với sứ mệnh làm cho việc đọc sách trở nên dễ dàng và linh hoạt hơn, chúng tôi tạo ra một cộng đồng đa dạng, nơi mọi người có thể mượn, trao đổi, và chia sẻ những cuốn sách mà họ yêu thích.</p>
              </div>
            </div>
          </section>
         
          <div className="container-fluid">
            <h3 className="text-white mb-4">Utility</h3>
            <div className="card shadow mb-3">
              <div className="card-header py-3">
                <p className="text-primary m-0 fw-bold">Benifit Information</p>
              </div>
              <div className="card-body">
                <div className="float-end">
                  <img
                    src={avatar}
                    alt="Koduck Avatar"
                    className="img-fluid"
                    style={{ width: '600px', height: '600px',marginBottom:"100px"}} // Tùy chỉnh kích thước ảnh nếu cần
                  />
                </div>
                <ul>
                  <li>
                    <strong>Kết Nối Cộng Đồng Yêu Sách</strong><br/>
                    <p>
                    <br/>
                      Chúng tôi tin rằng sức mạnh của sách không chỉ là trong nội dung chúng mang lại, mà còn là khả năng tạo ra một cộng đồng mạnh mẽ. Dự án của chúng tôi không chỉ là nơi lưu trữ sách, mà còn là một không gian nơi mọi người có thể chia sẻ ý kiến, đánh giá, và tạo ra các cuộc thảo luận sôi nổi xoay quanh những tác phẩm văn học.
                    </p>
                  </li>
                  <li>
                    <strong>Đơn Giản và Thuận Tiện</strong><br/>
                    <p>
                      <br/>
                        Với giao diện thân thiện và dễ sử dụng, dự án web của chúng tôi mang lại trải nghiệm thuận lợi nhất cho người dùng. Việc tìm kiếm sách, xem thông tin chi tiết, và thậm chí là việc gửi yêu cầu mượn sách đều trở nên đơn giản. Chúng tôi cam kết tạo ra một trải nghiệm mượn sách trực tuyến mà không gặp phải bất kỳ rắc rối nào.
                    </p>
                  </li>
                  <li>
                    <strong>Mô Hình Mượn Sách Linh Hoạt</strong><br/>
                    <p>
                        <br/>
                        Dự án của chúng tôi không chỉ giúp bạn tiết kiệm chi phí mua sách mới mà còn khuyến khích việc chia sẻ những cuốn sách đã đọc. Mô hình mượn sách linh hoạt của chúng tôi cho phép người dùng mượn và trao đổi sách với nhau, tạo nên một chuỗi cung ứng sách đa dạng và phong phú.
                    </p>
                  </li>
                  <li>
                    <strong>An Toàn và Đáng Tin Cậy</strong><br/>
                    <p>
                        <br/>
                        Chúng tôi luôn chú trọng đến an toàn và đáng tin cậy trong mọi giao dịch. Hệ thống đánh giá và đánh giá của người dùng giúp tạo ra một cộng đồng đáng tin cậy, nơi mọi người có thể yên tâm mượn và chia sẻ sách mà không lo lắng về rủi ro.
                    </p>
                  </li>
                  <li>
                    <strong>Hỗ Trợ Cộng Đồng Đọc Sách</strong><br/>
                    <p>
                        <br/>
                        Chúng tôi không chỉ là một dự án web cho mượn sách, mà còn là một đối tác cho cộng đồng đọc sách. Chúng tôi tổ chức các sự kiện đọc sách, nhóm thảo luận, và hoạt động văn hóa để kích thích đam mê đọc sách và tạo điểm đến cho những người yêu sách.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
         
          <div className="container-fluid">
         <h3 className="text-white mb-4">Contact Us</h3>
         <div className="card shadow mb-3">
         <div className="card-header py-3">
         <p className="text-primary m-0 fw-bold">Contact Information</p>
         </div>
         <div className="card-body d-flex align-items-center">
         <img
         src={avatar1}
         alt="Koduck Avatar"
         className="img-fluid me-4"
         style={{ width: '200px', height: '200px',marginBottom:"0px" }}
         />
         <ul className="list-unstyled mb-0">
         <li>
          <strong>Name:</strong> Hoàng Đình Hùng
         </li>
         <li>
          <strong>Phone:</strong> 08867612345
         </li>
         <li>
          <strong>Location:</strong> 20 Trần Điền, Định Công, Hoàng Mai, Hà Nội
         </li>
         <li>
          <strong>Email:</strong> hoangdinhhung@gmail.com
         </li>
         <li>
          <strong>Website:</strong> https://www.nike.com/vn/
         </li>
         
         {/* Thêm các mục khác nếu cần */}
         </ul>
         </div>
         </div>
         </div>
         
         </main>
        <Footer></Footer>
 </div>
}
export default AboutUs;