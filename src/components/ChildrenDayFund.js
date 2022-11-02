import React, { useState } from "react";
import './assets/css/forms.css'
import GoToTop from '../GoToTop'
import { db } from "../firebase";
import imgs from "../components/assets/image/childrenday.png";

import {useNavigate} from 'react-router-dom';



function ChildrenDayFund() {

     const [name, setName] = useState("");
    
        const [email, setEmail] = useState("");
        const [phone, setPhone] = useState("");
        const [subject, setSubject] = useState("");
        const [amount, setAmount] = useState("");
        const [statuss, setStatuss] = useState("Pending");
        const [date, setDate] = useState("");
        const [purpose, setPurpose] = useState("Hepah - From Welfare to Well-being");
        const [loader, setLoader] = useState(false);
        const [status, setStatus] = useState(undefined);
   
        const navigate = useNavigate();
        function refreshPage() {
             window.location.reload();
           }
   
        const handleSubmit = (e) => {
             e.preventDefault();
             setLoader(true);
         
             db.collection("Funds")
               .add({
                 name: name,
                 email: email,
                 phone: phone,
                 date:date,
                 subject: subject,
                 purpose:purpose,
                 amount: amount,
                 statuss:statuss,
               })
               .then(() => {
                 setLoader(false);
                 setStatus({ type: 'success' });
                 var options = {
                    key: "rzp_live_HtAyNsIrtPOAM7",
                    key_secret:"mZwUmUGtPJEVqpqrE36uVFYa",
                    amount: amount *100,
                    currency:"INR",
                    name:"Wake With Wellness",
                    description:"Hepah - Fundraise",
                    close: false,
                   
                    handler: function(response){
                  
                      alert("Hurray ! Your transaction id: " + response.razorpay_payment_id);
                  
                      navigate('/success');
                    },
                    prefill: {
                      name: name,
                      email:email,
                      contact: phone,
                    },
                    notes:{
                      address:"Beltola, Guwahati, Assam"
                    },
                    
                    theme: {
                      color:"#16151a"
                    },
                    modal: {
                      "ondismiss": function(){
                          alert("All your data entered in the form will be lost.")
                          window.location.replace("/fundraiser");
                           
                       }
                  }
                 
                  };   
                    var pay = new window.Razorpay(options);
                    pay.open();
             
               })
               .catch((error) => {
                 setLoader(false);
                 setStatus({ type: 'error', error });
               });
         
               setName("");
               setEmail("");
               setPhone("");
               setSubject("");
               setDate("");
               setPurpose("");
               setAmount("");
               setStatuss("");
   
             
           };




  return (
    <>
      <GoToTop />

<div className="container-fluid" id="partb" style={{marginTop: '11vh', maxWidth:'200vh'}}>
   
     <div className="content">
     <div className="row">



       <div className="col-lg-6" style={{marginTop: '5vh'}}>
       <div>
        <h3><img src={imgs} alt="" style={{width: '100%', height: 'auto'}}/></h3>
      </div>
      
       <img style={{width:'100%'}} src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt=""/>
             
     
      </div>




      <div className="col-lg-6" style={{marginTop: '4vh'}}>

      <div className="row">
                  <div className="col my-2">
                  <h6 style={{backgroundColor:'#cce3f2', padding:'10px', fontWeight:'bold',color:'#0072bc'}}>Your donations will change lives.</h6>
                  <p><span style={{fontStyle: 'italic'}}>"One of the most powerful forces on earth is the prayer of a child".  </span>
                  This children's day let us bring joy to the orphans with WakeWithWellness and fill our pleasure pockets with lots of fun activities with them.</p>
                  <p>A small amount can change the life of a child; through education, nutrition, and basic protection, children can lead normal lives.</p>
                  </div>
                </div>


                    <div style={{marginTop: '1vh', backgroundColor: '#f5f4f2', padding: '15px'}}>
                        <form form action="" onSubmit={handleSubmit}>
                            <div className="card-box">
                          <h4 style={{color:'#0072bc'}}>Support Us</h4><hr></hr><br></br>
                                        <div className="form-group row">
                                            <label className="col-lg-3 col-form-label">Full Name<span style={{color: 'red'}}>*</span> :</label>
                                            <div className="col-lg-9">
                                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" placeholder="Your name.." required/>
                                            </div>
                                        </div>

                                        <div className="form-group row" style={{marginTop:'-10px'}}>
                                            <label className="col-lg-3 col-form-label">Email<span style={{color: 'red'}}>*</span> :</label>
                                            <div className="col-lg-9">
                                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Your email.." required/>
                                            </div>
                                        </div>

                                        <div className="form-group row" style={{marginTop:'-10px'}}>
                                            <label className="col-lg-3 col-form-label">Contact no.<span style={{color: 'red'}}>*</span> :</label>
                                            <div className="col-lg-9">
                                            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} name="contact" placeholder="Your contact no..." required/>
                                            </div>
                                        </div>
                                    
                                   
                                      


                                        <div className="form-group row" style={{marginTop:'-10px'}}>
                                            <label className="col-lg-3 col-form-label">Message (if any):</label>
                                            <div className="col-lg-9">
                                            <textarea value={subject} onChange={(e) => setSubject(e.target.value)} rows="4" name="subject" placeholder="Your message (if any)..." ></textarea>
                                            </div>
                                        </div>

                                        <div className="form-group row" style={{marginTop:'-10px', display: 'none'}}>
                                            <label className="col-lg-3 col-form-label">Date<span style={{color: 'red'}}>*</span> :</label>
                                            <div className="col-lg-9">
                                            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} name="date" placeholder="Your date.." />
                                            </div>
                                        </div>

                                        <div className="form-group row" style={{marginTop:'-10px', display: 'none'}}>
                                            <label className="col-lg-3 col-form-label">Purpose<span style={{color: 'red'}}>*</span> :</label>
                                            <div className="col-lg-9">
                                            <input type="text" value={purpose} onChange={(e) => setPurpose(e.target.value)} name="purpose" placeholder="Your purpose.." />
                                            </div>
                                        </div>

                                        <div className="form-group row" style={{marginTop:'-10px'}}>
                                            <label className="col-lg-3 col-form-label">Amount<span style={{color: 'red'}}>*</span> :</label>
                                            <div className="col-lg-9">
                                            <input style={{border: '1px solid #b8b8b8',borderRadius: '5px', width: '100%', padding: '10px', height: '6.7vh'}} type="number" value={amount} onChange={(e) => setAmount(e.target.value)} name="amount" placeholder="Enter amount" required/>
                                            </div>
                                        </div>

                                        <div className="form-group row" style={{marginTop:'-10px', display: 'none'}}>
                                            <label className="col-lg-3 col-form-label">Status<span style={{color: 'red'}}>*</span> :</label>
                                            <div className="col-lg-9">
                                            <input style={{border: '1px solid #b8b8b8',borderRadius: '5px', width: '100%', padding: '10px', height: '6.7vh'}} type="text" value={statuss} onChange={(e) => setStatuss(e.target.value)} name="statuss" placeholder="Enter statuss"/>
                                            </div>
                                        </div>


                                          <br></br>
                                          <div className="container" style={{textAlign: 'center', fontWeight: '500'}}>
                                          {status?.type === 'success' && (
                                          <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                        <span style={{color: 'red'}}>Please wait...</span>.
                                          
                                        </div>
                                          )}
                                          {status?.type === 'error' && (
                                                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                                <strong>Failed!</strong> Please try again.
                                                <button type="button" className="close" onClick={refreshPage}>
                                                  <span aria-hidden="true">&times;</span>
                                                </button>
                                              </div>
                                              )}
                                          </div>

                                   
                                    <button style={{ background: loader ? "#77c7fc" : "#1399f2",height: '50px',width: '100%', fontWeight:'500', color:'white' }} type="submit" className="btn btn-primary">Donate</button>
                                



                                </div>
                            </form>

                            </div>   
                    </div>





                </div>

                <div className="row">



<div className="col-lg-6" id="fundrow2">

<h6>Our Donor Promise</h6>
<p>If you have any questions about your donation or our work, then please contact us at  <span><a href="mailto='wakewithwellness@gmail.com'">wakewithwellness@gmail.com</a></span>, we promise to reply as soon as we can.  </p>

</div>


</div>


     </div>
</div>
    </>
  )
}

export default ChildrenDayFund
