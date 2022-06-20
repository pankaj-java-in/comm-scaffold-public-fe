import React from 'react'
import Button from '../Button/Button';

const RequestDemo = () => {
  return (
    <div className='main-demo'>
        <div className='demo-box'>
        <div className='demo-head'>Join with our Community</div>
        <div className='demo-content'>Request  A Free Demo Now!</div>
        <input className='demo-input' placeholder='Name'/>
        <input className='demo-input' placeholder='Email'/>
        <div className='demo-button'>
        <Button
        type={"request"}
        />
        </div>
        </div>
    </div>
  )
}

export default RequestDemo;
