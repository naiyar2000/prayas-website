import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo.png'
import './css/NavigationSidebar.css'

const NavigationSidebar = () => {
    return (
        <div
        //  style={{height: '100vh',display: 'flex', flexDirection: 'column', backgroundColor:'red'}}
         >
           
            <nav className="navbar">

                <div className="logo">
                    <div className="child">
                        <img src={logo} alt="" height="100" width="100"/>
                    </div> 
                </div>

                <ul className="navbar-nav">
                    <li className="nav-item"><Link to="/" className="nav-link"><span className="link-text">Service</span></Link></li>
                    <li  className="nav-item"><Link to="/payment" className="nav-link"><span className="link-text">Payment</span></Link></li>
                    <li className="nav-item"><Link to="/booking" className="nav-link"><span className="link-text">Booking</span></Link></li>
                    <li className="nav-item"><Link to="/booking" className="nav-link"><span className="link-text">Complaint and queries</span></Link></li>
                    <li className="nav-item"><Link to="/booking" className="nav-link"><span className="link-text">Add information</span></Link></li>
                </ul>
            </nav>

        </div>
    )
}

export default NavigationSidebar;
