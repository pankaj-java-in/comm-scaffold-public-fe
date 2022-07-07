import React, { useState } from "react";
import Button from "../Button/Button";
import { MultiSelect } from 'primereact/multiselect';


const RequestDemo = () => {
  const [userDetail, setUserDeatail] = useState({
    name: "",
    email: "",
  });
  const [validEmail , setValidEmail] = useState(true);

  const details = (e) => {
    const { name, value } = e.target;
    setUserDeatail((preValue) => {
      return { ...preValue, [name]: value };
    });
  };

  const industries = [
    {name: 'Telehealth', code: 'TH'},
    {name: 'Recruitment', code: 'RT'},
    {name: 'e-Learning', code: 'EL'},
    {name: 'Infomation Technologies', code: 'IT'},
    {name: 'Others', code: 'OT'}
];

  return (
    <div className="main-demo" id="req-d">
      <div className="demo-box">
        <div className="demo-head">Join with our Community</div>
        <div className="demo-content">Request A Free Demo Now!</div>
        <span className="demo-span">
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
          placeholder="Work Email"
          type="email"
          onChange={details}
          value={userDetail.email}
        />
        {!validEmail && <div className="valid-email" >Enter a valid Email</div>}
        </span>
        <span className="demo-span">
        <input
          className="demo-input"
          name="phone"
          placeholder="Phone Number"
          type="text"
          onChange={details}
          value={userDetail.phone}
        />
        <MultiSelect
         name="select"
         placeholder="Select your Industry" 
         value={userDetail.select} 
         onChange={details}
         optionLabel="name"
         className="demo-input"
         options={industries}
         style={{padding:"0px", fontSize:"0.9rem"}}
         />
         </span>
        <textarea
          name="message"
          value={userDetail.message}
          onChange={details}
          className="demo-messsage"
          cols="30"
          rows="3"
          placeholder="Enter Your Query"
        ></textarea>
        <div className="demo-button">
          <Button
            type={"request"}
            setUserDeatail={setUserDeatail}
            userDetail={userDetail}
            setValidEmail={setValidEmail}
          />
        </div>
      </div>
    </div>
  );
};

export default RequestDemo;
