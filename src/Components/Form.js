import React from 'react';
import './Form.scss';
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";

const Form = () => {
    return (
        <div className='frm'>
        <div className='onee'>
        <h1 style={{marginTop:'-350px',marginBottom:'120px'}}>
                    <span style={{fontSize:'66px',fontWeight:'500'}}>GET A</span><span style={{color:'#2A8FC2',paddingLeft:'10px',fontSize:'66px',fontWeight:'500'}}>QUOTE</span>
                </h1>
                <div style={{marginBottom:'20px'}}>
                <input style={{marginRight:'20px',borderTop:'none',borderRight:'none',borderLeft:'none',color:'#2A8FC2',}} type='text' placeholder='Name' />
                <input style={{marginRight:'20px',borderTop:'none',borderRight:'none',borderLeft:'none',color:'#2A8FC2',}} type='text' placeholder='Company' />
                </div>
                <div style={{marginBottom:'20px'}}>
                <input style={{marginRight:'20px',borderTop:'none',borderRight:'none',borderLeft:'none',color:'#2A8FC2',}} type='text' placeholder='Title' />
                <input style={{marginRight:'20px',borderTop:'none',borderRight:'none',borderLeft:'none',color:'#2A8FC2',}} type='Email' placeholder='Email' />
                </div>
                <div style={{marginBottom:'20px'}}>
                <input style={{marginRight:'20px',borderTop:'none',borderRight:'none',borderLeft:'none',color:'#2A8FC2',}} type='number' placeholder='Phone' />
                <input style={{marginRight:'20px',borderTop:'none',borderRight:'none',borderLeft:'none',color:'#2A8FC2',}} type='text' placeholder='Service Of Interest'/>
                </div>
                <div style={{marginBottom:'20px'}}>
                 <textarea className='int' placeholder='Message'></textarea>
                </div>
                <div style={{marginBottom:'20px',color:'#2A8FC2'}}>
                    <input style={{marginRight:'20px',borderTop:'none',borderRight:'none',borderLeft:'none',borderBottom:'none',backgroundColor:'none',color:'#2A8FC2',}} type='submit' value='Submit' /> <FaArrowRightLong />
                </div>
        </div>
        <div className='two' style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'20px',flexDirection:'column'}}>
            <div style={{width:'486px',height:'66px',display:'flex',gap:'10px'}}>
               <div style={{height:'50px',width:'50px',fontSize:'50px',color:'white'}}>
               <MdOutlineMail />
               </div>
               <div style={{height:'64px',width:'402px',display:'flex',flexDirection:'column',marginTop:'10px'}}>
               <div style={{height:'16px',fontSize:'20px',color:'white',}}>Email</div>
               <div style={{height:'16px',fontSize:'30px',color:'white',}}>info@connektsolutions.com</div>
               </div>
            </div>
            <div style={{width:'486px',height:'66px',display:'flex',gap:'10px'}}>
               <div style={{height:'50px',width:'50px',fontSize:'50px',color:'white'}}>
               <MdOutlinePhoneInTalk />
               </div>
               <div style={{height:'64px',width:'402px',display:'flex',flexDirection:'column',marginTop:'10px'}}>
               <div style={{height:'16px',fontSize:'20px',color:'white',}}>Phone</div>
               <div style={{height:'16px',fontSize:'30px',color:'white',}}> 305-452-6831</div>
               </div>
            </div>
            <div style={{width:'486px',height:'66px',display:'flex',gap:'10px'}}>
               <div style={{height:'50px',width:'50px',fontSize:'50px',color:'white'}}>
               <FaRegClock />
               </div>
               <div style={{height:'64px',width:'402px',display:'flex',flexDirection:'column',marginTop:'10px'}}>
               <div style={{height:'16px',fontSize:'20px',color:'white',}}>Hours Of Operation</div>
               <div style={{height:'16px',fontSize:'30px',color:'white',}}>9:00AM to 5:00PM EST</div>
               </div>
            </div>
           
        </div>
        </div>
    );
};

export default Form;