import React from 'react';
import './index.css'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PendingTaskIcon from '../../assets/images/dashboard/PendingIcon.png'
import CompletedTaskIcon from '../../assets/images/dashboard/taskcompletedIcon.png'
import CardPartyImg from '../../assets/images/dashboard/PartyCardImage.png'
import CardTravelDaysImg from '../../assets/images/dashboard/TraveleDaysImg.png'
import CardProductImg from '../../assets/images/dashboard/ProductCardImg.png'
import CardDogImg from '../../assets/images/dashboard/docImg.png'


const index = () => {
    return (
        <>

            <div className="tasks-box">

                <h1>Welcome back, Sundar</h1>


                <div className='cards-box p-3 d-flex align-items-center justify-content-between gap-5'>
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

                        <div className='line mt-3 mb-3'></div>

                        <div className="card-party p-2 mt-3">
                            <div className="card-party-top d-flex align-items-center justify-content-between">
                                <div className='d-flex gap-2 '>
                                    <div className="card-circle1 mt-1">

                                    </div>
                                    <h5 className='card-party-title fw-bold m-0'>
                                        Presentation on Final Product
                                    </h5>
                                </div>
                                <div className='three-circle-box d-flex align-items-center mb-5'>
                                    <span className='card-party-span'></span>
                                    <span className='card-party-span'></span>
                                    <span className='card-party-span'></span>
                                </div>

                            </div>

                            <div className="card-party-center d-flex align-items-center justify-content-between ps-3">
                                <p className="card-party-text col-9">
                                    Make sure everything is functioning and all the necessities are properly met. Prepare the team and get the documents ready for...                                            </p>
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
                                    Created on: 19 June
                                </p>
                            </div>

                        </div>


                    </div>


                    <div className="card-right-box">
                        <div className='card-task  d-flex flex-wrap justify-content-center'>

                            <div className='card-task-top d-flex align-items-center ms-4 justify-content-start'>
                                <img className='card-task-top-icon col-2 me-1' src={CompletedTaskIcon} />
                                <p className='card-task-top-text m-0'>Task Status</p>
                            </div>

                            <div className="bar-circle-box d-flex flex-wrap gap-4  mb-0 me-3">
                                <div className='bar-circle-top'>
                                </div>
                                <div style={{ width: 100 }}>
                                    <CircularProgressbar value={84} text={`84%`} styles={buildStyles({ pathColor: 'green', textColor: 'black' })} />
                                    <small className="text-center d-block mt-1">Completed</small>
                                </div>
                                <div style={{ width: 100 }}>
                                    <CircularProgressbar value={46} text={`46%`} styles={buildStyles({ pathColor: 'blue', textColor: 'black' })} />
                                    <small className="text-center d-block mt-1">In Progress</small>
                                </div>
                                <div style={{ width: 100 }}>
                                    <CircularProgressbar value={13} text={`13%`} styles={buildStyles({ pathColor: 'red', textColor: 'black' })} />
                                    <small className="text-center d-block mt-1">Not Started</small>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>

            </div>

        </>
    );
};

export default index;