import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navigator from '../common/Navigator';
import { Link } from 'react-router-dom';
import Footer from '../common/Footer';
const URL = "http://localhost:5000/";

const api = axios.create({ baseURL: URL }); // Sửa URL thành baseURL
const MuaTheTV = (pros) => {
    const [showPaymentGuide, setShowPaymentGuide] = useState(false);
    const navigate = useNavigate();
    const [plans, setPlans] = useState([]);
  
    useEffect(() => {
      console.log(pros.user)
        // Fetch plans when the component mounts
        const fetchData = async () => {
          try {
            const response = await api.get("api/plans");
            setPlans(response.data);
          } catch (error) {
            console.error('Error fetching plans:', error);
          }
        };
    
        fetchData();
      }, []);
      const userId = pros.user.id;
      const handleBuyNow = async (planId, planTitle, planDuration, planAmount, userId) => {
        try {
          // Check if the user has active plans
          const hasActivePlansResponse = await api.get(`/api/has-active-plan/${userId}`);
      
          if (hasActivePlansResponse.status === 200) {
            const { hasActivePlans } = hasActivePlansResponse.data;
      
            if (hasActivePlans) {
              // User has active plans, show an alert
              alert('You cannot purchase a new plan while you have active plans.');
              return;
            }
            else {
            // Save the purchase history
              const purchaseResponse = await axios.post(`${URL}api/purchase-history`, {
                planId,
                planTitle,
                planDuration,
                planAmount,
                userId,
              });
             console.log(purchaseResponse.status)
              if (purchaseResponse.status === 200) {
                setShowPaymentGuide(true);
                navigate('/detail-purchase');
                // You can add additional logic or redirect the user to a success page
              } else {
              alert('Purchase failed. Please try again later 2.');
              }
            }
          }
        } catch (error) {
          console.error('Error during purchase:', error);
          alert('Purchase failed. Please try again later 3.');
        }
      };
      
  
    return (
      <div>
      {pros.mainpage?<Navigator user={pros.user}></Navigator>:null}
      <main className="page pricing-table-page">
        <section className="clean-block clean-pricing dark">
          <div className="container">
            <div className="block-heading">
            <h2 className="text-info">THẺ THÀNH VIÊN</h2>
            <p>HỖ TRỢ MƯỢN TRẢ SÁCH NHANH CHÓNG, THUẬN TIỆN</p>
          </div>
          <div className="row justify-content-center">
            {plans.map((plan) => (
              <div key={plan.planId} className="col-md-5 col-lg-4">
                <div className="clean-pricing-item">
                  {plan.title === 'Vàng' && (
                    <div className="ribbon">
                      <span>TỐT NHẤT</span>
                    </div>
                  )}
                  <div className="heading">
                  <h3>{plan.title}</h3>
                  </div>
                  <p>{`CHO PHÉP MƯỢN SÁCH LÊN ĐẾN ${plan.duration} NGÀY/1 HÓA ĐƠN`}</p>
                  <div className="features">
                    <h4><span className="feature">Đầy đủ dịch vụ</span><span>: {plan.status === 'Active' ? 'Có' : 'Không'}</span></h4>
                    <h4><span className="feature">Nhận thông báo từ thu viện:&nbsp;</span><span>Đầy đủ</span></h4>
                  </div>
                  <div className="price">
                    <h4>{`${plan.amount}vnđ`}</h4>
                  </div>
                  {/* Nút mua thẻ */}
                  {(pros.user.isMember===true)?<button
                    className="btn btn-outline-primary d-block w-100"
                    onClick={() => handleBuyNow(plan.planId, plan.title, plan.duration, plan.amount,userId)}
                  >
                    BUY NOW
                  </button>:null}
                </div>
              </div>
            ))}
          </div>
        </div>
        </section>
      </main>
      {pros.mainpage?<Footer></Footer>:null}
    </div>
    );
  };
  
  export default MuaTheTV;