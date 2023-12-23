import Navigator from "../common/Navigator"
import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export var cart=[];
function Sach(props){
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
        if (cart.length === 5 - props.penaltyNumber) {
            alert("Số sách mượn quá giới hạn, chuyển đến trang giỏ sách để xác nhận mượn sách")
          } else {
            cart.push(s);
          }
    }
    function Book(props){
        function handleClick(){
            navigate(`/book-detail/${props.bookId}`)
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
    return (
        <div>
           <Navigator user={props.user}/>
            <main className="page catalog-page">
                <section className="clean-block clean-catalog dark">
                    <div className="container">
                        <div className="block-heading">
                            <h2 className="text-info">SÁCH</h2>
                            <p><br/>Bao gồm các chủ đề khác nhau như truyện, sách thiên văn, tuyển tập các chuyện cổ tích<br/><br/></p>
                        </div>
                        <div className="content">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="d-none d-md-block">
                                        <div className="filters">
                                            <div className="filter-item">
                                                <h3>Thể loại</h3>
                                                <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-1" value="Tiểu thuyết" checked={categories.includes('Tiểu thuyết')} onChange={() => handleCheckboxChange('Tiểu thuyết')}/><label className="form-check-label" for="formCheck-1">Tiểu thuyết</label></div>
                                                <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-4" value="Truyện tranh" checked={categories.includes('Truyện tranh')} onChange={() => handleCheckboxChange('Truyện tranh')}/><label className="form-check-label" for="formCheck-4">Truyện tranh</label></div>
                                                <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-3" value="Reference" checked={categories.includes('Sách tham khảo')} onChange={() => handleCheckboxChange('Sách tham khảo')}/><label className="form-check-label" for="formCheck-3">Sách tham khảo</label></div>
                                            </div>
                                            <div className="filter-item">
                                                <h3>Nhà xuất bản</h3><input className="form-control-sm" value={question.publishor} onChange={handleChange} name="publishor"></input>
                                            </div>
                                            <div className="filter-item">
                                                <h3>Tên tác giả</h3><input className="form-control-sm" value={question.author} onChange={handleChange} name="author"></input>
                                            </div>
                                            <div className="filter-item">
                                                <h3>Tên sách</h3><input className="form-control-sm" value={question.name} onChange={handleChange} name="name"></input>
                                            </div>
                                            <div className="filter-item"><button className="btn btn-primary" type="button" onClick={handleSearch}>Tìm kiếm</button></div>
                                        </div>
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
            </main>
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
        </div>
    )
}
export default Sach