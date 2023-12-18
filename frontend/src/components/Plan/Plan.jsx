import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navigator from '../Hung/Navigator';
import SearchBoard from '../Hung/SearchBoard';
import Footer from '../Hung/Footer';

const URL = "http://localhost:5000/";
const api = axios.create({ baseURL: URL }); // Sửa URL thành baseURL
const Plan = () => {
  const [plans, setPlans] = useState([]);
  const [showCount, setShowCount] = useState(10);
  const [newPlan, setNewPlan] = useState({
    title: '',
    amount: '',
    duration: '',
    status: 'Active', // Set a default status if needed
  });
  const [editPlan, setEditPlan] = useState(null);

  useEffect(() => {
    // Fetch plans when the component mounts
    const fetchData = async () => {
      try {
        const response = await api.get("api/plans");
        setPlans(response.data);
      } catch (error) {
        console.error('Error fetching plans:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Fetch limited plans when showCount changes
    const fetchLimitedPlans = async () => {
      try {
        const response = await api.get(`api/plans/${showCount}`);
        setPlans(response.data);
      } catch (error) {
        console.error('Error fetching limited plans:', error);
      }
    };

    fetchLimitedPlans();
  }, [showCount]);

  const handleShowCountChange = (e) => {
    // Update showCount when the user changes the dropdown
    setShowCount(parseFloat(e.target.value));
  };

  const handleInputChange = (e) => {
    // Update newPlan state when form inputs change
    const { name, value } = e.target;
    setNewPlan((prevPlan) => ({
      ...prevPlan,
      [name]: value,
    }));
  };

  const handleSavePlan = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to create a new plan
      await api.post("api/plans", newPlan);

      // Fetch and update the plans list
      const response = await api.get("api/plans");
      setPlans(response.data);

      // Reset the newPlan state for the next entry
      setNewPlan({
        title: '',
        amount: '',
        duration: '',
        status: 'Active', // Reset status to default for the next entry
      });
    } catch (error) {
      console.error('Error saving plan:', error);

      // Log the specific error message from the server if available
      if (error.response) {
        console.error('Server responded with:', error.response.data);
      }
    }
  };

  const fetchPlans = async () => {
    try {
      const response = await api.get("api/plans");
      return response.data;
    } catch (error) {
      console.error("Error fetching plans:", error);
      throw error;
    }
  };

  const handleDeletePlan = async (planId) => {
    try {
      // Send the delete request to the server
      await api.delete(`api/plans/${planId}`);

      // Fetch and update the plans list
      const updatedPlans = await fetchPlans();
      setPlans(updatedPlans);

      console.log(`Deleted plan with ID: ${planId}`);
    } catch (error) {
      console.error('Error deleting plan:', error);
    }
  };



    return (
      <div id="page-top">
            <div id="wrapper">
              <Navigator></Navigator>
            <div className="d-flex flex-column" id="content-wrapper">
              <div id="content">
                <SearchBoard></SearchBoard>
              <div className="container-fluid">
              <h3 className="text-dark mb-4"><strong>SUBSCRIPTION PLAN</strong></h3>
              <div className="row row-cols-1 mb-3">
                  <div className="col-xxl-8">
                  <div className="card shadow">
                      <div className="card-header py-3">
                      <p className="text-primary m-0 fw-bold">All plans</p>
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
                      <div className="table-responsive table mt-2" id="dataTable-1" role="grid" aria-describedby="dataTable_info">
                          <table className="table my-0" id="dataTable">
                          <thead>
                              <tr>
                              <th>#</th>
                              <th>Title</th>
                              <th>Amount</th>
                              <th>Duration</th>
                              <th>Status</th>
                              <th>Action</th>
                              </tr>
                          </thead>
                          <tbody>
                          {plans.slice(0, showCount).map((plan, index) => (
                              <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{plan.title}</td>
                              <td>{plan.amount}</td>
                              <td>{plan.duration}</td>
                              <td>
                                  <button className={`btn btn-${plan.status === 'Active' ? 'success' : 'danger'} btn-sm border rounded-pill`} type="button">
                                  {plan.status}
                                  </button>
                              </td>
                              <td>
                                <button className="btn btn-danger btn-sm" onClick={() => handleDeletePlan(plan._id)}>
                                  Delete
                                </button>
                              </td>
                              </tr>
                          ))}
                          </tbody>
                          <tfoot>
                              <tr>
                              <td><strong>#</strong></td>
                              <td><strong>Title</strong></td>
                              <td><strong>Amount</strong></td>
                              <td><strong>Duration</strong></td>
                              <td><strong>Status</strong></td>
                              <td><strong>Action</strong></td>
                              </tr>
                          </tfoot>
                          </table>
                      </div>
                      <div className="row">
                          <div className="col-md-6 align-self-center">
                          <p id="dataTable_info" className="dataTables_info" role="status" aria-live="polite">
                              Showing 1 to {Math.min(showCount, plans.length)} of {plans.length}
                          </p>
                          </div>
                          <div className="col-md-6">
                          </div>
                      </div>
                      </div>
                  </div>
                  </div>
                  
                  <div className="col-xxl-3">
                  <div className="card shadow mb-3">
                      <div className="card-header py-3">
                      <p className="text-primary m-0 fw-bold">Add new plan</p>
                      </div>
                      <div className="card-body">
                      <form onSubmit={handleSavePlan}>
                          <div className="row">
                          <div className="col">
                              <div className="mb-3">
                              <label className="form-label" htmlFor="title"><strong>Title</strong></label>
                              <input className="form-control" type="text" id="title" name="title" value={newPlan.title} onChange={handleInputChange} />
                              </div>
                          </div>
                          </div>
                          <div className="row">
                          <div className="col">
                              <div className="mb-3">
                              <label className="form-label" htmlFor="amount"><strong>Amount</strong></label>
                              <input className="form-control" type="text" id="amount" name="amount" value={newPlan.amount} onChange={handleInputChange} />
                              </div>
                          </div>
                          </div>
                          <div className="row">
                          <div className="col">
                              <div className="mb-3">
                              <label className="form-label" htmlFor="duration"><strong>Duration</strong></label>
                              <input className="form-control" type="text" id="duration" name="duration" value={newPlan.duration} onChange={handleInputChange} />
                              </div>
                          </div>
                          </div>
                          <div className="row">
                          <div className="col">
                              <div className="mb-3">
                              <label className="form-label" htmlFor="status"><strong>Status</strong></label>
                              <select className="form-select" id="status" name="status" value={newPlan.status} onChange={handleInputChange}>
                                  <option value="Active">Active</option>
                                  <option value="Inactive">Inactive</option>
                              </select>
                              </div>
                          </div>
                          </div>
                          
                          <div className="mb-3">
                          <button className="btn btn-success btn-sm" type="submit">Save</button>
                          </div>
                      </form>
                      </div>
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

  export default Plan;
