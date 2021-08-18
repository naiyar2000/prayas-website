import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo.png'
import './css/NavigationSidebar.css'

const NavigationSidebar = ({isbooking=false}) => {

    // const [selectedButton, setSelect] =useState(0);
    return (
        <div>
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
                {
                    isbooking ? (
                        <ul className="navbar-nav2">
                            <li className="nav-item2"><Link to="/booking" className="nav-link2"><span className="link-text">New Input</span></Link></li>
                            <li className="nav-item2"><Link to="/booking" className="nav-link2"><span className="link-text">Add agent</span></Link></li>
                        </ul>
                    ) : null
                }  
            </nav>
        </div>
    )
}

export default NavigationSidebar;
