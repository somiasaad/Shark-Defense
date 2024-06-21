import { useEffect, useState, useCallback } from 'react';
import '../Styles/who.css';
import axios from 'axios';
import Spinner from './../Spinner';
import apiUrl from '../APIURL';

export default function Whois() {
    const [Data, setData] = useState();
    const [Error, setError] = useState();
    const [isLoading, setisLoading] = useState(false);
    const [url] = useState(sessionStorage.getItem('Email'));

    const fetchWhoisInfo = useCallback(async () => {
        setisLoading(true);
        try {
            const res = await axios.post(`${apiUrl}/url/whois/`,
                { url: url },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'accept': 'application/json',
                    }
                }
            );
            
            const result = { url: url, data: res.data.Whois_info };
            sessionStorage.setItem('whoisResult', JSON.stringify(result));
            setData(res.data.Whois_info);
            setisLoading(false);

        } catch (error) {
            setisLoading(false);
            console.error('Error fetching data:', error);
            setError("Error while fetching data, please try again.");
        }
    }, [url]);

    useEffect(() => {
        const storedResult = sessionStorage.getItem('whoisResult');
        
        if (storedResult) {
            const parsedResult = JSON.parse(storedResult);
            if (parsedResult.url === url) {
                setData(parsedResult.data);
                return; // Exit early if the URL has not changed
            }
        }

        fetchWhoisInfo();
    }, [url, fetchWhoisInfo]);

// http://172.208.112.141:8000/api/v1/url/screenshot/
    return (
        <div className='container whois'>
            <div className='whois-content'>
            {!isLoading && !Error && Data !=="domain not found" &&
            
                            <ul className='w-full '>
                            <li className='w-[100%] flex gap-4 justi'><span className='w-[40%] text-left'>Domain:</span>  <span>{Data?.Domain_name}</span></li>
                            <li className='w-[100%] flex gap-4 justi'><span className='w-[40%] text-left'>Register:</span> <span> {Data?.Registrar}</span> </li>
                            <li className='w-[100%] flex gap-4 justi'><span className='w-[40%] text-left'>Registered On: </span> <span>{Data?.Creation_Date}</span></li>
                            <li className='w-[100%] flex gap-4 justi'><span className='w-[40%] text-left'>Expires On:</span> <span>{Data?.Expiry_Date}</span></li>
                            <li className='w-[100%] flex gap-4 justi'><span className='w-[40%] text-left'>Updated On:</span> <span>{Data?.Domain_name}</span> </li>
                            <hr/>
        
                            <li>status
                                <ul>
                                {Data?.Status?.map((el =>{
                                    return(
                                        <>
                                         <li>{el}</li>
        
                                        </>
                                    )
                                }))}
        
                                </ul>
                            </li>
                            <hr/>
        
                            <li>Name Servers
                                <ul>
                                {Data?.Name_Servers?.map((el =>{
                                    return(
                                        <>
                                         <li>{el}</li>
        
                                        </>
                                    )
                                }))}
        
                                </ul>
                            </li>
                            <li></li>
                        </ul> 
                        }
                                {Data ==="domain not found" && <p className='text-danger'> domain not found</p>}
                                {Error && !isLoading && <p className='text-danger'>{Error} </p>}
                                
                                {isLoading && <Spinner/>}

            </div>
        </div>
    )
}
