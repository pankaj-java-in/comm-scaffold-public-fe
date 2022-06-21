import React from "react";

const HelpingTemplate = (props) => {
  const { head, content, image } = props;
  return (
    <div className="single-box-temp">
      <div className="box-square-head">{head}</div>
      <div className="box-square-content">
        {content}
      </div>
      <img className="box-square-img" src={image} alt="Doctor" />
    </div>
  );
};

export default HelpingTemplate;
