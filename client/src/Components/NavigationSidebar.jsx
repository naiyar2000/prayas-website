import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo.png'

const NavigationSidebar = () => {
    return (
        <div style={{height: '100vh',display: 'flex', flexDirection: 'column'}}>
            <div className="child"><img src={logo} alt="" height="60" width="60"/></div>
            <div><Link to='/'>Service</Link></div>
            <div><Link to='/payment'>Payment</Link></div>
            <div><Link to='/booking'>Booking</Link></div>
            <div><Link>Complaint and queries</Link></div>
            <div><Link>Add information</Link></div>
        </div>
    )
}

export default NavigationSidebar;
