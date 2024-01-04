
import React from "react";
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Navigator from "../Hung/Navigator";
import SearchBoard from "../Hung/SearchBoard";
function AddNotification(){
    const URL="http://localhost:5000/";
    const font_size = {
        fontSize: '13px',
      };

    const padding_left = {
        paddingLeft: '30px',
      };

    const margin_top = {
        marginTop: '12px',
    };

    const margin_left_top = {
        marginLeft: '15px',
        marginTop: '15px',
    };
    const buttonStyle = {
        border: 'none',
        padding: '0px 0px',
    };

    const [notification, setNotification] = useState({
        title: '',
        content:'',
    });

    const update= (event, field) => {
        setNotification({ ...notification, [field]: event.target.value });

    };

    const onUpdate = async (event) => {
        try {
            const res = await axios.post(URL+"addnotifications/addnotification",{params: {
                title: notification.title,
                content: notification.content,
            }});
            if(res.data=="oke"){
                alert("Thêm thành công");
            }
            console.log(res.data);
        } catch (error) {
            alert("Có lỗi");
            console.log(error);
        }
    }

    return (
        <div id="page-top">
            <div id="wrapper">
        <Navigator></Navigator>
        <div class="d-flex flex-column" id="content-wrapper">
            <div id="content">
                <SearchBoard></SearchBoard>
                <div class="container-fluid">
                    <h3 class="text-dark mb-4"><strong>Create notification</strong></h3>
                    <div class="row mb-3 d-none">
                        <div class="col">
                            <div class="card text-white bg-primary shadow">
                                <div class="card-body">
                                    <div class="row mb-2">
                                        <div class="col">
                                            <p class="m-0">Peformance</p>
                                            <p class="m-0"><strong>65.2%</strong></p>
                                        </div>
                                        <div class="col-auto"><i class="fas fa-rocket fa-2x"></i></div>
                                    </div>
                                    <p class="text-white-50 small m-0"><i class="fas fa-arrow-up"></i>&nbsp;5% since last month</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card text-white bg-success shadow">
                                <div class="card-body">
                                    <div class="row mb-2">
                                        <div class="col">
                                            <p class="m-0">Peformance</p>
                                            <p class="m-0"><strong>65.2%</strong></p>
                                        </div>
                                        <div class="col-auto"><i class="fas fa-rocket fa-2x"></i></div>
                                    </div>
                                    <p class="text-white-50 small m-0"><i class="fas fa-arrow-up"></i>&nbsp;5% since last month</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="card shadow mb-3">
                                <div class="card-header py-3">
                                    <p class="text-primary m-0 fw-bold">Fill the blank to create notification for user</p>
                                </div>
                                <div class="card-body">
                                    <form onSubmit={onUpdate}>
                                        <div class="row">
                                            <div class="col">
                                                <div class="mb-3"><label class="form-label" for="username"><strong>Title</strong></label><input class="form-control" type="text" id="title" placeholder="Title" name="Titile" value={notification.title} onChange={(e) => update(e, "title")} /></div>
                                            </div>
                                            <div class="col">
                                                <div class="mb-3"><label class="form-label" for="username"><strong>User</strong></label><select class="form-select" id="select_user_notification">
                                                        <option value="12">All user</option>
                                                        <option value="13">20215346</option>
                                                        <option value="14">20210399</option>
                                                        <option value="" selected="">None</option>
                                                    </select></div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <div class="mb-3"><label class="form-label" for="first_name"><strong>Message content</strong></label></div><textarea class="form-control" id="detail_notification" rows="10" value={notification.content} onChange={(e) => update(e, "content")} ></textarea>
                                            </div>
                                        </div>
                                        <div class="mb-3"><button class="btn btn-primary btn-sm" type="submit" style ={margin_top}>Create notification</button></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer class="bg-white sticky-footer"></footer>
        </div><a class="border rounded d-inline scroll-to-top" href="#page-top"><i class="fas fa-angle-up"></i></a>
    </div>
        </div>
        
    );
}
export default AddNotification;