import React from 'react'
import serviceImage from '../Assets/serviceImage.jpg'
import './css/ServiceDetailsComponent.css'

const ServiceDetailsComponent = () => {
    return (
        <div className="card">
            <div className="heading">Service Details</div>
            <div className="photoColumn">
                <div className="imageFile">
                    <img src={serviceImage} alt="" />
                </div>
                <div className="photoRightSide">
                    <div>
                        <div className="serviceCode1">
                            <p>Service code : <span className="code">#2389046</span></p>
                        </div>
                        <h1 style={{margin: '0px', padding: '0px'}}>Perfect salon</h1>
                        <div className="serviceCategory1">
                            <p>Service category : <span className="category">Salon</span></p>
                        </div>
                        <div className="address1">
                            <p>shop no. 125, sec 20 near mandir</p>
                        </div>
                    </div>
                    <div>
                        <p>+91 608080444</p>
                        <p>abc_@gmail.com</p>
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
