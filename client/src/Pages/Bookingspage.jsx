import React, { useState } from 'react'
import app from '../firebase'
import './css/Bookingpage.css'
import '../Components/css/searchBar.css'
import ServiceCards from '../Components/ServiceCards'
import IndividualBookingpage from './IndividualBookingpage'


const Bookingspage = () => {

    const [allBookings, setAllBookings] = useState([]);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                let tempbooking = [];
                app.firestore().collection("Users").get().then((snapshot) => {
                    snapshot.forEach((res) => {
                        if(res.data().bookings) {
                            res.data().bookings.forEach((dat) => {
                                    tempbooking.push(dat);
                                }
                            )
                        }
                    })
                })
                setAllBookings(tempbooking);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    
    const [isIndividualScreen, setIndividualScreen] = useState(false);

    const setBookingtoIndividual = () => setIndividualScreen(true);
    const setBookingtoAll = () => setIndividualScreen(false);

    return (
        <>
            {
                isIndividualScreen===true ? 
                    (<IndividualBookingpage setAll={setBookingtoAll} setIndividual={setBookingtoIndividual} />) : (
                        <div>
                            <div style={{display: 'flex', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center'}}>
                                <h1 style={{marginLeft: '2rem', fontWeight: '400'}}>Bookings</h1>
                                <div style={{display: 'flex', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center'}}>
                                    <div className="dateContainer">
                                        This week
                                    </div>
                                </div>
                            </div>
                            <div className='serviceCards'>
                                <ServiceCards registered="200" newRequest="123" type="Salon" firstTitle="Total bookings" secondTitle="Completed bookings"/>
                                <ServiceCards registered="150" newRequest="70" type="Parlour" firstTitle="Total bookings" secondTitle="Completed bookings"/>
                                <ServiceCards registered="170" newRequest="120" type="Doctor" firstTitle="Total bookings" secondTitle="Completed bookings"/>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center',color: 'black'}}>
                                <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                                    <h1 style={{marginLeft: '2rem', fontWeight: '400'}}>Service List</h1>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center', marginRight: '4rem'}}>
                                    <div className="form-group" onClick={() => setBookingtoIndividual()}>
                                        <input type="text" className="form-field" placeholder="Enter booking code"/>
                                        <div className="fas fa-arrow-right" style={{cursor: 'pointer'}}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="tableHeadings">
                                <div className='bookingpageCode'>
                                    <p>Booking code</p>
                                </div>
                                <div className='bookingpageDate'>
                                    <p>Date</p>
                                </div>
                                <div className='bookingpageServiceProvider'>
                                    <p>Service provider</p>
                                </div>
                                <div className='bookingpageServiceCategory'>
                                    <p>Service category</p>
                                </div>
                                <div className='bookingpageCompensation'>
                                    <p>Compensation</p>
                                </div>
                                <div className='bookingpageStatus'>
                                    <p>Status</p>
                                </div>
                            </div>
                            <div className="wholeTableRow">
                                {
                                    allBookings.map((res, i) => {
                                        return (
                                                <div className="tableRows" key={res.otp}>
                                                    <div>
                                                        <p className="slnoRow">{res.otp}</p>
                                                    </div>
                                                    <div>
                                                        <p className="serviceRow">{res.date.toDate().toDateString()}</p>
                                                    </div>
                                                    <div>
                                                        <p className="priceRow">{res.shopName}</p>
                                                    </div>
                                                    <div>
                                                        <p className="priceRow">Parlour</p>
                                                    </div>
                                                    <div>
                                                        <p className="priceRow">{res.amount}</p>
                                                    </div>
                                                    <div>
                                                        <p className="priceRow">{
                                                            res.isApproved===true ? 
                                                            "Approved": "Pending"
                                                        }</p>
                                                    </div>
                                                </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                )
            }
        </>
    )
}

export default Bookingspage;


