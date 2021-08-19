import React from 'react'
import NavigationSidebar from '../Components/NavigationSidebar';
// import app from '../firebase'
import ServiceCards from '../Components/ServiceCards'

const Paymentspage = () => {
    // const [serviceList, setServiceList] = useState([]);

    // React.useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const parlourList = await app.firestore().collection("ParlourServices").get();
    //             const salonList = await app.firestore().collection("ParlourServices").get();
    //             const doctorList = await app.firestore().collection("ParlourServices").get();
    //             setServiceList(parlourList.docs);
    //             console.log(parlourList.docs);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     fetchData();
    // }, []);

    return (
        <>
            <div style={{display: 'flex'}}>
                <div style={{flex: 1}}>
                    <NavigationSidebar selected="service"/>
                </div>
                <div style={{flex: 3}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center'}}>
                        <h1 style={{paddingLeft: '10px'}}>All Services</h1>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center'}}>
                            <p>
                                From : 02/05/2000
                            </p>
                            <p>
                                To : 02/05/2000
                            </p>
                            <p>
                                This Week
                            </p>
                        </div>
                    </div>
                    <div className='serviceCards'>
                       <ServiceCards registered="08" newRequest="03" type="Salon" firstTite="From Customer to Service Provider" secondTitle="From Service provider to Admin"/>
                       <ServiceCards registered="07" newRequest="02" type="Parlour" firstTite="From Customer to Service Provider" secondTitle="From Service provider to Admin"/>
                       <ServiceCards registered="06" newRequest="02" type="Doctor" firstTite="From Customer to Service Provider" secondTitle="From Service provider to Admin"/>
                    </div>
                    {/* <div className="serviceLists">
                        {
                            serviceList.map((res) => {
                                return (
                                    <ul>{res.data().location.name}</ul>
                                )
                            })
                        }
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Paymentspage;
