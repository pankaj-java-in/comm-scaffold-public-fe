import React from "react";
import Template from "./Template";
import BenefitData from "../../Utlis/BenefitData.json"
import Decor from "../../Utlis/Icons/Decore.svg";

const Benefits = () => {
    return(
        <div className="main-benefits">
            <img src={Decor}/>
            <div className="benefits">
                <div className="b-head">
                Benefits
                </div>
                <div className="b-content">
                With the Communication Scaffold, transform any existing Enterprise Software System into something with video conferencing capabilities. And with our plug and play architecture, you get this added capability without any compromises to your data privacy. 
                </div>
            </div>
            <div className="benefits-box">
            {BenefitData.map(
                    x => {
                return (
                <Template
                key={x.item}
                image={x.icon}
                head={x.head}
                content={x.content}
                type={x.type}
                />
                )
                    }
                )}
            </div>
        </div>
    )
}

export default Benefits;