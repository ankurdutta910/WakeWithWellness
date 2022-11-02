import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom"
import Privacy from './components/Policy/PrivacyPolicy';


import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Team from './components/Team';


import PageNotFound from './components/PageNotFound';


import Members from './components/Members';
import Volunteers from './components/Coordinators';
import Footer from './components/Footer';
import BHome from './components/Blogs/pages/Home/index'
import Blog from './components/Blogs/pages/Blog/index';
import Fundraiser from "./components/Fundraiser";
import Recruitment from './components/Recruitment';
import Volunteership from './components/Volunteership';
import BloodCenter from './components/BloodCenter';
import Cat from './components/videos/Cat';
import Events from "./components/Events";


import Videos from './components/videos/Videos'
import CleanDrive from './components/CleanDrive';

import PaymentSuccess from "./components/PaymentSuccess";

import ChildrenDayFund from "./components/ChildrenDayFund";


function App() {
 
 

  return (
    <div className="www">


   
    <Navbar/>
  
      <Routes>
     
      <Route path="/" element={ <Home/> } />
      <Route path="/about" element={ <About/> } />
      <Route path="/contact" element={ <Contact/> } />
      <Route path="/gallery" element={ <Gallery/> } />
      <Route path="/team" element={<Team/>} />
      <Route path="/members" element={<><Members/><Volunteers/></>} />
      <Route path='/blogs' element={<BHome/>} />
      <Route path='/blog/:id' element={<Blog/>} />
      <Route path='/fundraiser' element={<><ChildrenDayFund/><Fundraiser/></>} />
      <Route path='/recruitment' element={<Recruitment/>} />
      <Route path='/volunteership' element={<Volunteership/>} />
      <Route path='/videos' element={<Cat/>} />
      <Route path='/bloodcamp' element={<BloodCenter/>} />

      <Route path='/cleanliness_drive' element={<CleanDrive/>} />
      <Route path='/events' element={<Events/>} />
      <Route path='/success' element={<PaymentSuccess/>} />

      
      <Route path='/privacypolicy' element={<Privacy/>} />
     

      


     
    
      <Route path="/video1"  element={<><Videos desc={<div>Team Wake With Wellness has successfully extended hands to combat hunger and hygiene. We have accomplished the Wellness Drive on 26th of September 2021 , aimed at distributing food items and packed lunch to the underprivileged and needy.
        <br></br><br></br>
          Thank you all for helping us with the benefaction and logistical support.  <br></br><br></br></div>} 
          title="Wellness Drive: Food Donation | Wake With Wellness" date="6th October 2021" image="https://firebasestorage.googleapis.com/v0/b/files-bf645.appspot.com/o/Videos%2Fcat%2Ffood.png?alt=media&token=96457eba-ff53-40bd-82d3-6479264cd6cb" video="https://firebasestorage.googleapis.com/v0/b/files-bf645.appspot.com/o/Videos%2FWellness%20Drive-WakeWithWellness.mp4?alt=media&token=c3db8774-a21a-44f0-95d4-4394d7a01565"/> </>}/>
      
      
      <Route path="/video2"  element={<><Videos desc={<div>Some wondrous and delightful glimpses of 'Prabhati' - centred on Menstrual Hygiene, conducted at Jalukbari Girls High School Guwahati on 29 November, 2021.
      <br></br><br></br>
          The response and reciprocation was immensely unfeigned and cordial. Thank you all for the generous support and constant assistance for making this awareness campaign a success.  <br></br><br></br></div>} 
          title="Prabhati- The Dawn Of A Vital Outlook | Teaser" date="18th December 2021" image="https://firebasestorage.googleapis.com/v0/b/files-bf645.appspot.com/o/Videos%2Fcat%2Fprabhati2.png?alt=media&token=f08c7bbe-0053-4f83-86f4-1c4de8a27f0d" video="https://firebasestorage.googleapis.com/v0/b/files-bf645.appspot.com/o/Videos%2FPrabhati-%20The%20Dawn%20Of%20A%20Vital%20Outlook%20_%20Teaser.mp4?alt=media&token=cad580d3-67a2-4fa0-8ad5-e498a064f5a4"/> </>}/>
     
     
      <Route path="/video3"  element={<><Videos desc={<div>
          The official after-movie of "Prabhati/প্ৰভাতী/प्रभाती - The Dawn of Vital Outlook" organised by Wake With Wellness. Here’s a glimpse of the session covering the most critical aspects of the subject primarily based on menstrual hygiene along with the distribution of free sanitary napkins, refreshments and stationeries.
           <br></br><br></br>
          Venue : Jalukbari Girls High-School, GuwahatiDate : 29th November 2021.
          <br></br><br></br>

          Wake With Wellness is a community-based organization established to exercise good actions for the rehabilitation of communities regarding health and social awareness without ascertaining the foundations of legal norms. The focus is to build equality across society in all streams – health care, environment, access to technology, quality of education, etc. We use technology for managing administrative functions and daily business operations.
          <br></br><br></br>
          To improve the attitude of the community about the delivery of palliative and health care services, we as an organization will provide relentless efforts to make them believe that palliative and health care can not only be provided by professionals but also by community volunteers. Succumbing to a large population, the only way to provide palliative and health care to people in need is through community participation also designed towards spreading health awareness and conveyance of information crucial to a healthy living.
          <br></br><br></br>
          Working in tandem to our cause of spreading awareness and delivery of palliative and healthcare services beyond bounded limits, we the members of Wake With Wellness intent to serve and care people and generations with a commitment of guiding all fellow beings towards a healthy and robust existence along with an attempt to maximise provisions of health care which effortlessly reaches out to the needful.
          <br></br><br></br>
          With this vision of steering people for a hale and hearty life form, ‘we are People Caring For People’<br></br><br></br>
          </div>} title="PRABHATI- The Dawn of a Vital Outlook" date="18th January 2022" image="https://firebasestorage.googleapis.com/v0/b/files-bf645.appspot.com/o/Videos%2Fcat%2Fprabhati1.png?alt=media&token=742963ce-a318-4d20-9b05-4e23ce462ec2" video="https://firebasestorage.googleapis.com/v0/b/files-bf645.appspot.com/o/Videos%2FPRABHATI-%20The%20Dawn%20of%20a%20Vital%20Outlook.mp4?alt=media&token=17cc899d-2bb6-49e4-af5b-8f5e5e81c076"/> </>}/>
                
                
      
      
      
      <Route path="/video4"  element={<div><Videos desc={<div>Wake With Wellness is a community-based organization established to exercise good actions for the rehabilitation of communities regarding health and social awareness without ascertaining the foundations of legal norms. The focus is to build equality across society in all streams – health care, environment, access to technology, quality of education, etc. We use technology for managing administrative functions and daily business operations.
            <br></br><br></br>
            To improve the attitude of the community about the delivery of palliative and health care services, we as an organization will provide relentless efforts to make them believe that palliative and health care can not only be provided by professionals but also by community volunteers. Succumbing to a large population, the only way to provide palliative and health care to people in need is through community participation also designed towards spreading health awareness and conveyance of information crucial to a healthy living.
            <br></br><br></br>
            Working in tandem to our cause of spreading awareness and delivery of palliative and healthcare services beyond bounded limits, we the members of Wake With Wellness intent to serve and care people and generations with a commitment of guiding all fellow beings towards a healthy and robust existence along with an attempt to maximise provisions of health care which effortlessly reaches out to the needful.
            <br></br><br></br>
            With this vision of steering people for a hale and hearty life form, ‘we are People Caring For People’<br></br><br></br>
            </div>} title="MENTAL HEALTH AWARENESS | Miss Trishna Das | Wake With Wellness" date="17th February 2022" image="https://firebasestorage.googleapis.com/v0/b/files-bf645.appspot.com/o/Videos%2Fcat%2FMhealth.png?alt=media&token=3214152f-71bb-4892-b121-a8ea3e71247b" video="https://firebasestorage.googleapis.com/v0/b/files-bf645.appspot.com/o/Videos%2FMENTAL%20HEALTH%20AWARENESS%20_%20Miss%20Trishna%20Das%20_%20Wake%20With%20Wellness.mp4?alt=media&token=9197e13d-1b3d-42d8-a586-32680c0444c7"/> </div>}/>
      
      
      
      <Route path="/video5"  element={<><Videos desc={<div>Team Wake With Wellness has successfully organised 'Medical and Health CheckUp' under the initiative of Wellness Campaign in Dhemaji District of Assam.
            <br></br><br></br>
            Venue: 'Jesthakunja' Oldage Home Dhemaji    <br></br><br></br></div>} 
            title="Wellness Drive : Medical & Health Checkup Camp | WakeWithWellness | Dhemaji" date="4th April 2022" image="https://firebasestorage.googleapis.com/v0/b/files-bf645.appspot.com/o/Videos%2Fcat%2Fhealth.png?alt=media&token=bf683dc9-8c8e-4458-b0af-bf7f071b9d69" video="https://firebasestorage.googleapis.com/v0/b/files-bf645.appspot.com/o/Videos%2FWellness%20Drive%20_%20Medical%20%26%20Health%20Checkup%20Camp%20_%20WakeWithWellness%20_%20Dhemaji%20_.mp4?alt=media&token=2513978d-804f-4819-abf2-3f70801d9072"/> </>}/>
          
      
      
      <Route path="/video6"  element={<><Videos title="Glimpses of 2021-22 | Wake With Wellness" date="24th April 2022" image="https://firebasestorage.googleapis.com/v0/b/files-bf645.appspot.com/o/Videos%2Fcat%2Fglimpses.png?alt=media&token=82483584-3e4c-4b2b-aea7-d9cc911b0fbf" video="https://firebasestorage.googleapis.com/v0/b/files-bf645.appspot.com/o/Videos%2FGlimpses%20_%202021-22%20_%20Wake%20With%20Wellness.mp4?alt=media&token=0465f7c7-9512-4262-8e4d-469d2cabe4eb"/> </>}/>
       
      
    
    <Route path="*" element={<PageNotFound/>}/>
    
     
    </Routes>

    <Footer/>
   

</div>


  );
}

export default App;
