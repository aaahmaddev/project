import React from 'react';
import './index.css'
import HospitalImg from '../../assets/images/vital/cardHospitalImg.png'
import DogImg from '../../assets/images/dashboard/docImg.png'
import Basketicon from '../../assets/images/vital/BasketIcon.png'
import TaskSearchIcon from '../../assets/images/vital/SearchICon.png'

const index = () => {
    return (
        <>



            <div className="v-tasks-box d-flex gap-2" data-aos="fade-left">
                <div className="v-tasks-leftt p-4">

                    <div className='v-tasks-left-title'>
                        <h4>Vital Tasks</h4>
                        <div className='v-task-left-line'></div>


                        <div className="card-dog p-2 mt-3">
                            <div className="card-dog-top d-flex align-items-center justify-content-between">
                                <div className='d-flex gap-2 '>
                                    <div className="card-circle mt-1">

                                    </div>
                                    <h5 className='card-dog-title fw-bold m-0'>
                                        Walk the dog
                                    </h5>
                                </div>
                                <div className='three-circle-box d-flex align-items-center mb-5'>
                                    <span className='card-party-span'></span>
                                    <span className='card-party-span'></span>
                                    <span className='card-party-span'></span>
                                </div>

                            </div>

                            <div className="card-dog-center d-flex align-items-center justify-content-between ps-3">
                                <p className="card-dog-text col-7 gray">
                                    Take the dog to the park and bring treats as well.....
                                </p>
                                <img src={DogImg} />
                            </div>

                            <div className="card-dog-bottom mt-2 ps-3 d-flex align-items-center gap-1">
                                <p className='me-1 m-0'>
                                    Priority:
                                    <span className='card-p-b-1 blue'>
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

                    </div>

                    <div className="h-card-party p-2 mt-3">
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
                            <img src={HospitalImg} />
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
                                <span className='card-p-b-2 red'>
                                    Not Started
                                </span>
                            </p>
                            <p className='card-p-b-3 m-0 darkgray'>
                                Created on: 20 June
                            </p>
                        </div>

                    </div>

                </div>

                {/* Right */}

                <div className="v-task-right p-3">

                    <div className="v-task-right-top d-flex align-items-end gap-3">
                        <div className="v-task-right-top-left">
                            <img className='v-task-dog-img' src={DogImg} />
                        </div>
                        <div className="v-task-right-top-right">
                            <h5 className='mb-2 fw-bold'>Walk the Dog</h5>
                            <p className='mb-2'>Piority<span className='red'>Extreme</span></p>
                            <p className='mb-2'>Status <span className='red'>Not Started</span></p>
                            <p className='m-0 gray'>Create on 20/06/2023</p>
                        </div>
                    </div>

                    <div className="v-task-right-center gray">
                        <p className='mt-4'>Take the dog to the park and bring treats as well.</p>
                        <p className='mt-5'>Take Luffy and Jiro for a leisurely stroll around the neighborhood. Enjoy the fresh air and give them the exercise and mental stimulation they need for a happy and healthy day. Don't forget to bring along squeaky and fluffy for some extra fun along the way!</p>
                        <ol className='mt-5'>
                            <li>Listen to a podcast or audiobook</li>
                            <li>Practice mindfulness or meditation</li>
                            <li>Take photos of interesting sights along the way</li>
                            <li>Practice obedience training with your dog</li>
                            <li>Chat with neighbors or other dog walkers</li>
                            <li>Listen to music or an upbeat playlist</li>
                        </ol>
                    </div>

                    <div className="v-task-right-bottom d-flex justify-content-end gap-2">
                        <img className='v-task-icon' src={Basketicon} />
                        <img className='v-task-icon' src={TaskSearchIcon} />
                    </div>

                </div>
            </div>
        </>
    );
};

export default index;