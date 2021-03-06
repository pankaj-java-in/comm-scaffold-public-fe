import React,{useEffect} from "react";
import "./Body.scss";
import AOS from "aos";
import FeatureTemplate from "./FeatureTemplate";
import FeatureData from "../../Utlis/FeatureData.json";

const Features = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <div className="main-features">
      <div className="features">
        <div className="content" data-aos="fade-down">
          <div className="head">Features</div>
          {/* <div className="about">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment.
          </div> */}
        </div>
        <div className="rotation" data-aos="fade-left">
          <div className="horizontal-scroll-wrapper squares">
            {
              FeatureData.map( item => {
                return (
                  <FeatureTemplate
                  key={item.item}
                  image={item.icon}
                  head={item.head}
                  content={item.content}
                  />
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
