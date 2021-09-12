import React, { useState } from 'react'
import GeneralDetails from '../Components/GeneralDetails';
import app from '../firebase';
import './css/IndividualServiceAcceptpage.css'

const IndividualServiceAcceptpage = ({uid, shopNo, toggle, type}) => {

    const [thisService, setThisService] = useState(null);

    const [categories, setCategories] = useState(1);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                console.log(shopNo)
                let response;
                if(type=="clinic") {
                    response = await app.firestore().collection("MedicalServices").where("location.servId", "==", uid).where("location.shopNo", "==", shopNo).get();
                } else if(type=="parlour") {
                    response = await app.firestore().collection("ParlourServices").where("location.servId", "==", uid).where("location.shopNo", "==", shopNo).get();
                } else if(type=="salon") {
                    response = await app.firestore().collection("SalonServices").where("location.servId", "==", uid).where("location.shopNo", "==", shopNo).get();
                }
                console.log(response.docs[0].data());
                setThisService(response.docs[0]);
            } catch (error) {
                console.log(error);
            }
        }   
        fetchData();
    }, []);

    const setAccept = async () => {
        let collection = type==="clinic" ? "MedicalServices" : (type==="parlour" ? "ParlourServices": "SalonServices");
        await app.firestore().collection(`${collection}`).where("location.servId", "==", uid).where("location.shopNo", "==", shopNo).get().then((snap) => {
            snap.docs[0].ref.update({
                "location.status" : "Accepted"
            });
        });
    }
    
    const setReject = async () => {
        let collection = type==="clinic" ? "MedicalServices" : (type==="parlour" ? "ParlourServices": "SalonServices");
        await app.firestore().collection(`${collection}`).where("location.servId", "==", uid).where("location.shopNo", "==", shopNo).get().then((snap) => {
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
                                <h1 style={{paddingLeft: '1rem'}}>Form no : #{thisService?.serviceUid}</h1>
                            </div>
                            <div className="acceptPageSecondarHeading">
                                <p>Service Category : {uid}</p>
                                <p>Submission Date : </p>
                            </div>
                        </div>
                        <div className="acceptReject">
                            <div className="fa fa-window-close" onClick={() => toggle()}></div>
                            <button onClick={() => setAccept()} className="accept">Accept</button>
                            <button onClick={() => setReject()} className="reject">Reject</button>
                        </div>
                    </div>
                </div>
                <div className="detailsTabs">
                    <div className="detailsTabs-1" onClick={() => setCategories(1)} style={{background: categories===1 ? '#5D5FEF': '#fff'}}>General Details</div>
                    <div className="detailsTabs-2" onClick={() => setCategories(2)} style={{background: categories===2 ? '#5D5FEF': '#fff'}}>Doctor Details</div>
                    <div className="detailsTabs-3" onClick={() => setCategories(3)} style={{background: categories===3 ? '#5D5FEF': '#fff'}}>Service List</div>
                    <div className="detailsTabs-4" onClick={() => setCategories(4)} style={{background: categories===4 ? '#5D5FEF': '#fff'}}>Comments</div>
                </div>
                {
                    categories===1 && (thisService!=null ? 
                        <GeneralDetails thisService={thisService?.data()}/> : 
                        <div>Loading</div>)
                }
                {
                    categories===2 && (
                        // thisService!=null ? 
                        // <GeneralDetails thisService={thisService?.data()}/> : 
                        <div>2nd tab</div>)
                }
                {
                    categories===3 && (
                        // thisService!=null ? 
                        // <GeneralDetails thisService={thisService?.data()}/> : 
                        <div>3rd tab</div>)
                }
                {
                    categories===4 && (
                        // thisService!=null ? 
                        // <GeneralDetails thisService={thisService?.data()}/> : 
                        <div>last tab</div>)
                }
            </div>  
        </>
    )
}

export default IndividualServiceAcceptpage
