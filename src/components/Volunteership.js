import React, { useState } from 'react';
import './assets/css/forms.css'
import {database} from '../firebase'
import GoToTop from '../GoToTop'

import {ref,push,child,update} from "firebase/database";
function refreshPage() {
     window.location.reload();
   }

function Volunteership() {

     const [loader, setLoader] = useState(false);
    const [status, setStatus] = useState(undefined);
    
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone,setPhone] = useState(null);
    const [whatsapp,setWhatsapp] = useState(null);
  
    const [qualification,setQual] = useState(null);
    const [work,setWork] = useState(null);
    const [home,setHome] = useState(null);
    const [state,setState] = useState(null);
    const [exp,setExp] = useState(null);
    const [checkbox,setCheck] = useState("Agree");
    const [checkbox2,setCheck2] = useState("Confirmed");


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

 

     if(id === "qualification"){
          setQual(value);
        }



     if(id === "work"){
          setWork(value);
     }

     if(id === "home"){
      setHome(value);
    }

     if(id === "state"){
          setState(value);
     }


     if(id === "exp"){
          setExp(value);
     }

     if(id === "checkbox"){
       setCheck(value);
     }

     if(id === "checkbox2"){
      setCheck2(value);
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
     
       qualification: qualification,
       work:work,
       home:home,
       state:state,
       exp:exp,
       checkbox:checkbox,
       checkbox2:checkbox2,
   }       
       const newPostKey = push(child(ref(database), 'VolunteershipP')).key;
       const updates = {};
       updates['VolunteershipP/' + newPostKey] = obj
       return update(ref(database), updates)
       .then(() => {
            setLoader(false);
            setStatus({ type: 'success' });
            setName("");
            setEmail("");
            setPhone("");
            setWhatsapp("");
          
            setQual("");
            setWork("");
            setHome("");
            setState("");
            setExp("");
            setCheck("")
            setCheck2("")

        
          })
          .catch((error) => {
            setLoader(false);
            setStatus({ type: 'error', error });
          });

  
        
      

 
     
       }   


  return (
     <>
     <GoToTop />
     
       <section id="recrut" className="d-flex align-items-center justify-content-center" style={{marginTop: '10vh'}}>
         <div className="container" style={{marginBottom: '30px'}}>
     
           <div className="row justify-content-center">
             <div className="col-xl-6 col-lg-8">
               <h1>Coordinators <span>Needed</span></h1>
               <h2>To help with community projects</h2>
             </div>
           </div>
     
         
     
         </div>
       </section>
     
     <div class="container" id="formrecruit" style={{marginTop: '5vh'}}>
             <div class="row">
                 <div class="container">
                     <div class="form-content">
                         <div class="form-items">
                          <div style={{backgroundColor: '#e0f3ff', padding: '15px', marginBottom: '20px', borderRadius: '8px'}}>
                             <h5>We're looking for enthusiastic and friendly participation who desire to serve people and generations.</h5><hr/>
                             <p><span style={{fontWeight: '500'}}>WE NEED HELP WITH: </span>
                              <ul style={{marginLeft: '10px'}}>
                            
                              <li>Rounding up donations </li>
                              <li>Packing relief goods</li>
                              <li>Hosting offline campaigns </li>
                              <li>Initiating wellness drives </li>
                              <li>Distributing relief goods and much more </li>
                             </ul></p>
                             <h5 style={{textAlign: 'center',backgroundColor:'#0b8ade', padding:'8px', fontWeight:'bold',color:'white'}}>Help serve the need in our community !</h5>
                             </div>
                             <p>Fill the form below to register your participation</p><hr></hr>
                             <form class="requires-validation"  onSubmit={handleSubmit}>
     
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
                                 <label style={{fontSize: '12px'}} for="qualifications">Educational Qualification<span style={{color: 'red'}}>*</span></label>    
                                     <input style={{marginTop: '-5px'}} class="form-control" value={qualification} onChange = {(e) => handleInputChange(e)} id="qualification" type="text" name="qualification" placeholder="Qualification" required/>
                                      <div class="valid-feedback">Qualifications field is valid!</div>
                                      <div class="invalid-feedback">Qualifications field cannot be blank!</div>
                                 </div>

     
     
                                <div class="col-md-12">
                                 
                                   <label style={{fontSize: '12px'}} for="work">Name of institution you are currently enrolled / workplace<span style={{color: 'red'}}>*</span></label>      
                                   <input style={{marginTop: '-5px'}} class="form-control" value={work} onChange = {(e) => handleInputChange(e)} id="work" type="text" name="work" placeholder="College/Workplace" required/>
                                      <div class="valid-feedback">Workplace field is valid!</div>
                                      <div class="invalid-feedback">Workplace field cannot be blank!</div>
                                 </div>


                                 <div class="col-md-12">
                                 <label style={{fontSize: '12px'}} for="whatsapp">Hometown<span style={{color: 'red'}}>*</span></label>    
                                 <select style={{marginTop: '-5px'}} value={home} onChange = {(e) => handleInputChange(e)} class="form-select" id="home" required>
                                      <option selected disabled value="">--Select--</option>
                                      <option value="Guwahati">Guwahati</option>      
                               </select>
                               <div class="valid-feedback">Hometown field is valid!</div>
                              <div class="invalid-feedback">Hometown field cannot be blank!</div>
                                    
                                 </div>




                                 <div class="col-md-12">
                                <label style={{fontSize: '12px'}} for="state">State<span style={{color: 'red'}}>*</span></label>      
                          
                                <select style={{marginTop: '-5px'}} value={state} onChange = {(e) => handleInputChange(e)} class="form-select" id="state" required>
                                      <option selected disabled value="">--Select--</option>
                                      <option value="Assam">Assam</option>      
                               </select>
                                      
                                      <div class="valid-feedback">State field is valid!</div>
                                      <div class="invalid-feedback">State field cannot be blank!</div>
                                 
                                </div>


                                 <div class="col-md-12">
                                 
                                 <label style={{fontSize: '12px'}} for="exp">Prior Experience in working for NGO/CBO<span style={{color: 'red'}}>*</span></label>        
                                 <select style={{marginTop: '-5px'}} value={exp} onChange = {(e) => handleInputChange(e)} class="form-select" id="exp" required>
                                      <option selected disabled value="">--Select--</option>
                                      <option value="Yes">Yes</option>
                                      <option value="No">No</option>
                                     
                               </select>

                                    <div class="valid-feedback">Experience field is valid!</div>
                                  
                               </div>
     
     
                            
     
     
     
     
                             <div class="form-check my-5">
                               <input class="form-check-input" type="checkbox" value={checkbox} onChange = {(e) => handleInputChange(e)} id="checkbox" required/>
                               <label class="form-check-label" style={{textAlign: 'justify'}}>I certify that the information I have provided is true and complete to the best of my knowledge. I am aware that this self declaration statement is subject to review and verification and if such information has been falsified,I may be terminated from further proceedings.</label>
                    
                             </div>


                             <div class="form-check" style={{marginTop:'-40px'}}>
                               <input class="form-check-input" type="checkbox" value={checkbox2} onChange = {(e) => handleInputChange(e)} id="checkbox2" required/>
                               <label class="form-check-label" style={{textAlign: 'justify'}}>    
                               <p style={{cursor: 'pointer', color:'#1fbcff'}} data-toggle="modal" data-target="#exampleModalCenter1">Privacy Policy</p></label>
                             
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
                                     <button style={{ background: loader ? "#e0e0e0" : "linear-gradient(95.24deg, #038CB7 0%, #04C3FF 137.16%)", fontWeight:'500', color:'white', width: '100%', height:'45px' }} onClick={()=>handleSubmit()} id="submit" type="submit" class="btn">Join Now</button>
                                 </div>
                             </form>
                
     
     
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     




     {/* <!-- Modal privacy policy --> */}
<div class="modal fade" id="exampleModalCenter1" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
       
       
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>




      <div className="container"  style={{textAlign: 'center', marginTop: '8px'}}>
      <h2 class="modal-title" id="exampleModalLabel" style={{fontWeight:'bold',color:'#0072bc'}}>Privacy Policy</h2><hr></hr>
      </div>
       <div class="modal-body" style={{marginTop: '-18px'}}>
                      
       <div className="container-fluid" style={{maxWidth: '170vh', marginTop:'3vh'}}>
    <div>

<h4 style={{backgroundColor:'#cce3f2', padding:'8px', fontWeight:'bold',color:'#0072bc',maxWidth:'80vh'}}>Your privacy is important to us</h4>


<p>It is WakeWithWellness's policy to respect your privacy regarding any information we may collect while operating our website. This Privacy Policy applies to <a href="https://www.wakewithwellness.in/"> www.wakewithwellness.in/</a> (hereinafter, "us", "we", or "www.wakewithwellness.in/"). We respect your privacy and are committed to protecting personally identifiable information you may provide us through the Website. We have adopted this privacy policy ("Privacy Policy") to explain what information may be collected on our Website, how we use this information, and under what circumstances we may disclose the information to third parties. This Privacy Policy applies only to information we collect through the Website and does not apply to our collection of information from other sources.</p>
<p>This Privacy Policy, together with the Terms of service posted on our Website, set forth the general rules and policies governing your use of our Website. Depending on your activities when visiting our Website, you may be required to agree to additional terms of service.</p>

<h5 style={{backgroundColor:'#cce3f2', padding:'8px', fontWeight:'bold',color:'#0072bc',maxWidth:'80vh'}} id="tableofcontents">Contents</h5>
<p>Click below to jump to any section of this privacy policy</p>
<ul>
    <li><a href="#PII"><strong>Personally-Identifying Information</strong></a>
</li>
    <li><a href="#Security"><strong>Security</strong></a>
</li>
    <li><a href="#ExternalLinks"><strong>Links To External Sites</strong></a>
</li>
    <li><a href="#PIIProtection"><strong>Protection of Certain Personally-Identifying Information</strong></a>
</li>
    <li><a href="#Affiliates"><strong>Affiliate Disclosure</strong></a>
</li>
    <li><a href="#Changes"><strong>Privacy Policy Changes</strong></a>
</li>
    <li><a href="#Credit"><strong>Contact Information &amp; Credit</strong></a>
</li>

</ul><br></br>
<h5 id="PII" style={{backgroundColor:'#cce3f2', padding:'8px', fontWeight:'bold',color:'#0072bc',maxWidth:'80vh'}}>Personally-Identifying Information</h5><p>Certain visitors to WakeWithWellness's websites choose to interact with WakeWithWellness in ways that require WakeWithWellness to gather personally-identifying information. The amount and type of information that WakeWithWellness gathers depends on the nature of the interaction. For example, we ask visitors who leave a comment at https://www.wakewithwellness.in/ to provide a username and email address.</p>


<br></br>

<h5 id="Security" style={{backgroundColor:'#cce3f2', padding:'8px', fontWeight:'bold',color:'#0072bc',maxWidth:'80vh'}}>Security</h5><p>The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.</p>
<br></br>

<h5 style={{backgroundColor:'#cce3f2', padding:'8px', fontWeight:'bold',color:'#0072bc',maxWidth:'80vh'}} id="ExternalLinks">Links To External Sites</h5><p>Our Service may contain links to external sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy and terms of service of every site you visit.</p>
<p>We have no control over, and assume no responsibility for the content, privacy policies or practices of any third party sites, products or services.</p>


<br></br>

<h5 style={{backgroundColor:'#cce3f2', padding:'8px', fontWeight:'bold',color:'#0072bc',maxWidth:'80vh'}} id="PIIProtection">Protection of Certain Personally-Identifying Information</h5><p>WakeWithWellness discloses potentially personally-identifying and personally-identifying information only to those of its employees, contractors and affiliated organizations that (i) need to know that information in order to process it on WakeWithWellness's behalf or to provide services available at WakeWithWellness's website, and (ii) that have agreed not to disclose it to others. Some of those employees, contractors and affiliated organizations may be located outside of your home country; by using WakeWithWellness's website, you consent to the transfer of such information to them. WakeWithWellness will not rent or sell potentially personally-identifying and personally-identifying information to anyone. Other than to its employees, contractors and affiliated organizations, as described above, WakeWithWellness discloses potentially personally-identifying and personally-identifying information only in response to a subpoena, court order or other governmental request, or when WakeWithWellness believes in good faith that disclosure is reasonably necessary to protect the property or rights of WakeWithWellness, third parties or the public at large.</p>
<p>If you are a registered user of https://www.wakewithwellness.in/ and have supplied your email address, WakeWithWellness may occasionally send you an email to tell you about new features, solicit your feedback, or just keep you up to date with what's going on with WakeWithWellness and our products. We primarily use our blog to communicate this type of information, so we expect to keep this type of email to a minimum. If you send us a request (for example via a support email or via one of our feedback mechanisms), we reserve the right to publish it in order to help us clarify or respond to your request or to help us support other users. WakeWithWellness takes all measures reasonably necessary to protect against the unauthorized access, use, alteration or destruction of potentially personally-identifying and personally-identifying information.</p>


<br></br>

<h5 style={{backgroundColor:'#cce3f2', padding:'8px', fontWeight:'bold',color:'#0072bc',maxWidth:'80vh'}} id="Affiliates">Affiliate Disclosure</h5><p>This site uses affiliate links and does earn a commission from certain links. This does not affect your purchases or the price you may pay.</p>


<br></br>

<h5 style={{backgroundColor:'#cce3f2', padding:'8px', fontWeight:'bold',color:'#0072bc',maxWidth:'80vh'}} id="Changes">Privacy Policy Changes</h5><p>Although most changes are likely to be minor, WakeWithWellness may change its Privacy Policy from time to time, and in WakeWithWellness's sole discretion. WakeWithWellness encourages visitors to frequently check this page for any changes to its Privacy Policy. Your continued use of this site after any change in this Privacy Policy will constitute your acceptance of such change.</p>


<br></br>

<h5 style={{backgroundColor:'#cce3f2', padding:'8px', fontWeight:'bold',color:'#0072bc',maxWidth:'80vh'}} id="Credit">Contact Information &amp; Credit</h5><p>This privacy policy was created at <a href="https://privacyterms.io/privacy-policy-generator/" rel="noreferrer" target="_blank">privacyterms.io privacy policy generator</a>. If you have any questions about our Privacy Policy, please contact us via <a href="mailto:wakewithwellness@gmail.com">email</a> or <a href="tel:">phone</a>.</p>

<p><a href="#tableofcontents">Back to table of contents</a></p>            
    </div>
    </div>
  
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal" aria-label="Close" >Close</button>
  
      </div>

     

    </div>
  </div>
</div>

{/* Modal privacy policy */}
          
           </>
  )
} 

export default Volunteership
