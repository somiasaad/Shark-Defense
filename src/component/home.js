import './Styles/home.css'
// import '../index.css'
import home from '../imgs/home.png'
import { Link } from "react-router-dom";
import { useState } from 'react';

// import Test from './Testing/Test'
function Home() {
    const [inputValue, setInputValue] = useState('');
    const [isInputValid, setIsInputValid] = useState(false);
    const handleInputChange = (val) => {
        sessionStorage.setItem("Email",val)
        setInputValue(val);
        setIsInputValid(val.trim() !== '');
    };
    
    return (
        <>

            <div className="Container">
                <div className="row bg home">

                    <div className="col " id='Home'>
                        <div className='text-container'>
                            <h1 className=''>Every Click Counts.</h1>
                            <p>Enter a website URL, <br />
                                and we will swiftly analyze it for potential threats, ensuring a secure browser experience
                            </p>

                                <input type="url" 
                                value={inputValue}
                                onChange={(e) => handleInputChange(e.target.value)}
                                required className="input TestInput" placeholder='Example.com'></input>
                                
                                <button
                                onClick={() => console.log("Clicked")}
                                disabled={!isInputValid}
                                className={`p-2 bg-blue-500 flex justify-center m-auto text-white rounded ${!isInputValid ? 'opacity-50 cursor-not-allowed' : ''}`}
                               
                               > {isInputValid ?  <Link to= "/test">check URL</Link> : "check URL" } </button> 
                        </div>
                    </div>
                    <div className="col IMG-Home">
                        <img src={home} alt="home" ></img>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Home;
