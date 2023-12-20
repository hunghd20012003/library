import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export var cart=[];
function Sach(){
    let navigate = useNavigate();
    const [page, setPage] = useState(1);
    const [question, setQuestion] = useState({
        author: "",
        publishor:"",
        name:""
    });
    const [categories, setCategories] = useState([""]);
    const [cau, setCau] = useState({});
    const [books, setBooks] = useState([]);
    const [abc, setAbc] = useState(false);
    function handleAddToCart(s){
        if (cart.length === 5) {
            alert("Số sách mượn quá giới hạn, chuyển đến trang giỏ sách để xác nhận mượn sách")
          } else {
            cart.push(s);
          }
    }
    function Book(props){
        function handleClick(){
            navigate(`/user/home/${props.bookId}`)
        }
        return(
            <div className="col-12 col-md-6 col-lg-4">
                <div className="clean-product-item"><a className="btn cursor-pointer" role="button" onClick={() => handleAddToCart(props.bookId)}><i className="fa fa-shopping-cart" data-bss-hover-animate="pulse" style={{fontSize: 27}}></i></a>
                    <div className="image"><a className="cursor-pointer" onClick={handleClick}><img className="img-fluid cd-block mx-auto" data-bss-hover-animate="pulse" src={props.image} alt="xyz"/></a></div>
                    <div className="product-name"><a className="cursor-pointer" onClick={handleClick}>{props.name}</a></div>
                    <div className="about">
                        
                    </div>
                </div>
            </div>
        )
    }
    useEffect(() => {
        const getBooks = async () => {
            if(abc === true){
                console.log("true");
                const res = await axios.get("http://localhost:5000/books/userSearch", {params: {page: page, limit: 6, cau: cau}});
                console.log(res.data);
                setBooks(res.data);
            }else{
                const res = await axios.get("http://localhost:5000/books/page", {params: {page: page, limit: 6}});
                setBooks(res.data);
                console.log(res.data);
            }
            
        }
        getBooks();
    }, [page, abc, cau])
    function handleFirstPage(){
        const getBooks = async () => {
            try{
                setPage(1)
                console.log(page);
            }catch(error){
                console.log(error.message);
            }
        }
        getBooks();
    }
    function handleNextPage(){
        const getBooks = async () => {
            try{
                setPage((prePage) => prePage + 1)
            }catch(error){
                console.log(error.message);
            }
        }
        getBooks();
    }
    function handlePreviousPage(){
        const getBooks = async () => {
            try{
                setPage((prePage) => prePage - 1)
            }catch(error){
                console.log(error.message);
            }
        }
        getBooks();
    }
    function handleLastPage(){
        const getBooks = async () => {
            try{
                if(abc === true){
                    const res = await axios.get("http://localhost:5000/books/userSearchLastPage", {params: {limit: 6, cau: cau}});
                    setPage(res.data)
                }else{
                    const res = await axios.get("http://localhost:5000/books/lastpage", {params: {limit: 6}});
                    setPage(res.data)
                }
                console.log(page);
            }catch(err){
                console.log(err.message);
            }
        }
        getBooks();
    }
    function handleChange(event){
        setQuestion((preQuestion) => {
            return {
                ...preQuestion,
                [event.target.name]:event.target.value
            }
        })
    }
    const handleCheckboxChange = (value) => {
        if (categories.includes(value)) {
          setCategories(categories.filter(category => category !== value));
        } else {
          setCategories([...categories, value]);
        }
        console.log(categories);
      };
    function handleSearch(){
        setAbc(true);
        setPage(1);
        setCau({
            question,
            categories
        })
    }
    function viewCart(){
        navigate('/giohang')
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
    <main className="page landing-page">
        <section className="clean-block clean-catalog dark">
            <div className="container" style={{transform: 'translateY(-124px)'}}>
                <div className="block-heading">
                    <h2 className="text-info">Thư viện sách</h2>
                    <p>Bao gồm các chủ đề khác nhau như truyện, sách thiên văn, tuyển tập các chuyện cổ tích</p>
                </div>
                <div className="content">
                    <div className="row">
                        <div className="col-md-3">
                            <div style={{margin: 49}}></div>
                            <h1 style={{ fontSize: '23px', fontWeight: 'bold', width: '277px', transform: 'translateX(35px)', height: '31.5938px' }}>Tác giả</h1>
                            <div><input style={{ height: '37px', transform: 'translateX(35px)'}} value={question.author} onChange={handleChange} name="author"></input></div>
                            <div style={{height: 13}}></div>
                            <div style={{width: 312,height: 9}}></div>
                            <h1 style={{ fontSize: '23px', fontWeight: 'bold', width: '277px', transform: 'translateX(35px)' }}>Thể loại</h1>
                            <div className="form-check" style={{transform: 'translateX(35px)'}}><input className="form-check-input" type="checkbox" id="formCheck-1" value="Tiểu thuyết" checked={categories.includes('Tiểu thuyết')} onChange={() => handleCheckboxChange('Tiểu thuyết')}/><label className="form-check-label" for="formCheck-1">Tiểu thuyết</label></div>
                            <div className="form-check" style={{transform: 'translateX(35px)'}}><input className="form-check-input" type="checkbox" id="formCheck-4" value="Truyện tranh" checked={categories.includes('Truyện tranh')} onChange={() => handleCheckboxChange('Truyện tranh')}/><label className="form-check-label" for="formCheck-4">Truyện tranh</label></div>
                            <div className="form-check" style={{transform: 'translateX(35px)'}}><input className="form-check-input" type="checkbox" id="formCheck-3" value="Reference" checked={categories.includes('Sách tham khảo')} onChange={() => handleCheckboxChange('Sách tham khảo')}/><label className="form-check-label" for="formCheck-3">Sách tham khảo</label></div>
                            <div style={{height: 11}}></div>
                            <h1 style={{ fontSize: '23px', fontWeight: 'bold', width: '277px', transform: 'translateX(35px)' }}>Nhà xuất bản</h1><input style={{ height: '37px', transform: 'translateX(35px)'}} value={question.publishor} onChange={handleChange} name="publishor"></input>
                            <div style={{width: 312,height: 9}}></div>
                            <h1 style={{ fontSize: '23px', fontWeight: 'bold', width: '277px', transform: 'translateX(35px)' }}>Tên sách</h1><input style={{ height: '37px', transform: 'translateX(35px)' }} value={question.name} onChange={handleChange} name="name"></input>
                            <div class="row">
                            <div className="col text-center"><button className="btn btn-primary text-nowrap text-center" type="button" style={{position: 'relative',textAlign: 'center'}} onClick={handleSearch}>Tìm kiếm</button></div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="products">
                                <div className="row g-0">
                                    {books.length > 0 && books.map(book => {
                                        return <Book name={book.name} image={book.image} bookId={book.bookId}/>
                                    })}
                                </div>
                                <nav>
                                    <ul className="pagination">
                                        <li className="page-item"><button className="page-link" aria-label="Previous" onClick={handlePreviousPage}><span aria-hidden="true">«</span></button></li>
                                        <li className="page-item active"><button className="page-link" onClick={handleFirstPage}>1</button></li>
                                        <li className="page-item"><button className="page-link">...</button></li>
                                        <li className="page-item"><button className="page-link" onClick={handleLastPage}>End</button></li>
                                        <li className="page-item"><button className="page-link" aria-label="Next" onClick={handleNextPage}><span aria-hidden="true">»</span></button></li>
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
                <div className="carousel slide" data-bs-ride="carousel" id="carousel-1">
                    <div className="carousel-inner">
                        <div className="carousel-item active"></div>
                        <div className="carousel-item"><img className="w-100 d-block" src="../assets/img/scenery/sach-hay-ve-cuoc-song-1200x900.jpg" alt="Slide"/></div>
                        <div className="carousel-item"><img className="w-100 d-block" src="../assets/img/scenery/duong-toi-dien-bien-phu-3782-1683454392.jpg" alt="Slide"/></div>
                    </div>
                    <div><a className="carousel-control-prev" href="#carousel-1" role="button" data-bs-slide="prev"><span className="carousel-control-prev-icon"></span><span className="visually-hidden">Previous</span></a><a className="carousel-control-next" href="#carousel-1" role="button" data-bs-slide="next"><span className="carousel-control-next-icon"></span><span className="visually-hidden">Next</span></a></div>
                    <div className="carousel-indicators"><button type="button" data-bs-target="#carousel-1" data-bs-slide-to="0" className="active"></button> <button type="button" data-bs-target="#carousel-1" data-bs-slide-to="1"></button> <button type="button" data-bs-target="#carousel-1" data-bs-slide-to="2"></button></div>
                </div>
            </div>
        </section>
    </main>
        </div>
    )
}
export default Sach;