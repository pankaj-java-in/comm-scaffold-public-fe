import React, { useEffect } from "react";
import Template from "./Template";
import BenefitData from "../../Utlis/BenefitData.json";
import AOS from "aos";
import ICONS from "../../Utlis/Constants/icons";

const Benefits = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
  return (
    <div className="main-benefits">
     <div className="block-corner" data-aos="fade-down">
      <img src={ICONS.LEFT_CORNER}/>
      <img src={ICONS.RIGHT_CORNER}/>
     </div>
      <div
        className="benefits"
        data-aos="fade-right"
      >
        <div className="b-head">Benefits</div>
        <div className="b-content">
        With our plug and play infrastructure, Communication Scaffold is an easy to integrate and manage reusable code that can be added to any existing ENTERPRISE SOFTWARE SYSTEM and give it video conferencing capabilities.
        <br/>
        <br/>
        With the Communication Scaffold, transform any existing Enterprise Software System into something with video conferencing capabilities. And with our plug and play architecture, you get this added capability without any compromises to your data privacy. 
        </div>
      </div>
      <div
        className="benefits-box"
        data-aos="fade-left"
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
