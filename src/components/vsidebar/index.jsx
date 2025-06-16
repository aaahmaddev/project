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

            <div className="navigation d-flex col-4 flex-wrap align-items-center justify-content-center mt-1">
                <NavLink className='text-decoration-none' to='/account'>
                    <div className="profile-box text-center text-white">
                        <img className='dash-profile-img mb-4' src={ProfileIamge} />
                        <h5 className='prfile-name m-0 text-light'>Sundar Gurung</h5>
                        <p className='profile-email mt-1 text-light'>sundargurung360@gmail.com</p>
                    </div>
                </NavLink>

                <NavLink className='text-decoration-none' to='/'>
                    <div className="dash-boxx d-flex align-items-center ps-4 gap-3">
                        <img src={DashIcon} />
                        <p className="dash-text m-0">Dashboard</p>
                    </div>
                </NavLink>

                <NavLink className='text-decoration-none' to='/vitals'>
                    <div className="v-task-boxx d-flex align-items-center ps-4 gap-3">
                        <img src={ViTaskIcon} />
                        <p className="v-task-text m-0">Vital Task</p>
                    </div>
                </NavLink>

                <NavLink to='/mytask' className='text-decoration-none'>
                    <div className="my-task-box d-flex align-items-center ps-4 gap-3">
                        <img src={MyTaskIcon} />
                        <p className="my-task-text m-0">My Task</p>
                    </div>
                </NavLink>
                <NavLink className='text-decoration-none'>
                    <div className="setting-box d-flex align-items-center ps-4 gap-3">
                        <img src={Settingsicon} />
                        <p className="setting-text m-0">Settings</p>
                    </div>
                </NavLink>

                <NavLink className='text-decoration-none' to='/signin'>
                    <div className="logout-box d-flex align-items-center ps-4 gap-3">
                        <img src={LogOutIcon} />
                        <p className="logout-text m-0">Log Out</p>
                    </div>
                </NavLink>

            </div>

        </>
    );
};


export default index;