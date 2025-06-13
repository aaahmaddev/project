import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css'
import AccountImg from '../../assets/images/dashboard/profile.png'


const index = () => {
    return (
        <>
            <div className="account-info col-12 p-4">
                <div className="account-info-top d-flex align-items-center justify-content-between">
                    <div className="account-info-title-box">
                        <h3 className='fw-medium mt-4'>Account Information</h3>
                        <div className="account-info-line">

                        </div>
                    </div>
                    <div>
                        <NavLink className='text-dark fw-medium' to='/'>
                            Go Back
                        </NavLink>
                    </div>
                </div>
                <div className="account-info-center d-flex align-items-center mt-5 gap-2 mb-3">
                    <img src={AccountImg} />
                    <div>
                        <h5 className='m-0'>Sundar Gurung</h5>
                        <p className='m-0'>sundargurung360@gmail.com</p>
                    </div>
                </div>
                <div className="account-info-bottom p-4">
                    <label htmlFor="First Name" className='fw-medium'>
                        First Name
                        <br />
                        <input className='account-info-input' type="text" />
                    </label>

                    <label htmlFor="Last Name" className='fw-medium mt-4'>
                        Last Name
                        <br />
                        <input className='account-info-input' type="text" />
                    </label>

                    <label htmlFor="Email Address" className='fw-medium mt-4'>
                        Email Address
                        <br />
                        <input className='account-info-input' type="email" />
                    </label>

                    <label htmlFor="Contackt Number" className='fw-medium mt-4'>
                        Contackt Number
                        <br />
                        <input className='account-info-input' type="number" />
                    </label>

                    <label htmlFor="Positsion" className='fw-medium mt-4'>
                        Positsion
                        <br />
                        <input className='account-info-input' type="text" />
                    </label>

                    <div className='account-info-btn-box d-flex gap-2 mt-4'>
                        <button className='account-info-btn' type='submit'>Uptade Photo</button>
                        <button className='account-info-btn' type='submit'>Change Password</button>
                    </div>

                </div>
            </div>
        </>
    );
};

export default index;