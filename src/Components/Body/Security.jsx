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
            <div className="sec-content">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.</div>
            <div className="sec-button">
           <div className="btn"><Button/></div>
           <img className="vec" src={ICONS.VECTOR}/>
            </div>
          </div>
          <div className="security-img" data-aos="fade-left">
            <img className="sec-img" src={ICONS.SECURITY} alt="security"/>
          </div>
        </div>
    )
}

export default Security;