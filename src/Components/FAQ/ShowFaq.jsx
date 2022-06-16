import React, { useState } from "react";
import Faq from "react-faq-component";
import "./Faq.scss";

function ShowFaq() {
  const [rows, setRowsOption] = useState(null);
  const data = {
    rows: [
      {
        title: "Lorem ipsum dolor sit amet,",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`
      },
      {
        title: "Nunc maximus, magna at ultricies elementum",
        content:
          "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor."
      },
      {
        title: "Curabitur laoreet, mauris vel blandit fringilla",
        content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `
      },
      {
        title: "What is the package version",
        content: <p>current version is 1.2.1</p>
      }
    ]
  };

  const styles = {
    bgColor: "#F1F5F8",
    // titleTextColor: "blue",
    // rowTitleColor: "blue",
    rowContentColor: 'grey',
    // arrowColor: "red",
    rowContentTextSize: '16px',
    // rowContentPaddingTop: '10px',
    rowContentPaddingBottom: '10px',
    // rowContentPaddingLeft: '50px',
    // rowContentPaddingRight: '150px',
};
const config = {
  animate: true,
  arrowIcon: "+",
  tabFocus: true,
  openOnload: 0,
  expandIcon: "+",
  collapseIcon: "-",
};

  return (
    <div className="main-faq">
      <div className="content">
       <div className="question">
       Any questions? We got you.
       </div>
       <div className="answer">
       Yet bed any for  assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.
       </div>
      </div>
      <div className="faq">
      <div className="faq-style-wrapper">
        <Faq data={data} config={config} styles={styles} getRowOptions={setRowsOption} />
      </div>
      </div>
    </div>
  );
}

export default ShowFaq;