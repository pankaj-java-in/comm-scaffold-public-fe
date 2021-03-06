import React  from "react";

const Template = (props) => {

    const {image, head, content, type} = props;
    return (
        <div className={type==="benefit" ? "main-temp benefit-temp" : "main-temp"}>
        <div className={type==="benefit" ? "temp-img" : "temp-img-ad"}>
            <img className={type==="benefit" ? "temp-bene-img" : ""} src={image}/>
        </div>
        <div className={type==="benefit" ? "temp-head benefit-head" : "temp-head"}>
            {head}
        </div>
        <div className={type==="benefit" ? "temp-content benefit-cont" : "temp-content"}>
          {content}
        </div>
        </div>
    )
}

export default Template;