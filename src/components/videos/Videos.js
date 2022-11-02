import React, { useRef, useEffect, Fragment } from "react";
import GoToTop from '../../GoToTop'
import './style.css'
import ReactPlayer from "react-player";
import { useNavigate } from 'react-router-dom';


function Videos({title, date, video, image, desc}) {

   const navigate  = useNavigate();

   const Glimpses = () => {
    navigate('/video6');
} 

const Health = () => {
  navigate('/video5');
} 

const MHealth = () => {
  navigate('/video4');
} 

const Prabhati = () => {
  navigate('/video3');
} 

const PrabhatiT = () => {
  navigate('/video2');
} 

const Food = () => {
  navigate('/video1');
} 

 

     const videoRef = useRef();

     useEffect(() => {
       videoRef.current.addEventListener(
         "contextmenu",
         function(e) {
           e.preventDefault();
         },
         false
       );
   
       return videoRef.current.removeEventListener(
         "contextmenu",
         function(e) {
           e.preventDefault();
         },
         false
       );
     }, []);



  return (
<>
<GoToTop />
     <div class="container-fluid" id="videobox">

  <div class="row">
    <div class="col col-lg-8">
    <Fragment>
      <div ref={videoRef}>
        <ReactPlayer
          width="100%"
          height="100%"
          controls={true}
          aspectRatio='16:9'
          url={video}
          loop={true}
          config={{ file: { attributes: { controlsList: "download" } } }}
        />
      </div>

      <div style={{marginTop: '2px'}}>
        <h6 style={{fontWeight:'600', fontSize:'20px',backgroundColor:'#cce3f2', padding:'8px',color:'#0072bc',width:'100%'}}>{title}</h6>
      <p style={{marginTop: '-5px', fontSize:'12px', fontWeight:'500', color:'#919090'}}>Posted on: {date}</p><hr></hr>
     
      <p style={{fontSize:'12px', textAlign:'justify'}}>{desc}</p>
      <p style={{fontSize:'12px', textAlign:'justify'}}>
        
          Follow us on 
          <br></br><br></br>
          Instagram: <a style={{color: '#0ab0fc',fontWeight:'bold'}} rel="noopener noreferrer" target="_blank" href="https://bit.ly/3I0wG7c">https://bit.ly/3I0wG7c</a>
          <br></br><br></br>
          Facebook: <a style={{color: '#0ab0fc',fontWeight:'bold'}} rel="noopener noreferrer" target="_blank" href="https://bit.ly/3bu13qh">https://bit.ly/3bu13qh</a>
          <br></br><br></br>
          Linkedin: <a style={{color: '#0ab0fc',fontWeight:'bold'}}  rel="noopener noreferrer" target="_blank" href="https://bit.ly/3OSb3bd">https://bit.ly/3OSb3bd</a>
          <br></br><br></br>
          Twitter: <a style={{color: '#0ab0fc',fontWeight:'bold'}} rel="noopener noreferrer" target="_blank" href="https://bit.ly/3bCQqBx">https://bit.ly/3bCQqBx</a> </p>
      <hr></hr>
      </div>
    </Fragment>

    </div>
    <div class="col-lg-4">
   <div class="content" style={{ height: '100%'}}>


   <div style={{border: "1px solid #ccc", width: "16vh",padding: '8px', marginBottom:'5px', borderRadius:'10px'}}>
   Now playing...
   </div>

{/* Playing video starts */}
                <div class="card mb-3" id="playingBox">
                  <div class="row g-0">
                  <img src={image}  id="thumbnail"  alt=".."/>
                  </div>
              </div>
{/* Playing video ends */}

<hr></hr>
<div style={{border: "1px solid #ccc", width: "15vh",padding: '8px', marginBottom:'5px', borderRadius:'10px'}}>
Suggestions...
</div>

{/* Glimpses */}
              <div class="card mb-3" onClick={Glimpses} id="playingBox">
                  <div class="row g-0">
                  <img src="https://firebasestorage.googleapis.com/v0/b/files-bf645.appspot.com/o/Videos%2Fcat%2Fglimpses.png?alt=media&token=82483584-3e4c-4b2b-aea7-d9cc911b0fbf" id="thumbnail"  alt="Glimpses"/>
                  </div>
              </div>
{/* Glimpses */}

{/* Health Checkup */}
              <div class="card mb-3" onClick={Health} id="playingBox">
                  <div class="row g-0">
                  <img src="https://firebasestorage.googleapis.com/v0/b/files-bf645.appspot.com/o/Videos%2Fcat%2Fhealth.png?alt=media&token=bf683dc9-8c8e-4458-b0af-bf7f071b9d69"  id="thumbnail"  alt="Health"/>
                  </div>
              </div>
{/* Health Checkup */}

{/* Mental Health */}
              <div class="card mb-3" onClick={MHealth} id="playingBox">
                  <div class="row g-0">
                  <img src="https://firebasestorage.googleapis.com/v0/b/files-bf645.appspot.com/o/Videos%2Fcat%2FMhealth.png?alt=media&token=3214152f-71bb-4892-b121-a8ea3e71247b"  id="thumbnail"  alt="MHealth"/>
                  </div>
              </div>
{/* Mental Health */}

{/* Prabhati*/}
              <div class="card mb-3" onClick={Prabhati} id="playingBox">
                  <div class="row g-0">
                     <img src="https://firebasestorage.googleapis.com/v0/b/files-bf645.appspot.com/o/Videos%2Fcat%2Fprabhati1.png?alt=media&token=742963ce-a318-4d20-9b05-4e23ce462ec2"  id="thumbnail"  alt="Prabhati T"/>
                  </div>
              </div>
{/* Prabhati*/}

{/* Prabhati Teaser */}
              <div class="card mb-3" onClick={PrabhatiT} id="playingBox" >
                  <div class="row g-0">
                  <img src="https://firebasestorage.googleapis.com/v0/b/files-bf645.appspot.com/o/Videos%2Fcat%2Fprabhati2.png?alt=media&token=f08c7bbe-0053-4f83-86f4-1c4de8a27f0d"  id="thumbnail"  alt="Prabhati"/>
                  </div>
              </div>
{/* Prabhati Teaser */}

{/* Food Drive */}
              <div class="card mb-3" onClick={Food} id="playingBox">
                  <div class="row g-0">
                  <img src="https://firebasestorage.googleapis.com/v0/b/files-bf645.appspot.com/o/Videos%2Fcat%2Ffood.png?alt=media&token=96457eba-ff53-40bd-82d3-6479264cd6cb"  id="thumbnail"  alt="FoodDrive"/>
                  </div>
              </div>
{/* Food Drive */}


   </div>

    </div>


  </div>
</div>


</>
      
  )
}

export default Videos

