import { useEffect, useState } from "react";
import { cart } from "./Sach";
import axios from "axios";
function GioHang(){
    const [books, setBooks] = useState([]);
    const [items, setItems] = useState(cart);
    useEffect(() => {
        const getBooks = async () => {
            const res = await axios.get("http://localhost:5000/books/getTempCart", {params: {cart: cart}})
            setBooks(res.data);
            console.log(res.data);
            console.log(cart);
        }
        getBooks();
    }, [items])
    const [borrowDate, setBorrowDate] = useState(getBorrowDate());
    const [expireDate, setExpireDate] = useState(getExpireDate());
    function getBorrowDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      }
      function getExpireDate() {
        const today = new Date();
        const date = new Date(today);
        date.setMonth(today.getMonth() + 6)
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      }
      function handleChangeDate(event){
        setExpireDate(event.target.value);
        console.log(event.target.value);
      }
    function Book(props){
        function handleDelete(){
            const newItems = [...items];
            for(let i = 0; i < cart.length; i++){
                if(cart[i] === props.bookId){
                    cart.splice(i, 1);
                    newItems.splice(i,1)
                    setItems(newItems)
                    break
                }
            }
        }
        return (
            <div>
            <div className="items">    
            <div className="product">
                <div className="row justify-content-center align-items-center" style={{width: '867px',transform: 'translateX(-25px)',height: '293.625px'}}>
                    <div className="col-md-3" style={{width: '255.75px',transform: 'translateX(-50px)'}}>
                        <div className="product-image"><img className="img-fluid d-block mx-auto image" src={props.image} alt="xyz"/></div>
                    </div>
                    <div className="col-md-5 col-xxl-3 product-info" style={{transform: 'scale(1.39)',width: '254.75px'}}><a className="product-name" href="http://localhost:3000/">{props.name}</a>
                        <div className="product-specs">
                            <div><span>Tác giả:&nbsp;</span><span className="value">{props.author}</span></div>
                            <div><span>Thể loại:&nbsp;</span><span className="value">{props.category}</span></div>
                            <div><span>Nhà xuất bản:</span><span className="value" style={{transform: 'translate(60px)'}}>&nbsp;{props.publishor}</span></div>
                        </div>
                    </div>
                    <div className="col-6 col-md-2 price">
                        <div><span style={{color: 'rgb(0,128,255)',fontSize: '16px',transform: 'translateX(393px)'}}>Số lượng</span></div>
                        <div><input type="number" style={{width: '46px',transform: 'translateX(-10px)'}} value="1"/></div>
                    </div>
                </div>
            </div>
            </div><button className="btn btn-outline-success" type="button" style={{transform: 'translateX(811px) translateY(-363px) scale(0.70)',background: 'rgb(237,203,203)',borderColor: 'rgb(0,0,0)',width: 41}} onClick={handleDelete}><i className="fa fa-close border-primary" style={{color: 'rgb(0,0,0)',transform: 'translateX(0px) scale(1.49)'}} onClick={handleDelete}></i></button></div>
        )
    }
    return(
        <div>
            <nav className="navbar navbar-expand-lg fixed-top bg-body clean-navbar navbar-light" style={{ height: '57.375px', transform: 'scale(1)' }}>
        <div className="container"><a className="navbar-brand logo" href="../../index.html" style={{ transform: 'translateX(75px) scale(1.89)', fontSize: '11px' }}>THƯ VIỆN SÁCH</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-2"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navcol-2" style={{ transform: 'translateX(154px)' }}>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><a className="nav-link" href="../../index.html" style={{ transform: 'translate(-85px)' }}>Home</a></li>
                    <li className="nav-item"><a className="nav-link active" href="sach.html" style={{ transform: 'translate(-85px)' }}>SÁCH</a></li>
                    <li className="nav-item"><a className="nav-link" href="../../pricing.html" style={{ transform: 'translate(-85px)' }}>THẺ THÀNH VIÊN</a></li>
                    <li className="nav-item"><a className="nav-link" href="../../about-us.html" style={{ transform: 'translate(-104px)' }}>About Us</a></li>
                    <li className="nav-item" style={{ transform: 'translate(-104px)' }}><a className="nav-link" style={{ transform: 'translate(4px)', width: '144.375px' }} href="../../giohang.html">giỏ hàng<i className="fa fa-shopping-cart text-primary" style={{ transform: 'translate(18px) scale(2.02)' }}></i></a></li>
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
    {books.length > 0 &&
        <main className="page shopping-cart-page">
        <section className="clean-block clean-cart dark" style={{transform: 'translateY(-100px)'}}>
            <div className="container" style={{width: 1333}}>
                <div className="block-heading">
                    <h2 className="text-info">GIỎ HÀNG</h2>
                    <p>Danh sách các đơn hàng mượn sách</p>
                </div>
                <div className="content">
                    <div className="row g-0">
                        <div className="col-md-12 col-lg-8" style={{height: 415.188}}>
                            <Book bookId={books[0].bookId} name={books[0].name} author={books[0].author} category={books[0].category} publishor={books[0].publishor} image={books[0].image}/>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <div className="bg-body-tertiary summary">
                                <h3>hóa đơn</h3>
                                <h4 className="border-primary-subtle" style={{borderColor: 'var(--bs-primary-border-subtle)'}}><span className="text">Số lượng tổng</span><span className="price">{books.length}</span></h4>
                                <h4><span className="text">Mã đơn</span><span className="price">--</span></h4>
                                <h4><label className="form-label" style={{width: '247.0938px',fontSize: '16px',fontWeight: 'bold'}}>Ngày mượn:</label><input type="date" style={{fontSize: 15}} value={borrowDate} readOnly/></h4>
                                <h4><label className="form-label" style={{width: '247.0938px',fontSize: '16px',fontWeight: 'bold'}}>Ngày hết hạn</label><input type="date" style={{fontSize: 15}} value={expireDate} onChange={handleChangeDate}/></h4>
                                <div style={{height: 18}}></div><button className="btn btn-primary btn-lg d-block w-100" type="button">Xác nhận giao dịch</button>
                            </div>
                        </div>
                    </div>
                    {books.filter((book, index) => {
                        return index !== 0;
                    }).map((book) => {
                        return (
                            <div className="row g-0">
                                <div className="col-md-12 col-lg-8" style={{height: 415.188}}>
                                    <Book bookId={book.bookId} name={book.name} author={book.author} category={book.category} publishor={book.publishor} image={book.image}/>
                                </div>
                                <div className="col-md-12 col-lg-4">
                                    <div className="bg-body-tertiary summary">
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    </main>
    }
    </div>
    )
}
export default GioHang;