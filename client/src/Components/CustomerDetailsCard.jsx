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
                        <div className="serviceCode1">
                            <p>Service code : <span className="code">#2389046</span></p>
                        </div>
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
            <div style={{height: '115px', border: '1px solid', margin: '1rem', borderRadius: '6px'}}></div>
        </div>
    )
}

export default CustomerDetailsCard
