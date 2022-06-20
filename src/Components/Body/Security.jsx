import React from "react";
import secImg from "../../Utlis/Icons/image 69.svg";
import Vector from "../../Utlis/Icons/Vector 7.svg";
import Button from "../Button/Button";
const Security = () => {
    return(
        <div className="main-security">
          <div className="security">
            <div className="sec-head">Security Protocols & Privacy for a Secure Video Conferencing</div>
            <div className="sec-content">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.</div>
            <div className="sec-button">
           <div className="btn"><Button/></div>
           <img className="vec" src={Vector}/>
            </div>
          </div>
          <div className="security-img">
            <img className="sec-img" src={secImg} alt="security"/>
          </div>
        </div>
    )
}

export default Security;