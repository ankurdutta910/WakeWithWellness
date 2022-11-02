import React from 'react'
import GoToTop from '../GoToTop'
import about from './assets/image/about.JPG'

function About() {
  return (

    <>
     <GoToTop />
     
     <section id="aboutus" className="d-flex align-items-center justify-content-center" style={{marginTop: '10vh'}}>
  <div className="container" style={{marginBottom: '30px'}}>

    <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
      <div className="col-xl-12 col-lg-8">
        <h1>About Us</h1>
        <h2>A community-based organization registered under <strong style={{color:'#11b8f5'}}>UNITED NATIONS</strong></h2>
      </div>
    </div>

  

  </div>
</section>
       


    <section id="about-us" className="about-us" style={{marginTop: '20px', marginBottom: '50px'}}>
      <div className="container-fluid" style={{maxWidth: '200vh'}}>
      <h2 style={{fontWeight: 'bold'}}>Who we are</h2>
        <div className="row content">
          <div className="col-lg-8" data-aos="fade-right">
        
            <p style={{textAlign: 'justify', fontSize: '14px'}}>
              Wake With Wellness is a community-based organization established to exercise good actions for the rehabilitation of communities regarding health and social awareness without ascertaining the foundations of legal norms. The focus is to build equality across society in all streams – health care, environment, access to technology, quality of education, etc. We use technology for managing administrative functions and daily business operations.
              </p>
              <p style={{textAlign: 'justify',fontSize: '14px'}}>
                To improve the attitude of the community about the delivery of palliative and health care services, we as an organization will provide relentless efforts to make them believe that palliative and health care can not only be provided by professionals but also by community volunteers. Succumbing to a large population, the only way to provide palliative and health care to people in need is through community participation also designed towards spreading health awareness and conveyance of information crucial to a healthy living.
              </p>

<br></br>
<br></br>
            <p style={{fontSize: '14px'}}>
              There are six working departments -
            </p>

            <ul style={{fontSize: '14px'}}>
              <div className="row">
                <div className="col-lg"><li style={{backgroundColor:'#cce3f2', padding:'8px', fontWeight:'bold',color:'#0072bc',maxWidth:'50vh'}}><i class="fa fa-check" aria-hidden="true"></i> Curation Department</li></div>
                <div className="col-lg"><li style={{backgroundColor:'#cce3f2', padding:'8px', fontWeight:'bold',color:'#0072bc',maxWidth:'50vh',marginTop:'4px'}}><i class="fa fa-check" aria-hidden="true"></i> Editorial Department</li></div>
              </div>
            

              <div className="row">
                <div className="col-lg"><li style={{backgroundColor:'#cce3f2', padding:'8px', fontWeight:'bold',color:'#0072bc',maxWidth:'50vh',marginTop:'4px'}}><i class="fa fa-check" aria-hidden="true"></i> Public Relations Department</li>            </div>
                <div className="col-lg"><li style={{backgroundColor:'#cce3f2', padding:'8px', fontWeight:'bold',color:'#0072bc',maxWidth:'50vh',marginTop:'4px'}}><i class="fa fa-check" aria-hidden="true"></i> Social Media Marketing Department</li></div>
              </div>

              <div className="row">
                <div className="col-lg"><li style={{backgroundColor:'#cce3f2', padding:'8px', fontWeight:'bold',color:'#0072bc',maxWidth:'50vh',marginTop:'4px'}}><i class="fa fa-check" aria-hidden="true"></i> Events Department</li></div>
                <div className="col-lg"><li style={{backgroundColor:'#cce3f2', padding:'8px', fontWeight:'bold',color:'#0072bc',maxWidth:'50vh',marginTop:'4px'}}><i class="fa fa-check" aria-hidden="true"></i> Design & Media Department</li></div>
              </div>


            
             
              
              
            </ul>
             
          </div>
          <div className="col-lg-4 pt-4 pt-lg-0">
            
            <img src={about} className="img-fluid" alt=""/>
            
          </div>

         
        </div>

    

      </div>


      <div className="container-fluid" style={{maxWidth: '200vh',textAlign: 'justify',fontSize: '14px'}}>
            <p><br></br>Working in tandem to our cause of spreading awareness and delivery of palliative and healthcare services beyond bounded limits, 
            we the members of Wake With Wellness intent to serve and care people and generations with a commitment of guiding 
            all fellow beings towards a healthy and robust existence along with an attempt to maximise provisions of health care which effortlessly reaches out to the needful.</p>
            
            
            
            <h5 style={{fontWeight:'bold',color:'#0072bc',textAlign:'left'}}>With this vision of steering people for a hale and hearty life form, <span>
              ‘we are People Caring For People’</span>
            </h5>
          </div>



          <div className="container-fluid" style={{marginTop: '20px', maxWidth: '200vh'}}>
         
            <div className="row">
            <div className="col-lg my-2"><img src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/gallery%2FL4.jpg?alt=media&token=cc99bb8e-2df5-478b-ae5d-a5fd69c3aa66" className="img-fluid" alt=""/></div>
            <div className="col-lg my-2"><img src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/gallery%2FL6.jpg?alt=media&token=01f5d81a-6090-4430-a146-637061fb8a1d" className="img-fluid" alt=""/></div>
              <div className="col-lg my-2"><img src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/prabhati%2F1.jpeg?alt=media&token=a0075f15-8f52-4a38-bb4f-b6005474756c" className="img-fluid" alt=""/></div>
              <div className="col-lg my-2"><img src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/gallery%2FL2.jpg?alt=media&token=01624696-123b-4097-9626-19dd37ad977f" className="img-fluid" alt=""/></div>
            
              <div className="col-lg my-2"><img src="https://firebasestorage.googleapis.com/v0/b/website-818ed.appspot.com/o/gallery%2Fcleanliness1a.jpeg?alt=media&token=f9ab2aab-67e0-4871-83cb-8d34e182d241" className="img-fluid" alt=""/></div>
            </div>
          </div>



    </section>
  </>
  )
}

export default About
