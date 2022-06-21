import React, {useEffect} from "react";
import secImg from "../../Utlis/Icons/image 69.svg";
import Vector from "../../Utlis/Icons/Vector 7.svg";
import Button from "../Button/Button";
import AOS from "aos";

const Security = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

    return(
        <div className="main-security">
          <div className="security" data-aos="fade-right">
            <div className="sec-head">Your Data, Your Choice</div>
            <div className="sec-content">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.</div>
            <div className="sec-button">
           <div className="btn"><Button/></div>
           <img className="vec" src={Vector}/>
            </div>
          </div>
          <div className="security-img" data-aos="fade-right">
            <img className="sec-img" src={secImg} alt="security"/>
          </div>
        </div>
    )
}

export default Security;