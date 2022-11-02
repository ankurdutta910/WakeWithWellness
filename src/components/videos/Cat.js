import React from 'react'
import "../assets/css/Home.css"
import { Link } from "react-router-dom";

import GoToTop from '../../GoToTop'

function Cat() {
  return (
    <>
<GoToTop />
<section id="galleryy" className="d-flex align-items-center justify-content-center" style={{marginTop: '9vh'}}>
         <div className="container" style={{marginBottom: '30px'}}>
     
           <div className="row justify-content-center">
             <div className="col-xl-6 col-lg-8">
               <h1>Video Gallery</h1>
               {/* <h2>To help with community projects</h2> */}
             </div>
           </div>
     
         
     
         </div>
       </section>

<section id="features" className="features" style={{marginTop: '5vh'}}>
        <div className="container-fluid"  style={{maxWidth: '200vh'}}>
  

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




                            <div className="col-sm-6 col-md-6 col-lg-4 my-2" >
                              <div className="blog grid-blog" id="images">
                                  <div className="blog-image">
                                  <img src="https://firebasestorage.googleapis.com/v0/b/files-bf645.appspot.com/o/Videos%2Fthumbnails%2Fhealth.JPG?alt=media&token=6144d0ce-40f9-4f5c-9e88-5f20f159572e" className="img-fluid" alt=""/>
                                  </div>
                                  <div className="blog-content" style={{background: 'linear-gradient(95.24deg, #372451 0%, #684096 137.16%)', color: 'white', marginTop: '-31.5px', borderRadius: '15px'}}>
                                  <h5 style={{fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif ', fontWeight: 'bold'}}>Wellness Drive : Medical & Health Checkup Camp | Dhemaji</h5>
                                  <div className="row">
                                      <div className="col"> <p style={{color: 'white'}}>4th April 2022</p></div>
                                      <div className="col">  <Link to="/video5" className="btn" style={{fontStyle: 'italic', fontSize: '13px', float:'right',color:'white'}} ><i class="fa fa-play-circle" aria-hidden="true"></i> Watch</Link></div>
                                  </div>
                                  </div>
                                </div>
                            </div>


                            <div className="col-sm-6 col-md-6 col-lg-4 my-2" >
                              <div className="blog grid-blog" id="images">
                                  <div className="blog-image">
                                  <img src="https://firebasestorage.googleapis.com/v0/b/files-bf645.appspot.com/o/Videos%2Fthumbnails%2Fmhealth.JPG?alt=media&token=d1fc75fa-f348-47e3-b6e1-519c957bbc00" className="img-fluid" alt=""/>
                                  </div>
                                  <div className="blog-content" style={{background: 'linear-gradient(95.24deg, #372451 0%, #684096 137.16%)', color: 'white', marginTop: '-31.5px', borderRadius: '15px'}}>
                                  <h5 style={{fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif ', fontWeight: 'bold'}}>MENTAL HEALTH AWARENESS | Miss Trishna Das | Wake With Wellness</h5>
                                  <div className="row">
                                      <div className="col"> <p style={{color: 'white'}}>17th February 2022</p></div>
                                      <div className="col">  <Link to="/video4" className="btn" style={{fontStyle: 'italic', fontSize: '13px', float:'right',color:'white'}} ><i class="fa fa-play-circle" aria-hidden="true"></i> Watch</Link></div>
                                  </div>
                                  </div>
                                </div>
                            </div>


                         

</div>


        <div style={{marginTop:"35px"}}></div>

{/* 2nd Row start */}
<div className="row">


                          <div className="col-sm-6 col-md-6 col-lg-4 my-2" >
                              <div className="blog grid-blog" id="images">
                                  <div className="blog-image">
                                  <img src="https://firebasestorage.googleapis.com/v0/b/files-bf645.appspot.com/o/Videos%2Fthumbnails%2Fprabhati.JPG?alt=media&token=288412d5-3027-478f-aca4-f5ff60b8be94" className="img-fluid" alt=""/>
                                  </div>
                                  <div className="blog-content" style={{background: 'linear-gradient(95.24deg, #372451 0%, #684096 137.16%)', color: 'white', marginTop: '-31.5px', borderRadius: '15px'}}>
                                  <h5 style={{fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif ', fontWeight: 'bold'}}>PRABHATI- The Dawn of a Vital Outlook | Wake With Wellness</h5>
                                  <div className="row">
                                      <div className="col"> <p style={{color: 'white'}}>18th January 2022</p></div>
                                      <div className="col">  <Link to="/video3" className="btn" style={{fontStyle: 'italic', fontSize: '13px', float:'right',color:'white'}} ><i class="fa fa-play-circle" aria-hidden="true"></i> Watch</Link></div>
                                  </div>
                                  </div>
                                </div>
                            </div>


                            <div className="col-sm-6 col-md-6 col-lg-4 my-2" >
                              <div className="blog grid-blog" id="images">
                                  <div className="blog-image">
                                  <img src="https://firebasestorage.googleapis.com/v0/b/files-bf645.appspot.com/o/Videos%2Fthumbnails%2Fprabhati%20(1).jpg?alt=media&token=b5e989a5-973d-4667-a0cc-330985993534" className="img-fluid" alt=""/>
                                  </div>
                                  <div className="blog-content" style={{background: 'linear-gradient(95.24deg, #372451 0%, #684096 137.16%)', color: 'white', marginTop: '-31.5px', borderRadius: '15px'}}>
                                  <h5 style={{fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif ', fontWeight: 'bold'}}>Prabhati- The Dawn Of A Vital Outlook | Teaser | Wake With Wellness</h5>
                                  <div className="row">
                                      <div className="col"> <p style={{color: 'white'}}>18th December 2021</p></div>
                                      <div className="col">  <Link to="/video2" className="btn" style={{fontStyle: 'italic', fontSize: '13px', float:'right',color:'white'}} ><i class="fa fa-play-circle" aria-hidden="true"></i> Watch</Link></div>
                                  </div>
                                  </div>
                                </div>
                            </div>


                            <div className="col-sm-6 col-md-6 col-lg-4 my-2" >
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

  
</div>
{/* 2nd Row ends */}


</div>


  </section>   
 
    

      
    </>
  )
}

export default Cat
