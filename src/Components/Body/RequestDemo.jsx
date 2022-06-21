import React,{useState} from 'react'
import Button from '../Button/Button';

const RequestDemo = () => {

  const [userDetail , setUserDeatail] = useState();

  const details = (e) => {
   console.log(e,"e")
  }

  return (
    <div className='main-demo'  id="req-d">
        <div className='demo-box'>
        <div className='demo-head'>Join with our Community</div>
        <div className='demo-content'>Request  A Free Demo Now!</div>
        <input className='demo-input' placeholder='Name' onChange={details}/>
        <input className='demo-input' placeholder='Email' type="email" onChange={details}/>
        <div className='demo-button'>
        <Button
        type={"request"}
        setUserDeatail={setUserDeatail}
        userDetail={userDetail}
        />
        </div>
        </div>
    </div>
  )
}

export default RequestDemo;
