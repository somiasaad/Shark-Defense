import React from 'react'
import './services.css'
import service8 from '../../imgs/service8.jpeg'
import CardGroup from '../Card/CardGroup'

export default function Service8() {
    return (
        <div>
            <div className="text-container-service ">
                <div className="text bg container">
                    <p><span>Homepage/</span>Update dateset</p>
                    <h2>Update dateset</h2>
                </div>
                <div className="text-content body-services">
                    <div className="container">
                        <img className='' src={service8} />
                        <h2>Update dateset</h2>
                        <CardGroup />

                    </div>
                </div>
            </div>

        </div>
    )
}
