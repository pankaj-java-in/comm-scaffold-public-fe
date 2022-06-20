import React from "react";
import Template from "./Template";
import advantageData from "../../Utlis/AdvantageData.json"

const Advantage = () => {

    return (
        <div className="main-adv">
            <div className="adv">
                {advantageData.map(
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

export default Advantage;