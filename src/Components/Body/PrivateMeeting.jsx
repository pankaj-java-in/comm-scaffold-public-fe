import React, {useEffect} from 'react'
import AOS from "aos";
import ICONS from '../../Utlis/Constants/icons';

const PrivateMeeting = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const scrollDown = () => {
    window.scrollTo({
      top: 5000,
      behavior: 'smooth'
    })
  }
  return (
    <div className='vector-down'>
    <div className='main-private'>
        <div className='private' data-aos="fade-right">
            <div className='p-head'>Private meetings<br/> mean data privacy too!</div>
            <div className='p-content'>With our Reusable Util code, you can now transform any enterprise system into a system capable of hosting multi level video conferencing. With just a few lines, you can add a whole other level to your enterprise and you get to keep the code!. </div>
        </div>
        <div className='private-animate' data-aos="fade-right">
            <div className='private-images'>
                <img className='ani1' data-aos="fade-right" src={ICONS.ANIMATION_1}/>
                <img className='ani2' data-aos="fade-down" src={ICONS.ANIMATION_2}/>
                <img className='ani3' data-aos="fade-up" src={ICONS.ANIMATION_3}/>
                </div>
        </div>
    </div>
     <img className='vector-img' src={ICONS.DOWN_ARROW} onClick={() => scrollDown()}/>
   </div>
  )
}

export default PrivateMeeting;
