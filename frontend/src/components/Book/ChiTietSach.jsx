import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { cart } from "./Sach";
function ChiTietSach(){
    let navigate = useNavigate();
    const { bookId } = useParams();
    const [book, setBook] = useState({});
    const [books, setBooks] = useState([]);
    const [id, setID] = useState(bookId);
    useEffect(() => {
        const getBook = async () => {
            try{
                const res = await axios.get("http://localhost:5000/books/uniquebook", {params:{bookId: bookId}});
                setBook(res.data);
                console.log(res.data);
                const res1 = await axios.get("http://localhost:5000/books/category", {params: {page: 1, limit: 3, question: res.data.category}});
                setBooks(res1.data);
                console.log(res1.data);
                window.scrollTo(0, 0);
            }catch(error){
                console.log(error.message);
            }
        }
        getBook();
    }, [id])
    function handleAddtoCart(){
        cart.push(bookId)
    }
    function viewCart(){
        navigate("/giohang")
    }
    function OtherBook(props){
        function handleView(){
            navigate(`/user/home/${props.bookId}`)
            setID(props.bookId)
        }
        return(
            <div className="col-sm-6 col-lg-4">
                <div className="clean-related-item">
                    <div className="image"><img className="img-fluid d-block mx-auto" style={{width: 240, height: 420, objectFit: 'cover'}} data-bss-hover-animate="pulse" src={props.image} onClick={handleView}/></div>
                    <div className="related-name"><a onClick={handleView}>{props.name}</a>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top bg-body clean-navbar navbar-light" style={{ height: '57.375px', transform: 'scale(1)' }}>
        <div className="container"><a className="navbar-brand logo" href="../../index.html" style={{ transform: 'translateX(75px) scale(1.89)', fontSize: '11px' }}>THƯ VIỆN SÁCH</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-2"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navcol-2" style={{ transform: 'translateX(154px)' }}>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><a className="nav-link" href="../../index.html" style={{ transform: 'translate(-85px)' }}>Home</a></li>
                    <li className="nav-item"><a className="nav-link active" href="sach.html" style={{ transform: 'translate(-85px)' }}>SÁCH</a></li>
                    <li className="nav-item"><a className="nav-link" href="../../pricing.html" style={{ transform: 'translate(-85px)' }}>THẺ THÀNH VIÊN</a></li>
                    <li className="nav-item"><a className="nav-link" href="../../about-us.html" style={{ transform: 'translate(-104px)' }}>About Us</a></li>
                    <li className="nav-item" style={{ transform: 'translate(-104px)' }}><a className="nav-link" style={{ transform: 'translate(4px)', width: '144.375px' }} onClick={viewCart}>giỏ hàng<i className="fa fa-shopping-cart text-primary" style={{ transform: 'translate(18px) scale(2.02)' }}></i></a></li>
                    <li className="nav-item" style={{ transform: 'translate(-5px) translateX(15px)', width: '191.4688px' }}><span><a href="userinfor/userInfor.html" style={{ color: 'rgb(0,0,0)' }}>Alex Sandra</a></span><img className="rounded-circle" style={{ height: '40px', width: '44px', transform: 'translate(15px) translateX(-5px)'}} src="../assets/img/scenery/1700499299210khunghinh.net.png" alt="xyz"/></li>
                    <li className="nav-item dropdown no-arrow mx-1" style={{transform: 'translateX(-323px)'}}>
                    <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="http://localhost:3000/"><span className="badge bg-danger badge-counter">3+</span><i className="fas fa-bell fs-5 fa-fw"></i></a>
                                    <div className="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
                                        <h6 className="dropdown-header">alerts center</h6><a className="dropdown-item d-flex align-items-center" href="http://localhost:3000/">
                                            <div className="me-3">
                                                <div className="bg-primary icon-circle"><i className="fas fa-file-alt text-white"></i></div>
                                            </div>
                                            <div><span className="small text-gray-500">December 12, 2019</span>
                                                <p>A new monthly report is ready to download!</p>
                                            </div>
                                        </a><a className="dropdown-item d-flex align-items-center" href="http://localhost:3000/">
                                            <div className="me-3">
                                                <div className="bg-success icon-circle"><i className="fas fa-donate text-white"></i></div>
                                            </div>
                                            <div><span className="small text-gray-500">December 7, 2019</span>
                                                <p>$290.29 has been deposited into your account!</p>
                                            </div>
                                        </a><a className="dropdown-item d-flex align-items-center" href="http://localhost:3000/">
                                            <div className="me-3">
                                                <div className="bg-warning icon-circle"><i className="fas fa-exclamation-triangle text-white"></i></div>
                                            </div>
                                            <div><span className="small text-gray-500">December 2, 2019</span>
                                                <p>Spending Alert: We've noticed unusually high spending for your account.</p>
                                            </div>
                                        </a><a className="dropdown-item text-center small text-gray-500" href="http://localhost:3000/">Show All Alerts</a>
                                    </div>
                                </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    {Object.keys(book).length > 0 && books.length &&
        <main className="page product-page">
        <section className="clean-block clean-product dark">
            <div className="container">
                <div className="block-content">
                    <div className="product-info">
                        <div className="row">
                            <div className="col-md-3 custom-height" style={{height: 400}}>
                                <div className="gallery">
                                    <div id="product-preview" className="vanilla-zoom">
                                        <div className="sidebar"><img className="img-fluid d-block" style={{width: 200, height: 355}} src={book.image}/></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9 custom-height" style={{height: 400}}>
                                <div className="info">
                                    <h3>{book.name}</h3>
                                    <div className="price" style={{height: 49.7969}}>
                                        <h3>{book.author}</h3>
                                    </div>
                                    <div className="price" style={{height: 67}}><label className="form-label" style={{fontSize: 19}}>Số lượng còn lại:</label><label className="form-label" style={{fontSize: 20,transform: 'translateX(15px)'}}>{book.available}</label></div><button className="btn btn-primary" type="button" onClick={handleAddtoCart}><i className="icon-basket"></i>Add to Cart</button>
                                    <div className="summary">
                                        <p>{book.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-info">
                        <div>
                            <ul className="nav nav-tabs" role="tablist" id="myTab">
                                <li className="nav-item" role="presentation"><a className="nav-link" role="tab" data-bs-toggle="tab" id="description-tab" href="#description">Description</a></li>
                                <li className="nav-item" role="presentation"><a className="nav-link active" role="tab" data-bs-toggle="tab" id="specifications-tabs" href="#specifications">Specifications</a></li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade description" role="tabpanel" id="description">
                                    <p style={{width: 1007,transform: 'translate(-249px)',height: 278}}>{book.description}</p>
                                </div>
                                <div className="tab-pane fade show active specifications" role="tabpanel" id="specifications" style={{height: 338}}>
                                    <div className="table-responsive">
                                        <table className="table table-bordered">
                                            <tbody>
                                                <tr>
                                                    <td className="stat">TÁC GIẢ</td>
                                                    <td>{book.author}</td>
                                                </tr>
                                                <tr>
                                                    <td className="stat">NHÀ XUẤT BẢN</td>
                                                    <td>{book.publishor}</td>
                                                </tr>
                                                <tr></tr>
                                                <tr>
                                                    <td className="stat">THỂ LOẠI</td>
                                                    <td>{book.category}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="clean-related-items">
                        <h3>CÁC SÁCH KHÁC</h3>
                        <div className="items">
                            <div className="row justify-content-center">
                                {books.map((b) => {
                                    return <OtherBook bookId={b.bookId} name={b.name} image={b.image}/>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    }
        </div>
    )
}

export default ChiTietSach;