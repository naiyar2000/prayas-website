import React from 'react'
import './css/GeneralDetails.css'
import serviceImage from '../Assets/serviceImage.jpg'

const DoctorDetails = ({thisService}) => {

    return (
        <div className="generalCard">
            <div className="heading">About</div>
            <div className="nameReg">
                <div>
                    <p>Number of Doctors</p>
                    <div className="borderNum">
                        {thisService?.doctorList.length??""}
                    </div>
                </div>
            </div>
            <div className="generalCardInner">
                    <h5>Doctor Details</h5>
                    <div className="adminDetailsAccept">
                    <img src={serviceImage} height="150px" width="150px" alt="" />
                    <div style={{flex: '0.8'}}>
                        <div className="nameReg">
                            <div>
                                <p style={{textAlign: 'right', flex: '0.2'}}>Name</p>
                                <div className="borderName" style={{flex: '0.8'}}>
                                    {thisService?.doctorList[0]?.name}
                                </div>
                            </div>
                        </div>
                        <div className="nameReg">
                            <div>
                                <p style={{textAlign: 'right', flex: '0.2'}}>Phone no.</p>
                                <div className="borderName" style={{flex: '0.8'}}>
                                    {thisService?.doctorList[0]?.specialization}
                                </div>
                            </div>
                        </div>
                        <div className="nameReg">
                            <div>
                                <p style={{textAlign: 'right', flex: '0.2'}}>Designation</p>
                                <div className="borderName" style={{flex: '0.8'}}>
                                    {thisService?.doctorList[0]?.yearsOfExperience+' years'}
                                </div>
                            </div>
                        </div>
                        <div className="nameReg">
                            <div>
                                <p style={{textAlign: 'right', flex: '0.2'}}>Phone No.</p>
                                <div className="borderName" style={{flex: '0.8'}}>
                                    {thisService?.doctorList[0]?.number}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="generalCardInner">
                <h5>Visiting Hours</h5>
            </div>
        </div>
    )
}

export default DoctorDetails