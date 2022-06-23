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
            Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.
            </div>
        </div>
        <div className="imp-box">
            <div className="imp-box-single">
            <div className="imp-box-circle">
                <div className="big-circle"></div>
                <div className="small-circle">
                        01
                </div>
            </div>
            <div className="imp-box-head">Get Up & Running In No Time</div>
            <div className="imp-box-content">At vero eos accusamus iusto odio dignissims ducimus blanditiis praesentium voluptatum deleniti atque corrupti dolores et quas.</div>
            </div>
            <img className="imp-img" src={ICONS.ARROW} alt="arrow"/>
            <div className="imp-box-single">
            <div className="imp-box-circle">
            <div className="big-circle"></div>
            <div className="small-circle">
                        02
            </div>
            </div>
            <div className="imp-box-head">Just Few Lines Of Code</div>
            <div className="imp-box-content">At vero eos accusamus iusto odio dignissims ducimus blanditiis praesentium voluptatum deleniti atque corrupti dolores et quas.</div>
            </div>
            <img className="imp-img" src={ICONS.ARROW} alt="arrow"/>
            <div className="imp-box-single">
            <div className="imp-box-circle">
            <div className="big-circle"></div>
            <div className="small-circle">
                        03
            </div>
            </div>
            <div className="imp-box-head">Speaks Developer's Language</div>
            <div className="imp-box-content">At vero eos accusamus iusto odio dignissims ducimus blanditiis praesentium voluptatum deleniti atque corrupti dolores et quas.</div></div>
        </div>
      </div>
    )
}

export default Implementation;