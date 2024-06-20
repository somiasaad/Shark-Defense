import React, { useEffect, useState } from 'react'
import service6 from '../../imgs/graph (2).jpeg'
import axios from 'axios';
import { Token } from '../../Toke';
import parse from 'html-react-parser';
import apiUrl from './../Services/APIURL';
export default function Graph() {
    const [Graphi, setGraphi] = useState()
    useEffect(() => {
        const Fetch = async () => {
            try {
                const res = await axios.post(`${apiUrl}/visualize_subdomains/`,
                    {
                        url: sessionStorage.getItem('Email')
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'accept': 'application/json',
                            Authorization: `Bearer ${Token}`,
                        }
                    }
                );
    
                console.log(res.data
                );
                setGraphi(res.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        Fetch();
    }, []);
    return (
        <>


            <div className='Graph w-[80%] h-[70%]'>
                {Graphi?.Graph_visualization ? 
                parse(Graphi?.Graph_visualization)
                 : "Loading..."}
            </div>
        </>
    )
}
