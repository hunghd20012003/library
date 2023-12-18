import { useState } from "react";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const URL="http://localhost:5000/";
function ConfirmPassword(pros){
  function hideMiddleCharacters(password) {
    const length = password.length;
    const visibleCount = 2; // Số ký tự hiển thị ở đầu và cuối
  
    if (length <= visibleCount * 2) {
      // Nếu mật khẩu quá ngắn, không che đi ký tự nào
      return password;
    }
  
    const visiblePart = password.slice(0, visibleCount) + '*'.repeat(length - visibleCount * 2) + password.slice(-visibleCount);
  
    return visiblePart;
  }
  const navigate=useNavigate();
    const [token,stateToken]=useState("");
    function update(e){
      stateToken(e.target.value);
    }
    async function submit(e){
      e.preventDefault();
        try {
            const res= await axios.post(URL+"logins/reset-password",{params: {
                email:pros.resetPassword,
                token:token
            }});
            if(res.data==="ok"){
                alert("Mật khẩu đã được tạo lại, vui lòng kiểm tra email và đăng nhập")
                navigate("/login");
            }
            else{
                alert("Bạn đã nhập sai mã, vui lòng nhập lại");
            }
            console.log(res.data);
        } catch (error) {
            console.log(error);
            alert("Lỗi server, vui lòng thử lại sau");
        }
    }
    return (
        <div className="page contact-us-page">
  <section className="clean-block clean-form dark">
    <div className="container">
      <div className="block-heading">
        <h2 className="text-info">Nhập mã xác nhận</h2>
      </div>
      <form onSubmit={submit}>
        <div className="mb-3">
          <p>Nhập mã xác nhận được gửi về email:</p>
          <p>{hideMiddleCharacters(pros.resetPassword)}</p>
          <input
            className="form-control item"
            
            id="email"
            data-bs-theme="light"
            name="token" value={token} onChange={update}
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Gửi
        </button>
      </form>
    </div>
  </section>
</div>
    );
}
export default ConfirmPassword;
