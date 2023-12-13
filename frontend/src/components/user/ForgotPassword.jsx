
import avatar from '../../img/koduck.png'
import {useState} from 'react'
import axios from 'axios';
const URL="http://localhost:5000/";
function ForgotPassword(){
    const [email, stateEmail]=useState("");
    function update(e){
        e.preventDefault();
     stateEmail(e.target.value);
     };
    async function forgotPassword(e){
        e.preventDefault();
        try {
            const res= await axios.post(URL+"logins/forgot-password",{params: {
                email:email,
            }});
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="bg-gradient-primary">
             <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-9 col-lg-12 col-xl-10">
                <div className="card shadow-lg o-hidden border-0 my-5">
                    <div className="card-body p-0">
                        <div className="row">
                            <div className="col-lg-6 d-none d-lg-flex">
                                <div className="flex-grow-1 bg-password-image" style={{backgroundImage: "url(" + avatar+ ")"}}></div>
                            </div>
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h4 className="text-dark mb-2">Forgot Your Password?</h4>
                                        <p className="mb-4">We get it, stuff happens. Just enter your email address below and we'll send you a link to reset your password!</p>
                                    </div>
                                    <form className="user" onSubmit={forgotPassword}>
                                        <div className="mb-3"><input className="form-control form-control-user" type="email" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." name="email"  onChange={update}/></div><button className="btn btn-primary d-block btn-user w-100" type="submit">Reset Password</button>
                                    </form>
                                    <div className="text-center">
                                        <hr />
                                        <a className="small" href="/register">Create an Account!</a>
                                    </div>
                                    <div className="text-center"><a className="small" href="/login">Already have an account? Login!</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}
export default ForgotPassword;