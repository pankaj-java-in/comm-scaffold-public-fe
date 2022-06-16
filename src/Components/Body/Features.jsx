import React from "react";
import "./Body.scss";
import chatImage from "../../Utlis/Icons/image 64.svg";
import breakOut from "../../Utlis/Icons/image 70.svg";
import dynamic from "../../Utlis/Icons/image 71.svg";
import recording from "../../Utlis/Icons/image 72.svg";

const Features = () => {
  return (
    <div className="main-features">
      <div className="features">
        <div className="content">
          <div className="head">Features</div>
          <div className="about">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment.
          </div>
        </div>
        <div className="rotation">
          <div className="horizontal-scroll-wrapper squares">
            <div className="box" style={{marginTop:"310px"}}>
              <div className="items">
                <div className="icon">
                  <img src={chatImage} alt="chatIcon"/>
                </div>
                <div className="item-head">
                Private/Public Chat
                </div> 
                <div className="item-content">
                Quickly add drop-in 1-1 call with lobby, waiting room, routing. Privacy compliant.
                </div>
              </div>
            </div>
            <div className="box">
            <div className="items">
                <div className="icon">
                  <img src={breakOut} alt="breakout"/>
                </div>
                <div className="item-head">
                Breakout Rooms
                </div>
                <div className="item-content">
                Quickly add drop-in 1-1 call with lobby, waiting room, routing. Privacy compliant.
                </div>
              </div>
              </div>
              <div className="box">
            <div className="items">
                <div className="icon">
                  <img src={dynamic} alt='dyanmic'/>
                </div>
                <div className="item-head">
                   Dynamic Role Change
                </div>
                <div className="item-content">
                Quickly add drop-in 1-1 call with lobby, waiting room, routing. Privacy compliant.
                </div>
              </div>
              </div>
              <div className="box" style={{marginBottom:"-200px"}}>
            <div className="items">
                <div className="icon">
                  <img src={recording} alt="recording"/>
                </div>
                <div className="item-head" style={{fontSize:"19px"}}>
                Recording with Custom Layout
                </div>
                <div className="item-content">
                Quickly add drop-in 1-1 call with lobby, waiting room, routing. Privacy compliant.
                </div>
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
