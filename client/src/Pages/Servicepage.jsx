import React from 'react'
import NavigationSidebar from '../Components/NavigationSidebar'
import ServiceCards from '../Components/ServiceCards'
import './css/Servicepage.css'

const Servicepage = () => {
    return (
        <>
            <div style={{display: 'flex'}}>
                <div style={{flex: 1}}>
                    <NavigationSidebar/>
                </div>
                <div style={{flex: 3}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center'}}>
                        <h1 style={{paddingLeft: '10px'}}>All Services</h1>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center'}}>
                            <p>
                                From : 02/05/2000
                            </p>
                            <p>
                                To : 02/05/2000
                            </p>
                            <p>
                                This Week
                            </p>
                        </div>
                    </div>
                    <div className='serviceCards'>
                       <ServiceCards registered="08" newRequest="03" type="Salon"/>
                       <ServiceCards registered="07" newRequest="02" type="Parlour"/>
                       <ServiceCards registered="06" newRequest="02" type="Doctor"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Servicepage;
