import React, { useEffect, useState, useCallback } from 'react';
import '../Styles/ip.css';
import eg from '../../imgs/egypt.jpeg';
import axios from 'axios';
import Spinner from './../Spinner';
import apiUrl from '../APIURL';

export default function Domain() {
    const [IPInfo, setIPInfo] = useState();
    const [Loading, setLoading] = useState(false);
    const [url] = useState(sessionStorage.getItem('Email'));

    const fetchIPInfo = useCallback(async () => {
        setLoading(true);
        try {
            const res = await axios.post(`${apiUrl}/url/ip_reputation/`,
                { url: url },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'accept': 'application/json',
                    }
                }
            );
            
            const result = { url: url, data: res.data.IP_Reputation };
            sessionStorage.setItem('ipReputationResult', JSON.stringify(result));
            setIPInfo(res.data.IP_Reputation);
            setLoading(false);

        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    }, [url]);

    useEffect(() => {
        const storedResult = sessionStorage.getItem('ipReputationResult');
        
        if (storedResult) {
            const parsedResult = JSON.parse(storedResult);
            if (parsedResult.url === url) {
                setIPInfo(parsedResult.data);
                return; // Exit early if the URL has not changed
            }
        }

        fetchIPInfo();
    }, [url, fetchIPInfo]);



    return (
        <div className=' whois-content'>
            {Loading && <Spinner/>}

            <div className="container domain">
                <div className="w-full domain-text">
                    
                    
                {!Loading && IPInfo !=null &&(
  <>
    <ul>
      <li>
        <span className='ip-title'>ISP</span>
        <span>{IPInfo?.isp}</span>
      </li>
      <li>
        <span className='ip-title'>Usage Type</span>
        <span>{IPInfo?.usageType}</span>
      </li>
      <li>
        <span className='ip-title'>Hostname(s)</span>
        <span>{IPInfo?.hostnames[0]}</span>
      </li>
      <li>
        <span className='ip-title'>Domain Name</span>
        <span>{IPInfo?.domain}</span>
      </li>
      <li>
        <span className='ip-title'>Country</span>
        <span className='country'>{IPInfo?.countryCode}</span>
      </li>
    </ul>
    <p>
      IP info including ISP, Usage Type, and Location provided by{' '}
      <span>{IPInfo?.ipAddress}</span>. Updated Monthly.
    </p>
  </>
)}              

{IPInfo==null && <p className='ip-info'>No Data Found</p>}

                </div>


            </div>
        </div>
    )
}
