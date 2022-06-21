import React from 'react'
import Ani1 from "../../Utlis/Icons/ani1.svg";
import Ani2 from "../../Utlis/Icons/ani2.svg";
import Ani3 from "../../Utlis/Icons/ani3.svg";

const PrivateMeeting = () => {
  return (
    <div className='main-private'>
        <div className='private'>
            <div className='p-head'>Private meetings<br/> mean data privacy too!</div>
            <div className='p-content'>With our Reusable Util code, you can now transform any enterprise system into a system capable of hosting multi level video conferencing. With just a few lines, you can add a whole other level to your enterprise and you get to keep the code!. </div>
        </div>
        <div className='private-animate'>
            <div className='private-images'>
                <img className='ani1' src={Ani1}/>
                <img className='ani2' src={Ani2}/>
                <img className='ani3' src={Ani3}/>
                </div>
        </div>
    </div>
  )
}

export default PrivateMeeting;
