import React from 'react';
import './index.css'
import { NavLink } from 'react-router-dom';
import ProfileIamge from '../../assets/images/dashboard/profile.png'
import DashIcon from '../../assets/images/vital/dashIconWhite.png'
import ViTaskIcon from '../../assets/images/dashboard/tasckicon.png'
import MyTaskIcon from '../../assets/images/dashboard/mytaskicon.png'
import Settingsicon from '../../assets/images/dashboard/settingicon.png'
import LogOutIcon from '../../assets/images/dashboard/logouticon.png'




const index = () => {

    return (
        <>

            <div className="navigation col-3 mt-1 ">

                <div className="sidebar-top">
                    <NavLink className='text-decoration-none' to='/account'>
                        <div className="profile-box text-center text-white">
                            <img className='dash-profile-img mb-4' src={ProfileIamge} />
                            <h5 className='prfile-name m-0 text-light'>Sundar Gurung</h5>
                            <p className='profile-email mt-1 text-light'>sundargurung360@gmail.com</p>
                        </div>
                    </NavLink>
                </div>
                <div className="sidebar-bottom justify-content-center d-flex flex-wrap ">
                    <NavLink className='text-decoration-none' to='/'>
                        <div className="dash-boxx d-flex align-items-center p-3">
                            <img className='me-3' src={DashIcon} />
                            <p className="dash-text m-0">Dashboard</p>
                        </div>
                    </NavLink>

                    <NavLink to="/vitals" className='text-decoration-none'>
                        <div className="v-task-box3 d-flex align-items-center p-3 mt-4">
                            <img className='me-4' src={ViTaskIcon} />
                            <p className="v-task-text m-0">Vital Task</p>
                        </div>
                    </NavLink>

                    <NavLink to='/mytask' className='text-decoration-none'>
                        <div className="my-task-box d-flex align-items-center p-2 mt-4">
                            <img className='me-4' src={MyTaskIcon} />
                            <p className="my-task-text m-0">My Task</p>
                        </div>
                    </NavLink>

                    <NavLink className='text-decoration-none'>
                        <div className="setting-box d-flex align-items-center p-2 mt-4">
                            <img className='me-4' src={Settingsicon} />
                            <p className="setting-text m-0">Settings</p>
                        </div>
                    </NavLink>

                    <NavLink className='text-decoration-none' to='/signin'>
                        <div className="logout-box d-flex align-items-center p-2 mt-4">
                            <img className='me-4' src={LogOutIcon} />
                            <p className="logout-text m-0">Log Out</p>
                        </div>
                    </NavLink>
                </div>

            </div>

        </>
    );
};


export default index;