import React, { useState } from 'react'
import CustomerDetailsCard from '../Components/CustomerDetailsCard'
import PaymentsDetailsCard from '../Components/PaymentsDetailsCard'
import ServiceDetailsComponent from '../Components/ServiceDetailsComponent'
import app from '../firebase'
import './css/Bookingpage.css'
import '../Components/css/searchBar.css'

const Bookingspage = () => {

    const [inputText, setInputText] = useState("");

    var count = 0;

    const [bookingDetails, setBookingDetails] = useState({});

    const searchBooking = async (e) => {
        e.preventDefault();
        try {
            const bookingData =  await app.firestore().collection("ServiceProviders").get();
            bookingData.forEach((doc) => {
                doc.data().event.forEach((res) => {
                    if(inputText===res.otp) {
                        setBookingDetails(res);
                    }
                })
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div style={{flex: 4}}>
                <div style={{color: 'white', backgroundColor: '#0F2735', marginBottom: '2rem'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center',color: 'white'}}>
                        <h1 style={{paddingLeft: '1rem', marginLeft: '3rem'}}>Bookings</h1>
                        {/* search bar */}
                        <form onSubmit={(e) => searchBooking(e)}>
                            <div style={{display: 'flex', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center', marginRight: '4rem'}}>
                                <div className="form-group">
                                    <input type="text" className="form-field" placeholder="Enter booking code" onChange={(event) => setInputText(event.target.value)}/>
                                    <div className="fas fa-arrow-right" onClick={(e) => searchBooking(e)} style={{cursor: 'pointer'}}></div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div style={{height: "2px", backgroundColor:"#5D5FEF", marginLeft: '4rem', marginRight: '4rem'}}></div>
                    <div className="secondHeading">
                        <h2>Booking :<span className="bookingCode">#{bookingDetails.otp}</span></h2> 
                    </div>
                </div>
                <div className="bookingCards">
                    <div className='serviceCards1'>
                        {
                            Object.keys(bookingDetails).length==0 ?
                             null :
                                <ServiceDetailsComponent 
                                    serviceList={bookingDetails.serviceName}
                                    priceList={bookingDetails.price}
                                    amount={bookingDetails.amount}
                                    serviceDetails={bookingDetails}
                                />
                        }
                        
                    </div>
                    <div className="customerAndPayments">
                        <div style={{flex: '1'}}>
                            <CustomerDetailsCard />
                        </div>
                        <div style={{flex: '1'}}>
                            <PaymentsDetailsCard />
                        </div>
                    </div>
                </div>
            </div>
    </>
    )
}

export default Bookingspage;
