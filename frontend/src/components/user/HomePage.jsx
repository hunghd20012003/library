function HomePage(){
    return (
<div>
<nav className="navbar navbar-expand-lg fixed-top bg-body clean-navbar navbar-light" style={{ height: "57.375px", transform: "scale(1)" }}>
        <div className="container">
        <a className="navbar-brand logo" href="../../index.html"   style={{ transform: "translateX(75px) scale(1.89)", fontSize: 11 }}>THƯ VIỆN SÁCH</a>
        <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-2"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navcol-2"   style={{ transform: "translateX(154px)" }}>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><a className="nav-link" href="../../index.html" style="transform: translate(-85px);">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="sach.html" style="transform: translate(-85px);">SÁCH</a></li>
                    <li className="nav-item"><a className="nav-link" href="../../pricing.html" style="transform: translate(-85px);">THẺ THÀNH VIÊN</a></li>
                    <li className="nav-item"><a className="nav-link" href="../../about-us.html" style="transform: translate(-104px);">About Us</a></li>
                    <li className="nav-item" style="transform: translate(-104px);"><a className="nav-link" style="transform: translate(4px);width: 144.375px;" href="../../giohang.html">giỏ hàng<i className="fa fa-shopping-cart text-primary" style="transform: translate(18px) scale(2.02);"></i></a></li>
                    <li className="nav-item" style="transform: translate(-5px) translateX(15px);width: 191.4688px;"><span><a href="userinfor/userInfor.html" style="color: rgb(0,0,0);">Alex Sandra</a></span><img className="rounded-circle" style="height: 40px;width: 44px;transform: translate(15px) translateX(-5px);" src="assets/img/scenery/1700499299210khunghinh.net.png" /></li>
                    <li className="nav-item dropdown no-arrow mx-1" style="transform: translateX(-323px);">
                        <div className="nav-item dropdown no-arrow" style="transform: scale(1.59);"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#" style="transform: translateX(35px);"><span className="badge bg-danger badge-counter" style="transform: translateX(5px) scale(0.70);">3+</span><i className="fas fa-bell fa-fw"></i></a>
                            <div className="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in" style="transform: translateX(174px) translateY(-80px) scale(0.50);">
                                <h6 className="dropdown-header">alerts center</h6><a className="dropdown-item d-flex align-items-center" href="#">
                                    <div className="me-3">
                                        <div className="bg-primary icon-circle"><i className="fas fa-file-alt text-white"></i></div>
                                    </div>
                                    <div><span className="small text-gray-500">December 12, 2019</span>
                                        <p>A new monthly report is ready to download!</p>
                                    </div>
                                </a><a className="dropdown-item d-flex align-items-center" href="#">
                                    <div className="me-3">
                                        <div className="bg-success icon-circle"><i className="fas fa-donate text-white"></i></div>
                                    </div>
                                    <div><span className="small text-gray-500">December 7, 2019</span>
                                        <p>$290.29 has been deposited into your account!</p>
                                    </div>
                                </a><a className="dropdown-item d-flex align-items-center" href="#">
                                    <div className="me-3">
                                        <div className="bg-warning icon-circle"><i className="fas fa-exclamation-triangle text-white"></i></div>
                                    </div>
                                    <div><span className="small text-gray-500">December 2, 2019</span>
                                        <p>Spending Alert: We've noticed unusually high spending for your account.</p>
                                    </div>
                                </a><a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <main className="page landing-page">
        <section className="clean-block clean-hero" style="color: rgba(9, 162, 255, 0.85);--bs-secondary: #2c455b;--bs-secondary-rgb: 44,69,91;background: url(&quot;assets/img/scenery/275.jpg&quot;) center / cover;">
            <div className="text">
                <h2><br/>THƯ VIỆN SÁCH ĐH BÁCH KHOA HÀ NỘI<br/><br/></h2>
                <p><br/>CUNG CẤP TÀI LIỆU, TIỂU THUYẾT, VĂN BẢN<br/><br/></p><button className="btn btn-outline-light btn-lg" type="button">TÌM HIỂU THÊM</button>
            </div>
        </section>
        <section className="clean-block clean-catalog dark">
            <div className="container">
                <div className="block-heading">
                    <h2 className="text-info">Thư viện sách</h2>
                    <p>Bao gồm các chủ đề khác nhau như truyện, sách thiên văn, tuyển tập các chuyện cổ tích</p>
                </div>
                <div className="content">
                    <div className="row">
                        <div className="col-md-3">
                            <div style="margin: 49px;"></div>
                            <h1 style="font-size: 23px;font-weight: bold;width: 277px;transform: translateX(35px);height: 31.5938px;">Tác giả</h1>
                            <div><textarea style="height: 37px;transform: translateX(35px);"></textarea></div>
                            <div style="height: 13px;"></div>
                            <div style="width: 312px;height: 9px;"></div>
                            <h1 style="font-size: 23px;font-weight: bold;width: 277px;transform: translateX(35px);">Thể loại</h1>
                            <div className="form-check" style="transform: translateX(35px);"><input className="form-check-input" type="checkbox" id="formCheck-1"/><label className="form-check-label" for="formCheck-1" >Cổ tích</label></div>
                            <div className="form-check" style="transform: translateX(35px);"><input className="form-check-input" type="checkbox" id="formCheck-1"/><label className="form-check-label" for="formCheck-1">Tiểu thuyết</label></div>
                            <div className="form-check" style="transform: translateX(35px);"><input className="form-check-input" type="checkbox" id="formCheck-4"/><label className="form-check-label" for="formCheck-4">Viễn tưởng</label></div>
                            <div className="form-check" style="transform: translateX(35px);"><input className="form-check-input" type="checkbox" id="formCheck-3"/><label className="form-check-label" for="formCheck-3">Trò chơi</label></div>
                            <div className="form-check" style="transform: translateX(35px);"><input className="form-check-input" type="checkbox" id="formCheck-2"/><label className="form-check-label" for="formCheck-2">Khoa học</label></div>
                            <div style="height: 11px;"></div>
                            <h1 style="font-size: 23px;font-weight: bold;width: 277px;transform: translateX(35px);">Nhà xuất bản</h1><textarea style="height: 37px;transform: translateX(35px);"></textarea>
                            <div style="width: 312px;height: 9px;"></div>
                            <h1 style="font-size: 23px;font-weight: bold;width: 277px;transform: translateX(35px);">Tên sách</h1><textarea style="height: 37px;transform: translateX(35px);"></textarea><button className="btn btn-outline-primary" type="submit" style="color: rgb(0,0,0);transform: translate(-25px) translateX(95px) translateY(35px);border-color: rgb(5,135,255);">Tìm Kiếm&nbsp;</button>
                        </div>
                        <div className="col-md-9">
                            <div className="products">
                                <div className="row g-0">
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="border-light-subtle clean-product-item"><a className="btn" role="button"><i className="fa fa-shopping-cart" data-bss-hover-animate="pulse" style="font-size: 27px;"></i></a>
                                            <div className="image"><a href="product-page.html"><img className="img-fluid d-block mx-auto" data-bss-hover-animate="pulse" src="assets/img/scenery/nxbtre_full_21042022_030444.jpg" /></a></div>
                                            <div className="product-name"><a href="#">Harry Potter</a></div><label className="form-label"><strong><em><span style="color: rgb(32, 33, 34);">Harry Potter</span></em></strong><span style="color: rgb(32, 33, 34);">&nbsp;là một loạt&nbsp;</span><a href="https://vi.wikipedia.org/wiki/Ti%E1%BB%83u_thuy%E1%BA%BFt"><span style="color: rgb(51, 102, 204);">tiểu thuyết</span></a><span style="color: rgb(32, 33, 34);">&nbsp;huyền bí gồm bảy phần của&nbsp;</span><a href="https://vi.wikipedia.org/wiki/Nh%C3%A0_v%C4%83n"><span style="color: rgb(51, 102, 204);">nhà văn</span></a><span style="color: rgb(32, 33, 34);">&nbsp;</span><a href="https://vi.wikipedia.org/wiki/V%C6%B0%C6%A1ng_qu%E1%BB%91c_Li%C3%AAn_hi%E1%BB%87p_Anh_v%C3%A0_B%E1%BA%AFc_Ireland"><span style="color: rgb(51, 102, 204);">Anh Quốc</span></a><span style="color: rgb(32, 33, 34);">&nbsp;</span><a href="https://vi.wikipedia.org/wiki/J._K._Rowling"><span style="color: rgb(51, 102, 204);">J. K. Rowling</span></a><span style="color: rgb(32, 33, 34);">.&nbsp;</span></label>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="clean-product-item"><a className="btn" role="button"><i className="fa fa-shopping-cart" data-bss-hover-animate="pulse" style="font-size: 27px;"></i></a>
                                            <div className="image"><a href="#"><img className="img-fluid d-block mx-auto" data-bss-hover-animate="pulse" src="assets/img/scenery/b90d56246298c2d4097d12f49c882075.png"/></a></div>
                                            <div className="product-name"><a href="#">WereWolf</a></div>
                                            <div className="about">
                                                <div className="rating"><img src="assets/img/star.svg"/><img src="assets/img/star.svg"/><img src="assets/img/star.svg" /><img src="assets/img/star-half-empty.svg"/><img src="assets/img/star-empty.svg"/></div>
                                                <div className="price">
                                                    <h3 style="text-decoration:  line-through;">$200</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="clean-product-item"><a className="btn" role="button"><i className="fa fa-shopping-cart" data-bss-hover-animate="pulse" style="font-size: 27px;"></i></a>
                                            <div className="image"><a href="#"><img className="img-fluid d-block mx-auto" data-bss-hover-animate="pulse" src="assets/img/scenery/MV5BZDA1ZmQ2OGMtZDhkMC00ZjRkLWE3ZTMtMzA5ZTk0YjM1OGRmXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_.jpg"/></a></div>
                                            <div className="product-name"><a href="#">The call of the Wind</a></div>
                                            <div className="about">
                                                <div className="rating"><img src="assets/img/star.svg"/><img src="assets/img/star.svg"/><img src="assets/img/star.svg"/><img src="assets/img/star-half-empty.svg"/><img src="assets/img/star-empty.svg"/></div>
                                                <div className="price">
                                                    <h3 style="text-decoration:  line-through;">$150</h3>
                                                </div>
                                            </div><a className="btn" role="button"></a>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="clean-product-item"><a className="btn" role="button"><i className="fa fa-shopping-cart" data-bss-hover-animate="pulse" style="font-size: 27px;"></i></a>
                                            <div className="image"><a href="#"><img className="img-fluid d-block mx-auto" data-bss-hover-animate="pulse" src="assets/img/scenery/tam_quoc_dien_nghia_6_tap__tap_1_9c60b067fd2d48a88e7e08058fdd32a8_master.jpg"/></a></div>
                                            <div className="product-name"><a href="#">Tam Quốc diễn nghĩa</a></div>
                                            <div className="about">
                                                <div className="rating"><img src="assets/img/star.svg"/><img src="assets/img/star.svg"/><img src="assets/img/star.svg"/><img src="assets/img/star-half-empty.svg"/><img src="assets/img/star-empty.svg"/></div>
                                                <div className="price">
                                                    <h3 style="text-decoration:  line-through;">$230</h3>
                                                </div>
                                            </div><a className="btn" role="button"></a>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="clean-product-item"><a className="btn" role="button"><i className="fa fa-shopping-cart" data-bss-hover-animate="pulse" style="font-size: 27px;"></i></a>
                                            <div className="image"><a href="#"><img className="img-fluid d-block mx-auto" data-bss-hover-animate="pulse" src="assets/img/scenery/1.png"/></a></div>
                                            <div className="product-name"><a href="#">Đắc nhân tâm</a></div>
                                            <div className="about">
                                                <div className="rating"><img src="assets/img/star.svg"/><img src="assets/img/star.svg"/><img src="assets/img/star.svg"/><img src="assets/img/star-half-empty.svg"/><img src="assets/img/star-empty.svg"/></div>
                                                <div className="price">
                                                    <h3 style="text-decoration:  line-through;">$400</h3>
                                                </div>
                                            </div><a className="btn" role="button"></a>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="clean-product-item"><a className="btn" role="button"><i className="fa fa-shopping-cart" data-bss-hover-animate="pulse" style="font-size: 27px;"></i></a>
                                            <div className="image"><a href="#"><img className="img-fluid d-block mx-auto" src="assets/img/tech/image2.jpg"/></a></div>
                                            <div className="product-name"><a href="#">Lorem ipsum dolor sit amet</a></div>
                                            <div className="about">
                                                <div className="rating"><img src="assets/img/star.svg"/><img src="assets/img/star.svg"/><img src="assets/img/star.svg"/><img src="assets/img/star-half-empty.svg"/><img src="assets/img/star-empty.svg"/></div>
                                                <div className="price">
                                                    <h3 style="text-decoration:  line-through;">$100</h3>
                                                </div>
                                            </div><a className="btn" role="button"></a>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="clean-product-item"><a className="btn" role="button"><i className="fa fa-shopping-cart" data-bss-hover-animate="pulse" style="font-size: 27px;"></i></a><a className="btn" role="button"></a>
                                            <div className="image"><a href="#"><img className="img-fluid d-block mx-auto" src="assets/img/tech/image2.jpg"/></a></div>
                                            <div className="product-name"><a href="#">Lorem ipsum dolor sit amet</a></div>
                                            <div className="about">
                                                <div className="rating"><img src="assets/img/star.svg"/><img src="assets/img/star.svg"/><img src="assets/img/star.svg"/><img src="assets/img/star-half-empty.svg"/><img src="assets/img/star-empty.svg"/></div>
                                                <div className="price">
                                                    <h3>$100</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="clean-product-item"><a className="btn" role="button"><i className="fa fa-shopping-cart" data-bss-hover-animate="pulse" style="font-size: 27px;"></i></a>
                                            <div className="image"><a href="#"><img className="img-fluid d-block mx-auto" src="assets/img/tech/image2.jpg"/></a></div>
                                            <div className="product-name"><a href="#">Lorem ipsum dolor sit amet</a></div>
                                            <div className="about">
                                                <div className="rating"><img src="assets/img/star.svg"/><img src="assets/img/star.svg"/><img src="assets/img/star.svg"/><img src="assets/img/star-half-empty.svg"/><img src="assets/img/star-empty.svg"/></div>
                                                <div className="price">
                                                    <h3>$100</h3>
                                                </div>
                                            </div><a className="btn" role="button"></a>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="clean-product-item"><a className="btn" role="button"><i className="fa fa-shopping-cart" data-bss-hover-animate="pulse" style="font-size: 27px;"></i></a>
                                            <div className="image"><a href="#"><img className="img-fluid d-block mx-auto" src="assets/img/tech/image2.jpg"/></a><a href="#"></a></div>
                                            <div className="product-name"><a href="#">Lorem ipsum dolor sit amet</a></div>
                                            <div className="about">
                                                <div className="rating"><img src="assets/img/star.svg"/><img src="assets/img/star.svg"/><img src="assets/img/star.svg"/><img src="assets/img/star-half-empty.svg"/><img src="assets/img/star-empty.svg"/></div>
                                                <div className="price">
                                                    <h3>$100</h3>
                                                </div>
                                            </div><a className="btn" role="button"></a>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="clean-product-item"><a className="btn" role="button"><i className="fa fa-shopping-cart" data-bss-hover-animate="pulse" style="font-size: 27px;"></i></a>
                                            <div className="image"><a href="#"><img className="img-fluid d-block mx-auto" src="assets/img/tech/image2.jpg"/></a><a href="#"></a></div>
                                            <div className="product-name"><a href="#">Lorem ipsum dolor sit amet</a></div>
                                            <div className="about">
                                                <div className="rating"><img src="assets/img/star.svg"/><img src="assets/img/star.svg"/><img src="assets/img/star.svg"/><img src="assets/img/star-half-empty.svg"/><img src="assets/img/star-empty.svg"/></div>
                                                <div className="price">
                                                    <h3>$100</h3>
                                                </div>
                                            </div><a className="btn" role="button"></a>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="clean-product-item"><a className="btn" role="button"><i className="fa fa-shopping-cart" data-bss-hover-animate="pulse" style="font-size: 27px;"></i></a>
                                            <div className="image"><a href="#"><img className="img-fluid d-block mx-auto" src="assets/img/tech/image2.jpg"/></a><a href="#"></a></div>
                                            <div className="product-name"><a href="#">Lorem ipsum dolor sit amet</a></div>
                                            <div className="about">
                                                <div className="rating"><img src="assets/img/star.svg"/><img src="assets/img/star.svg"/><img src="assets/img/star.svg"/><img src="assets/img/star-half-empty.svg"/><img src="assets/img/star-empty.svg"/></div>
                                                <div className="price">
                                                    <h3>$100</h3>
                                                </div>
                                            </div><a className="btn" role="button"></a>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="clean-product-item"><a className="btn" role="button"><i className="fa fa-shopping-cart" data-bss-hover-animate="pulse" style="font-size: 27px;"></i></a>
                                            <div className="image"><a href="#"><img className="img-fluid d-block mx-auto" src="assets/img/tech/image2.jpg"/></a><a href="#"></a></div>
                                            <div className="product-name"><a href="#">Lorem ipsum dolor sit amet</a></div>
                                            <div className="about">
                                                <div className="rating"><img src="assets/img/star.svg"/><img src="assets/img/star.svg"/><img src="assets/img/star.svg"/><img src="assets/img/star-half-empty.svg"/><img src="assets/img/star-empty.svg"/></div>
                                                <div className="price">
                                                    <h3>$100</h3>
                                                </div>
                                            </div><a className="btn" role="button"></a>
                                        </div>
                                    </div>
                                </div>
                                <nav>
                                    <ul className="pagination">
                                        <li className="page-item disabled"><a className="page-link" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
                                        <li className="page-item active"><a className="page-link">1</a></li>
                                        <li className="page-item"><a className="page-link">2</a></li>
                                        <li className="page-item"><a className="page-link">3</a></li>
                                        <li className="page-item"><a className="page-link" aria-label="Next"><span aria-hidden="true">»</span></a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="clean-block slider dark">
            <div className="container">
                <div className="block-heading">
                    <h2 className="text-info">SÁCH</h2>
                    <p style="width: 533px;"><br/><em><span style="color: rgb(102, 0, 102);">Đằng sau thành công của một con người không thể thiếu một cuốn sách gối đầu. Sách là kho báu tri thức của cả nhân loại, là kết tinh trí tuệ qua bao thế hệ con người. Một cuốn sách hay chính là chìa khóa quan trọng để mỗi con người có thể chinh phục mọi khó khăn và chạm đến thành công</span></em><br/><br/></p>
                </div>
                <div className="carousel slide" data-bs-ride="carousel" id="carousel-1">
                    <div className="carousel-inner">
                        <div className="carousel-item active"><img className="w-100 d-block" src="assets/img/scenery/1.jpg" alt="Slide Image"/></div>
                        <div className="carousel-item"><img className="w-100 d-block" src="assets/img/scenery/sach-hay-ve-cuoc-song-1200x900.jpg" alt="Slide Image"/></div>
                        <div className="carousel-item"><img className="w-100 d-block" src="assets/img/scenery/duong-toi-dien-bien-phu-3782-1683454392.jpg" alt="Slide Image"/></div>
                    </div>
                    <div><a className="carousel-control-prev" href="#carousel-1" role="button" data-bs-slide="prev"><span className="carousel-control-prev-icon"></span><span className="visually-hidden">Previous</span></a><a className="carousel-control-next" href="#carousel-1" role="button" data-bs-slide="next"><span className="carousel-control-next-icon"></span><span className="visually-hidden">Next</span></a></div>
                    <div className="carousel-indicators"><button type="button" data-bs-target="#carousel-1" data-bs-slide-to="0" className="active"></button> <button type="button" data-bs-target="#carousel-1" data-bs-slide-to="1"></button> <button type="button" data-bs-target="#carousel-1" data-bs-slide-to="2"></button></div>
                </div>
            </div>
        </section>
    </main>
</div>
);
}
export default HomePage;