import React from 'react'
import './css/CustomerDetailsCard.css'
import serviceImage from '../Assets/serviceImage.jpg'


const CustomerDetailsCard = () => {
    return (
        <div className="customerCard">
             <div className="heading">Service Details</div>
             <div className="photoColumnCustomer">
                <div className="imageFile">
                    <img src={serviceImage} height="80px" width="80px" alt="" />
                </div>
                <div className="photoRightSideCustomer">
                    <div>
                        <p>Naiyar Imam</p>
                        <p>+91 634353343</p>
                        <p>abc_@gmail.com</p>
                    </div>
                    <div>
                        <div className="serviceCode1">
                            <p>Date : <span className="code">21/05/21</span></p>
                        </div>
                        <div className="serviceCategory1">
                            <p>About : <span className="category">Payments</span></p>
                        </div>
                        <div className="address1">
                            <p><span className="category">Mail customer</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{height: '115px', border: '1px solid', margin: '1rem', borderRadius: '6px'}}></div>
        </div>
    )
}

export default CustomerDetailsCard
