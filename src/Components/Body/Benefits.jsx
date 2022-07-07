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
        With the Communication Scaffold, transform any existing Enterprise Software System into something with video conferencing capabilities. And with our plug and play architecture, you get this added capability without any compromises to your data privacy. 
        </div>
      </div>
      <div
        className="benefits-box"
        data-aos="fade-left"
      >
        {BenefitData.map(item => {
          return (
            <Template
              key={item.item}
              image={item.icon}
              head={item.head}
              content={item.content}
              type={item.type}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Benefits;
