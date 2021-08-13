import React from 'react'
import NavigationSidebar from '../Components/NavigationSidebar';

const Bookingspage = () => {
    return (
        <>
            <div style={{display: 'flex'}}>
                <div style={{flex: 1}}>
                    <NavigationSidebar/>
                </div>
                <div style={{flex: 3}}>Booking page</div>
            </div>
        </>
    )
}

export default Bookingspage;
