import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Login(props) {
    const [phone, setPhone] = useState()
    const [otp, setOtp] = useState()
    const [error, errorMsg] = useState()
    const sendOtp = (e) => {
        const re = /^[0-9]{10}$/;
        if (re.test(phone)) {
            const userOtp = Math.floor(100000 + Math.random() * 900000)
            setOtp(userOtp)
            toast(userOtp)
            console.log(2);  
        } else {
            errorMsg('Please enter valid phone number');
        }
        e.preventDefault();
    }
    const verifyOtp = (otpValidation) => {
        if(otp == otpValidation) {
            props.UserLogin();
        } else {
            errorMsg('Please enter correct OTP');
        }
    }
    return (
        <div className="container d-flex flex-wrap pt-5">
        <ToastContainer />
            <h2 className="col-12 text-center mb-4">Login</h2>
            <form className="col-4 mx-auto">
                {!otp && (
                    <div className="form-group">
                        <input type="text" onChange={(e) => setPhone(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Phone Number" />
                        {error && error}
                        <div><button type="submit" onClick={(e) => sendOtp(e)} className="btn btn-primary mt-3">Submit</button></div>
                    </div>
                )}
                {otp && (
                    <div className="form-group">
                        <p className="mb-1"><small id="emailHelp" className="form-text text-muted">OTP Sent To {phone}</small></p>
                        <input type="text" onChange={(e) => verifyOtp(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter OTP" />
                        {error && error}
                        <div>
                        <button type="submit" onClick={(e) => sendOtp(e)} className="btn btn-primary mt-3">Resend OTP</button>
                        </div>
                    </div>
                )}
            </form>
        </div>
    )
}
export default Login;