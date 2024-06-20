import React from 'react';
import home from '../imgs/home.png'
import './Styles/userGuide.css';
import Logo from '../imgs/logo.png'
const userGuide = () => {
    return (
        <>
            <div className="bg guide-head w-full h-[200px]
    line-height-[20px]
    letter-spacing-[1px]
    flex flex-col items-center justify-center gap-3
    text-white
    relative
    mb-[50px]
    ">

                <h2 className="text-3xl">User Guide in Shark Defense</h2>

                <p className=''>We guide you to know how using our site</p>
                <span className='bg-white rounded-[100%] w-[100px] h-[100px] absolute top-[75%]'>
                    <img className='w-[100%] h-[100%]' src={Logo} alt="logo" />
                </span>
            </div>
            <div className="container">

                <div className="guide-section">


                    <div className="instruction-container ">
                        <div className="instruction w-[30%]">
                            <button className="flex items-start justify-start check-url-button rounded-xl ">Check URL</button>
                            <p className='text-[#007bff] font-light text-start mb-3'>To check URL you should follow these steps:</p>
                            <ul className='flex flex-col items-start justify-center gap-2 pl-4'>
                                <li className='text-[#007bff] font-light ' >1-Open "Home" page</li>
                                <li className='text-[#007bff] font-light '>2-Put any link (URL) in search label</li>
                                <li className='text-[#007bff] font-light '>3-Click "Check URL" button</li>
                                <li className='text-[#007bff] font-light '>4-Our site will redirect you to "Testing page"</li>
                            </ul>
                        </div>
                        <div className="instruction-image w-[70%]">
                            <img src={home} className='w-full imgGuide' alt='test' />
                        </div>
                    </div>
                    <div className="instruction-container">
                        <div className="instruction-image">
                            <img src={home} className='imgGuide' alt='test' />
                        </div>
                        <div className="instruction w-[30%]">
                            <button className="flex items-start justify-start check-url-button rounded-xl ">Check URL</button>
                            <p className='text-[#007bff] font-light text-start mb-3'>To check URL you should follow these steps:</p>
                            <ul className='flex flex-col items-start justify-center gap-2 pl-4'>
                                <li className='text-[#007bff] font-light ' >1-Open "Home" page</li>
                                <li className='text-[#007bff] font-light '>2-Put any link (URL) in search label</li>
                                <li className='text-[#007bff] font-light '>3-Click "Check URL" button</li>
                                <li className='text-[#007bff] font-light '>4-Our site will redirect you to "Testing page"</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )


}

export default userGuide;
