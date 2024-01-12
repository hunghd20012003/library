
import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios'
import Navigator from '../Hung/Navigator';
import SearchBoard from '../Hung/SearchBoard';
function AddUser(){
    const URL="http://localhost:5000/";
    const font_size = {
        fontSize: '13px',
      };

    const padding_left = {
        paddingLeft: '30px',
      };

    const margin_top = {
        marginTop: '15px',
    };

    const margin_left_top = {
        marginLeft: '15px',
        marginTop: '15px',
    };
    const buttonStyle = {
        border: 'none',
        padding: '0px 0px',
    };
      
    const [user, setUser]=useState({
        name:"",
        id:"",
        email:"",
        phonenumber:"",
        password:"",
        category:"",
    });

    const [users, setUsers] = useState([]);
    const [userNumber, setUserNumber] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [startIndex, setStartIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(2);
    const [showModal, setShowModal] = useState(false);
    const [emailT, setemailT] = useState('');

    useEffect(() => {
        const fetchDataFromApi = async () => {
            const response = await axios.get(URL+"addusers/list");
            try {
                setUsers(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchDataFromApi();
    }, []);

    const update= (event, field) => {
        setUser({ ...user, [field]: event.target.value });

    };

    const onUpdate = async (event) => {
        event.preventDefault();
        try {
            const res= await axios.post(URL+"addusers/adduser",{params: {
                name: user.name,
                id:user.id,
                email:user.email,
                phonenumber:user.phonenumber,
                password:user.password,
                category:user.category,
            }});
            if(res.data=="oke"){
                alert("Thêm thành công");
            }
            else if(res.data=="Tài khoản đã tồn tại"){
                alert("Email đã tồn tại");
            }
            else if(res.data=="Lỗi sever"){
                alert("Lỗi sever");
            }
            console.log(res.data);
        } catch (error) {
            alert("Có lỗi");
            console.log(error);
        }
    };


    const onAccept = async (email1) => {
        const res= await axios.post(URL+"addusers/acceptuser",{params: {
            email:email1
        }});
        alert(res.data);
        const updatedUsers = users.filter((user) => user.email !== email1);
        setUsers(updatedUsers);
    };

    const onDecline = async (email1) => {
        setemailT(email1);
        setShowModal(true);
    };

    const handleConfirmDecline = async() => {
        const res= await axios.post(URL+"addusers/declineuser",{params: {
            email: emailT
        }});
        alert(res.data);

        const updatedUsers = users.filter((user) => user.email !== emailT);
        setUsers(updatedUsers);
        setShowModal(false);
    };

    const handleCancelDecline = () => {
        setShowModal(false);
    };
    

    const renderUsers = () => {
        const endIndex = startIndex + itemsPerPage;
        return users
          .slice(startIndex, endIndex)
          .map((userData, index) => (
            <tr key={index}>
              <td>{startIndex + index + 1}</td>
                <td>{userData.id}</td>
                <td>{userData.name}</td>
                <td>{userData.isMember ? "Member" : "Student"}</td>
                <td>{userData.email}</td>
                <td>{userData.phonenumber}</td>
                <td className="text-center">4 months</td>
                <td className="text-center">
                    <button className="btn btn-success btn-sm border rounded-pill" type="button" href="/adduser" onClick={() => onAccept(userData.email)}>Accept</button>
                    <button className="btn btn-danger btn-sm border rounded-pill" type="button" onClick={() => onDecline(userData.email)}>Decline</button>
                </td>
                <Modal show={showModal} onHide={handleCancelDecline}>
                    <Modal.Header closeButton>
                    <Modal.Title>Xác nhận xóa</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    Bạn có chắc chắn muốn xóa không?
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleCancelDecline}>
                        Hủy
                    </Button>
                    <Button variant="danger" onClick={handleConfirmDecline}>
                        Xóa
                    </Button>
                    </Modal.Footer>
                </Modal>
            </tr>
          ));
      };

    const reset = () => {
        window.location.reload();
    };
    
    const renderPageNumbers = () => {
        const pageCount = Math.ceil(users.length / itemsPerPage);

        return Array.from({ length: pageCount }, (_, index) => (
            <button className="page-item" style={buttonStyle} key={index + 1} onClick={() => handlePageClick(index + 1)}>
            <a className="page-link">{index + 1}</a>
            </button>
        ));
    };

    const handlePageClick = (pageNumber) => {
        const newStartIndex = (pageNumber - 1) * itemsPerPage;
        setStartIndex(newStartIndex);
        setCurrentPage(pageNumber);
    };


    const handleNextPage = () => {
        setStartIndex(startIndex + itemsPerPage);
        setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - itemsPerPage);
            setCurrentPage(currentPage - 1);
        }
    };
    const handleItemsPerPageChange = (event) => {
        const selectedItemsPerPage = parseInt(event.target.value, 10);
        setItemsPerPage(selectedItemsPerPage);
        setStartIndex(0); 
        setCurrentPage(1); 
    };

    return(
        <div id="page-top">
            <div id="wrapper">
        <Navigator></Navigator>
        <div className="d-flex flex-column" id="content-wrapper">
            <div id="content">
                <SearchBoard></SearchBoard>
                <div className="container-fluid">
                    <h3 className="text-dark mb-4"><strong>ADD USER</strong></h3>
                    <div className="row mb-3">
                        <div className="col-lg-4">
                            <div className="card mb-3">
                                <div className="card-body text-center shadow"><img className="rounded-circle mb-3 mt-4" src="../assets/img/dogs/image2.jpeg" width="160" height="160"/>
                                    <div className="mb-3"><button className="btn btn-primary btn-sm" type="button">Change Photo</button></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="row mb-3 d-none">
                                <div className="col">
                                    <div className="card text-white bg-primary shadow">
                                        <div className="card-body">
                                            <div className="row mb-2">
                                                <div className="col">
                                                    <p className="m-0">Peformance</p>
                                                    <p className="m-0"><strong>65.2%</strong></p>
                                                </div>
                                                <div className="col-auto"><i className="fas fa-rocket fa-2x"></i></div>
                                            </div>
                                            <p className="text-white-50 small m-0"><i className="fas fa-arrow-up"></i>&nbsp;5% since last month</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card text-white bg-success shadow">
                                        <div className="card-body">
                                            <div className="row mb-2">
                                                <div className="col">
                                                    <p className="m-0">Peformance</p>
                                                    <p className="m-0"><strong>65.2%</strong></p>
                                                </div>
                                                <div className="col-auto"><i className="fas fa-rocket fa-2x"></i></div>
                                            </div>
                                            <p className="text-white-50 small m-0"><i className="fas fa-arrow-up"></i>&nbsp;5% since last month</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="card shadow mb-3">
                                        <div className="card-header py-3">
                                            <p className="text-primary m-0 fw-bold">Fill the form</p>
                                        </div>
                                        <div className="card-body">
                                            <form onSubmit={onUpdate}>
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="mb-3"><label className="form-label" for="username"><strong>Username</strong></label><input className="form-control" type="text" id="username" name="username" value={user.name} onChange={(e) => update(e, "name")}/></div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="mb-3"><label className="form-label" for="email"><strong>Email Address</strong></label><input className="form-control" type="email" id="email" name="email" value={user.email} onChange={(e) => update(e, "email")}/></div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="mb-3"><label className="form-label" for="first_name"><strong>User ID</strong></label><input className="form-control" type="text" id="userID" name="first_name" value={user.id} onChange={(e) => update(e, "id")}/></div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="mb-3"><label className="form-label" for="last_name"><strong>Phone Number</strong></label><input className="form-control" type="text" id="phone-number" name="phone-number" value={user.phonenumber} onChange={(e) => update(e, "phonenumber")}/></div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="mb-3"><label className="form-label" for="first_name"><strong>Password</strong></label><input className="form-control" type="text" id="password" name="password" value={user.password} onChange={(e) => update(e, "password")}/></div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="mb-3"><label className="form-label" for="last_name"><strong>Category</strong></label><select className="form-select" value={user.category}>
                                                                <optgroup label="This is a group">
                                                                    <option value="12">Student</option>
                                                                    <option value="13">Member</option>
                                                                </optgroup>
                                                            </select></div>
                                                    </div>
                                                </div>
                                                <div className="mb-3"><button className="btn btn-success btn-sm" type="submit" style={margin_top}>Update</button>
                                                <button className="btn btn-secondary btn-sm" onClick={()=>{reset()}}  style={margin_left_top}>Back</button></div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="bg-white sticky-footer">
                <div className="container my-auto">
                    <div className="text-center my-auto copyright"><span>Copyright © Brand 2023</span></div>
                </div>
            </footer>
        </div><a className="border rounded d-inline scroll-to-top" href="#page-top"><i className="fas fa-angle-up"></i></a>
    </div>
        </div>
    );

}
export default AddUser;