

import React, { useState } from "react";
import Image from '../imgs/login.png'
// import Google from '../imgs/google.png'
import { Link ,useNavigate} from "react-router-dom";
// import Face from '../imgs/face.png'
import '././Styles/signup.css'
import axios from "axios";
import apiUrl from "./APIURL";
export default function Signup({ SeSign }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [password, setpassword] = useState(true)
    const [Error, setError] = useState()
    const [Success, setSuccess] = useState()

    const Navigate = useNavigate()
    const HandleSignUp = async () => {
try {
    const req = await axios.post(`${apiUrl}/user/signup/`, {
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json',

        },
        name: name,
        email: email,
        password: Password,
    })

     if(req.data.message ==="success" ){
        setSuccess("Account Created Successfully")
    }
    if(req.data.message ==="user with this email already exists" ){
        setError("this email already exists")
    }
    
        console.log(req)    
        setTimeout(() => {
            setSuccess("")
            setError("")
            Navigate("/login")
        }, 2000);
        } catch (error) {

        setSuccess("")


    setTimeout(() => {
        setSuccess("")
        setError("")
        
    }, 3000);
}
    }
    

    return (
        <>
            <div className="signup ">
                {/* <div className="login-content"> */}
                <article className="Image col-6">
                    <img src={Image} alt="IMG" />
                </article>
                <div className="form-content">
                    <article className="Form col-5 forms">
                        <article className="Header">
                            <h3> Sign up</h3>
                        </article>
                        {Error && <p className="p-1 bg-red-200 text-red-900 w-[80%] m-auto text-center">{Error}</p>}
                        {Success && <p className="p-1 bg-green-200 text-green-900 w-[100%] m-auto text-center">{Success}</p>}
                        
                        <article className="Inputs">
                            <article className="Name-Inputs">
                                <input type="text" placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} />
                            </article>
                            <input type="text" placeholder=" Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <span>
                                <input type={password ? "password" : "text"}
                                    value={Password}
                                    onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password " />{" "}
                                <i onClick={() => setpassword(!password)} className="cursor-pointer fa-solid fa-eye"></i>
                            </span>

                        </article>
                        <h6>Already Have an Account ? <Link to="/login"><span style={{ color: "#2D8DD3", textDecoration: "underline", cursor: "pointer" }}>Login</span></Link> </h6>
                        <button onClick={HandleSignUp}>Sign up</button>



                    </article>
                </div>
            </div>
            {/* </div> */}
        </>
    );
}