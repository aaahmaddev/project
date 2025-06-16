import React from 'react';
import './index.css'
import { NavLink } from 'react-router-dom';
import ProfileIamge from '../../assets/images/dashboard/profile.png'
import DashIcon from '../../assets/images/vital/dashIconWhite.png'
import ViTaskIcon from '../../assets/images/vital/vitalIconRed.png'
import MyTaskIcon from '../../assets/images/dashboard/mytaskicon.png'
import Settingsicon from '../../assets/images/dashboard/settingicon.png'
import LogOutIcon from '../../assets/images/dashboard/logouticon.png'

const index = () => {
    return (
        <>
            <div className="navigation col-4 d-flex flex-wrap align-items-center p-3 mt-1 justify-content-center">
                <NavLink className='text-decoration-none' to='/account'>
                    <div className="profile-box text-center text-white">
                        <img className='dash-profile-img mb-4' src={ProfileIamge} />
                        <h5 className='prfile-name m-0 text-light'>Sundar Gurung</h5>
                        <p className='profile-email mt-1 text-light'>sundargurung360@gmail.com</p>
                    </div>
                </NavLink>

                <ul>
                    
                </ul>

            </div>
        </>
    );
};

export default index;