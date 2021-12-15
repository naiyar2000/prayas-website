import React from 'react'
import './css/GeneralDetails.css'
import serviceImage from '../Assets/serviceImage.jpg'


const GeneralDetails = ({thisService}) => {
    let add = thisService?.location?.address.split(",");

    return (
        <div className="generalCard">
            <div className="heading">Service Details</div>
            <div className="generalCardInner">
                <h5>General Details</h5>
                <div className="nameReg">
                    <div>
                        <p>Name</p>
                        <div className="borderName">
                            {thisService?.location?.name??thisService?.location?.clinicName??""}
                        </div>
                    </div>
                    <div>
                        <p>Registered shop no.</p>
                        <div className="borderReg">
                            {thisService?.location?.shopNo}
                        </div>
                    </div>
                </div>
                <h5>Location Details</h5>
                <div className="nameReg">
                    <div>
                        <p style={{textAlign: 'right', flex: '0.2'}}>Address/floor</p>
                        <div className="borderName" style={{flex: '0.8'}}>
                            {add[0]}
                        </div>
                    </div>
                </div>
                <div className="nameReg">
                    <div>
                        <p style={{textAlign: 'right', flex: '0.2'}}>Area/street no./sector</p>
                        <div className="borderName" style={{flex: '0.8'}}>
                        {add[add.length-2]}
                        </div>
                    </div>
                </div>
                <div className="nameReg">
                    <div>
                        <p style={{textAlign: 'right', flex: '0.2'}}>Landmark</p>
                        <div className="borderName" style={{flex: '0.8'}}>
                        {add[add.length-1]}
                        </div>
                    </div>
                </div>
                <h5>Admin Details</h5>
                <div className="adminDetailsAccept">
                    <img src={serviceImage} height="150px" width="150px" alt="" />
                    <div style={{flex: '0.8'}}>
                        <div className="nameReg">
                            <div>
                                <p style={{textAlign: 'right', flex: '0.2'}}>Name</p>
                                <div className="borderName" style={{flex: '0.8'}}>
                                    {thisService?.adminDetails?.name}
                                </div>
                            </div>
                        </div>
                        <div className="nameReg">
                            <div>
                                <p style={{textAlign: 'right', flex: '0.2'}}>Phone no.</p>
                                <div className="borderName" style={{flex: '0.8'}}>
                                    {thisService?.adminDetails?.number}
                                </div>
                            </div>
                        </div>
                        <div className="nameReg">
                            <div>
                                <p style={{textAlign: 'right', flex: '0.2'}}>Designation</p>
                                <div className="borderName" style={{flex: '0.8'}}>
                                    {thisService?.adminDetails?.designation}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h5>About Clinic</h5>
                <div className="aboutClinicAccpet"> {thisService?.location?.aboutClinic} </div>
            </div>
        </div>
    )
}

export default GeneralDetails
