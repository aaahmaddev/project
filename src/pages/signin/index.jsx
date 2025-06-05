import React from 'react';
import { NavLink } from 'react-router-dom';
import SignInImg from '../../assets/images/signin/signin.png'
import UserNameIcon from '../../assets/images/signup/userIcon.png'
import PassIcon from '../../assets/images/signup/passIcon.png'
import './index.css'

const index = () => {
    return (
        <>


            <div className="signin">
                <div className="container">
                    <div className="signin-inner">
                        {/* Left */}
                        <div className="sigin-left col-6 d-flex justify-content-start align-items-center flex-wrap">
                            <div className="sigin-left-inner">
                                <h1 className='signin-title mb-3'>Sign in</h1>
                                <form action="#">
                                    <label className='signin-label d-flex align-items-center' htmlFor="">
                                        <img className='signin-icon' src={UserNameIcon} />
                                        <input className='signin-input' type="text" placeholder='Enter Username' required />
                                    </label>

                                    <label className='signin-label mt-4 d-flex align-items-center' htmlFor="">
                                        <img className='signin-icon' src={PassIcon} />
                                        <input className='signin-input' type="text" placeholder='Enter Password' required />
                                    </label>

                                    <label className='signin-checbox-l mt-4 d-flex align-items-center' htmlFor="2">
                                        <input id='2' className='signin-checkbox me-3' type="checkbox" />
                                        Remember Me
                                    </label>

                                    <button className='signin-btn mt-4 mb-5'>
                                        Login
                                    </button>
                                </form>
                                <p className='signin-text mt-5'>Don't have an account?
                                    <NavLink to={'/signup'} className="text-decoration-none ms-2">
                                        Create One
                                    </NavLink>
                                </p>
                            </div>
                        </div>

                        {/* Right */}

                        <div className="signin-right col-6">
                            <img className='signin-img img-fluid' src={SignInImg} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default index;