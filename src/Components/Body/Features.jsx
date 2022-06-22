import React,{useEffect} from "react";
import "./Body.scss";
import AOS from "aos";
import FeatureTemplate from "./FeatureTemplate";
import FeatureData from "../../Utlis/FeatureData.json";
import ICONS from "../../Utlis/Constants/icons";

const Features = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <div className="main-features">
      <div className="features">
        <div className="content" data-aos="fade-down">
          <div className="head">Features</div>
          <div className="about">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment.
          </div>
        </div>
        <div className="rotation" data-aos="fade-left">
          <div className="horizontal-scroll-wrapper squares">
            <div className="box" style={{marginTop:"310px"}}>
              <div className="items">
                <div className="icon">
                  <img src={ICONS.MESSAGE_ICON} alt="chatIcon"/>
                </div>
                <div className="item-head">
                Private/Public Chat
                </div> 
                <div className="item-content">
                Quickly add drop-in 1-1 call with lobby, waiting room, routing. Privacy compliant.
                </div>
              </div>
            </div>
            {
              FeatureData.map( x => {
                return (
                  <FeatureTemplate
                  key={x.item}
                  image={x.icon}
                  head={x.head}
                  content={x.content}
                  />
                )
              })
            }
              <div className="box" style={{marginBottom:"-170px"}}>
            <div className="items">
                <div className="icon">
                  <img src={ICONS.RECORDING_ICON} alt="recording"/>
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
