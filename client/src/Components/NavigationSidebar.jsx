import React from 'react'
import { NavLink } from 'react-router-dom'
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
                    <li className="nav-item"><NavLink activeClassName="activeLink" exact to="/" className="nav-link"><span className="link-text">Service</span></NavLink></li>
                    <li  className="nav-item"><NavLink activeClassName="activeLink" to="/payment" className="nav-link"><span className="link-text">Payment</span></NavLink></li>
                    <li className="nav-item"><NavLink activeClassName="activeLink" to="/booking" className="nav-link"><span className="link-text">Booking</span></NavLink></li>
                    <li className="nav-item"><NavLink activeClassName="activeLink" to="/complaintQueries" className="nav-link"><span className="link-text">Complaint and queries</span></NavLink></li>
                    <li className="nav-item"><NavLink activeClassName="activeLink" to="/addInformation" className="nav-link"><span className="link-text">Add information</span></NavLink></li>
                    <li className="nav-item"><NavLink activeClassName="activeLink" to="/privacyPolicy" className="nav-link"><span className="link-text">Privacy Policy</span></NavLink></li>
                </ul>
                {
                    isbooking ? (
                        <ul className="navbar-nav2">
                            <li className="nav-item2"><NavLink activeClassName="activeLink" to="/booking" className="nav-link2"><span className="link-text">New Input</span></NavLink></li>
                            <li className="nav-item2"><NavLink activeClassName="activeLink" to="/booking" className="nav-link2"><span className="link-text">Add agent</span></NavLink></li>
                        </ul>
                    ) : null
                }  
            </nav>
        </div>
    )
}

export default NavigationSidebar;
