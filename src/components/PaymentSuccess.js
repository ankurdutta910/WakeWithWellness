import React from "react";
import './assets/css/forms.css'
import GoToTop from '../GoToTop'


function PaymentSuccess() {




  
  return (
    < >
      <GoToTop />

<div class="container" style={{textAlign: 'center', marginTop:'20vh', marginBottom:'20vh', border: '2px solid rgb(238, 238, 238)', maxWidth: '60vh', padding:'30px'}}>
      <img style={{width:'100px'}} alt="Payment Success" src="https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/success-green-check-mark-icon.png"/>
        <h1 style={{color: '#239432', fontWeight: 'bold'}}>Success</h1> 
        <p>Thank you, we have recieved your payment</p>

      
      </div>
     
    </>
  )
}

export default PaymentSuccess
