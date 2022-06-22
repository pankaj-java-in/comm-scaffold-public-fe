import React from 'react';
import "./Button.scss";
import axios from 'axios';

const Button = (props) => {
    const {type, setUserDeatail, userDetail} = props;

    const reqDemo = () => {
    window.scrollTo({
        top: 4250,
        behavior: 'smooth'
      });
    };

    const requestDemoApi = async () => {
      try {
        const data = {
            clientEmail: userDetail.email,
            clientName: userDetail.name,
          };
        const response = await axios.post('http://103.46.238.132:8080/chat/businessLead', data);
        if(response.data.isSuccess){
            setUserDeatail({
                name:'',
                email:''
            })
        }
      } catch (e){
        console.log(e,"error")
      }
    }

    const buttonClick = () => {
        if(type === 'request'){
            if(userDetail.name.length && userDetail.email.length > 0){
            requestDemoApi();
            } else {
                console.log("fill user details")
            }
        } else {
            reqDemo();
        }
    }
    return (
        <div className={type === "request" ? "main-button req-btn" : "main-button"} onClick={buttonClick}>
            <div className='content'>
            Request a Demo 
            </div>
            {/* <div className='arrow'>
            {type === "request" ? "" : "->"}
            </div> */}
        </div>
    )
}

export default Button;