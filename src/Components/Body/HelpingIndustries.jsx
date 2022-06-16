import React from 'react';
import Doc from "../../Utlis/Icons/Doc.svg";
import Talk from "../../Utlis/Icons/Talk.svg";
import Lap from "../../Utlis/Icons/Lap.svg";
import Human from "../../Utlis/Icons/Human.svg";

const HelpingIndustries = () => {

    return(
        <div className='main-help'>
            <div className='help'>
                <div className='help-head'>
                Helping Industries With Our Solution
                </div>
                <div className='help-content'>
                Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.
                    </div>
            </div>
            <div className='box-square'>
                <div className='single-box'>
                    <div className='box-square-head'>
                    Telehealth
                    </div>
                    <div className='box-square-content'>
                    Quickly add drop-in 1-1 call with lobby, waiting room, routing. Privacy compliant.
                    </div>
                    <img className='box-square-img' src={Doc} alt="Doctor"/>
                </div>
                <div className='single-box'>
                <div className='box-square-head'>
                    Recruitment
                    </div>
                    <div className='box-square-content'>
                    Quickly add drop-in 1-1 call with lobby, waiting room, routing. Privacy compliant.
                    </div>
                    <img className='box-square-img' src={Talk} alt="recuitment"/>
                </div>
                <div className='single-box'>
                <div className='box-square-head'>
                    e-Learning
                    </div>
                    <div className='box-square-content'>
                    Quickly add drop-in 1-1 call with lobby, waiting room, routing. Privacy compliant.
                    </div>
                    <img className='box-square-img' src={Human} alt="learn"/>
                </div>
                <div className='single-box'>
                <div className='box-square-head' style={{fontSize:"18px"}}>
                Infomation Technologies
                    </div>
                    <div className='box-square-content'>
                    Quickly add drop-in 1-1 call with lobby, waiting room, routing. Privacy compliant.
                    </div>
                    <img className='box-square-img' src={Lap} alt="IT"/>
                </div>
            </div>
        </div>
    )
}

export default HelpingIndustries;