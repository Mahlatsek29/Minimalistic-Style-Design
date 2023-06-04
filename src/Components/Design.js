import React from 'react';
import './Design.css';
import Grey from "./Assets/Images/Grey.png";
const Design = () => {
  return (
    <div className="App">
    <div className="fullscreen-layout">
    <div className="box">
    <div className="inner-box">
    <h1>Minimalistic</h1>
    <h3>Style Furniture</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          </div>
          <div className="img">
            <img src={Grey} alt="Grey Img" />
          </div>
          <div className="button">
            <button className="btn">Shop Now</button>
          </div>
        </div>
        <div className="img2">
        
          <div className="Design-color"></div>
        </div>
      </div>
      <div className="Design-text"></div>
    </div>
  );
};
 
export default Design;
