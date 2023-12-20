import avatar from "../img/koduck.png"
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { navigate } from "react-router-dom";
import Navigator from "./common/Navigator";
function HomePage(){
  
    return (
<div>
  <Navigator></Navigator>
  <main className="page landing-page">
  <section
  className="clean-block clean-hero"
  style={{
    backgroundImage: `${avatar}`,
    color: "rgba(9, 162, 255, 0.85)"
  }}
>
  <div className="text">
    <h2>THƯ VIỆN SÁCH ĐẠI HỌC BÁCH KHOA HÀ NỘI</h2>
    <p>
      Nơi cung cấp tài liệu học thuật, truyện tranh, tiểu thuyết và các loại
      sách khác...
    </p>
    <button className="btn btn-outline-light btn-lg" type="button">
      TÌM HIỂU THÊM
    </button>
  </div>
</section>
  </main>
</div>
);
}
export default HomePage;