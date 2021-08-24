import React, { useState } from 'react'
import app from '../firebase'
import './css/searchBar.css'

const SearchBar = () => {


    const [inputText, setInputText] = useState("");

    var count = 0;

    const [bookingDetails, setBookingDetails] = useState({});

    const searchBooking = async () => {
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
    <div style={{display: 'flex', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center', marginRight: '4rem'}}>
        <div className="form-group">
            <input type="text" className="form-field" placeholder="Enter booking code" onChange={(event) => setInputText(event.target.value)}/>
            <div className="fas fa-arrow-right" onClick={() => searchBooking()}></div>
        </div>
    </div>
    )
}

export default SearchBar
