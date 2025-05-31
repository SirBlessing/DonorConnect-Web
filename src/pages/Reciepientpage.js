// import { useState } from "react";
import React from 'react';
import "../App.css"; 
import Availabledonorcard from "../components/Availabledonorcard";
import FormWithMap from '../components/FormWithMap';
import Resultnearyoucard from '../components/Resultnearyoucard';
import NotificationList from "../components/NotificationList";
import tcard1 from "../images/tcard1.png";
import tcard2 from "../images/tcard2.png"; 
import tcard3 from "../images/tcard3.png";
import tcard4 from "../images/tcard4.png";
import nearu1 from "../images/nearu1.png";
import nearu2 from "../images/nearu2.png";
import nearu3 from "../images/nearu3.png";
import nearu4 from "../images/nearu4.png";


const Reciepientpage = () => {
    const donorsData = [
        { id: 1, name: "Amino Abu", distance: 56, time: "10min", bloodType: "B+", image: tcard1 },
        { id: 2, name: "Faith James", distance: 10, time: "20min", bloodType: "B+" },
        { id: 3, name: "Habiba Bello", distance: 10, time: "20min", bloodType: "B+" },
        { id: 4, name: "Chidima Mathew", distance: 56, time: "10min", bloodType: "B+", image: tcard2 },
        { id: 5, name: "Praise James", distance: 15, time: "30min", bloodType: "B+" },
        { id: 6, name: "Peter Adeyemi", distance: 56, time: "10min", bloodType: "B+", image: tcard3 },
        { id: 7, name: "Charle Williams", distance: 56, time: "10min", bloodType: "B+" },
        { id: 8, name: "Sarah Moses", distance: 56, time: "10min", bloodType: "B+", image: tcard4 },
        { id: 9, name: "Deborah Amos", distance: 76, time: "20min", bloodType: "B+" }
      ];
      
      
        // const [donors, setDonors] = useState(donorsData);
      
        const handleRequest = (donor) => {
          alert(`Request sent to ${donor.name}`);
        };
        const donorslist = [
          { name: "Amino Abu", distance: 5, time: "10min", bloodType: "B+", image: nearu2 },
          { name: "Faith James", distance: 10, time: "20min", bloodType: "B+", image: nearu1 },
          { name: "Moses Williams", distance: 15, time: "30min", bloodType: "B+" },
          { name: "Chidima Mathew", distance: 5, time: "10min", bloodType: "B+", image: nearu3 },
          { name: "Praise James", distance: 15, time: "30min", bloodType: "B+" },
          { name: "Esther Adams", distance: 10, time: "20min", bloodType: "B+", image: nearu4 },
        ];
        
    
      
  return (
    <div className="main">
    <div className="donor-container">
      <h1>Donor near you</h1>
    <p>See results that match your request</p>
    <div className="donor-grid">
      {donorsData.map((donor) => (
        <Availabledonorcard key={donor.id} donor={donor} onRequest={handleRequest} />
      ))}
    </div>
  </div>
  <FormWithMap/>
  <div className="resultnearmaindiv">
  <div className="donorListContainer">
    <h1>Result near you</h1>
    <p>See results that match your request</p>
    <div className="donorGrid">
      {donorslist.map((donor, index) => (
        <Resultnearyoucard key={index} {...donor} />
      ))}
    </div>
  </div>
</div>

  <div>
      <NotificationList />
    </div>
  </div>
);
};

export default Reciepientpage;
