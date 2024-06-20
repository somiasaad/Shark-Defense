import React from 'react'
import { NavLink } from 'react-router-dom';
import '././Styles/footer.css'
export default function Footer() {
    return (
        <>
            <footer className='bg'>
                <article className='footer-container bg  d-flex justify-content-around w-95'>

                    <div className=' footer-link d-flex gap-5 w-50 justify-content-around'>
                        <div className="link d-flex flex-column link-1 ">
                            <h3>Resources</h3>
                            <ul>
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/">Services</NavLink></li>
                                <li><NavLink to="/">Features</NavLink></li>
                                <li><NavLink to="/userGuide">Guide you</NavLink></li>
                                <li><a href="mailto:sharkdefense.official@gmail.com">Contact us</a></li>
                                <li><NavLink to="/about">About us</NavLink></li>

                            </ul>
                        </div>
                        <div className="link">
                            <h3>Information</h3>
                            <ul>
                                <li><a href="https://www.facebook.com/share/FbkTx8144yRM3zQb/?mibextid=qi2Omg">Facebook</a></li>
                                <li><a href="https://www.linkedin.com/company/sharkdefense/">Linkedin</a></li>
                                <li><a href="https://t.me/+dcYxTlwLm3NjN2Vk">telegram</a></li>


                                <li>SharkDefense@company.com</li>

                            </ul>
                        </div>

                    </div>
                    <div className="align-items-center copy-right">
                        <p>copyright &copy; 2024</p>
                    </div>

                </article>
            </footer>



        </>
    )
}
