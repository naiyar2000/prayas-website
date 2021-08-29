import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import app from '../firebase';
import './css/IndividualServiceAcceptpage.css'

const IndividualServiceAcceptpage = () => {
    let location = useLocation();

    let uid = location.state.split('&')[0];
    let shopNo = location.state.split('&')[1];

    const [thisService, setThisService] = useState({});

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await app.firestore().collection("ParlourServices").where("location.serviceUid", "==", uid).where("location.shopNo", "==", shopNo).get();
                setThisService(response.docs[0]);
            } catch (error) {
                console.log(error);
            }
        }   
        fetchData();
    }, []);

    const setAccept = async () => {
        await app.firestore().collection("ParlourServices").where("location.serviceUid", "==", uid).where("location.shopNo", "==", shopNo).get().then((snap) => {
            snap.docs[0].ref.update({
                "location.status" : "Accepted"
            });
        });
    }

    const setReject = async () => {
        await app.firestore().collection("ParlourServices").where("location.serviceUid", "==", uid).where("location.shopNo", "==", shopNo).get().then((snap) => {
            snap.docs[0].ref.update({
                "location.status" : "Rejected"
            });
        });
    }

    return (
        <>
          <div style={{flex: 4}}>
                    <div style={{color: 'white', backgroundColor: '#0F2735', marginBottom: '2rem'}}>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center',color: 'white'}}>
                            <div>
                                <div style={{display: 'flex', marginLeft: '2.2rem', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                                    <NavLink to="/" className="fas fa-arrow-left" style={{cursor: 'pointer'}}></NavLink>
                                    <h1 style={{paddingLeft: '1rem'}}>Form no : #{thisService.serviceUid}</h1>
                                </div>
                                <div>
                                    <p>Service Category : {location.state}</p>
                                    <p>Submission Date : </p>
                                </div>
                            </div>
                            <div className="acceptReject">
                                <button onClick={() => setAccept()} className="accept">Accept</button>
                                <button onClick={() => setReject()} className="reject">Reject</button>
                            </div>
                        </div>
                    </div>
                </div>  
        </>
    )
}

export default IndividualServiceAcceptpage
