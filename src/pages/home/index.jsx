import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../../components/navbar'
import Sidebar from '../../components/sidebar'
import './index.css'
import PendingTaskIcon from '../../assets/images/dashboard/PendingIcon.png'
import CompletedTaskIcon from '../../assets/images/dashboard/taskcompletedIcon.png'
import CardPartyImg from '../../assets/images/dashboard/PartyCardImage.png'
import CardTravelDaysImg from '../../assets/images/dashboard/TraveleDaysImg.png'
import CardProductImg from '../../assets/images/dashboard/ProductCardImg.png'
import CardDogImg from '../../assets/images/dashboard/docImg.png'

const index = () => {
    return (
        <>


            <Navbar />


            <section>
                <div className="conatiner">
                    <div className="sec-inner d-flex align-items-center  mt-5 justify-content-between col-8">

                        <Sidebar />

                        <div className="tasks-box">

                            <h1>Welcome back, Sundar</h1>

                            <div className='cards-box p-3 d-flex'>
                                <div className="cards-left-box p-3">
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <div className='d-flex'>
                                            <img className='img-fluid' src={PendingTaskIcon} />
                                            <p className='todo-text m-0'>To Do</p>
                                        </div>
                                        <div>
                                            <div className='d-flex align-items-center gap-1'>
                                                <span className='plus'>+</span>
                                                <p className='text-add m-0'>Add Task</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-date">
                                        06 June <span className='text-today'>• Today</span>
                                    </div>

                                    <div className="card-party p-2 mt-3">
                                        <div className="card-party-top d-flex align-items-center justify-content-between">
                                            <div className='d-flex gap-2 '>
                                                <div className="card-circle mt-1">

                                                </div>
                                                <h5 className='card-party-title fw-bold m-0 col-10'>
                                                    Attend Nischal’s Birthday
                                                    Party
                                                </h5>
                                            </div>
                                            <div className='three-circle-box d-flex align-items-center mb-5'>
                                                <span className='card-party-span'></span>
                                                <span className='card-party-span'></span>
                                                <span className='card-party-span'></span>
                                            </div>

                                        </div>

                                        <div className="card-party-center d-flex align-items-center justify-content-between ps-3">
                                            <p className="card-party-text col-7">
                                                Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh Elements).....
                                            </p>
                                            <img src={CardPartyImg} />
                                        </div>

                                        <div className="card-party-bottom mt-2 ps-3 d-flex align-items-center gap-1">
                                            <p className='me-1 m-0'>
                                                Priority:
                                                <span className='card-p-b-1'>
                                                    Moderate
                                                </span>
                                            </p>
                                            <p className='m-0'>
                                                Status:
                                                <span className='card-p-b-2'>
                                                    Not Started
                                                </span>
                                            </p>
                                            <p className='card-p-b-3 m-0'>
                                                Created on: 20 June
                                            </p>
                                        </div>

                                    </div>

                                    <div className="card-party p-2 mt-3">
                                        <div className="card-party-top d-flex align-items-center justify-content-between">
                                            <div className='d-flex gap-2 '>
                                                <div className="card-circle1 mt-1">

                                                </div>
                                                <h5 className='card-party-title fw-bold m-0 col-10'>
                                                    Landing Page Design for TravelDays
                                                </h5>
                                            </div>
                                            <div className='three-circle-box d-flex align-items-center mb-5'>
                                                <span className='card-party-span'></span>
                                                <span className='card-party-span'></span>
                                                <span className='card-party-span'></span>
                                            </div>

                                        </div>

                                        <div className="card-party-center d-flex align-items-center justify-content-between ps-3">
                                            <p className="card-party-text col-7">
                                                Get the work done by EOD and discuss with client before leaving. (4 PM | Meeting Room)
                                            </p>
                                            <img src={CardTravelDaysImg} />
                                        </div>

                                        <div className="card-party-bottom mt-2 ps-3 d-flex align-items-center gap-1">
                                            <p className='me-1 m-0'>
                                                Priority:
                                                <span className='card-p-b-1'>
                                                    Moderate
                                                </span>
                                            </p>
                                            <p className='m-0'>
                                                Status:
                                                <span className='card-p-b-2-2'>
                                                    In Progress
                                                </span>
                                            </p>
                                            <p className='card-p-b-3 m-0'>
                                                Created on: 20 June
                                            </p>
                                        </div>

                                    </div>




                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default index;