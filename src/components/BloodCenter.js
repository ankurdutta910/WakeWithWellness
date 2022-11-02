import React, { useState } from "react";
import './assets/css/forms.css'
import GoToTop from '../GoToTop'
import {database, storage} from '../firebase'
import {ref,push,child,update} from "firebase/database";
import {ref as ref_storage, uploadBytes } from "firebase/storage";
import {v4} from "uuid";





function refreshPage() {
     window.location.reload();
   }


function BloodCenter() {


    const [fname, setFname] = useState(null);
    const [contact,setContact] = useState(null);
    const [altphone,setAltPhone] = useState(null);
    const [bloodgp,setBloodgp] = useState(null);
    const [hospital,setHospital] = useState(null);
    const [place,setPlace] = useState(null);
    const [required,setRequired] = useState(null);
    const [loaderr, setLoaderr] = useState(false);
    const [statuss, setStatuss] = useState(undefined);
  
  
    const handleBloodRequestChange = (e) => {
      const {id , value} = e.target;
      if(id === "fname"){
          setFname(value);
      }
  
  
      if(id === "contact"){
        setContact(value);
      }
  
      if(id === "Aphone"){
        setAltPhone(value);
      }
  
      if(id === "bloodgp"){
        setBloodgp(value);
      }
  
      if(id === "hospital"){
        setHospital(value);
      }
  
      if(id === "place"){
        setPlace(value);
      }
  
      if(id === "required"){
        setRequired(value);
      }
   
   
  }
  
  const handleBloodRequest = (e) => {
      e.preventDefault();
      setLoaderr(true);
      let obj = {
        fname : fname,
        contact:contact,
        altphone:altphone,
        bloodgp:bloodgp,
        hospital:hospital,
        place:place,
        required:required
       
    }       
        const newPostKey = push(child(ref(database), 'Bloodrequest')).key;
        const updates = {};
        updates['Bloodrequest/' + newPostKey] = obj
        return update(ref(database), updates)
        .then(() => {
             setLoaderr(false);
             setStatuss({ type: 'success' });
             setFname("");
             setContact("");
             setAltPhone("");
             setBloodgp("");
             setHospital("");
             setPlace("");
             setRequired("")
  
         
           })
           .catch((error) => {
             setLoaderr(false);
             setStatuss({ type: 'error', error });
           });
  
      
        }  



     const [bmi, setBmi] = useState();
     const [info, setInfo] = useState();

     const [loader, setLoader] = useState(false);
     const [status, setStatus] = useState(undefined);
 
     const [name, setName] = useState(null);
     const [email, setEmail] = useState(null);
     const [phone,setPhone] = useState(null);
     const [whatsapp,setWhatsapp] = useState(null);
     const [address1,setAddress1] = useState(null); 
     const [country,setCountry] = useState(null);
     const [zipcode,setZip] = useState(null);
     const [state,setState] = useState(null);
     const [city,setCity] = useState(null);
     const [address,setAddress] = useState("Same Address");
     const [address2,setAddress2] = useState("");
     const [country2,setCountry2] = useState("");
     const [zipcode2,setZip2] = useState("");
     const [state2,setState2] = useState("");
     const [city2,setCity2] = useState("");
     const [bloodg,setBlood] = useState(null);
     const [age,setAge] = useState(null);
     const [height, setHeight] = useState(null);
     const [weight, setWeight] = useState(null);
     const [identity, setIdentity] = useState(null);
     const [idnumber, setIdnumber] = useState(" ");

     const [imageupload, setImageUpload] = useState(null);;
  


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
          
                    if(id === "address1"){
                    setAddress1(value);
                    }
          
                  

                    if(id === "country"){
                         setCountry(value);
                    }

                    if(id === "zipcode"){
                         setZip(value);
                    }

                    if(id === "state"){
                         setState(value);
                    }

                    if(id === "city"){
                         setCity(value);
                    }

                    if(id === "address"){
                        setAddress(value);
                   }

                    if(id === "address2"){
                        setAddress2(value);
                        }


                        if(id === "country2"){
                            setCountry2(value);
                       }
   
                       if(id === "zipcode2"){
                            setZip2(value);
                       }
   
                       if(id === "state2"){
                            setState2(value);
                       }
   
                       if(id === "city2"){
                            setCity2(value);
                       }

                    if(id === "bloodg"){
                         setBlood(value);
                    }

                    if(id === "age"){
                         setAge(value);
                    }

                    if(id === "height"){
                         setHeight(value);
                    }

                    if(id === "weight"){
                         setWeight(value);
                    }

                    if(id === "bmi"){
                         setBmi(value);
                    }

                    if(id === "info"){
                         setInfo(value);
                    }

                    if(id === "identity"){
                        setIdentity(value);
                   }

                   if(id === "idnumber"){
                    setIdnumber(value);
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
                    address1:address1, 
                    country:country,
                    zipcode:zipcode,
                    state:state,
                    city:city,
                    address:address,
                    address2:address2,
                    country2:country2,
                    zipcode2:zipcode2,
                    state2:state2,
                    city2:city2,
                    bloodg:bloodg,
                    age:age,
                    height:height,
                    weight:weight,
                    bmi:bmi,
                    info:info,
                    identity: identity,
                    idnumber:idnumber
                    
               }       
                    const newPostKey = push(child(ref(database), 'blooddonation')).key;
                    const updates = {};
                    updates['blooddonation/' + newPostKey] = obj
                    return update(ref(database), updates).then(() => {
                        setLoader(false);
                        setStatus({ type: 'success' });
                        setName("");
                        setEmail("");
                        setPhone("");
                        setWhatsapp("");
                        setAddress1("");
                        setCountry("");
                        setZip("");
                        setState("");
                        setCity("");
                        setAddress("");
                        setAddress2("");
                        setCountry2("");
                        setZip2("");
                        setState2("");
                        setCity2("");
                        setBlood("");
                        setAge("");
                        setIdentity("");
                        setIdnumber("");
                        
                    
                   
                        })
                        .catch((error) => {
                        setLoader(false);
                        setStatus({ type: 'error', error });
                        });
                   
               
                    
                    } 
            

               const handleBmi = () => {

                 

                    let val = (
                    [Number(weight) / Number(height) / Number(height)] * 10000
                    ).toFixed(1);
                    setBmi(val);
                    if (val < 18.5) {
                    setInfo("Under Weight");
                    } else if (val > 18.5 && val <= 24.9) {
                    setInfo("Healthy");
                    } else if (val > 24.9 && val < 30) {
                    setInfo("Overweight"); 
                    } else if (val > 30){
                    setInfo("Obese");
                    }
                    else {
                    setInfo("");
               }

               if (imageupload == null) return;
               const imageRef = ref_storage(storage, `bloodcamp/${v4() +imageupload.name}`);
               uploadBytes(imageRef, imageupload).then(() => {
                
                    alert("Success! Image uploaded successfully")
                
               
                    })
                  

               
               };




  return (
    <>
      <GoToTop />

<section id="blood" className="d-flex align-items-center justify-content-center" style={{marginTop: '10vh'}}>
  <div className="container" style={{marginBottom: '30px'}}>

    <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
      <div className="col-xl-6 col-lg-8">
        <h1>BLOOD FOR LIFE</h1>
        <h2>A project initiated by <span style={{fontWeight: "bold"}}>Wake With Wellness</span></h2>
      </div>
    </div>

  

  </div>
</section>


<div id="bloodbtn">
    <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModalCenter1">
    <i class="fa fa-tint" aria-hidden="true"></i> Blood Request</button>
		</div>


{/* <!-- Modal blood camp --> */}
<div class="modal fade" id="exampleModalCenter1" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
       
       
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>




      <div className="container"  style={{textAlign: 'center', marginTop: '8px'}}>
      <h2 class="modal-title" id="exampleModalLabel" style={{textAlign: 'center', fontWeight: '800', color: '#16151a'}}>BLOOD FOR LIFE</h2>
      <p style={{marginTop: '-5px',fontSize: '13px'}}>A project inititated by Wake With Wellness</p>
      <hr></hr>
      <p style={{textAlign: 'left', fontWeight: '500', color: '#16151a', marginLeft: '15px'}}>Find blood donor near you!</p>
      </div>
   
     
      <form class="requires-validation" form action="" onSubmit={handleBloodRequest}>
      <div class="modal-body" style={{marginTop: '-18px'}}>

                      <div class="col-md-12">
                      <label style={{fontSize: '12px'}} for="fname">Name<span style={{color: 'red'}}>*</span></label>   
                        <input style={{marginTop: '-5px'}} value={fname} onChange = {(e) => handleBloodRequestChange(e)} id="fname" class="form-control" type="text" name="fname" placeholder="Full Name" required/>
                        <div class="valid-feedback">Username field is valid!</div>
                        <div class="invalid-feedback">Username field cannot be blank!</div>
                      </div>

                      <div class="col-md-12">
                      <label style={{fontSize: '12px'}} for="contact">Contact no.<span style={{color: 'red'}}>*</span></label>    
                          <input style={{marginTop: '-5px'}} class="form-control" value={contact} onChange = {(e) => handleBloodRequestChange(e)} id="contact" type="text" name="contact" placeholder="Contact no." required/>
                          <div class="valid-feedback">Contact no. field is valid!</div>
                          <div class="invalid-feedback">Contact no. field cannot be blank!</div>
                      </div>

                      <div class="col-md-12">
                      <label style={{fontSize: '12px'}} for="Aphone">Alternate Contact no.<span style={{color: 'red'}}>*</span></label>    
                          <input style={{marginTop: '-5px'}} class="form-control" value={altphone} onChange = {(e) => handleBloodRequestChange(e)} id="Aphone" type="text" name="Aphone" placeholder="Alt. Contact no." required/>
                          <div class="valid-feedback">Alt. Contact no. field is valid!</div>
                          <div class="invalid-feedback">Alt. Contact no. field cannot be blank!</div>
                      </div>

                      <div class="col-md-12">
                      <label style={{fontSize: '12px'}} for="bloodgp">Blood Group<span style={{color: 'red'}}>*</span></label>    

                          <select style={{marginTop: '-5px'}} value={bloodgp} onChange = {(e) => handleBloodRequestChange(e)} class="form-select" id="bloodgp" required>
                                      <option selected disabled value="">--Select blood group--</option>
                                      <option value="O+ve">O positive</option>
                                      <option value="O-ve" style={{color: 'red'}}>O negative</option>
                                      <option value="A+ve">A positive</option>
                                      <option value="A-ve" style={{color: 'red'}}>A negative</option>
                                      <option value="B+ve">B positive</option>
                                      <option value="B-ve" style={{color: 'red'}}>B negative</option>
                                      <option value="AB+ve">AB positive</option>
                                      <option value="AB-ve" style={{color: 'red'}}>AB negative</option>

                               </select>
                          <div class="valid-feedback">Blood group field is valid!</div>
                          <div class="invalid-feedback">Blood group field cannot be blank!</div>
                      </div>

                      <div class="col-md-12">
                      <label style={{fontSize: '12px'}} for="place">City/Place<span style={{color: 'red'}}>*</span></label>    
                          <input style={{marginTop: '-5px'}} class="form-control" value={place} onChange = {(e) => handleBloodRequestChange(e)} id="place" type="text" name="place" placeholder="City/Place" required/>
                          <div class="valid-feedback">City/Place field is valid!</div>
                          <div class="invalid-feedback">City/Place field cannot be blank!</div>
                      </div>

                      <div class="col-md-12">
                      <label style={{fontSize: '12px'}} for="hospital">Hospital<span style={{color: 'red'}}>*</span></label>    
                          <input style={{marginTop: '-5px'}} class="form-control" value={hospital} onChange = {(e) => handleBloodRequestChange(e)} id="hospital" type="text" name="hospital" placeholder="Hospital" required/>
                          <div class="valid-feedback">Hospital field is valid!</div>
                          <div class="invalid-feedback">Hospital field cannot be blank!</div>
                      </div>

                      
                      <div class="col-md-12">
                           <label style={{fontSize: '12px'}} for="dept">Requirement status<span style={{color: 'red'}}>*</span></label>      
                                <select style={{marginTop: '-5px'}} value={required} onChange = {(e) => handleBloodRequestChange(e)} class="form-select" id="required" required>
                                      <option selected disabled value="">--Select status--</option>
                                      <option value="Urgent">Urgent</option>
                                      <option value="12 Hours">Within 12 Hours</option>
                                      <option value="24 Hours">Within 24 hours</option>
                                      <option value="May needed">May required</option>
                               </select>
                                <div class="valid-feedback">You selected a department!</div>
                                <div class="invalid-feedback">Please select a department!</div>
                           </div>

                    

                      <div className="container" style={{textAlign: 'center', fontWeight: '500'}}>
                       {statuss?.type === 'success' && (
                      <div class="alert alert-success alert-dismissible fade show" role="alert">
                      <strong>Success!</strong> Our team will contact you soon!
                      <button type="button" class="close" onClick={refreshPage}>
                      <span aria-hidden="true">&times;</span>
                      </button>
                      </div>
                      )}
                      {statuss?.type === 'error' && (
                        <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Failed!</strong> Please try again.
                        <button type="button" class="close" onClick={refreshPage}>
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      )} 
                      </div>

                    
                   

                   
  
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button style={{ background: loaderr ? "#b3b3b3" : "#16151a", fontWeight:'500', color:'white' }} onClick={()=>handleBloodRequest()} id="submit" type="submit" class="btn btn-dark">Request</button>
      </div>   </form>
    </div>
  </div>
</div>

{/* BloodCamp end */}




<br></br><br></br>
<div className="container" id="partb">
   
     <div className="content">
     <div className="row">
                    <div className="col-md-12">
                        <form form action="" onSubmit={handleSubmit}>
                            <div className="card-box">
                            <h4 className="card-title">Personal Details</h4>
                                <div className="row">
                                    <div className="col-md-6">
                                       
                                        <div className="form-group row">
                                            <label className="col-lg-3 col-form-label">Full Name<span style={{color: 'red'}}>*</span> :</label>
                                            <div className="col-lg-9">
                                                <input type="text" value={name} onChange = {(e) => handleInputChange(e)} id="name" className="form-control" required/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-lg-3 col-form-label">Email<span style={{color: 'red'}}>*</span> :</label>
                                            <div className="col-lg-9">
                                                <input type="email" value={email} onChange = {(e) => handleInputChange(e)} id="email" className="form-control" required/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-lg-3 col-form-label">Contact no.<span style={{color: 'red'}}>*</span> :</label>
                                            <div className="col-lg-9">
                                            <input type="text" value={phone} onChange = {(e) => handleInputChange(e)} id="phone" className="form-control" required/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-lg-3 col-form-label">Whatsapp no.<span style={{color: 'red'}}>*</span> :</label>
                                            <div className="col-lg-9">
                                            <input type="text" value={whatsapp} onChange = {(e) => handleInputChange(e)} id="whatsapp" className="form-control" required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                     
                                     
                                       <h5 style={{color: 'grey'}}>Permanent Address :</h5><hr></hr>
                                        <div className="form-group row">
                                            <label className="col-lg-3 col-form-label">Address<span style={{color: 'red'}}>*</span>:</label>
                                            <div className="col-lg-9">
                                            <textarea value={address1} className="form-control m-b-20" onChange = {(e) => handleInputChange(e)} id="address1" required></textarea>
                                               
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className=" m-b-20">
                                                            <select value={country} onChange = {(e) => handleInputChange(e)} id="country" className="select" required>
                                                                <option selected disabled value="">Select Country</option>
                                                                <option value="India">India</option>
                                                        
                                                            </select>
                                                        </div>
                                                        <input type="text" value={zipcode} onChange = {(e) => handleInputChange(e)} id="zipcode" placeholder="ZIP code" className="form-control" required/>
                                                    </div>
                                                    <div className="col-md-6">
                                                       <select value={state} onChange = {(e) => handleInputChange(e)} id="state" className="select" required>
                                                       <option selected disabled value="">Select State</option>
                                                       <option value="Andhra Pradesh">Andhra Pradesh</option> 
                                                       <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                                       <option value="Assam">Assam</option>
                                                       <option value="Bihar">Bihar</option>
                                                       <option value="Chandigarh">Chandigarh</option>
                                                       <option value="Chhattisgarh">Chhattisgarh</option>
                                                       <option value="Delhi">Delhi</option>
                                                       <option value="Puducherry">Puducherry</option>
                                                       <option value="Goa">Goa</option>
                                                       <option value="Gujarat">Gujarat</option>
                                                       <option value="Haryana">Haryana</option>
                                                       <option value="Himachal Pradesh">Himachal Pradesh</option>
                                                       <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                                       <option value="Jharkhand">Jharkhand</option>
                                                       <option value="Karnataka">Karnataka</option>
                                                       <option value="Kerala">Kerala</option>
                                                       <option value="Madhya Pradesh">Madhya Pradesh</option>
                                                       <option value="Maharashtra">Maharashtra</option>
                                                       <option value="Manipur">Manipur</option>
                                                       <option value="Meghalaya">Meghalaya</option>
                                                       <option value="Mizoram">Mizoram</option>
                                                       <option value="Nagaland">Nagaland</option>
                                                       <option value="Odisha">Odisha</option>
                                                       <option value="Punjab">Punjab</option>
                                                       <option value="Rajasthan">Rajasthan</option>
                                                       <option value="Sikkim">Sikkim</option>
                                                       <option value="Tamil Nadu">Tamil Nadu</option>
                                                       <option value="Telangana">Telangana</option>
                                                       <option value="Tripura">Tripura</option>
                                                       <option value="Uttar Pradesh">Uttar Pradesh</option>
                                                       <option value="Uttarakhand">Uttarakhand</option>
                                                       <option value="West Bengal">West Bengal</option>
                                                       </select>
                                                        <input value={city} onChange = {(e) => handleInputChange(e)} id="city"  type="text" placeholder="City" className="form-control" required/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                 <br></br>  <hr></hr>  <br></br>   <br></br>
                                <h4 className="card-title">Temporary Address</h4>
                               <div className="row">
                               <div className="col-md-6">
                               <br></br><br></br>
                                        <div className="form-group row mx-4">
                                       
                                        <input class="form-check-input" type="checkbox" value={address} onChange = {(e) => handleInputChange(e)} id="address"/>
                                        <label class="form-check-label" style={{textAlign: 'justify'}}>Same as Permanent Address</label>
                                        </div>
                                        <br></br>     
                               
                                      
                                       
                                        
                                    </div>

                                    <div className="col-md-6">

                                    <div className="form-group row">
                                            <label className="col-lg-3 col-form-label">Address:</label>
                                            <div className="col-lg-9">
                                            <textarea value={address2} className="form-control m-b-20" onChange = {(e) => handleInputChange(e)} id="address2" ></textarea>
                                               
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className=" m-b-20">
                                                            <select value={country2} onChange = {(e) => handleInputChange(e)} id="country2" className="select" >
                                                                <option selected disabled value="">Select Country</option>
                                                                <option value="India">India</option>
                                                        
                                                            </select>
                                                        </div>
                                                        <input type="text" value={zipcode2} onChange = {(e) => handleInputChange(e)} id="zipcode2" placeholder="ZIP Code" className="form-control" />
                                                    </div>
                                                    <div className="col-md-6">
                                                       <select value={state2} onChange = {(e) => handleInputChange(e)} id="state2" className="select" >
                                                       <option selected disabled value="">Select State</option>
                                                       <option value="Andhra Pradesh">Andhra Pradesh</option> 
                                                       <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                                       <option value="Assam">Assam</option>
                                                       <option value="Bihar">Bihar</option>
                                                       <option value="Chandigarh">Chandigarh</option>
                                                       <option value="Chhattisgarh">Chhattisgarh</option>
                                                       <option value="Delhi">Delhi</option>
                                                       <option value="Puducherry">Puducherry</option>
                                                       <option value="Goa">Goa</option>
                                                       <option value="Gujarat">Gujarat</option>
                                                       <option value="Haryana">Haryana</option>
                                                       <option value="Himachal Pradesh">Himachal Pradesh</option>
                                                       <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                                       <option value="Jharkhand">Jharkhand</option>
                                                       <option value="Karnataka">Karnataka</option>
                                                       <option value="Kerala">Kerala</option>
                                                       <option value="Madhya Pradesh">Madhya Pradesh</option>
                                                       <option value="Maharashtra">Maharashtra</option>
                                                       <option value="Manipur">Manipur</option>
                                                       <option value="Meghalaya">Meghalaya</option>
                                                       <option value="Mizoram">Mizoram</option>
                                                       <option value="Nagaland">Nagaland</option>
                                                       <option value="Odisha">Odisha</option>
                                                       <option value="Punjab">Punjab</option>
                                                       <option value="Rajasthan">Rajasthan</option>
                                                       <option value="Sikkim">Sikkim</option>
                                                       <option value="Tamil Nadu">Tamil Nadu</option>
                                                       <option value="Telangana">Telangana</option>
                                                       <option value="Tripura">Tripura</option>
                                                       <option value="Uttar Pradesh">Uttar Pradesh</option>
                                                       <option value="Uttarakhand">Uttarakhand</option>
                                                       <option value="West Bengal">West Bengal</option>
                                                       </select>
                                                        <input value={city2} onChange = {(e) => handleInputChange(e)} id="city2"  type="text" placeholder="City" className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                     


                                      
                                   </div>    
                               </div>


                              


                                <br></br>  <hr></hr>  <br></br>   <br></br>
                                <h4 className="card-title">Details</h4>
                               <div className="row">
                               <div className="col-md-6">

                               <div className="form-group row">
                                           <label className="col-lg-3 col-form-label">Blood group<span style={{color: 'red'}}>*</span> :</label>
                                           <div className="col-lg-9">

                                               <select style={{marginTop: '-5px'}} value={bloodg} onChange = {(e) => handleInputChange(e)} class="form-select" id="bloodg" required>
                                                        <option selected disabled value="">--Select blood group--</option>
                                                        <option value="O+ve">O positive</option>
                                                        <option value="O-ve" style={{color: 'red'}}>O negative</option>
                                                        <option value="A+ve">A positive</option>
                                                        <option value="A-ve" style={{color: 'red'}}>A negative</option>
                                                        <option value="B+ve">B positive</option>
                                                        <option value="B-ve" style={{color: 'red'}}>B negative</option>
                                                        <option value="AB+ve">AB positive</option>
                                                        <option value="AB-ve" style={{color: 'red'}}>AB negative</option>

                                                </select>
                                           
                                           </div>
                                       </div>
                                       
                                        <div className="form-group row">
                                            <label className="col-lg-3 col-form-label">Age<span style={{color: 'red'}}>*</span> :</label>
                                            <div className="col-lg-9">
                                                <input value={age} id="age" onChange = {(e) => handleInputChange(e)} type="text" className="form-control" required/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">

                                       <div className="form-group row">
                                           <label className="col-lg-3 col-form-label">Height <span style={{fontWeight: 'bold'}}>(in cm)</span><span style={{color: 'red'}}>*</span> :</label>
                                           <div className="col-lg-9">
                                               <input type="number" onChange={(e) => setHeight(e.target.value)} id="height" placeholder="height in cm" className="form-control" required/>
                                           </div>
                                       </div>


                                       <div className="form-group row">
                                           <label className="col-lg-3 col-form-label">Weight <span style={{fontWeight: 'bold'}}>(in kg)</span><span style={{color: 'red'}}>*</span> :</label>
                                           <div className="col-lg-9">
                                               <input onChange={(e) => setWeight(e.target.value)} id="weight" placeholder="Weight in kg" type="number" className="form-control" required/> 
                                           </div>
                                       </div>

                                     

                                       <div className="form-group row">
                                           <label className="col-lg-3 col-form-label">BMI:</label>
                                           <div className="col-lg-9">
                                               <input type="number" style={{border: "none"}} disabled value={bmi} onChange = {(e) => handleInputChange(e)} id="bmi" className="form-control"/> 
                                           </div>    
                                       </div>

                                       
                                       <div className="form-group row">
                                           <label className="col-lg-3 col-form-label">Status:</label>
                                           <div className="col-lg-9">
                                               <input type="text" style={{border: "none"}} disabled value={info} onChange = {(e) => handleInputChange(e)} id="info" className="form-control"/> 
                                           </div>    
                                       </div>

                                      
                                   </div>    
                               </div>



                               <br></br><hr></hr><br></br>  
                               <h4 className="card-title">Identification</h4>
                               <div className="container">

                                <div className="row">
                                <div className="col-md-6">
                                       
                                       <div className="form-group row">
                                           <label className="col-lg-3 col-form-label">Identity type<span style={{color: 'red'}}>*</span> :</label>
                                           <div className="col-lg-9">
                                           <select value={identity} onChange = {(e) => handleInputChange(e)} id="identity" className="select" required>
                                                       <option selected disabled value="">Select</option>
                                                       <option value="AadhaarCard">Aadhaar Card</option> 
                                                       <option value="PANCard">PAN Card</option>
                                                       <option value="Driving Licence">Driving Licence</option>
                                                       <option value="VoterID">Voter ID Card</option>
                                                       <option value="Indian passport">Indian passport</option>
                                            </select>
                                           </div>
                                       </div>  
                                   </div>

                                   <div className="col-md-6">
                                       
                                       <div className="form-group row">
                                           <label className="col-lg-3 col-form-label">Identity no.<span style={{color: 'red'}}>*</span> :</label>
                                           <div className="col-lg-9">
                                               <input type="text" value={idnumber} onChange = {(e) => handleInputChange(e)} id="idnumber" className="form-control" required/>
                                           </div>
                                       </div>  
                                   </div>
                                </div>

                            <h5 style={{textAlign: 'center'}}>OR</h5><br></br>
                         
                                   
                                      <div className="form-group row">
                                        <label className="col-lg-6 col-form-label">Upload any govt. validated identity proof <span style={{fontStyle: 'italic', color: 'red'}}>(Max. 2MB)</span> :</label>
                                          <div className="col-lg-6">
                                          <input type="file" accept="image/*" onChange={(e) => {setImageUpload(e.target.files[0]);}} className="form-control"/>
                                        </div>
                                      </div>  
                                

                                   
                               </div>


                          <br></br> <hr></hr>


                               
                                                        

                        <br></br>
                        <div className="container" style={{textAlign: 'center', fontWeight: '500'}}>
                         {status?.type === 'success' && (
                         <div className="alert alert-success alert-dismissible fade show" role="alert">
                         <strong>Success!</strong> Your form has been submitted successfully. <span style={{color: 'red'}}>Please wait for image to upload(if any)</span>.
                         <button type="button" className="close" onClick={refreshPage}>
                           <span aria-hidden="true">&times;</span>
                         </button>
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
                                <div className="text-right">
                                {/* <button  onClick={()=>handleSubmit()} id="submit" type="submit" >Submit</button> */}
                                {/* <button className="btn btn-warning" style={{ background: loader ? "#e6e6e6" : "#ffc107", fontWeight:'500', color:'white'}} onClick={handleBmi}>Submit</button> */}
                                <button className="btn btn-dark" style={{ background: loader ? "#b3b3b3" : "#16151a",minWidth:'20vh', fontWeight:'500', color:'white',height: '45px'}} onClick={handleBmi}>Submit</button>
                                </div>
                            </div>
                        </form>


                        
                    </div>
                </div>

     </div>
</div>
    </>
  )
}

export default BloodCenter
