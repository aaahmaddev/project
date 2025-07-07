import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, NavLink } from 'react-router-dom';
import SignInImg from '../../assets/images/signin/signin.png'
import UserNameIcon from '../../assets/images/signup/userIcon.png'
import PassIcon from '../../assets/images/signup/passIcon.png'
import './index.css';

const Login = () => {
    const loginUrl = 'http://127.0.0.1:5000/api/login';
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const changeEmail = (e) => {
        const emailVal = e.target.value;
        const pElement = document.getElementById('email-err');
        const passwordElement = document.getElementById('password');

        if (emailVal.length < 5) {
            pElement.textContent = 'minimum 5 ta symbol';
            pElement.style.display = 'block';
            passwordElement.readOnly = true;
        } else {
            pElement.style.display = 'none';
            passwordElement.readOnly = false;
        }
        setEmail(emailVal);
    };

    const changePassword = (e) => {
        setPassword(e.target.value);
    };

    const loginFunction = (e) => {
        e.preventDefault();

        axios.post(loginUrl, {
            email,
            password
        })
            .then((response) => {
                if (response.status === 200) {
                    localStorage.setItem("token", response.data.accessToken);
                    navigate("/");
                }
            })
            .catch((error) => {
                console.log(`error: ${error}`);
            });
    };

    return (
        <div className="signin">
            <div className="container">
                <div className="signin-inner">
                    {/* Left */}
                    <div className="sigin-left col-6 d-flex justify-content-start align-items-center flex-wrap" data-aos="fade-right">
                        <div className="sigin-left-inner">
                            <h1 className='signin-title mb-3'>Sign in</h1>
                            <form onSubmit={loginFunction}>
                                <label className='signin-label d-flex align-items-center'>
                                    <img className='signin-icon' src={UserNameIcon} alt="User Icon" />
                                    <input onChange={changeEmail} className='signin-input' type="text" placeholder='Enter Username' required />
                                </label>
                                <p id="email-err" style={{ display: 'none', color: 'red', marginTop: '4px' }}></p>

                                <label className='signin-label mt-4 d-flex align-items-center'>
                                    <img className='signin-icon' src={PassIcon} alt="Password Icon" />
                                    <input id="password" onChange={changePassword} className='signin-input' type="password" placeholder='Enter Password' required />
                                </label>

                                <label className='signin-checbox-l mt-4 d-flex align-items-center'>
                                    <input className='signin-checkbox me-3' type="checkbox" />
                                    Remember Me
                                </label>

                                <button className='signin-btn mt-4 mb-5'>
                                    Login
                                </button>
                            </form>
                            <p className='signin-text mt-5'>Don't have an account!?
                                <NavLink to='/signup' className="text-decoration-none ms-2">
                                    Create One
                                </NavLink>
                            </p>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="signin-right col-6" data-aos="fade-left">
                        <img className='signin-img img-fluid' src={SignInImg} alt="Sign In" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;