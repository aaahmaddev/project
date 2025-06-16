import React from 'react';
import './index.css'
import DocumentsImg from '../../assets/images/my task/documents.png'
import LaptopImg from '../../assets/images/my task/assginments.png'
import Basketicon from '../../assets/images/vital/BasketIcon.png'
import TaskSearchIcon from '../../assets/images/vital/SearchICon.png'

const index = () => {
    return (
        <>
            <div className="v-tasks-box d-flex gap-2">
                <div className="v-tasks-left p-3">

                    <div className='v-tasks-left-title'>
                        <h4>Vital Tasks</h4>
                        <div className='v-task-left-line'></div>


                        <div className="card-dog p-2 mt-3">
                            <div className="card-dog-top d-flex align-items-center justify-content-between">
                                <div className='d-flex gap-2 '>
                                    <div className="card-circle mt-1">

                                    </div>
                                    <h5 className='card-dog-title fw-bold m-0'>
                                        Submit Documents
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
                                    Make sure to submit all the necessary docum.....
                                </p>
                                <img src={DocumentsImg} />
                            </div>

                            <div className="card-dog-bottom mt-2 ps-3 d-flex align-items-center gap-1">
                                <p className='me-1 m-0'>
                                    Priority:
                                    <span className='card-p-b-1 red'>
                                        Extreme
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
                                <h5 className='card-party-title fw-bold m-0'>
                                    Complete assignments
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
                                The assignments must be completed to pass final year....
                            </p>
                            <img src={LaptopImg} />
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
                            <img className='v-task-dog-img' src={DocumentsImg} />
                        </div>
                        <div className="v-task-right-top-right">
                            <h5 className='mb-2 fw-bold'>Submit Documents</h5>
                            <p className='mb-2'>Piority: <span className='red'>Extreme</span></p>
                            <p className='mb-2'>Status:  <span className='red'>Not Started</span></p>
                            <p className='m-0 gray'>Create on 20/06/2023</p>
                        </div>
                    </div>

                    <div className="v-task-right-center gray mt-3">
                        <p><span className='fw-medium text-dark'>Task Title: </span>Document Submission. <br />
                            <span className='fw-medium text-dark'>Objective: </span> To submit required documents for something important <br />
                            <span className='fw-medium text-dark'>Task Description: </span> Review the list of documents required for submission and ensure all necessary documents are ready. Organize the documents accordingly and scan them if physical copies need to be submitted digitally. Rename the scanned files appropriately for easy identification and verify the accepted file formats. Upload the documents securely to the designated platform, double-check for accuracy, and obtain confirmation of successful submission. Follow up if necessary to ensure proper processing.
                        </p>

                        <p className='fw-medium text-dark m-0'>Addionatal Notes:</p> <br />
                        <ul>
                            <li>Ensure that the documents are authentic and up-to-date.</li>
                            <li>Maintain confidentiality and security of sensitive information during the submission process.</li>
                            <li>If there are specific guidelines or deadlines for submission, adhere to them diligently.</li>
                        </ul>

                        <p><span className='fw-bold text-dark-emphasis'>Deadline for Submission: </span> End of Day</p>

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