import React, { useState } from "react";
import Button from "../Button/Button";

const RequestDemo = () => {
  const [userDetail, setUserDeatail] = useState({
    name: "",
    email: "",
  });

  console.log(userDetail,"detail")

  const details = (e) => {
    const { name, value } = e.target;
    setUserDeatail((preValue) => {
      return { ...preValue, [name]: value };
    });
  };

  return (
    <div className="main-demo" id="req-d">
      <div className="demo-box">
        <div className="demo-head">Join with our Community</div>
        <div className="demo-content">Request A Free Demo Now!</div>
        <input
          className="demo-input"
          name="name"
          placeholder="Name"
          onChange={details}
          value={userDetail.name}
        />
        <input
          className="demo-input"
          name="email"
          placeholder="Email"
          type="email"
          onChange={details}
          value={userDetail.email}
        />
        <div className="demo-button">
          <Button
            type={"request"}
            setUserDeatail={setUserDeatail}
            userDetail={userDetail}
          />
        </div>
      </div>
    </div>
  );
};

export default RequestDemo;
