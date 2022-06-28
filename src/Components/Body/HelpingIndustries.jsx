import React from "react";
import HelpingTemplate from "./HelpingTemplate";
import HelpingData from "../../Utlis/HelpingData.json";

const HelpingIndustries = () => {
  return (
    <div className="main-help">
      <div className="help">
        <div className="help-head">INDUSTRIES MOST BENEFITED BY US</div>
        <div className="help-content">
        In case you belong to any of the following industries then Communication Scaffold is just the tool for you 
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
