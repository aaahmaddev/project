import React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';
import Searchicon from '../../assets/images/dashboard/SearchICon.png';
import DateIcon from '../../assets/images/dashboard/dateIcon.png';
import NotificationIcon from '../../assets/images/dashboard/NotificationsIcon.png';

const tHeader = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <header data-aos="fade-down">
            <div className="header-container">
                <div className="header-inner d-flex align-items-center justify-content-between">

                    {/* Logo */}
                    <div className="header-logo" onClick={scrollToTop}>
                        <h1 className='header-logo-text pointer text-black'>
                            <span className='header-logo-span'>To-</span>Do
                        </h1>
                    </div>

                    {/* Search */}
                    <div className="header-search d-flex align-items-center">
                        <input
                            className='header-input p-3'
                            placeholder='Search your task here...'
                            type="text"
                        />
                        <img className='pointer' src={Searchicon} alt="Search Icon" />
                    </div>

                    {/* Notifications and Date */}
                    <div className='header-date-box d-flex flex-wrap align-items-center gap-4'>
                        <div className='d-flex gap-2'>
                            <img className='pointer' src={NotificationIcon} alt="Notification Icon" />
                            <img className='pointer' src={DateIcon} alt="Date Icon" />
                        </div>
                        <div>
                            <p className='header-date-text mb-0'>
                                Thursday
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
    );
};

export default tHeader;
