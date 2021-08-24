import React from 'react'
import serviceImage from '../Assets/serviceImage.jpg'
import './css/ServiceDetailsComponent.css'

const ServiceDetailsComponent = ({serviceList, priceList, amount, serviceDetails}) => {

    return (
        <div className="card">
            <div className="heading">Service Details</div>
            <div className="photoColumn">
                <div className="imageFile">
                    <img src={serviceImage} height="100px" width="100px" alt="" />
                </div>
                <div className="photoRightSide">
                    <div>
                        <div className="serviceCode1">
                            <p>Service code : <span className="code">#2389046</span></p>
                        </div>
                        <h1 style={{margin: '0px', padding: '0px', fontSize: '24px'}}>{serviceDetails.shopName}</h1>
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
                <p>Service date : <span>22/05/2021</span></p>
                <p>Time slot : <span>08:00 AM - 09:00 AM</span></p>
                <p>Start time : <span>08:10 AM</span></p>
            </div>
            <div className="tableTitle">
                <h3 style={{fontSize: '14px'}}>Services Booked</h3>
            </div>
            <div className="tableHeadings">
                <div className='slno'>
                    <p>No.</p>
                </div>
                <div className='service'>
                    <p>Service</p>
                </div>
                <div className='price'>
                    <p>Price</p>
                </div>
            </div>
            <div className="wholeTableRow">
                {
                    serviceList.map((res, i) => {
                        return (
                                <div className="tableRows">
                                    <div>
                                        <p className="slnoRow">{i+1}</p>
                                    </div>
                                    <div>
                                        <p className="serviceRow">{res}</p>
                                    </div>
                                    <div>
                                        <p className="priceRow">{priceList[i]}</p>
                                    </div>
                                </div>
                        )
                    })
                }
            </div>
            <div className="lastRow">
                    <div>
                        <p className="serviceRow"></p>
                    </div>
                    <div>
                        <p className="serviceTotal">Total</p>
                    </div>
                    <div>
                        <p className="priceRow">{amount}</p>
                    </div>
                </div>
        </div>
    )
}

export default ServiceDetailsComponent
