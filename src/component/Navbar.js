import { useEffect, useState } from 'react';
import Logo from '../imgs/logo.png';
import './Styles/navber.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ClearUser } from '../RTK/User';

export default function App() {

    const [togglebar, settogglebar] = useState(false);
    const [toggleDrop, settoggleDrop] = useState(false);
    const [toggleDropFeat, settoggleDropFeat] = useState(false);
    const { user } = useSelector(state => state.user)
    const Navigate = useNavigate()
    const dispatch = useDispatch()
    const HandleLogOut = () => {
        dispatch(ClearUser())
        Navigate("/")
    }
    return (
        <>
            <nav>
                <article className="container Nav-container">
                    <article className="logo">
                        <NavLink to="/" end><img src={Logo} alt='Nav-Logo' /></NavLink>

                    </article>
                    <i onClick={() => settogglebar(!togglebar)} className="fa-solid fa-bars-staggered toggle"></i>

                    <ul className={togglebar ? "active" : ""}>
                        <li> <NavLink to="/" end>Home</NavLink></li>
                        <li><NavLink to="/about">About us</NavLink></li>
                        <li onClick={() => settoggleDrop(!toggleDrop)} className='drop-list'>Services <i className="fa-solid fa-chevron-down"></i>
                            <ul className={toggleDrop ? "nested-links active" : "nested-links"}>
                                <NavLink to="/service2"><li> Security Rule</li></NavLink>
                                {/* <NavLink to="/service3"><li>URL ScreenShot</li></NavLink> */}
                                {/* <NavLink to="/service4"><li>Graph Visualization</li></NavLink> */}
                                <NavLink to="/service5"><li>Phishing Simulator</li></NavLink>
                                {/* <NavLink to="/service6"><li>Reason Behind Malicious urls</li></NavLink> */}
                                <NavLink to="/service7"><li>security awareness training</li></NavLink>
                                <NavLink to="/Threat"><li>threat Analysis Report</li></NavLink>
                                {/* <NavLink to="/service8"><li>Update dateset</li></NavLink> */}

                            </ul>
                        </li>
                        {/* /////////////////// */}
                        <li onClick={() => settoggleDrop(!toggleDrop)} className='drop-list'>Features <i className="fa-solid fa-chevron-down"></i>
                            <ul className={toggleDrop ? "nested-links active" : "nested-links"}>

                                <NavLink to="/ScreenShot"><li>ScreenShot</li></NavLink>
                                <NavLink to="/Submit"><li>Submit to technical team</li></NavLink>
                                <NavLink to="/Graph"><li>Graph Visualization </li></NavLink>

                                <NavLink to="/Whois"><li>Domain Whois</li></NavLink>
                                <NavLink to="/Reputation"><li>IP Reputation</li></NavLink>
                                <NavLink to="/service8"><li>UPDATE DATASETS</li></NavLink>

                            </ul>
                        </li>
                        <li><a href="mailto:sharkdefense.official@gmail.com">Contact us</a></li>
                        <li><NavLink to="/userGuide">Guide you</NavLink></li>
                        <li>
                            {user ? <span className='flex items-center gap-3'><NavLink to="/dashboard">{user?.name}</NavLink>
                                <i
                                    onClick={() => HandleLogOut()}
                                    className="text-gray-300 cursor-pointer fa-solid fa-right-from-bracket"></i></span>
                                : <NavLink to="/login">Login</NavLink>}
                        </li>
                    </ul>
                </article>
            </nav>
        </>
    )
}
