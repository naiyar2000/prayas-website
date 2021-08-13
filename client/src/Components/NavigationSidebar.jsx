import React from 'react'
import { Link } from 'react-router-dom'

const NavigationSidebar = () => {
    return (
        <div style={{height: '100vh',display: 'flex', flexDirection: 'column', backgroundColor: 'blue'}}>
            <div><Link to='/'>Service</Link></div>
            <div><Link to='/payment'>Payment</Link></div>
            <div><Link to='/booking'>Booking</Link></div>
            <div><Link>Complaint and queries</Link></div>
            <div><Link>Add information</Link></div>
        </div>
    )
}

export default NavigationSidebar;
