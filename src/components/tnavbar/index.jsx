import React from 'react';
import './index.css'
import Searchicon from '../../assets/images/dashboard/SearchICon.png'
import DateIcon from '../../assets/images/dashboard/dateIcon.png'
import NotificationIcon from '../../assets/images/dashboard/NotificationsIcon.png'

const index = () => {
    return (

        <>
            <header>
                <div className="header-container">
                    <div className="header-inner d-flex align-items-center justify-content-between">
                        <div className="header-logo">
                            <h1 className='header-logo-text pointer'>
                                <span className='header-logo-span'>To-</span>Do
                            </h1>
                        </div>
                        <div className="header-search d-flex align-items-center">
                            <input className='header-input p-3' placeholder='Search your task here...' type="text" />
                            <img className='pointer' src={Searchicon} />
                        </div>
                        <div className='header-date-box d-flex flex-wrap align-items-center gap-4'>
                            <div className='d-flex gap-2'>
                                <img className='pointer' src={NotificationIcon} />
                                <img className='pointer' src={DateIcon} />
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
        </>

    );
};

export default index;