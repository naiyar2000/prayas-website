import React from 'react'
import NavigationSidebar from '../Components/NavigationSidebar';
import './css/Bookingpage.css'

const Bookingspage = () => {
    return (
        <>
        <div style={{display: 'flex'}}>
            <div style={{flex: 1}}>
                <NavigationSidebar isbooking={true}/>
            </div>
            <div style={{flex: 4}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center',color: 'white', backgroundColor: '#0F2735'}}>
                    <h1 style={{paddingLeft: '1rem', marginLeft: '3rem'}}>Bookings</h1>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center', marginRight: '4rem'}}>
                        <div className="inputField">
                            <input type="text" className="text"/>
                            <div className="fas fa-arrow-right right-arrow"></div>
                        </div>
                    </div>
                </div>
                <div className='serviceCards'>
                </div>
                <div className="serviceLists">
                   
                </div>
            </div>
        </div>
    </>
    )
}

export default Bookingspage;
