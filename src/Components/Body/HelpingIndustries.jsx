import React from "react";
import HelpingTemplate from "./HelpingTemplate";
import HelpingData from "../../Utlis/HelpingData.json";

const HelpingIndustries = () => {
  return (
    <div className="main-help">
      <div className="help">
        <div className="help-head">Helping Industries With Our Solution</div>
        <div className="help-content">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment.
        </div>
      </div>
      <div className="box-square">
        {HelpingData.map((x) => {
          return (
            <HelpingTemplate
              key={x.item}
              head={x.head}
              content={x.content}
              image={x.icon}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HelpingIndustries;
