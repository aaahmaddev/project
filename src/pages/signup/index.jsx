import React from 'react';
import { NavLink } from 'react-router-dom';
import SignUpImg from '../../assets/images/signup/SignUpImg.png'
import NameIcon from '../../assets/images/signup/nameIcon.png'
import LastNameIcon from '../../assets/images/signup/lastIcon.png'
import UserNameIcon from '../../assets/images/signup/userIcon.png'
import EmailIcon from '../../assets/images/signup/emailIcon.png'
import PassIcon from '../../assets/images/signup/passIcon.png'
import ConPassImg from '../../assets/images/signup/conpassIcon.png'
import './index.css'

const index = () => {
    return (
        <>
            <div className="signup d-flex justify-content-center">
                <div className="container">
                    <div className="signup-inner">


                        <div className="signup-left col-6">
                            <img className='signup-img img-fluid' src={SignUpImg} />
                        </div>
                        <div className="signup-right col-6">
                            <h1 className="signup-r-title fw-bold mb-4">
                                Sign Up
                            </h1>

                            <form action="#">
                                <label className='name-label d-flex align-items-center' htmlFor="Name">
                                    <img className='input-img' src={NameIcon} alt="" />
                                    <input className='signup-input' placeholder='Enter First Name' type="text" required/>
                                </label>

                                <label className='l-name-label d-flex align-items-center mt-4' htmlFor="Name">
                                    <img className='input-img' src={LastNameIcon} alt="" />
                                    <input className='signup-input' placeholder='Enter Last Name' type="text" required/>
                                </label>


                                <label className='u-name-label d-flex align-items-center mt-4' htmlFor="Name">
                                    <img className='input-img' src={UserNameIcon} alt="" />
                                    <input className='signup-input' placeholder='Enter User Name' type="text" required/>
                                </label>


                                <label className='email-label d-flex align-items-center mt-4' htmlFor="Name">
                                    <img className='input-img' src={EmailIcon} alt="" />
                                    <input className='signup-input' placeholder='Enter Email' type="email" required/>
                                </label>


                                <label className='passwrod-label d-flex align-items-center mt-4' htmlFor="Name">
                                    <img className='input-img' src={PassIcon} alt="" />
                                    <input className='signup-input' placeholder='Enter Password' type="password" required/>
                                </label>



                                <label className='con-pass-label d-flex align-items-center mt-4' htmlFor="Name">
                                    <img className='input-img' src={ConPassImg} alt="" />
                                    <input className='signup-input' placeholder='Enter First Name' type="password" required/>
                                </label>

                                <label className='signup-checkbox-l d-flex gap-3 mt-3' htmlFor="1">
                                    <input className='signup-chescbox-i' id='1' type="checkbox" />
                                    I agree to all terms
                                </label>

                                <button className='signup-button mt-3'>
                                    Register
                                </button>

                                <p className='mt-3'>Already have an account?
                                    <NavLink className="text-decoration-none ms-1" to={'/signin'}>Sign In</NavLink>
                                </p>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default index;