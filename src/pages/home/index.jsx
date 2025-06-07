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


            <section>
                <div className="conatiner">
                    <div className="sec-inner d-flex align-items-center  mt-5 justify-content-between gap-5 col-8">

                        <Sidebar />
                        <Tasks />


                    </div>
                </div>
            </section>

        </>
    );
};

export default index;