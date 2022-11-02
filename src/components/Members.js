import React, { useState, useEffect, Fragment } from "react";
import {db} from "../firebase";
import loader from "./assets/image/loader.gif"
import GoToTop from '../GoToTop'


function Members() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = db.collection("users").orderBy('no');

  //REALTIME GET FUNCTION
  function getMembers() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setMembers(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getMembers();
    // eslint-disable-next-line
  }, []);






  return (
    <Fragment>

<><GoToTop />
    <div className="container-fluid" style={{marginTop: '20vh',maxWidth: '200vh'}}>
    
  
     
    <section id="team" className="team">
    <div className="section-title">
          <h2>Member Coordinators</h2>
         
        </div>
      <div className="container">
        <div className="row">
        {loading ? <div class="container justify-content-center">
<h4 style={{textAlign: 'center'}}><img src={loader} alt="" style={{width: '40vh', height: 'auto'}}/></h4>

</div> : null}
              {members.map((data) => (


                  <div className="col-lg-4" key={data.id}>
                  <div className="member" style={{marginTop: "10px"}} >
                  <a href={data.link}><img src={data.link} className="rounded" style={{width: "50%", height: "22vh", objectFit: 'cover', marginBottom: '10px'}} alt=""/></a> 
                 
                    <div className="member-info" style={{marginTop:'-15px'}}>
                    <h5 class="badge rounded-pill" style={{backgroundColor:'#cce3f2',fontSize: "16px", marginBottom: "15px",color:'#0072bc'}}>{data.status}</h5>
                      <h4>{data.name}</h4>
                      <span style={{fontSize: "12px", marginTop: "-5px"}}>( {data.department} )</span>
                     

                    
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

export default Members;