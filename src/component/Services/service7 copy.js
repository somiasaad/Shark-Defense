import React from 'react'
import './services.css'
import Service7 from '../../imgs/training.png'
import CardGroup from '../Card/CardGroup'



export default function service6() {
    return (
        <div>
            <div className="text-container-service ">
                <div className="text bg container">
                    <p><span>Homepage/</span>security awareness training</p>
                    <h2>security awareness training</h2>
                </div>
                <div className="text-content ">
                    <div className="container">
                        <img className='service-img' src={Service7} />
                        <h2 className='card-titles'>security awareness training</h2>
                        <CardGroup />
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
