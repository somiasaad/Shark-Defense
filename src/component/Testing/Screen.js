import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import Spinner from './../Spinner';
import { Token } from '../Toke';
import apiUrl from '../APIURL';

export default function Screen() {
    const [Screen, setScreen] = useState();
    const [Loading, setLoading] = useState(false);
    const [url] = useState(sessionStorage.getItem('Email'));

    const fetchScreenshot = useCallback(async () => {
        setLoading(true);
        try {
            const res = await axios.post(`${apiUrl}/url/screenshot/`,
                { url: url },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'accept': 'application/json',
                        Authorization: `Bearer ${Token}`,
                    }
                }
            );
            
            const result = { url: url, data: res.data };
            sessionStorage.setItem('screenshotResult', JSON.stringify(result));
            setScreen(res.data);
            setLoading(false);

        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    }, [url]);

    useEffect(() => {
        const storedResult = sessionStorage.getItem('screenshotResult');
        
        if (storedResult) {
            const parsedResult = JSON.parse(storedResult);
            if (parsedResult.url === url) {
                setScreen(parsedResult.data);
                return; // Exit early if the URL has not changed
            }
        }

        fetchScreenshot();
    }, [url, fetchScreenshot]);


    return (
        <div className='Screen w-[100%] h-[60%] p-5'>
            {Screen?.screenshot !=="API request failed" && Screen?.screenshot !=="" && !Loading &&(
                <img className='m-auto w-[60%] h-[30%] object-cover' src={`data:image/jpeg;base64,${Screen?.screenshot}`} alt='screen' />)}
            {Screen?.screenshot ==="API request failed" && <p className='text-red-500'>Failed to fetch screenshot</p>}
            {Loading && <Spinner />}
        </div>
    );
}
