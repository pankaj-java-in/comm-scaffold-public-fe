import React, { useState } from "react";
import Faq from "react-faq-component";
import "./Faq.scss";

function ShowFaq() {
  const [rows, setRowsOption] = useState(null);
  const data = {
    rows: [
      {
        title: "1.Do we need a Cloud server to deploy the application?",
        content: `Yes, it is strongly recommended. However, it is possible to deploy the application on 
        premise as well.`
      },
      {
        title: "2.Can we use similar Apps like Zoom, Skype with Scaffold Integration?",
        content:
          `Yes, Scaffold works as an independent and stand alone application. It doesn’t block any App if in use.`
      },
      {
        title: "3.What do you use to send Information for a real-time sync?",
        content: `We use websockets.`
      },
      {
        title: "4.Name some Inbuilt functionalities of Scaffold?",
        content: 'Chat, Call, Video, Meeting, Screen sharing are some of inbuilt functionalities.'
      },
      {
        title: "5.How secure is my company’s data on your platform?",
        content: 'The data is stored on the servers which are under your control. So, you manage the security. As  An additional check, scheduled backups will be set on cloud so thatrestoration can happen in Case of any unforeseen circumstances.'
      }
      // {
      //   title: "Name some Inbuilt functionalities of Scaffold?",
      //   content: 'Chat, Call, Video, Meeting, Screen sharing are some of inbuilt functionalities.'
      // }
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