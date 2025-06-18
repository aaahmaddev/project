import React from 'react';
import './index.css'
import Aos from 'aos';
import { NavLink } from 'react-router-dom';
import ProfileIamge from '../../assets/images/dashboard/profile.png'
import DashIcon from '../../assets/images/vital/dashIconWhite.png'
import ViTaskIcon from '../../assets/images/vital/vitalIconRed.png'
import MyTaskIcon from '../../assets/images/dashboard/mytaskicon.png'
import Settingsicon from '../../assets/images/dashboard/settingicon.png'
import LogOutIcon from '../../assets/images/dashboard/logouticon.png'

const index = () => {

    Aos.init()

    return (
        <>
            <div data-aos="fade-up">
                <h1>Hello</h1>
            </div>
        </>
    );
};

export default index;