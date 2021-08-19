import React from 'react'
import serviceImage from '../Assets/serviceImage.jpg'

const ServiceDetailsComponent = () => {
    return (
        <div className="card">
            <div className="heading">Service Details</div>
            <div className="photoColumn" style={{display: 'flex'}}>
                <div className="image">
                    <img src={serviceImage} alt="" />
                </div>
                <div>
                    <div className="serviceCode">
                        <p>Service code : <span className="code">#2389046</span></p>
                    </div>
                    <h1>Perfect salon</h1>
                    <div className="serviceCategory">
                        <p>Service category : <span className="category">Salon</span></p>
                    </div>
                    <div className="address">
                        <p>shop no. 125, sec 20 near mandir</p>
                    </div>
                </div>
            </div>
            <div className="slotAndService">

            </div>
            <div className="tableTitle"></div>
            <div className="tableHeadings"></div>
            <div className="tableRows"></div>
        </div>
    )
}

export default ServiceDetailsComponent
