import React, { useState } from 'react'
import ServiceCards from '../Components/ServiceCards'
import './css/Servicepage.css'
import app from '../firebase'
import IndividualServiceAcceptpage from './IndividualServiceAcceptpage'

const Servicepage = () => {

    const [doctorserviceList, setdoctorServiceList] = useState([]);
    const [parlourserviceList, setparlourServiceList] = useState([]);
    const [salonserviceList, setsalonServiceList] = useState([]);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const parlourList = await app.firestore().collection("ParlourServices").get();
                const salonList = await app.firestore().collection("SalonServices").get();
                const doctorList = await app.firestore().collection("MedicalServices").get();
                setdoctorServiceList(doctorList.docs);
                setparlourServiceList(parlourList.docs);
                setsalonServiceList(salonList.docs);
                console.log(parlourList.docs);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    const [toggleAcceptPage, setToggleAccept] = useState(false);
    const [type, setType] = useState("");

    const [uid, setUid] = useState("");
    const [shopNo, setShopNo] = useState("");

    const toggle = (u, s, t) => {
        setType(t);
        setUid(u);
        setShopNo(s);
        setToggleAccept(true);
    }

    return (
        <>
            {
                !toggleAcceptPage ? 
                    <div>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center'}}>
                            <h1 style={{paddingLeft: '10px'}}>All Services</h1>
                            <div style={{display: 'flex', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center'}}>
                                <div className="dateContainer">
                                    <p>
                                        From : 02/05/2000   
                                    </p>
                                </div>
                                <div className="dateContainer">
                                    <p>
                                        To : 02/05/2000
                                    </p>
                                </div>
                                <div className='dateContainer'>
                                    <p>
                                        This Week
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='serviceCards'>
                        <ServiceCards registered="08" newRequest="03" type="Salon" firstTitle="Registered" secondTitle="New Request"/>
                        <ServiceCards registered="07" newRequest="02" type="Parlour" firstTitle="Registered" secondTitle="New Request"/>
                        <ServiceCards registered="06" newRequest="02" type="Doctor" firstTitle="Registered" secondTitle="New Request"/>
                        </div><br />
                        <div className="tableHeadings">
                                    <div className='bookingpageCode'>
                                        <p>Service code</p>
                                    </div>
                                    <div className='bookingpageDate' style={{flex:2}}>
                                        <p>Name of the service provider</p>
                                    </div>
                                    <div className='bookingpageServiceProvider'>
                                        <p>Service Category</p>
                                    </div>
                                    <div className='bookingpageServiceCategory'>
                                        <p>Date</p>
                                    </div>
                                    <div className='bookingpageCompensation'>
                                        <p>Status</p>
                                    </div>
                        </div>
                        <div className="wholeTableRow">
                                    {
                                        doctorserviceList.map((res, i) => {
                                            return (
                                                    <div className="tableRows" key={res.data().location.serviceUid}>
                                                        <div>
                                                            <p className="slnoRow">{res.data().location?.servId??""}</p>
                                                        </div>
                                                        <div style={{display:'flex', flex:2, justifyContent:"space-between"}}>
                                                            <p className="serviceRow">{res.data().location?.name??res.data().location?.clinicName??""}</p>
                                                            <span className="viewButton" onClick={() => toggle(res.data().location.servId, res.data().location.shopNo, res.data().type)}>View Items</span>
                                                        </div>
                                                        <div>
                                                            <p className="priceRow">{res.data().type??""}</p>
                                                        </div>
                                                        <div>
                                                            <p className="priceRow">{res.data().location?.regDate?.toDate()?.toDateString()??""}</p>
                                                        </div>
                                                        <div style={{alignItems: 'center'}}>
                                                            <div className="priceRow">
                                                                {
                                                                    res.data().location.status==="Rejected" ? 
                                                                        <div className="rejectedButton">Rejected</div> : res.data().location.status==="Accepted" ? 
                                                                            <div className="acceptedButton">Accepted</div> : <div className="pendingButton">Pending</div>
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                            )
                                        })
                                    }
                                    {
                                        parlourserviceList.map((res, i) => {
                                            return (
                                                    <div className="tableRows" key={res.data().location.serviceUid}>
                                                        <div>
                                                            <p className="slnoRow">{res.data().location?.servId??""}</p>
                                                        </div>
                                                        <div style={{display:'flex', flex:2, justifyContent:"space-between"}}>
                                                            <p className="serviceRow">{res.data().location?.name??res.data().location?.clinicName??""}</p>
                                                            <span className="viewButton" onClick={() => toggle(res.data().location.servId, res.data().location.shopNo, res.data().type)}>View Items</span>
                                                        </div>
                                                        <div>
                                                            <p className="priceRow">{res.data().type??""}</p>
                                                        </div>
                                                        <div>
                                                            <p className="priceRow">{res.data().location?.regDate?.toDate()?.toDateString()??""}</p>
                                                        </div>
                                                        <div style={{alignItems: 'center'}}>
                                                            <div className="priceRow">
                                                                {
                                                                    res.data().location.status==="Rejected" ? 
                                                                        <div className="rejectedButton">Rejected</div> : res.data().location.status==="Accepted" ? 
                                                                            <div className="acceptedButton">Accepted</div> : <div className="pendingButton">Pending</div>
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                            )
                                        })
                                    }
                                    {
                                        salonserviceList.map((res, i) => {
                                            return (
                                                    <div className="tableRows" key={res.data().location.serviceUid}>
                                                        <div>
                                                            <p className="slnoRow">{res.data().location?.servId??""}</p>
                                                        </div>
                                                        <div style={{display:'flex', flex:2, justifyContent:"space-between"}}>
                                                            <p className="serviceRow">{res.data().location?.name??res.data().location?.clinicName??""}</p>
                                                            <span className="viewButton" onClick={() => toggle(res.data().location.servId, res.data().location.shopNo, res.data().type)}>View Items</span>
                                                        </div>
                                                        <div>
                                                            <p className="priceRow">{res.data().type??""}</p>
                                                        </div>
                                                        <div>
                                                            <p className="priceRow">{res.data().location?.regDate?.toDate()?.toDateString()??""}</p>
                                                        </div>
                                                        <div style={{alignItems: 'center'}}>
                                                            <div className="priceRow">
                                                                {
                                                                    res.data().location.status==="Rejected" ? 
                                                                        <div className="rejectedButton">Rejected</div> : res.data().location.status==="Accepted" ? 
                                                                            <div className="acceptedButton">Accepted</div> : <div className="pendingButton">Pending</div>
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                            )
                                        })
                                    }
                                </div>
                    </div> : <IndividualServiceAcceptpage uid={uid} shopNo={shopNo} toggle={setToggleAccept} type={type}/>
            }
                
        </>
    )
}

export default Servicepage;
