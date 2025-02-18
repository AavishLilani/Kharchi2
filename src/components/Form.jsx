import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Googlebutton from './Googlebutton';
import FloatingLabelInput from './FloatingLabelInput';
import prototype2 from '/assets/prototype2.png';

export const Form = ({ type }) => {
    const [inputValue, setInputValue] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        let payload = {};
        let url = '';
        
        if (type === 'signin') {
            payload = { email, password };
            url = 'https://backend.kharchi.workers.dev/auth/signin';
        } else if (type === 'signup') {
            payload = { username, email, password };
            url = 'https://backend.kharchi.workers.dev/auth/signup';
        }

        try {
            const response = await axios.post(url, payload);
            const token = response.data.token;  // Assuming the token is in the `token` field of the response

            // Log the token
            console.log('Received token:', token);

            // Store the token in localStorage
            localStorage.setItem('authToken', token);
            
            // Optionally, you can redirect to a different page after successful login/signup:
            // window.location.href = '/dashboard';  // Redirect to dashboard or home page
        } catch (error) {
            console.error('Error during form submission:', error);
        }
    };

    return (
        <div className='flex justify-center items-center h-screen bg-black text-gray-500'>
            <div>
                <form onSubmit={handleSubmit} className='flex flex-col gap-3 w-full items-center p-10 bg-black border border-gray-500 box-md mb-5 shadow-gray-700 shadow'>
                    <div className='flex justify-center'>
                        <img src={prototype2} alt='Logo' className='mb-6' width={250} />
                    </div>

                    {/* Conditionally render the sign up section */}
                    <div className={`${type === "signin" ? "hidden" : "block"}`}>
                        <div className='flex justify-center items-center mb-6 font-bold'>Sign up to manage your MONEY</div>
                        <div className='flex justify-center items-center space-x-5'>
                            <Googlebutton />
                        </div>
                        <div className='flex items-center my-4 w-full'>
                            <hr className='w-full border-t border-gray-300' />
                            <span className='px-2 text-gray-500'>OR</span>
                            <hr className='w-full border-t border-gray-300' />
                        </div>
                    </div>

                    <div className='flex flex-col gap-5 items-center'>
                        {/* Render the username input for sign up */}
                        {type === 'signup' && (
                            <div>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="p-2 border border-grey-500 rounded-md bg-gray-700"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                        )}
                        <div>
                            <input
                                type='email'
                                placeholder='Email'
                                className='p-2 border border-grey-500 rounded-md bg-black'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div>
                            <input
                                type='password'
                                placeholder='Password'
                                className='p-2 border border-grey-500 rounded-md bg-black'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        {type === 'signup' && (
                            <div>
                                <input
                                    type="password"
                                    placeholder='Re-enter Password'
                                    className='p-2 border border-grey-500 rounded-md bg-black'
                                />
                            </div>
                        )}
                    </div>

                    <div className='flex flex-col justify-center gap-5 items-center'>
                        {/* Show the sign up button for signup type */}
                        {type === 'signup' && (
                            <button type="submit" className='bg-blue-500 text-white flex justify-center py-2 rounded-md px-2'>
                                Sign up
                            </button>
                        )}

                        {/* Show the log in button for signin type */}
                        {type === 'signin' && (
                            <div className='flex justify-center items-center flex-col'>
                                <button type="submit" className='bg-blue-500 text-white flex justify-center py-2 rounded-md px-2'>
                                    Log in
                                </button>
                                <div className='flex items-center my-4 w-full'>
                                    <hr className='w-full border-t border-gray-300' />
                                    <span className='px-2 text-gray-500'>OR</span>
                                    <hr className='w-full border-t border-gray-300' />
                                </div>
                            </div>
                        )}

                        <div className='flex justify-center items-center space-x-5'>
                            <Googlebutton />
                        </div>

                        {type === 'signin' && (
                            <div className='flex justify-center'>
                                <a href='#' className='text-white mt-4'>Forgot password?</a>
                            </div>
                        )}
                    </div>
                </form>

                <div className='flex justify-center border border-gray-500 box-md shadow-gray-300 shadow h-10 items-center'>
                    {type === 'signup' ? (
                        <div className="text-white">
                            Have an account? <Link className="text-blue-500" to="/signin">Log in</Link>
                        </div>
                    ) : (
                        <div className="text-white">
                            Don't have an account? <Link className="text-blue-500" to="/signup">Sign up</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Form;
