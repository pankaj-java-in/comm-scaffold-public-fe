import React from "react";
import HelpingTemplate from "./HelpingTemplate";
import HelpingData from "../../Utlis/HelpingData.json";

const HelpingIndustries = () => {
  return (
    <div className="main-help">
      <div className="help">
        <div className="help-head">Industries Most Benefited By Us</div>
        <div className="help-content">
        In case you belong to any of the following industries then Communication Scaffold is just the tool for you 
        </div>
      </div>
      <div className="box-square">
        {HelpingData.map(item => {
          return (
            <HelpingTemplate
              key={item.item}
              head={item.head}
              content={item.content}
              image={item.icon}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HelpingIndustries;
