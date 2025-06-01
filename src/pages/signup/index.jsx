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
                <div className="signup-left col-6 d-flex justify-content-center align-items-center img-fluid">
                    <img src={SignUpImg} />
                </div>
                <div className="signup-right col-6">
                    <div className='d-flex justify-content-start'>
                        <h1 className="signup-r-title fw-bold">
                            Sign Up
                        </h1>
                    </div>

                    <div className='input-main-box d-flex justify-content-start align-items-center'>
                        <form action="#">
                            <label className='name-label d-flex align-items-center' htmlFor="Name">
                                <img className='input-img' src={NameIcon} alt="" />
                                <input className='name-input ps-5 input-signup' placeholder='Enter First Name' type="text" />
                            </label>

                            <label className='l-name-label d-flex align-items-center mt-4' htmlFor="Name">
                                <img className='input-img' src={LastNameIcon} alt="" />
                                <input className='l-name-input ps-5 input-signup' placeholder='Enter Last Name' type="text" />
                            </label>


                            <label className='u-name-label d-flex align-items-center mt-4' htmlFor="Name">
                                <img className='input-img' src={UserNameIcon} alt="" />
                                <input className='u-name-input ps-5 input-signup' placeholder='Enter User Name' type="text" />
                            </label>


                            <label className='email-label d-flex align-items-center mt-4' htmlFor="Name">
                                <img className='input-img' src={EmailIcon} alt="" />
                                <input className='email-input ps-5 input-signup' placeholder='Enter Email' type="email" />
                            </label>


                            <label className='passwrod-label d-flex align-items-center mt-4' htmlFor="Name">
                                <img className='input-img' src={PassIcon} alt="" />
                                <input className='password-input ps-5 input-signup' placeholder='Enter Password' type="password" />
                            </label>



                            <label className='con-pass-label d-flex align-items-center mt-4' htmlFor="Name">
                                <img className='input-img' src={ConPassImg} alt="" />
                                <input className='con-pass-input ps-5 input-signup' placeholder='Enter First Name' type="password" />
                            </label>

                            <label className='d-flex gap-3 mt-3' htmlFor="1">
                                <input id='1' type="checkbox" />
                                I agree to all terms
                            </label>

                            <button className='signup-button mt-3'>
                                Register
                            </button>

                            <p className='mt-3'>Already have an account? 
                                <NavLink to={'/signin'}>Sign In</NavLink>
                            </p>

                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default index;