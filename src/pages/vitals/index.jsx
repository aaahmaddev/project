import React from 'react';
import './index.css'
import Navbar from '../../components/tnavbar'
import Sidebar from '../../components/vsidebar'
import VitalTask from '../../components/vitaltasks'
const index = () => {
    return (
        <>
            <Navbar />


            <section className='dashboard bgc-whitee pt-2'>
                <div className="container-fluid">
                    <div className="sec-inner d-flex  mt-5 justify-content-between gap-5 col-8">


                        <Sidebar />
                        <VitalTask />

                    </div>
                </div>
            </section>

        </>
    );
};

export default index;