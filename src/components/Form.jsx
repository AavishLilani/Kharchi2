import React, { useState } from 'react'
import prototype2 from '/assets/prototype2.png'
import { Link } from 'react-router-dom'

import Googlebutton from './Googlebutton'
import FloatingLabelInput from './FloatingLabelInput'

export const Form = ({ type }) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div className='flex justify-center items-center h-screen bg-black text-gray-500 '>
            <div>

                <form action="#" className='flex flex-col gap-3 w-full items-center p-10 bg-black border border-gray-500 box-md mb-5 shadow-gray-700 shadow '>
                    {/* <FloatingLabelInput
                        id="expense-input"
                        label="Enter Expense"
                        type='password'
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    /> */}
                    <div className='flex justify-center'> 
                        <img src={prototype2} alt='Logo' className='mb-6' width={250} />
                    </div>

                    <div className={`${type === "login" ? "hidden" : "block"}`}>
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

                    <div className='flex flex-col gap-5 items-center '>
                        <div>
                            <input type="text" placeholder='Name' className={`${type === "login" ? "hidden" : "block p-2 border border-grey-500 rounded-md bg-gray-700"}`} />
                        </div>
                        <div>
                            <input type='email' placeholder='Email' className='p-2 border border-grey-500 rounded-md bg-black' />
                        </div>

                        <div>
                            <input type='password' placeholder='Password' className='p-2 border border-grey-500 rounded-md bg-black' />
                        </div>
                        <div>
                            <input type="password" placeholder='Re-enter Password' className={`${type === "login" ? "hidden" : "block p-2 border border-grey-500 rounded-md bg-black"}`} />
                        </div>
                    </div>

                    <div className='flex flex-col justify-center gap-5 items-center '>
                        <div className={`${type === "login" ? "hidden" : "block"}`}>
                            <button className='bg-blue-500 text-white flex justify-center py-2 rounded-md px-2'>Sign up</button>
                        </div>

                        <div className={`${type === "signup" ? "hidden" : "block"}`}>
                            <div className='flex justify-center items-center flex-col'>
                                <button className='bg-blue-500 text-white flex justify-center py-2 rounded-md px-2'>Log in</button>
                                <div className='flex items-center my-4 w-full'>
                                    <hr className='w-full border-t border-gray-300' />
                                    <span className='px-2 text-gray-500'>OR</span>
                                    <hr className='w-full border-t border-gray-300' />
                                </div>
                            </div>

                            <div className='flex justify-center items-center space-x-5'>
                                <Googlebutton />
                            </div>

                            <div className='flex justify-center'>
                                <a href='#' className='text-white mt-4'>Forgot password?</a>
                            </div>
                        </div>
                    </div>
                </form>

                <div className='flex justify-center border border-gray-500 box-md shadow-gray-300 shadow h-10 items-center'>
                    <div className={`${type === "signup" ? "hidden" : "block text-white"}`}>
                        Don't have an account? <Link className=" text-blue-500" to={"/signup"}>Sign   up</Link>
                    </div>
                    <div className={`${type === "login" ? "hidden" : "block text-white"}`}>
                        Have an account? <Link className=' text-blue-500 ' to={"/signin"}>Log in</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form;
