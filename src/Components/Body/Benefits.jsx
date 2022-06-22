import React, { useEffect } from "react";
import Template from "./Template";
import BenefitData from "../../Utlis/BenefitData.json";
import AOS from "aos";
import LeftCorner from "../../Utlis/Icons/corner1.svg";
import RightCorner from "../../Utlis/Icons/corner2.svg";

const Benefits = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="main-benefits">
     <div className="block-corner" data-aos="fade-down">
      <img src={"https://stage-cs-attachment.s3.ap-south-1.amazonaws.com/public/corner1.svg"}/>
      <img src={"https://stage-cs-attachment.s3.ap-south-1.amazonaws.com/public/corner2.svg"}/>
     </div>
      <div
        className="benefits"
        data-aos="fade-right"
      >
        <div className="b-head">Benefits</div>
        <div className="b-content">
          With the Communication Scaffold, transform any existing Enterprise
          Software System into something with video conferencing capabilities.
          And with our plug and play architecture, you get this added capability
          without any compromises to your data privacy.
        </div>
      </div>
      <div
        className="benefits-box"
        data-aos="fade-right"
      >
        {BenefitData.map((x) => {
          return (
            <Template
              key={x.item}
              image={x.icon}
              head={x.head}
              content={x.content}
              type={x.type}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Benefits;
