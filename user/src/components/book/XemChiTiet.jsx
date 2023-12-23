import Navigator from "../common/Navigator"
import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { cart } from "./Sach";
function XemChiTiet(props){
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
        if (cart.length === 5 - props.penaltyNumber) {
            alert("Số sách mượn quá giới hạn, chuyển đến trang giỏ sách để xác nhận mượn sách")
          } else {
            cart.push(bookId);
          }
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
    return(
        <div>
           <Navigator user={props.user}/>
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
                <footer className="page-footer dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3">
                                <h5>Get started</h5>
                                <ul>
                                    <li><a href="http://localhost:4000/">Home</a></li>
                                    <li><a href="http://localhost:4000/">Sign up</a></li>
                                    <li><a href="http://localhost:4000/">Downloads</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-3">
                                <h5>About us</h5>
                                <ul>
                                    <li><a href="http://localhost:4000/">Company Information</a></li>
                                    <li><a href="http://localhost:4000/">Contact us</a></li>
                                    <li><a href="http://localhost:4000/">Reviews</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-3">
                                <h5>Support</h5>
                                <ul>
                                    <li><a href="http://localhost:4000/">FAQ</a></li>
                                    <li><a href="http://localhost:4000/">Help desk</a></li>
                                    <li><a href="http://localhost:4000/">Forums</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-3">
                                <h5>Legal</h5>
                                <ul>
                                    <li><a href="http://localhost:4000/">Terms of Service</a></li>
                                    <li><a href="http://localhost:4000/">Terms of Use</a></li>
                                    <li><a href="http://localhost:4000/">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <p>© 2023 Copyright Text</p>
                    </div>
                </footer>
            </main>
            }
        </div>
    )
}
export default XemChiTiet;