import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../../components/navbar'
import Sidebar from '../../components/sidebar'
import Tasks from '../../components/tasks'
import './index.css'


const index = () => {
    return (
        <>


            <Navbar />


            <section className='dashboard bgc-whitee pt-2'>
                <div className="">
                    <div className="sec-inner d-flex  mt-5 justify-content-between gap-5 col-8">

                        <Sidebar />
                        <Tasks />


                    </div>
                </div>
            </section>

        </>
    );
};

export default index;