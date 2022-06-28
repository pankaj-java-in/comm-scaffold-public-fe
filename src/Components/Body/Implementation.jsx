import React from "react";
import ICONS from "../../Utlis/Constants/icons";

const Implementation = () => {

    return(
      <div className="main-imp">
        <div className="imp">
            <div className="imp-head">
            Our Implementation Process
            </div>
            <div className="imp-content">
            You will be assisted throughout the integration process by the Oodles Team who has built these APIs from scratch. Hence, the integration is easy and smooth
            </div>
        </div>
        <div className="imp-box">
            <div className="imp-box-single">
            <img className="imp-box-circle" src="https://stage-cs-attachment.s3.ap-south-1.amazonaws.com/public/server+setup+(2).svg"/>
                <div className="small-circle">
                        01
                </div>
            <div className="imp-box-head">Server setup</div>
            <div className="imp-box-content">The backend application and database are hosted on cloud in dockerized containers. The APIs exposure, SSL certificate setup, Swagger setup, etc. We do it for you.</div>
            </div>
            <img className="imp-img" src={ICONS.ARROW} alt="arrow"/>
            <div className="imp-box-single">
            <img className="imp-box-circle" src="https://stage-cs-attachment.s3.ap-south-1.amazonaws.com/public/frontend+setup+(2).svg"/>
            <div className="small-circle">
                        02
            </div>
            <div className="imp-box-head">Frontend setup</div>
            <div className="imp-box-content">The frontend will be your own. Hence, your engineering team will lead it. However, we are there to guide them at each and every step. </div>
            </div>
            <img className="imp-img" src={ICONS.ARROW} alt="arrow"/>
            <div className="imp-box-single">
            <img className="imp-box-circle" src="https://stage-cs-attachment.s3.ap-south-1.amazonaws.com/public/support+and+maint+(2).svg"/>
            <div className="small-circle">
                        03
            </div>
            <div className="imp-box-head">Support and maintenance</div>
            <div className="imp-box-content">Our relationship does not end at setup completion. It begins there… any issues post go live, you can rely on us.</div></div>
        </div>
      </div>
    )
}

export default Implementation;