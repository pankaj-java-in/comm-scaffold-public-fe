import React, {useEffect} from "react";
import Button from "../Button/Button";
import AOS from "aos";
import ICONS from "../../Utlis/Constants/icons";

const Security = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

    return(
        <div className="main-security">
          <div className="security" data-aos="fade-right">
            <div className="sec-head">Your Data, Your Choice</div>
            <div className="sec-content">With Communication Scaffold, enjoy a video conferencing experience like no other. With cross platform functionality and no data sharing, be in complete control of your meetings. </div>
            <div className="sec-button">
           <div className="btn"><Button/></div>
           <img className="vec" src={ICONS.VECTOR}/>
            </div>
          </div>
          <div className="security-img" data-aos="fade-left">
            <video className="sec-img" loop="true" alt="security" autoPlay="true" muted preload="auto" controls>
            <source src={"https://stage-cs-attachment.s3.ap-south-1.amazonaws.com/ae483ff7-2e74-45f5-a15e-4defed2fbee9_Comm_Scaffold.mp4"} type="video/mp4"/>
              </video>
          </div>
        </div>
    )
}

export default Security;