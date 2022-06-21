import React, {useEffect} from 'react'
import Ani1 from "../../Utlis/Icons/ani1.svg";
import Ani2 from "../../Utlis/Icons/ani2.svg";
import Ani3 from "../../Utlis/Icons/ani3.svg";
import AOS from "aos";

const PrivateMeeting = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className='main-private'>
        <div className='private' data-aos="fade-right">
            <div className='p-head'>Private meetings<br/> mean data privacy too!</div>
            <div className='p-content'>With our Reusable Util code, you can now transform any enterprise system into a system capable of hosting multi level video conferencing. With just a few lines, you can add a whole other level to your enterprise and you get to keep the code!. </div>
        </div>
        <div className='private-animate' data-aos="fade-right">
            <div className='private-images'>
                <img className='ani1' data-aos="fade-right" src={Ani1}/>
                <img className='ani2' data-aos="fade-down" src={Ani2}/>
                <img className='ani3' data-aos="fade-up" src={Ani3}/>
                </div>
        </div>
    </div>
  )
}

export default PrivateMeeting;
