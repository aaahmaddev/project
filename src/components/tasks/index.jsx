import React from 'react';
import { NavLink } from 'react-router-dom';
import Aos from 'aos';
import './index.css'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PendingTaskIcon from '../../assets/images/dashboard/PendingIcon.png'
import CompletedTaskIcon from '../../assets/images/dashboard/taskcompletedIcon.png'
import CardPartyImg from '../../assets/images/dashboard/PartyCardImage.png'
import CardTravelDaysImg from '../../assets/images/dashboard/TraveleDaysImg.png'
import CompletedTaskIcon1 from '../../assets/images/dashboard/completedtask.png'
import CardProductImg from '../../assets/images/dashboard/ProductCardImg.png'
import CardDogImg from '../../assets/images/dashboard/docImg.png'
import DragImg from '../../assets/images/modal/dragimg.png'


const index = () => {

    Aos.init()

    return (
        <>

            <div className="tasks-box" data-aos='fade-left'>


                <h1>Welcome back, Sundar👋</h1>


                <div className='cards-box p-3 d-flex align-items-center justify-content-between gap-5'>
                    <div className="cards-left-box p-3">
                        <div className='d-flex align-items-center justify-content-between'>
                            <div className='d-flex'>
                                <img className='img-fluid' src={PendingTaskIcon} />
                                <p className='todo-text m-0 pink'>To Do</p>
                            </div>
                            <div>
                                <div className='d-flex align-items-center gap-1 pointer'>
                                    <span className='plus red'>+</span>
                                    <p class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" className='text-add m-0'>Add Task</p>
                                    {/* Modal */}
                                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-xl">
                                            <div class="modal-content p-5">
                                                {/* Top */}
                                                <div className="modal-top d-flex justify-content-between">
                                                    <div className="modal-header-left">
                                                        <h5 className='m-0'> Add New Task
                                                        </h5>
                                                        <div className='modal-header-line'>

                                                        </div>
                                                    </div>

                                                    <NavLink className='modal-nav' data-bs-dismiss="modal">
                                                        Go Back
                                                    </NavLink>

                                                </div>

                                                {/* Center */}

                                                <div className="modal-center p-3 mt-5">
                                                    <div className="modal-center-inner">

                                                        <label className='flex-column' htmlFor="Title">
                                                            <p className='m-0 fw-medium'>Title</p>
                                                            <input className='modal-input' type="text" required />
                                                        </label>

                                                        <label className='flex-column mt-3' htmlFor="Date">
                                                            <p className='m-0 fw-medium'>Date</p>
                                                            <input className='modal-input' type="date" required />
                                                        </label>

                                                        <div className='piority-box mt-3'>
                                                            <p className='fw-medium m-0'>Pioritiy</p>
                                                            <div className='piority-inner d-flex align-items-center gap-5'>
                                                                <label className='d-flex' htmlFor="">
                                                                    <div className='d-flex align-items-center gap-2'>
                                                                        <div className='piority-circle'> </div>
                                                                        Extreme
                                                                        <input type="checkbox" required />
                                                                    </div>
                                                                </label>

                                                                <label className='d-flex' htmlFor="">
                                                                    <div className='d-flex align-items-center gap-2'>
                                                                        <div className='piority-circle2'> </div>
                                                                        Moderate
                                                                        <input type="checkbox" required />
                                                                    </div>
                                                                </label>


                                                                <label className='d-flex' htmlFor="">
                                                                    <div className='d-flex align-items-center gap-2'>
                                                                        <div className='piority-circle3'> </div>
                                                                        Low
                                                                        <input type="checkbox" required />
                                                                    </div>
                                                                </label>
                                                            </div>
                                                        </div>

                                                        <div className='d-flex align-items-center gap-4 mt-2'>
                                                            <div className='m-0'>
                                                                <label htmlFor="">
                                                                    <p className='fw-medium m-0 mb-1'>Task Description</p>
                                                                    <textarea placeholder='Start writing here.....' className='input-description darkgray text-start p-2' type="text" />
                                                                </label>
                                                            </div>
                                                            <div class="upload-box mt-3">
                                                                <div class="upload-icon">
                                                                    <img src={DragImg} />
                                                                </div>
                                                                <p>Drag&Drop files here</p>
                                                                <span>or</span>
                                                                <button class="browse-btn">Browse</button>
                                                                <input type="file" hidden required />
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                {/* Bottom */}
                                                <div class="modal-bottom mt-3">
                                                    <button type="submit" class="modal-btn" data-bs-dismiss="modal">Done</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="card-date">
                            06 June <span className='text-today darkgray'>• Today</span>
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
                                <p className="card-party-text col-7 gray">
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
                                    <span className='card-p-b-2 red'>
                                        Not Started
                                    </span>
                                </p>
                                <p className='card-p-b-3 m-0 darkgray'>
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
                                <p className="card-party-text col-7 gray">
                                    Get the work done by EOD and discuss with client before leaving. (4 PM | Meeting Room)
                                </p>
                                <img src={CardTravelDaysImg} />
                            </div>

                            <div className="card-party-bottom mt-2 ps-3 d-flex align-items-center gap-1">
                                <p className='me-1 m-0'>
                                    Priority:
                                    <span className='card-p-b-1 blue'>
                                        Moderate
                                    </span>
                                </p>
                                <p className='m-0'>
                                    Status:
                                    <span className='card-p-b-2-2 darkblue'>
                                        In Progress
                                    </span>
                                </p>
                                <p className='card-p-b-3 m-0 darkgray'>
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
                                <p className="card-party-text col-9 gray">
                                    Make sure everything is functioning and all the necessities are properly met. Prepare the team and get the documents ready for...                                            </p>
                                <img src={CardTravelDaysImg} />
                            </div>

                            <div className="card-party-bottom mt-2 ps-3 d-flex align-items-center gap-1">
                                <p className='me-1 m-0'>
                                    Priority:
                                    <span className='card-p-b-1 blue'>
                                        Moderate
                                    </span>
                                </p>
                                <p className='m-0'>
                                    Status:
                                    <span className='card-p-b-2-2 darkblue'>
                                        In Progress
                                    </span>
                                </p>
                                <p className='card-p-b-3 m-0 darkgray'>
                                    Created on: 19 June
                                </p>
                            </div>

                        </div>


                    </div>


                    <div className="card-right-box">
                        <div className='card-task d-flex flex-wrap'>

                            <div className='card-task-top d-flex align-items-center ms-4 justify-content-start'>
                                <img className='card-task-top-icon col-2 me-1' src={CompletedTaskIcon} />
                                <p className='card-task-top-text pink m-0'>Task Status</p>
                            </div>

                            <div className="bar-circle-box d-flex flex-wrap gap-4  mb-0 me-3">
                                <div className='bar-circle-top'>
                                </div>
                                <div style={{ width: 100 }}>
                                    <CircularProgressbar value={84} text={`84%`} styles={buildStyles({ pathColor: 'green', textColor: 'black' })} />
                                    <small className="text-center d-flex align-items-center gap-2 mt-1">
                                        <p className='m-0 text-success fs-4'>•</p>
                                        Completed
                                    </small>
                                </div>
                                <div style={{ width: 100 }}>
                                    <CircularProgressbar value={46} text={`46%`} styles={buildStyles({ pathColor: 'blue', textColor: 'black' })} />
                                    <small className="text-center d-flex align-items-center gap-2 mt-1">
                                        <p className='m-0 text-primary fs-4'>
                                            •
                                        </p>
                                        In Progress</small>
                                </div>
                                <div style={{ width: 100 }}>
                                    <CircularProgressbar value={13} text={`13%`} styles={buildStyles({ pathColor: 'red', textColor: 'black' })} />
                                    <small className="text-center d-flex align-items-center gap-2 mt-1">
                                        <p className='m-0 text-danger fs-4'>
                                            •
                                        </p>
                                        Not Started
                                    </small>
                                </div>
                            </div>
                        </div>

                        <div className="card-right-bottom mt-5">
                            <div className="card-right-bottom-top d-flex align-items-center col-10 gap-2 p-3">
                                <img className='' src={CompletedTaskIcon1} />
                                <p className='m-0 red'>Completed Task</p>
                            </div>

                            <div className="card-right-bottom-center d-flex flex-wrap justify-content-center">
                                <div className="dog-card">
                                    <div className="card-party-top d-flex align-items-center justify-content-between p-2">
                                        <div className='d-flex gap-2 '>
                                            <div className="dog-card-circle mt-1">

                                            </div>
                                            <h5 className='card-party-title fw-bold m-0'>
                                                Walk the dog
                                            </h5>
                                        </div>
                                        <div className='three-circle-box d-flex align-items-center'>
                                            <span className='card-party-span'></span>
                                            <span className='card-party-span'></span>
                                            <span className='card-party-span'></span>
                                        </div>
                                    </div>

                                    <div className="card-dog-center ps-4 pe-3 d-flex align-items-center justify-content-between flex-wrap">
                                        <p className='card-dog-center-text col-7 gray'>
                                            Take the dog to the park and bring treats as well.
                                        </p>
                                        <img src={CardDogImg} />

                                        <p className='d-flex mb-1 mt-1'>
                                            Status :
                                            <span className='green'>
                                                Completed
                                            </span>
                                        </p>

                                        <br />

                                        <p className='col-12 gray m-0'>Completed 2 days ago.</p>
                                    </div>


                                </div>

                                <div className="dog-card mt-1">
                                    <div className="card-party-top d-flex align-items-center justify-content-between p-2">
                                        <div className='d-flex gap-2 '>
                                            <div className="dog-card-circle mt-1">

                                            </div>
                                            <h5 className='card-party-title fw-bold m-0'>
                                                Conduct meeting
                                            </h5>
                                        </div>
                                        <div className='three-circle-box d-flex align-items-center '>
                                            <span className='card-party-span'></span>
                                            <span className='card-party-span'></span>
                                            <span className='card-party-span'></span>
                                        </div>
                                    </div>

                                    <div className="card-dog-center ps-4 pe-3 d-flex align-items-center justify-content-between flex-wrap">
                                        <p className='card-dog-center-text col-7 gray m-0'>
                                            Meet with the client and finalize requirements.
                                        </p>
                                        <img src={CardProductImg} />

                                        <p className='d-flex mb-1 mt-0'>
                                            Status :
                                            <span className='green'>
                                                Completed
                                            </span>
                                        </p>

                                        <br />

                                        <p className='col-12 gray m-0'>Completed 2 days ago.</p>
                                    </div>


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