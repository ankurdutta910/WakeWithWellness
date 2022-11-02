import React, { useState } from 'react';
import './assets/css/forms.css'
import {database} from '../firebase'
import GoToTop from '../GoToTop'

import {ref,push,child,update} from "firebase/database";
function refreshPage() {
     window.location.reload();
   }

function CleanDrive() {

    const [loader, setLoader] = useState(false);
    const [status, setStatus] = useState(undefined);
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone,setPhone] = useState(null);
    const [whatsapp,setWhatsapp] = useState(null);
    const [group,setGroup] = useState(null);
    const [checkbox,setCheck] = useState("Agree");


    const handleInputChange = (e) => {
     const {id , value} = e.target;
     if(id === "name"){
         setName(value);
     }

     if(id === "email"){
         setEmail(value);
     }

     if(id === "phone"){
       setPhone(value);
     }

     if(id === "whatsapp"){
      setWhatsapp(value);
    }

     if(id === "group"){
          setGroup(value);
        }

 
   
     if(id === "checkbox"){
       setCheck(value);
     }

 }

 const handleSubmit = (e) => {
     e.preventDefault();
     setLoader(true);
     let obj = {
       name : name,
       email:email,
       phone:phone,
       whatsapp:whatsapp,
       group: group,
  
       checkbox:checkbox,
   }       
       const newPostKey = push(child(ref(database), 'ExternalEventsRegistrations/2022/Cleanliness_Drive_9_October')).key;
       const updates = {};
       updates['ExternalEventsRegistrations/2022/Cleanliness_Drive_9_October/' + newPostKey] = obj
       return update(ref(database), updates)
       .then(() => {
            setLoader(false);
            setStatus({ type: 'success' });
            setName("");
            setEmail("");
            setPhone("");
            setWhatsapp("");
            setGroup("");
       
            setCheck("")

        
          })
          .catch((error) => {
            setLoader(false);
            setStatus({ type: 'error', error });
          });

       }   


  return (
     <>
   <GoToTop />
<div style={{backgroundColor: 'rgb(238, 238, 238)', marginBottom: '-50px'}}>

<section id="cleandrive" className="d-flex align-items-center justify-content-center" >
  <div className="container" style={{marginBottom: '30px'}}>

    <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
      <div className="col-xl-12 col-lg-8">
        <h1>SWACHH PRAYAAKH</h1>
        <h2>Cleanliness Drive, 2022</h2>
       {/* <h2>Location: <strong>Guwahati, Assam</strong></h2> */}
      </div>
    </div>

  

  </div>
</section>





    <div  className="container-fluid" style={{maxWidth: '190vh', marginTop: '3px'}}>
            <div className="content" style={{backgroundColor: '#fff', marginTop: '15px', borderTop: '3px solid #16151a', padding: '20px',borderRadius: '5px'}}>
            <h5 className="card-title">Event Details :</h5><hr></hr>
          
                    <div className="row">
                    <div className="col">
                    <p style={{textAlign: 'justify'}}>
                      Event Name : <strong>Swachh Prayaakh</strong>
                     <br></br>
                      Event Drive no. : <strong>I</strong>
                      <br></br>
                      Event Date : <strong>9th October 2022</strong>
                      <br></br>
                      Event Time : <strong>9:00 AM IST</strong>
                      <br></br>
                      Event Location : <strong>Uzanbazar Ghat, Guwahati</strong>
                  
                    </p>
                    </div>       
                    </div>
                              <br></br>
                         </div>
                    </div>



<div className="container-fluid" style={{maxWidth: '190vh', marginTop: '18px'}} id="partb">
   
     <div className="content" style={{backgroundColor: '#fff', marginTop: '8px', borderTop: '3px solid #16151a', padding: '20px',borderRadius: '5px'}}>
     <div className="row">
                    <div className="col-md-12">
                        <form form action="" onSubmit={handleSubmit}>
                            <div className="card-box">
                            <h5 className="card-title">Registration Form :</h5><hr></hr><br></br>
                    
                                <div className="row">
                                    <div className="col-md-6">
                                       
                                        <div className="form-group row" >
                                            <label className="col-lg-3 col-form-label">Full Name<span style={{color: 'red'}}>*</span> :</label>
                                            <div className="col-lg-9" style={{marginTop: '-10px'}}>
                                                <input type="text" value={name} onChange = {(e) => handleInputChange(e)} id="name" className="form-control" required/>
                                            </div>
                                        </div>
                                        <div className="form-group row" style={{marginTop: '-22px'}}>
                                            <label className="col-lg-3 col-form-label">Email<span style={{color: 'red'}}>*</span> :</label>
                                            <div className="col-lg-9" style={{marginTop: '-10px'}}>
                                                <input type="email" value={email} onChange = {(e) => handleInputChange(e)} id="email" className="form-control" required/>
                                            </div>
                                        </div>
                                        <div className="form-group row" style={{marginTop: '-22px'}}>
                                            <label className="col-lg-3 col-form-label">Contact no.<span style={{color: 'red'}}>*</span> :</label>
                                            <div className="col-lg-9" style={{marginTop: '-10px'}}>
                                            <input type="text" value={phone} onChange = {(e) => handleInputChange(e)} id="phone" className="form-control" required/>
                                            </div>
                                        </div>
                                        <div className="form-group row" style={{marginTop: '-22px'}}>
                                            <label className="col-lg-3 col-form-label">Whatsapp no.<span style={{color: 'red'}}>*</span> :</label>
                                            <div className="col-lg-9" style={{marginTop: '-10px'}}>
                                            <input type="text" value={whatsapp} onChange = {(e) => handleInputChange(e)} id="whatsapp" className="form-control" required/>
                                            </div>
                                        </div>
                                    </div>






                                    <div className="col-md-6">
                                       
                                       <div className="form-group row" >
                                           <label className="col-lg-3 col-form-label">Organization<span style={{color: 'red'}}>*</span> :</label>
                                           <div className="col-lg-9" style={{marginTop: '-10px'}}>
                                             <select value={group} onChange = {(e) => handleInputChange(e)} id="group" className="select" required>
                                             <option selected disabled value="">--Select--</option>
                                        
                                             <option value="Universe Is Purple">Universe Is Purple</option>
                                             <option value="Serve Smile Foundation">Serve Smile Foundation</option>
                                             <option style={{color: 'orange'}} value="Individual">Individual Participation</option>
                                             </select>
                                             
                                           </div>
                                       </div>
                                    
                                      
                                   </div>

                               <div className="container-fluid">
                                   <div class="col">
                               <input class="form-check-input" type="checkbox" value={checkbox} onChange = {(e) => handleInputChange(e)} id="checkbox" required/>
                               <label class="form-check-label" style={{textAlign: 'justify'}}>I certify that the information I have provided is true and complete to the best of my knowledge.</label>
                              <div class="invalid-feedback">Please confirm that the information I have provided is true and complete!</div>
                             </div></div>
                                                                   
                                </div>
                                <br></br> 
                               
                           
                               
                                                             
<hr></hr>
                      
                        <div className="container" style={{textAlign: 'center', fontWeight: '500'}}>
                        {status?.type === 'success' && (
                              <div class="alert alert-success alert-dismissible fade show" role="alert">
                              <strong>Success!</strong> You are registered successfully.
                              <button type="button" class="close" onClick={refreshPage}>
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                              )}
                              {status?.type === 'error' && (
                                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                    <strong>Failed!</strong> Please try again.
                                    <button type="button" class="close" onClick={refreshPage}>
                                      <span aria-hidden="true">&times;</span>
                                    </button>
                                  </div>
                                  )}
                        </div>
        
                            <div className="text-right">
                            <button style={{ background: loader ? "#b3b3b3" : "#16151a", fontWeight:'500', color:'white', minWidth: '20vh' }} onClick={()=>handleSubmit()} id="submit" type="submit" class="btn btn-dark">Submit</button>

                            </div>
                          </div>
                        </form>

                      
                        
                    </div>
                    
                </div>

     </div>




    
     <p style={{background: 'none',fontSize: '14px', padding: '5px', color: 'red', fontWeight: 'bold', cursor: 'pointer'}} data-toggle="collapse" data-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3">
     24/7 Support
     </p>

            <div class="collapse" style={{backgroundColor: '#fff', marginTop: '8px', borderTop: '3px solid #16151a', padding: '20px',borderRadius: '5px'}} id="collapseExample3">
           
     <div className="content">
            <br></br>   
    
           <h4 style={{fontWeight: '700'}}>Help Desk</h4>
            <br></br>

            <div className="row">
              <div className="col-lg" style={{marginTop: '5px',borderRadius: '5px',border: '1px solid #16151a', marginLeft: '20px', marginRight: '20px', padding: '15px', textAlign: 'center',height: '55px',fontWeight: '650', fontSize: '14px'}}><a  style={{color:'black'}}  href="https://wa.me/+916385334226"><i style={{fontWeight: '600'}} class="fa fa-whatsapp"></i> +91 6385334226</a></div>
              <div className="col-lg" style={{marginTop: '5px',borderRadius: '5px',border: '1px solid #16151a', marginLeft: '20px', marginRight: '20px', padding: '15px', textAlign: 'center',height: '55px',fontWeight: '700', fontSize: '14px'}}><a style={{color:'black'}} href="tel: 7086952212"><i style={{fontWeight: '600'}} class="fa fa-phone"></i> +91 7086952212</a></div>
              <div className="col-lg" style={{marginTop: '5px',borderRadius: '5px',border: '1px solid #16151a', marginLeft: '20px', marginRight: '20px', padding: '15px', textAlign: 'center',height: '55px',fontWeight: '700', fontSize: '14px'}}><a style={{color:'black'}} href="mailto:wakewithwellness@gmail.com"><i style={{fontWeight: '600'}} class="fa fa-envelope"></i> wakewithwellness@gmail.com</a></div>
             
            </div>
        

      </div>

      </div>





</div>

<br></br>
</div>
    </>
  )
}

export default CleanDrive
