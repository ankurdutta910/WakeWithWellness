import React, { useState } from "react";
import "./assets/css/Home.css"
import "../App.css"
import { Link } from "react-router-dom";
import GoToTop from '../GoToTop'



import sofy from './assets/image/sofy.png'
import netecon from './assets/image/niteco.png'
import progoty from './assets/image/progoty.png'
import helping from './assets/image/helpinghands.jpg'
import ssf from './assets/image/SSF.png'
import uiP from './assets/image/UiP.png'
import about from './assets/image/about.JPG'



function Home() {


  const [bmi, setBmi] = useState();
  const [info, setInfo] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
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
      setInfo("Under Weight");
 }
  };




  
  return (
    <> <GoToTop />
    <div>
       <section id="hero" className="d-flex align-items-center justify-content-center" >
    <div className="container" style={{marginBottom: '30px'}}>

      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-8">
         
          <h1>WakeWithWellness</h1>
          <h2>We Are People Caring For People</h2>
          {/* <img src={unlogo} alt="" style={{width: '15vh', height: 'auto'}}/> */}
        </div>
      </div>

      <div className="row gy-4 mt-5 justify-content-center" >



        {/* <div className="col-xl-2 col-md-4 my-1">
        <Link to="/recruitment">
          <div className="icon-box" style={{cursor: "pointer"}} to="/recruitment">
          <i class="fa fa-handshake-o" aria-hidden="true"></i>
            <h3><Link to="/recruitment">Recruitment</Link></h3>
          </div> </Link>  
        </div>  */}

      

        <div className="col-xl-2 col-md-4 my-1">
        <Link to="/volunteership">
          <div className="icon-box" style={{cursor: "pointer"}}>
            <i className="fa fa-user" aria-hidden="true"></i>
            <h3><Link to="/volunteership">Register as Coordinator</Link></h3>
          </div></Link>
        </div>


       <div className="col-xl-2 col-md-4 my-1">
        <Link to="/bloodcamp">
          <div className="icon-box" style={{cursor: "pointer"}}>
            <i className="fa fa-tint" aria-hidden="true"></i>
            <h3><Link to="/bloodcamp">Blood For Life</Link></h3>
          </div></Link>
        </div>


  

        <div className="col-xl-2 col-md-4 my-1">
          <Link to="/fundraiser">
          <div className="icon-box" style={{cursor: "pointer"}} >
            <i className="fa fa-money" aria-hidden="true"></i>
            <h3><Link to="/fundraiser">Donate for a Cause</Link></h3>
          </div></Link>
        </div>



          
        <div id="hideeee" className="col-xl-2 col-md-4 my-1">
          <Link to="/blogs">
          <div id="hideeee"  className="icon-box" style={{cursor: "pointer"}} >
            <i className="fa fa-book" aria-hidden="true"></i>
            <h3><Link to="/blogs">Blogs</Link></h3>
          </div></Link>
        </div>


        <div className="col-xl-2 col-md-4 my-1">
        <Link to="/about">
          <div className="icon-box" style={{cursor: "pointer"}} >
            <i className="fa fa-user" aria-hidden="true"></i>
            <h3><Link to="/about">About Us</Link></h3>
          </div></Link>
        </div>


        <div id="hideeee" className="col-xl-2 col-md-4 my-1">
        <Link to="/team">
          <div id="hideeee"  className="icon-box" style={{cursor: "pointer"}} >
            <i className="fa fa-users" aria-hidden="true"></i>
            <h3><Link to="/team">Our Team</Link></h3>
          </div></Link>
        </div>

      
        
 
       
      </div>

    </div>

 

  </section>







{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel" style={{textAlign: 'center', fontWeight: 'bold'}}>BMI Calculator</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
       <form>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-4 col-form-label">Height <span style={{fontWeight: 'bold'}}>(in cm)</span></label>
    <div class="col-sm-8">
      <input type="number"
        onChange={(e) => setHeight(e.target.value)}
        placeholder="height in cm" class="form-control" id="height" required/>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-4 col-form-label">Weight <span style={{fontWeight: 'bold'}}>(in kg)</span></label>
    <div class="col-sm-8">
      <input type="number"
       onChange={(e) => setWeight(e.target.value)}
        placeholder="Weight in kg" class="form-control" id="weight" required/>
    </div>

  
  </div>
  <div class="modal-footer">
      
        <button type="button" onClick={handleBmi} class="btn btn-info" style={{color: 'white'}}>Calculate</button>
      </div>
<hr></hr>
<h5>Report :</h5>

  <div class="form-group row" style={{marginTop: '5px'}}>
    <label for="inputPassword" class="col-sm-2 col-form-label">BMI</label>
    <div class="col-sm-10">
      <input type="number" readonly="readonly" value={bmi} class="form-control" id="weight"/>
    </div> 
  </div>


  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Status</label>
    <div class="col-sm-10">
      <input type="text" readonly="readonly" value={info} class="form-control" id="weight"/>
    </div> 
  </div>


  <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal"><i class="fa fa-times" aria-hidden="true"></i> Close</button>
       
      </div> 

</form>
  
      </div>
   
    </div>
  </div>
</div>


<div style={{marginTop:"50px"}}></div>




    {/* ABOUT SECTION */}

  <section id="about" className="about">
      <div className="container-fluid" style={{maxWidth: '200vh'}}>
    
        <div className="row">
        <div className="col-lg-2" style={{width:'2vh'}}></div>
          <div className="col-lg-4 order-1 order-lg-2" style={{float:'right'}}>
            <img src={about} className="img-fluid" alt=""/>
          </div>

         
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" id="con" data-aos="fade-right" data-aos-delay="100">
          <h2 style={{fontWeight: 'bold', fontFamily: 'Montserrat, sans-serif'}}>WHO WE ARE</h2>
            <p style={{textAlign: "justify", fontSize: "14px"}}>Wake With Wellness is a community-based organization established to exercise good actions for the rehabilitation of communities regarding health and social awareness without ascertaining the foundations of legal norms. The focus is to build equality across society in all streams - health care, environment, access to technology, quality of education, etc. We use technology for managing administrative functions and daily business operations.
            </p>
            <p style={{textAlign: "justify", fontSize: "14px"}}>
              To improve the attitude of the community about the delivery of palliative and health care services, we as an organization will provide relentless efforts to make them believe that palliative and health care can not only be provided by professionals but also by community volunteers. Succumbing to a large population, the only way to provide palliative and health care to people in need is through community participation also designed towards spreading health awareness and conveyance of information crucial to a healthy living.
            </p>
            <p style={{textAlign: "justify", fontSize: "14px"}}>With this vision of steering people for a hale and hearty life form, <span style={{fontWeight: 'bold'}}>‘we are People Caring For People’</span></p>

     <br></br>
            <Link id="morebtn" style={{background: 'linear-gradient(95.24deg, #038CB7 0%, #04C3FF 137.16%)'}} to="/about">KNOW MORE</Link>
          
            
          </div>
        </div>

      </div>
    </section>

    <div style={{marginTop:"60px"}}></div>

    <section id="about" className="about" style={{background: 'linear-gradient(95.24deg, #038CB7 0%, #04C3FF 137.16%)',color: 'white', paddingTop: '25px', paddingBottom: '25px'}}>
      <div className="container-fluid" style={{maxWidth: '200vh'}}>
    
      
       
          <div className="content" data-aos="fade-right" data-aos-delay="100">
      
            <p style={{fontStyle:'italic', fontSize: "12px"}}>
            Human development summary capturing achievements in the HDI and complementary metrics that estimate gender gaps, inequality, planetary pressures and poverty.
            </p>
<br></br>
            <h4 style={{fontWeight: 'bold', fontFamily: 'Montserrat, sans-serif'}}>Human Development Index</h4>
            <p style={{fontSize: '13px', textAlign: 'justify'}}>The HDI is a summary measure for assessing long-term progress in three basic dimensions of human development: a long and healthy life, access to knowledge and a decent standard of living. India's HDI value for 2021 is 0.633— which put the country in the Medium human development category—positioning it at 132 out of 191 countries and territories.
<br></br><br></br>
              Between 1990 and 2021, India's HDI value changed from 0.434 to 0.633, an change of 45.9 percent.
              <br></br><br></br>
              Between 1990 and 2021, India's life expectancy at birth changed by 8.6 years, mean years of schooling changed by 3.9 years and expected years of schooling changed by 3.9 years. India's GNI per capita changed by about 268.1 percent between 1990 and 2021.</p>
          
  <br></br>
            <a style={{color: 'yellow', underline: 'true'}}  href="https://hdr.undp.org/data-center/specific-country-data#/countries/IND" target="_blank"><i class="fa fa-link" aria-hidden="true"></i> More Insights on HDI</a>
          
            
          </div>
     

      </div>
    </section>





    <div style={{marginTop:"60px"}}></div>

   



    <section id="portfolio" className="portfolio">
      <div className="content container-fluid" style={{maxWidth: '200vh'}}>
      
          <div className="section-title" data-aos="fade-left">
          
            <h2 style={{fontWeight: 'bold', fontFamily: 'Montserrat, sans-serif'}}>Gallery</h2>
            
            </div>
       
        <div className="row">

          {/* <!--1--> */}
            <div  className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20" style={{marginBottom: '20px'}} id="imggg">
                <p>
                    <img id="images" className="img-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/gallery%2FBB.JPG?alt=media&token=e3a5b6bc-650a-4d02-85c6-e5df5bf64f42" alt=""/>
                </p>
            </div>


          {/* <!--2--> */}
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20" style={{marginBottom: '20px'}} id="imggg">
                <p>
                    <img id="images" className="img-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/gallery%2FL2.jpg?alt=media&token=01624696-123b-4097-9626-19dd37ad977f" alt=""/>
                </p>
            </div>

          {/* <!--3--> */}
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20" style={{marginBottom: '20px'}} id="imggg">
                <p>
                    <img id="images" className="img-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/prabhati%2F2.jpeg?alt=media&token=7fa1d527-a5ba-4c99-8b1a-ae20aee96047" alt=""/>
                </p>
            </div>


          {/* <!--4--> */}
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20" style={{marginBottom: '20px'}} id="imggg">
                <p>
                    <img id="images" className="img-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/prabhati%2F9.jpeg?alt=media&token=14372edc-690e-4a4c-8fcc-f8d5cfd7eb78" alt=""/>
                </p>
            </div>
           

             {/* <!--5--> */}
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20" style={{marginBottom: '20px'}} id="imggg">
                <p>
                    <img id="images" className="img-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/gallery%2FL6.jpg?alt=media&token=01f5d81a-6090-4430-a146-637061fb8a1d" alt=""/>
                </p>
            </div>


             {/* <!--6--> */}
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20" style={{marginBottom: '20px'}} id="imggg">
                <p>
                    <img id="images" className="img-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/clothdonationDhmj%2Fclothdonate1.JPG?alt=media&token=6a55a215-5ccf-43a9-865a-c5b61dc61119" alt=""/>
                </p>
            </div>
            

             {/* <!--7--> */}
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20" style={{marginBottom: '20px'}} id="imggg">
            <p>
                    <img id="images" className="img-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/MedicalCampDhmj%2F5.JPG?alt=media&token=4232082e-75de-4fde-b6e5-a6de6cc8d43d" alt=""/>
                </p>
                
            </div>
           
            
            {/* <!--8--> */}
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20"id="imggg" >
            <p>
                    <img id="images" className="img-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/gallery%2Fcleanliness1a.jpeg?alt=media&token=f9ab2aab-67e0-4871-83cb-8d34e182d241" alt=""/>
                </p>
            </div>

        
            <div className="container-fluid">
        <br></br>
            <div className="text-right">
            <Link id="morebtn"  style={{background: 'linear-gradient(95.24deg, #038CB7 0%, #04C3FF 137.16%)'}} to="/gallery">SEE MORE PHOTOS</Link>
            </div>

          </div>

            
        </div>
    </div>
    </section>

    <div style={{marginTop:"80px"}}></div>
 {/* BLOG SECTION */}

 <section id="features" className="features" style={{backgroundColor: "#f2f2f2", paddingTop:'80px',paddingBottom:'50px'}}>
      <div className="container-fluid" style={{maxWidth: '200vh'}}>
      <div class="section-title">
          <h2 style={{fontWeight: 'bold', fontFamily: 'Montserrat, sans-serif'}}>BLOGS</h2>
        
        </div>

          <div className="row">


  


          <div className="col-sm-6 col-md-6 col-lg-4">
            
                          <div className="blog grid-blog" id="images" >

                          <div className="blog-title" style={{background: 'linear-gradient(95.24deg, #3F767D 0%, #4D8A9F 137.16%)',borderRadius: '8px'}}>
                          <h3><Link style={{color: 'white'}} to="/blog/9">THRIVE WITH HOPE!</Link></h3>
                          <p>- Sangeeta Sen</p>
                          </div>
                              <div className="blog-image" style={{marginTop: '-17px'}}>
                                  <a href="/blog/9"><img className="img-fluid" src="/assets/images/blog6.jpeg" alt=""/></a>
                              </div>
                              <div className="blog-content" style={{backgroundColor: 'white', marginTop: '-15px'}}>
                            
                                              
                                                <p>We say that it is the strength that keeps us going.<br/>
                                                    It is the will that keeps us going,<br/>
                                                    It is the aim that keeps us going<br/>
                                                    It is the faith that keeps us going!</p>
                                                <a  href="/blog/9" className="read-more"><i className="fa fa-long-arrow-right"></i> Read More</a>
                                                <div style={{marginTop: '-3px'}} className="blog-info clearfix">
                                                    <div className="post-left">
                                                        <ul>
                                                            <li><a href="/blog/9"><i className="fa fa-calendar"></i> <span>April 30, 2022</span></a></li>
                                                        </ul>
                                      </div>
                                  
                                  </div>
                              </div>
                          </div>
                      </div>



                  <div className="col-sm-6 col-md-6 col-lg-4">
                          <div className="blog grid-blog" id="images">
                          <div className="blog-title" style={{background: 'linear-gradient(95.24deg, #3F767D 0%, #4D8A9F 137.16%)',borderRadius: '8px'}}>
                          <h3><Link style={{color: 'white'}} to="/blog/3">THE MECHANICS OF DESIRE</Link></h3>
                          <p>- Bhargab Deka</p>
                         </div>


                              <div className="blog-image" style={{marginTop: '-17px'}}>
                                  <a href="/blog/3"><img className="img-fluid" src="/assets/images/blog5.jpg" alt=""/></a>
                              </div>
                              <div className="blog-content" style={{backgroundColor: 'white', marginTop: '-15px'}}>
                              
                                              
                                                <p>Do you dream? Everyone does…isn't it?</p>
                                                <p style={{textAlign: 'justify', marginBottom: '15px'}}>But I am not talking about those dreams that you dreamt during your 
                                                sleep. Those are just...</p>
                                                <a href="/blog/3" className="read-more"><i className="fa fa-long-arrow-right"></i> Read More</a>
                                                <div className="blog-info clearfix">
                                                    <div className="post-left">
                                                        <ul>
                                                            <li><a href="/blog/3"><i className="fa fa-calendar"></i> <span>July 20, 2021</span></a></li>
                                                        </ul>
                                      </div>
                                  
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="col-sm-6 col-md-6 col-lg-4">
                              <div className="blog grid-blog" id="images">

                              <div className="blog-title" style={{background: 'linear-gradient(95.24deg, #3F767D 0%, #4D8A9F 137.16%)',borderRadius: '8px'}}>
                              <h3><Link style={{color: 'white'}} to="/blog/8">বৃক্ক ৰোগৰ কিছু তথ্য আৰু একান্ত অনুভৱ </Link></h3>
                              <p>- নিবেদিতা বড়া সন্দিকৈ</p>
                          </div>


                                  <div className="blog-image" style={{marginTop: '-17px'}}>
                                      <Link to="/blog/8"><img className="img-fluid" src="/assets/images/6.jpeg" alt=""/></Link>
                                  </div>
                                  <div className="blog-content" style={{backgroundColor: 'white', marginTop: '-15px'}}>
                                    

                                      <p style={{textAlign: 'justify', marginBottom: '5px'}}>হঠাতে জীৱনলৈ বিপর্যয় নামি আহিল। কি কৰোঁ... কি নকৰোঁ... । মোৰ নিকটতমৰ দুয়োটা বৃক্কই <span style={{fontWeight: '600'}}>(Kidney)</span> বিকল হ'ল। তাকে৷ ডাক্তৰৰ ভুল ঔষধৰ বাবে। হে 
                                        ভগৱান... কি কৰোঁ.......</p>
                                        <a style={{marginTop: '25px'}} href="/blog/8" className="read-more"><i className="fa fa-long-arrow-right"></i> Read More</a>
                                        <div className="blog-info clearfix">
                                            <div className="post-left">
                                                <ul>
                                                    <li><a href="/blog/8"><i className="fa fa-calendar"></i> <span>July 6, 2021</span></a></li>
                                                </ul>
                                            </div>
                                          
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="container-fluid"><br></br><br></br>
                              <div className="text-right">
                              <Link id="morebtn"  style={{background: 'linear-gradient(95.24deg, #3F767D 0%, #4D8A9F 137.16%)'}} to="/blogs">READ MORE BLOGS</Link>
                              </div>
              
                          </div>

          </div>
      </div>
    </section>


   



 


    
<section id="features" className="features" style={{marginTop: '14vh'}}>
        <div className="container-fluid"  style={{maxWidth: '200vh'}}>
  
          <div className="section-title">
            <h2 style={{fontWeight: 'bold', fontFamily: 'Montserrat, sans-serif'}}>Video Gallery</h2>
            
          </div>


<div className="row">

                            <div className="col-sm-6 col-md-6 col-lg-4 my-2" >
                              <div className="blog grid-blog" id="images">
                                  <div className="blog-image">
                                  <img src="https://firebasestorage.googleapis.com/v0/b/files-bf645.appspot.com/o/Videos%2Fthumbnails%2Fglimpses.JPG?alt=media&token=218e7bb2-de57-4acf-b4fb-a9bde05219cb" className="img-fluid" alt=""/>
                                  </div>
                                  <div className="blog-content" style={{background: 'linear-gradient(95.24deg, #372451 0%, #684096 137.16%)', color: 'white', marginTop: '-31.5px', borderRadius: '15px'}}>
                                  <h5 style={{fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif ', fontWeight: 'bold'}}>Glimpses of 2021-22 | Wake With Wellness</h5>
                                  <div className="row" style={{marginTop: '33px'}}>
                                      <div className="col"> <p style={{color: 'white'}}>24th April 2022</p></div>
                                      <div className="col">  <Link to="/video6" className="btn" style={{fontStyle: 'italic', fontSize: '13px', float:'right',color:'white'}} ><i class="fa fa-play-circle" aria-hidden="true"></i> Watch</Link></div>
                                  </div>
                                  </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-6 col-lg-4 my-2">
                              <div className="blog grid-blog" id="images">
                                  <div className="blog-image">
                                  <img src="https://firebasestorage.googleapis.com/v0/b/files-bf645.appspot.com/o/Videos%2Fthumbnails%2Fhealth.JPG?alt=media&token=6144d0ce-40f9-4f5c-9e88-5f20f159572e" className="img-fluid" alt=""/>
                                  </div>
                                  <div className="blog-content" style={{background: 'linear-gradient(95.24deg, #372451 0%, #684096 137.16%)', color: 'white',marginTop: '-31.5px', borderRadius: '15px'}}>
                                  <h5 style={{fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif ', fontWeight: 'bold'}}>Wellness Drive : Medical & Health Checkup Camp | Dhemaji</h5>
                                  <div className="row">
                                      <div className="col"> <p style={{color: 'white'}}>4th April 2022</p></div>
                                      <div className="col">  <Link to="/video5" className="btn" style={{fontStyle: 'italic', fontSize: '13px', float:'right',color:'white'}} ><i class="fa fa-play-circle" aria-hidden="true"></i> Watch</Link></div>
                                  </div>
                                  </div>
                                </div>
                            </div>


                            <div className="col-sm-6 col-md-6 col-lg-4 my-2">
                              <div className="blog grid-blog" id="images">
                                  <div className="blog-image">
                                  <img src="https://firebasestorage.googleapis.com/v0/b/files-bf645.appspot.com/o/Videos%2Fthumbnails%2Ffood.JPG?alt=media&token=0b84cec0-75a5-4f26-b79b-9191abb76c57" className="img-fluid" alt=""/>
                                  </div>
                                  <div className="blog-content" style={{background: 'linear-gradient(95.24deg, #372451 0%, #684096 137.16%)', color: 'white', marginTop: '-31.5px', borderRadius: '15px'}}>
                                  <h5 style={{fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif ', fontWeight: 'bold'}}>Wellness Drive: Food Donation | Wake With Wellness</h5>
                                  <div className="row">
                                      <div className="col"> <p style={{color: 'white'}}>6th October 2021</p></div>
                                      <div className="col">  <Link to="/video1" className="btn" style={{fontStyle: 'italic', fontSize: '13px', float:'right',color:'white'}} ><i class="fa fa-play-circle" aria-hidden="true"></i> Watch</Link></div>
                                  </div>
                                  </div>
                                </div>
                            </div>



        <div className="container-fluid" style={{marginTop: '7vh'}}>
        <div className="text-right">
                              <Link id="morebtn" style={{background: 'linear-gradient(95.24deg, #372451 0%, #684096 137.16%)'}} to="/videos">WATCH MORE VIDEOS</Link>
                              </div>
      
        </div>
</div>




</div>


  </section>   



  <div style={{marginTop:"80px"}}></div>







    <section id="features" className="features" style={{backgroundColor: "#f2f2f2", paddingTop:'80px',paddingBottom:'50px'}}>
        <div className="container-fluid" style={{maxWidth: '200vh'}}>
  
          <div className="section-title">
            <h2 style={{fontWeight: 'bold', fontFamily: 'Montserrat, sans-serif'}}>Events</h2>
            
          </div>


 
          <div className="row">


                            <div className="col-sm-6 col-md-6 col-lg-4">
                              <div className="blog grid-blog" id="images">
                                  <div className="blog-image">
                                  <img src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/MedicalCampDhmj%2F1.JPG?alt=media&token=b390f6fe-ad10-41f9-9f9f-d815a045cd75" className="img-fluid" alt=""/>
                                  </div>
                                  <div className="blog-content" style={{background: 'linear-gradient(95.24deg, #3F767D 0%, #4D8A9F 137.16%)', color: 'white', marginTop: '-31.5px', borderRadius: '15px'}}>
                                  <h5 style={{fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif ', fontWeight: 'bold'}}>Medical & Health CheckUp</h5>
                                  <p style={{color: 'white'}}>(14th March 2021)</p>
                                  </div>
                                </div>
                            </div>


                            <div className="col-sm-6 col-md-6 col-lg-4">
                              <div className="blog grid-blog" id="images">
                                  <div className="blog-image">
                                  <img src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/clothdonationDhmj%2Fclothdonate1.JPG?alt=media&token=6a55a215-5ccf-43a9-865a-c5b61dc61119" className="img-fluid" alt=""/>
                                  </div>
                                  <div className="blog-content" style={{background: 'linear-gradient(95.24deg, #3F767D 0%, #4D8A9F 137.16%)', color: 'white',marginTop: '-31.5px', borderRadius: '15px'}}>
                                  <h5 style={{fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif ', fontWeight: 'bold'}}>Clothes & Books Donation</h5>
                                  <p style={{color: 'white'}}>(20th February 2022)</p>
                                  </div>
                                </div>
                            </div>



                            <div className="col-sm-6 col-md-6 col-lg-4" >    
                              <div className="blog grid-blog" id="images">
                                  <div className="blog-image">
                                  <img src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/prabhati%2F2.jpeg?alt=media&token=7fa1d527-a5ba-4c99-8b1a-ae20aee96047" className="img-fluid" alt=""/>
                                  </div>
                                  <div className="blog-content" style={{background: 'linear-gradient(95.24deg, #3F767D 0%, #4D8A9F 137.16%)', color: 'white', marginTop: '-31.5px', borderRadius: '15px'}}>
                                  <h5 style={{fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif ', fontWeight: 'bold'}}>Prabhati - A Dawn of a Vital Outlook</h5>
                                  <p style={{color: 'white'}}>(29th November 2021)</p>
                                  </div>
                                </div>
                            </div>






                            <div className="container-fluid"><br></br><br></br>
                              <div className="text-right">
                              <Link id="morebtn" style={{background: 'linear-gradient(95.24deg, #3F767D 0%, #4D8A9F 137.16%)'}} to="/events">SEE MORE EVENTS</Link>
                              </div>
              
                          </div>


        </div>



        <div className="row" style={{marginTop: '10px'}}>

       </div>

      </div>
      </section>




      <div style={{marginTop:"50px"}}></div>

 



     
      <section id="collab" class="collab" >
        <div class="container-fluid" style={{maxWidth: '200vh'}}>
          <div class="section-title">
            <h2>Collaborations</h2>
           
          </div>
  
          <div class="container-fluid" style={{cursor: 'pointer'}}>
            <div class="row">
             
              <div class="col"><img src={sofy} class="img-fluid" alt="Sofy"/></div>
              <div class="col"><img src={netecon} class="img-fluid" alt="NitEco"/></div>
              <div class="col"><img src={progoty} class="img-fluid" alt="Progoty"/></div>
              <div class="col"><img src={helping} class="img-fluid" alt="Helping"/></div>
              <div class="col"><img src={ssf} class="img-fluid" alt="SSF"/></div>
              <div class="col"><img src={uiP} class="img-fluid" alt="UIP"/></div>
        
            </div>
            <div class="swiper-pagination"></div>
          </div>
  
        </div>
      </section>


      <div style={{marginTop:"100px"}}></div>

    </div>
    </>
  )
}

export default Home
