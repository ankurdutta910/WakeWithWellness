
import React, { useState } from 'react';
import './assets/css/forms.css'
import {database} from '../firebase'
import GoToTop from '../GoToTop'

import {ref,push,child,update} from "firebase/database";
function refreshPage() {
     window.location.reload();
   }

const Recruitment = () => {
    
    const [loader, setLoader] = useState(false);
    const [status, setStatus] = useState(undefined);

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone,setPhone] = useState(null);
    const [whatsapp,setWhatsapp] = useState(null);
    const [department,setDepartment] = useState(null);
    const [college,setCollege] = useState(null);
    const [check,setCheck] = useState("Agree");

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


        if(id === "department"){
          setDepartment(value);
        }

        if(id === "college"){
          setCollege(value);
        }

        if(id === "check"){
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
          department:department,
          college:college,
          check:check,
      }       
          const newPostKey = push(child(ref(database), 'Recruitment')).key;
          const updates = {};
          updates['Recruitment/' + newPostKey] = obj
          return update(ref(database), updates)
          .then(() => {
               setLoader(false);
               setStatus({ type: 'success' });
               setName("");
               setEmail("");
               setPhone("");
               setWhatsapp("");
               setCollege("");
               setDepartment("");
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

  <section id="recrut" className="d-flex align-items-center justify-content-center" >
    <div className="container" style={{marginBottom: '30px'}}>

      <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
        <div className="col-xl-6 col-lg-8">
          <h1>Recruitment'22</h1>
          <h2>We are recruiting!</h2>
        </div>
      </div>

    

    </div>
  </section>

<div class="container" id="formrecruit" style={{marginTop: '10vh'}}>
        <div class="row">
            <div class="container">
                <div class="form-content">
                    <div class="form-items">
                        <h3>Register Today</h3>
                        <p>Fill in the data below.</p><hr></hr>
                        <form class="requires-validation" form action="" onSubmit={handleSubmit}>

                            <div class="col-md-12">
                            <label style={{fontSize: '12px'}} for="name">Name<span style={{color: 'red'}}>*</span></label>   
                               <input style={{marginTop: '-5px'}} value={name} onChange = {(e) => handleInputChange(e)} id="name" class="form-control" type="text" name="name" placeholder="Full Name" required/>
                               <div class="valid-feedback">Username field is valid!</div>
                               <div class="invalid-feedback">Username field cannot be blank!</div>
                            </div>

                            <div class="col-md-12">
                            <label style={{fontSize: '12px'}} for="email">Email<span style={{color: 'red'}}>*</span></label>   
                                <input style={{marginTop: '-5px'}} class="form-control" value={email} onChange = {(e) => handleInputChange(e)} id="email" type="email" name="email" placeholder="E-mail Address" required/>
                                 <div class="valid-feedback">Email field is valid!</div>
                                 <div class="invalid-feedback">Email field cannot be blank!</div>
                            </div>

                            <div class="col-md-12">
                            <label style={{fontSize: '12px'}} for="phone">Contact no.<span style={{color: 'red'}}>*</span></label>    
                                <input style={{marginTop: '-5px'}} class="form-control" value={phone} onChange = {(e) => handleInputChange(e)} id="phone" type="text" name="phone" placeholder="Contact no." required/>
                                 <div class="valid-feedback">Contact no. field is valid!</div>
                                 <div class="invalid-feedback">Contact no. field cannot be blank!</div>
                            </div>


                            <div class="col-md-12">
                            <label style={{fontSize: '12px'}} for="whatsapp">Whatsapp no.<span style={{color: 'red'}}>*</span></label>    
                                <input style={{marginTop: '-5px'}} class="form-control" value={whatsapp} onChange = {(e) => handleInputChange(e)} id="whatsapp" type="text" name="whatsapp" placeholder="Whatsapp no." required/>
                                 <div class="valid-feedback">Whatsapp no. field is valid!</div>
                                 <div class="invalid-feedback">Whatsapp no. field cannot be blank!</div>
                            </div>


                           <div class="col-md-12">
                           <label style={{fontSize: '12px'}} for="dept">Department Preferences<span style={{color: 'red'}}>*</span></label>      
                                <select style={{marginTop: '-5px'}} value={department} onChange = {(e) => handleInputChange(e)} class="form-select" id="department" required>
                                      <option selected disabled value="">--Select Department--</option>
                                       <option value="Curation">Curation Department</option>
                                       <option value="Editorial">Editorial Department</option>
                                      <option value="Marketing">Social Media Marketing Department</option>
                                      <option value="PR">Public Relations Department</option>
                                      <option value="Events">Events Department</option>
                                      <option value="Design & Media">Design & Media Department</option>
                               </select>
                                <div class="valid-feedback">You selected a department!</div>
                                <div class="invalid-feedback">Please select a department!</div>
                           </div>

                           <div class="col-md-12">
                            
                              <label style={{fontSize: '12px'}} for="name">Name of institution you are currently enrolled in / workplace<span style={{color: 'red'}}>*</span></label>      
                              <input style={{marginTop: '-5px'}} class="form-control" value={college} onChange = {(e) => handleInputChange(e)} id="college" type="text" name="college" placeholder="College" required/>
                                 <div class="valid-feedback">College field is valid!</div>
                                 <div class="invalid-feedback">College field cannot be blank!</div>
                            </div>


                       




                        <div class="form-check my-5">
                          <input class="form-check-input" type="checkbox" value={check} onChange = {(e) => handleInputChange(e)} id="check" required/>
                          <label class="form-check-label" style={{textAlign: 'justify'}}>I certify that the information I have provided is true and complete to the best of my knowledge. I am aware that this self declaration statement is subject to review and verification and if such information has been falsified,I may be terminated from further proceedings.</label>
                         <div class="invalid-feedback">Please confirm that the information I have provided is true and complete!</div>
                        </div>
                  
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
                      
                            <div class="form-button mt-3">
                                {/* <button style={{ background: loader ? "#e6e6e6" : "#ffc107", fontWeight:'500', color:'white', width: '100%' }} onClick={()=>handleSubmit()} id="submit" type="submit" class="btn btn-warning">Register</button> */}
                               <h5 style={{fontWeight:'500', color:'red', textAlign: 'center'}}>Registration closed</h5>
                            </div>
                        </form>
           


                    </div>
                </div>
            </div>
        </div>
    </div>

     
      </>
  );
};
export default Recruitment;