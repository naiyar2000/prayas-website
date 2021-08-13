import React from 'react'
import NavigationSidebar from '../Components/NavigationSidebar';

const Paymentspage = () => {
    return (
        <>
            <div style={{display: 'flex'}}>
                <div style={{flex: 1}}>
                    <NavigationSidebar/>
                </div>
                <div style={{flex: 3}}>Payments page</div>
            </div>
        </>
    )
}

export default Paymentspage;
