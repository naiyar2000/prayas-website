import React, { useState } from 'react'
import ServiceCards from '../Components/ServiceCards'
import './css/Servicepage.css'
import app from '../firebase'

const Servicepage = () => {

    const [serviceList, setServiceList] = useState([]);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const parlourList = await app.firestore().collection("ParlourServices").get();
                // const salonList = await app.firestore().collection("ParlourServices").get();
                // const doctorList = await app.firestore().collection("ParlourServices").get();
                setServiceList(parlourList.docs);
                console.log(parlourList.docs);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    return (
        <>
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
                    <div className= "serviceSection">
                        <div className='serviceCode'>
                            <p>Service Code</p>
                        </div>
                        <div className='serviceName'>
                            <p>Name of the service provider</p>
                        </div>
                        <div className='serviceCategory'>
                            <p>Service Category</p>
                        </div>
                        <div className='date'>
                            <p>Date</p>
                        </div>
                        <div className='status'>
                            <p>Status</p>
                        </div>
                    </div>
                    <div className="serviceSection">
                        <div className="serviceCode" style={{backgroundColor: "white", color: "black"}}>
                            {
                                serviceList.map((res) => {
                                    return (
                                        <ul>{res.data().location.serviceUid}</ul>
                                    )
                                })
                            }
                        </div>
                        <div className="serviceName" style={{backgroundColor: "white", color: "black"}}>
                            {
                                serviceList.map((res) => {
                                    return (
                                        <ul>{res.data().location.name}</ul>
                                    )
                                })
                            }
                        </div>
                        <div className="serviceCategory" style={{backgroundColor: "white", color: "black"}}>
                            {
                                serviceList.map((res) => {
                                    return (
                                        <ul>Parlour</ul>
                                    )
                                })
                            }
                        </div>
                        <div className="date" style={{backgroundColor: "white", color: "black"}}>
                            {
                                serviceList.map((res) => {
                                    return (
                                        <ul>Date</ul>
                                    )
                                })
                            }
                        </div>
                        <div className="status" style={{backgroundColor: "white", color: "black"}}>
                            {
                                serviceList.map((res) => {
                                    return (
                                        <ul><div className="rejectedButton">Rejected</div></ul>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Servicepage;
