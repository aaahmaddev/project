import React from 'react';
import './index.css'
import HospitalImg from '../../assets/images/vital/cardHospitalImg.png'
import DogImg from '../../assets/images/dashboard/docImg.png'

const index = () => {
    return (
        <>
            <div className="v-tasks-box">
                <div className="v-tasks-left p-4">

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

                    </div>

                </div>
                <div className="v-tasks-right">

                </div>
            </div>
        </>
    );
};

export default index;