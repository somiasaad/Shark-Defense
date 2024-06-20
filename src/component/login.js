
import Image from '../imgs/login.png'

import "./Styles/login.css"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import LoginHooks from "../CustomHook/Auth/LoginHooks/LoginHooks";
import axios from "axios";
import { AddUser } from '../RTK/User';
import { useDispatch } from 'react-redux';
import apiUrl from './APIURL';
export default function Login({ SeSign }) {
    // USING AXIOS TO POST DATA
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [Showpassword, setshowPassword] = useState(true)
    const [Success, setSuccess] = useState()
    const [Error, setError] = useState()

    const Navigate = useNavigate()
    const dispatch = useDispatch()
    const handleLogin = async () => {
        try {
            const req = await axios.post(`${apiUrl}/user/login/`, {
                "email": email,
                "password": password,
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json',
                },


            })



            dispatch(AddUser(req.data.user))
            if (req.data.message === "success" ) {
                setSuccess("Login Successful")

                setTimeout(() => {
                    setSuccess("")
                    Navigate("/")
                }, 2000);
            }
            if (req.data.message === "User not found") {
                setError("User not found")
                setTimeout(() => {
                    setSuccess("")
                    setError("")
                    
                }, 3000);
                
            }

        } catch (error) {
            setError(error.message)
            console.log(error.message)

        }
    }

    const HandleLogOut = () => {
        dispatch(AddUser(""))
        sessionStorage.removeItem("user")
    }
    return (

        <>
            <div className="login row ">
                {/* <div className="login-content"> */}
                <article className="Image col-5">
                    <img src={Image} alt="IMG" />
                </article>


                <div className="h-full col-4 Forms-col">
                    <article className="Form forms login-col ">
                        <article className="Header">
                            <h3
                                onClick={() => HandleLogOut()}
                            > Log In</h3>
                        </article>
                        {Success && <p className="p-1 bg-green-200 text-green-900 w-[100%] m-auto text-center">{Success}</p>}
                        {Error && <p className="p-1 bg-red-200 text-red-900 w-[100%] m-auto text-center">{Error}</p>}

                        <article className="Login-inputs">
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                            <span className="Password-span">
                                <input type={Showpassword ? "password" : "text"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder=" Password" />
                                <i
                                    onClick={() => setshowPassword(!Showpassword)}
                                    className="cursor-pointer fa-solid fa-eye"></i>
                            </span>


                        </article>


                        <section className="End-Form mt-[30px] flex flex-col gap-3">

                            <h6>Didn't have an Account yet? <Link to="/signup"><span style={{ color: "#2D8DD3", textDecoration: "underline", cursor: "pointer" }}>signup</span></Link></h6>
                            <button
                                className="transition-all hover:opacity-[0.8]"
                                onClick={() => handleLogin()}> Login</button>
                        </section>


                    </article>
                </div >

            </div >
            {/* </div> */}
        </>
    );
}