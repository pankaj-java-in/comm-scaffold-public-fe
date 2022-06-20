import React, { useEffect } from "react";
import Template from "./Template";
import BenefitData from "../../Utlis/BenefitData.json";
import Decor from "../../Utlis/Icons/Decore.svg";
import AOS from "aos";

const Benefits = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="main-benefits">
      <img
        src={Decor}
        data-aos="fade-down"
        style={{width:"1296px"}}
      />
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