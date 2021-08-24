import React from 'react'
import './css/ServiceCards.css'
import salonPng from '../Assets/salon.png'

const ServiceCards = ({registered, newRequest, type, firstTitle, secondTitle}) => {
    return (
        <div className="customCards">
            <div className="col1">
                <h3>{firstTitle}</h3>
                <h1>{registered}</h1>
                <h3>{secondTitle}</h3>
                <h1>{newRequest}</h1>
            </div>
            <div className="col2">
                <div>
                    <img src={salonPng} alt="" height="100" width="100"/>
                    <h2>{type}</h2>
                </div>
            </div>
        </div>
    )
}

export default ServiceCards;
