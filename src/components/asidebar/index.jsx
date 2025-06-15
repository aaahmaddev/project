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

            <div className="navigation col-4 d-flex flex-wrap align-items-center justify-content-center p-3 mt-1">
                <NavLink className='text-decoration-none' to='/account'>
                    <div className="profile-box text-center text-white">
                        <img className='dash-profile-img mb-4' src={ProfileIamge} />
                        <h5 className='prfile-name m-0 text-light'>Sundar Gurung</h5>
                        <p className='profile-email mt-1 text-light'>sundargurung360@gmail.com</p>
                    </div>
                </NavLink>

                <NavLink className='text-decoration-none' to='/'>
                    <div className="dash-box3 d-flex align-items-center ps-3 gap-3">
                        <img src={DashIcon} />
                        <p className="dash-text3 m-0">Dashboard</p>
                    </div>
                </NavLink>

                <NavLink className='text-decoration-none' to='/vitals'>
                    <div className="v-task-box3 d-flex align-items-center ps-3 gap-3">
                        <img src={ViTaskIcon} />
                        <p className="v-task-text3 m-0">Vital Task</p>
                    </div>
                </NavLink>
                <div className="my-task-box d-flex align-items-center ps-2 gap-3">
                    <img src={MyTaskIcon} />
                    <p className="my-task-text m-0">My Task</p>
                </div>

                <div className="setting-box d-flex align-items-center ps-2 gap-3">
                    <img src={Settingsicon} />
                    <p className="setting-text m-0">Settings</p>
                </div>

                <div className="logout-box d-flex align-items-center ps-2 gap-3 align-items-end">
                    <img src={LogOutIcon} />
                    <p className="logout-text m-0">Log Out</p>
                </div>


            </div>

        </>
    );
};


export default index;