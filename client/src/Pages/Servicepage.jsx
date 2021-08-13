import React from 'react'
import NavigationSidebar from '../Components/NavigationSidebar'

const Servicepage = () => {
    return (
        <>
            <div style={{display: 'flex'}}>
                <div style={{flex: 1}}>
                    <NavigationSidebar/>
                </div>
                <div style={{flex: 3}}>Service page</div>
            </div>
        </>
    )
}

export default Servicepage;
