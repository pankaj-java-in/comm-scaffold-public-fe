import React from "react";

const FeatureTemplate = (props) => {
    const {image , head , content} = props;
  return (
    <div className="box">
      <div className="items">
        <div className="icon">
          <img
            src={image}
          />
        </div>
        <div className="item-head">{head}</div>
        <div className="item-content">{content}</div>
      </div>
    </div>
  );
};

export default FeatureTemplate;
