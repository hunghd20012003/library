import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navigator from '../Hung/Navigator';
import SearchBoard from '../Hung/SearchBoard';
import Footer from '../Hung/Footer';

const URL = "http://localhost:5000/";

const PurchaseHistory = () => {
  const [purchaseHistory, setPurchaseHistory] = useState([]);
  const [showCount, setShowCount] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${URL}api/purchase-history`);
        setPurchaseHistory(response.data);
      } catch (error) {
        console.error('Error fetching purchase history:', error);
      }
    };

    fetchData();
  }, []);

  const handleShowCountChange = (e) => {
    setShowCount(e.target.value);
  };

  return (
    <div id="page-top">
      <div id="wrapper">
        <Navigator></Navigator>
    
      <div className="d-flex flex-column" id="content-wrapper">
        <div id="content">
         <SearchBoard></SearchBoard>
    <div className="container-fluid">
      <h3 className="text-dark mb-4"><strong>PURCHASE HISTORY</strong></h3>
      <div className="card shadow">
        <div className="card-header py-3">
          <p className="text-primary m-0 fw-bold">Subscription Purchase History</p>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6 text-nowrap">
              <div id="dataTable_length" className="dataTables_length" aria-controls="dataTable">
                <label className="form-label">Show&nbsp;
                  <select className="d-inline-block form-select form-select-sm" value={showCount} onChange={handleShowCountChange}>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>&nbsp;
                </label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-md-end dataTables_filter" id="dataTable_filter">
                <label className="form-label">
                  <input type="search" className="form-control form-control-sm" aria-controls="dataTable" placeholder="Search" />
                </label>
              </div>
            </div>
          </div>
          <div className="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
            <table className="table my-0">
              <thead>
                <tr>
                  <th>#</th>
                  <th>UserID</th>
                  
                  <th>PlanName</th>
                  <th>Start Date</th>
                  <th>End date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {purchaseHistory.slice(0, showCount).map((purchase, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{purchase.userId}</td>
                  
                    <td>{purchase.planName}</td>
                    <td>{purchase.startDate}</td>
                    <td>{purchase.endDate}</td>
                    <td><span className={`badge bg-${purchase.status === 'Active' ? 'success' : 'warning'}`}>{purchase.status}</span></td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td><strong>#</strong></td>
                  <td><strong>UserID</strong></td>
                  <td><strong>PlanName</strong></td>
                  <td><strong>Start Date</strong></td>
                  <td><strong>End date</strong></td>
                  <td><strong>Status</strong></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
      <Footer></Footer>
            </div>
          </div>
        </div>
      </div>
  );
};

export default PurchaseHistory;
