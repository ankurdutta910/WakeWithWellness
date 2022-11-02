import React from 'react';
import './styles.css';
import GoToTop from '../../../../../GoToTop'

const Header = () => (
  <>
   <GoToTop />
   <header className='home-header' style={{marginTop: '10vh'}}>
   <section id="head" className="d-flex align-items-center justify-content-center" >
    <div className="container" style={{marginBottom: '30px'}}>

      <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
        <div className="col-xl-6 col-lg-8">
          <h1>Read our blogs</h1>
          <p style={{color: "white"}}>Email at <a href="mailto: 'wakewithwellness@gmail.com'" style={{color: 'orange', fontWeight: 'bold'}}>wakewithwellness@gmail.com</a> to feature your writings.</p>
        </div>
      </div>

     

    </div>
  </section>
  
   
   
   

  </header></>
);

export default Header;
