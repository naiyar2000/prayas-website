import React from 'react'
import NavigationSidebar from '../Components/NavigationSidebar';
import SearchBar from '../Components/searchBar';
import ServiceDetailsComponent from '../Components/ServiceDetailsComponent';
import './css/Bookingpage.css'

const Bookingspage = () => {
    return (
        <>
        <div style={{display: 'flex'}}>
            <div style={{flex: 1}}>
                <NavigationSidebar isbooking={true}/>
            </div>
            <div style={{flex: 4}}>
                <div style={{color: 'white', backgroundColor: '#0F2735', marginBottom: '2rem'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center',color: 'white'}}>
                        <h1 style={{paddingLeft: '1rem', marginLeft: '3rem'}}>Bookings</h1>
                        <SearchBar />
                    </div>
                    <div style={{height: "2px", backgroundColor:"#5D5FEF", marginLeft: '4rem', marginRight: '4rem'}}></div>
                    <div className="secondHeading">
                        <h2>Booking :<span className="bookingCode">#20435</span></h2> 
                    </div>
                </div>
                <div className='serviceCards1'>
                    <ServiceDetailsComponent />
                </div>
            </div>
        </div>
    </>
    )
}

export default Bookingspage;
