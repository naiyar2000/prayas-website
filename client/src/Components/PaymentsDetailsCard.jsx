import React from 'react'
import './css/PaymentsDetailsCard.css'

const PaymentsDetailsCard = () => {

    const payments = [
        {},
        {},
        {}
    ];
    return (
        <>
          <div className="paymentCard">
          <div className="heading">Payment Details</div>
            {
                payments.map((res) => {
                    return (
                        <div className="onePayment">
                            <div className="amountReceived">
                                <p>Amount received from customer</p>
                                <h4 style={{margin: '0'}}>₹500</h4>
                            </div>
                            <div style={{height: '15px'}}></div>
                            <div className="paymentMode">
                                <p>Payment mode : <span className="category">UPI</span></p>
                                <p>Status : <span className="Paymentstatus">Success</span></p>
                            </div>
                        </div>
                    )
                })
            }
               </div>
        </>
    )
}

export default PaymentsDetailsCard
