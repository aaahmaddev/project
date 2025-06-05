import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css'
import ProfileIamge from '../../assets/images/dashboard/profile.png'
import Searchicon from '../../assets/images/dashboard/SearchICon.png'
import DateIcon from '../../assets/images/dashboard/dateIcon.png'
import NotificationIcon from '../../assets/images/dashboard/NotificationsIcon.png'
import DashIcon from '../../assets/images/dashboard/dashlogo.png'
import ViTaskIcon from '../../assets/images/dashboard/tasckicon.png'
import MyTaskIcon from '../../assets/images/dashboard/mytaskicon.png'
import Settingsicon from '../../assets/images/dashboard/settingicon.png'
import LogOutIcon from '../../assets/images/dashboard/logouticon.png'
import PendingTaskIcon from '../../assets/images/dashboard/PendingIcon.png'
import CompletedTaskIcon from '../../assets/images/dashboard/taskcompletedIcon.png'
import CardPartyImg from '../../assets/images/dashboard/PartyCardImage.png'
import CardTravelDaysImg from '../../assets/images/dashboard/TraveleDaysImg.png'
import CardProductImg from '../../assets/images/dashboard/ProductCardImg.png'
import CardDogImg from '../../assets/images/dashboard/docImg.png'

const index = () => {
    return (
        <>
            <section>
            <header>
                <div className="header-container">
                    <div className="header-inner d-flex align-items-center justify-content-between">
                        <div className="header-logo">
                            <h1 className='header-logo-text'>
                                <span className='header-logo-span'>Dash</span>board
                            </h1>
                        </div>
                        <div className="header-search d-flex align-items-center">
                            <input className='header-input p-3' placeholder='Search your task here...' type="text" />
                            <img src={Searchicon} />
                        </div>
                        <div className='header-date-box d-flex flex-wrap align-items-center gap-4'>
                            <div className='d-flex gap-2'>
                                <img src={NotificationIcon} />
                                <img src={DateIcon} />
                            </div>
                            <div>
                                <p className='header-date-text mb-0'>
                                    Thirday
                                    <br />
                                    <span className='header-date-text-span'>
                                        05/06/2025
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </section >

        </>
    );
};

export default index;