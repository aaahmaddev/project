import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css'
import Navbar from '../../components/tnavbar'
import AccountSidebar from '../../components/asidebar'
import AccountInfo from '../../components/accountinfo'


const index = () => {
    return (
        <>

            <Navbar />

            <section className='dashboard bgc-whitee pt-2'>
                <div className="">
                    <div className="sec-inner d-flex  mt-5 gap-5 col-8">

                        <AccountSidebar />
                        <AccountInfo/>



                    </div>
                </div>
            </section>

        </>
    );
};

export default index;