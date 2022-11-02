import React, { useState, useEffect, Fragment } from "react";
import {db} from "../firebase";
import loader from "./assets/image/loader.gif"
import GoToTop from '../GoToTop'
import './assets/css/Team.css'


function Team() {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(false);


  const ref = db.collection("admins").orderBy('no');

  //REALTIME GET FUNCTION
  function getAdmins() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setAdmins(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getAdmins();
    // eslint-disable-next-line
  }, []);






  return (
    <Fragment>

<><GoToTop />
    <div className="container-fluid" style={{marginTop: '20vh',maxWidth: '200vh'}}>
     

  
     
    <section id="team" className="team">
    <div className="section-title">
          <h2>Board members</h2>
         
        </div>
      <div className="container">
        <div className="row">
        {loading ? <div class="container justify-content-center">
<h4 style={{textAlign: 'center'}}><img src={loader} alt="" style={{width: '40vh', height: 'auto'}}/></h4>
</div> : null}
              {admins.map((data) => (


                  <div className="col-lg-4" key={data.id}>
                  <div className="member" style={{marginTop: "10px"}} >
                  <div class="pic"><img src={data.photo} class="img-fluid" alt=""/></div>
               
                    <div className="member-info">
                     
                      <h4>{data.name}</h4>
                      <span>{data.dept}</span>

                      <div class="social">
                      
                      <a href={data.fb}><i class="fa fa-facebook"></i></a>
                      <a href={data.insta}><i class="fa fa-instagram"></i></a>
 
                    </div>
                    
                    </div>
                  </div>
                  </div>
              ))}
                    
             
     </div>
      </div>
      
     </section> 
      </div>
    </>



 
    </Fragment>
  );
}

export default Team;