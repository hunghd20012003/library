
import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios'
import Navigator from '../Hung/Navigator'
import SearchBoard from '../Hung/SearchBoard'
function ManageUser(){
    const URL="http://localhost:5000/";
    const font_size = {
        fontSize: '13px',
    };

    const padding_left = {
        paddingLeft: '30px',
    };

    const buttonStyle = {
        border: 'none',
        padding: '0px 0px',
    };

    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState([]);
    const [userNumber, setUserNumber] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [startIndex, setStartIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [showModal, setShowModal] = useState(false);
    const [emailToDelete, setEmailToDelete] = useState('');

    useEffect(() => {
        const fetchDataFromApi = async () => {
            const response = await axios.get(URL+"manageusers/list");
            try {
                setUsers(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchDataFromApi();
    }, []);

    const renderUsers = () => {
        const endIndex = startIndex + itemsPerPage;
        return users
          .slice(startIndex, endIndex)
          .map((userData, index) => (
            <tr key={index}>
              <td>{startIndex + index + 1}</td>
                <td>{userData._id}</td>
                <td>{userData.name}</td>
                <td>{userData.isMember ? "Member" : "Student"}</td>
                <td>{userData.email}</td>
                <td>{userData.phone}</td>
                <td className="text-center">∞</td>
                <td className="text-center">0</td>
                <td className="text-center">
                <button className="btn btn-danger btn-sm border rounded-pill" type="button" onClick={() => onDelete(userData.email)}>Delete</button></td>
                <Modal show={showModal} onHide={handleCancelDelete}>
                    <Modal.Header closeButton>
                    <Modal.Title>Xác nhận xóa</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    Bạn có chắc chắn muốn xóa không?
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleCancelDelete}>
                        Hủy
                    </Button>
                    <Button variant="danger" onClick={handleConfirmDelete}>
                        Xóa
                    </Button>
                    </Modal.Footer>
                </Modal>
            </tr>
            
          ));
      };
    
    const onDelete= async (email1) => {
        setEmailToDelete(email1);
        setShowModal(true);
    };

    const handleConfirmDelete = async() => {
        const res= await axios.post(URL+"addusers/declineuser",{params: {
            email: emailToDelete
        }});
        alert(res.data);

        const updatedUsers = users.filter((user) => user.email !== emailToDelete);
        setUsers(updatedUsers);
        setShowModal(false);
    };

    const handleCancelDelete = () => {
        setShowModal(false);
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


    
    return (
        <div id="page-top">
            <div id="wrapper">
        <Navigator></Navigator>
        <div className="d-flex flex-column" id="content-wrapper">
            <div id="content">
                <SearchBoard></SearchBoard>
                <div className="container-fluid">
                    <h3 className="text-dark mb-4"><strong>Manage User</strong></h3>
                    <div className="card shadow">
                        <div className="card-header py-3">
                            <p className="text-primary m-0 fw-bold">All users</p>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6 text-nowrap">
                                    <div id="dataTable_length" className="dataTables_length" aria-controls="dataTable"><label className="form-label">Show&nbsp;<select className="d-inline-block form-select form-select-sm" onChange={handleItemsPerPageChange}>
                                                <option value="10" selected="">10</option>
                                                <option value="25">25</option>
                                                <option value="50">50</option>
                                                <option value="100">100</option>
                                            </select>&nbsp;</label></div>
                                </div>
                                <div className="col-md-6">
                                    <div className="text-md-end dataTables_filter" id="dataTable_filter"><label className="form-label"><input type="search" className="form-control form-control-sm" aria-controls="dataTable" placeholder="Search"/></label></div>
                                </div>
                            </div>
                            <div className="table-responsive text-nowrap table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                                <table className="table my-0" id="dataTable">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>User ID</th>
                                            <th>Username</th>
                                            <th>Category</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Reminder</th>
                                            <th>Penalty</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {renderUsers()}
                                    </tbody>
                                </table>
                            </div>
                            <div className="row">
                                <div className="col-md-6 align-self-center">
                                    <p id="dataTable_info" className="dataTables_info" role="status" aria-live="polite">Showing 1 to 10 of 27</p>
                                </div>
                                <div className="col-md-6">
                                    <nav className="d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers">
                                        <ul className="pagination">
                                        <button className="page-link" style ={buttonStyle} aria-label="Previous" onClick={handlePrevPage} disabled={startIndex === 0}> <a className="page-link" aria-label="Previous" onClick={handlePrevPage} disabled={startIndex === 0} ><span aria-hidden="true">«</span></a> </button>
                                        {renderPageNumbers()}
                                        <button className="page-item" style={buttonStyle} onClick={handleNextPage} disabled={startIndex + itemsPerPage >= users.length}>  <a className="page-link" aria-label="Next" onClick={handleNextPage} disabled={startIndex + itemsPerPage >= users.length}><span aria-hidden="true">»</span></a></button>
                                        </ul>
                                    </nav>
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
export default ManageUser;