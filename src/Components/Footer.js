import React from 'react';
import log from '../Assests/Images/10 1.png';
import mail from '../Assests/Images/mail 1.png';
import phn from '../Assests/Images/phone-call 1.png';
import lc from '../Assests/Images/noun-location-6430143 1.png';
import grp from '../Assests/Images/Group 44.png';
import dog from '../Assests/Images/Connekt Design 3.png';


const Footer = () => {
    return (
        <div style={{width:'100%',position:'relative',bottom:'0',margin:'0px'}}>
            <div style={{height:'180px',width:'100%',backgroundColor:'#013882',display:'flex'}}>
               <div style={{width:'20%'}}>
               <img style={{marginLeft:'80px',marginTop:'50px'}} src={log}/>
               </div>
                <div style={{width:'20%',marginLeft:'50px'}}>
                 <div style={{width:'205px',height:'94px'}}>
                    <p style={{color:'white',fontSize:'20px',fontWeight:'800',marginLeft:'30px',marginTop:'40px'}}>
                        Contact Info :
                    </p>
                    <div style={{display:'flex',gap:'10px'}}>
                    <img style={{width:'18px',height:'12px',marginLeft:'20px'}} src={mail}/>  
                    <p style={{color:'white',marginTop:'-8px'}}>INFO@CONNEKTSOLUTIONS.COM</p>                     
                    </div>
                    <div style={{display:'flex',gap:'10px'}}>
                    <img style={{width:'18px',height:'12px',marginLeft:'20px'}} src={phn}/>  
                    <p style={{color:'white',marginTop:'-8px'}}>305-452-6831</p>                     
                    </div>
                 </div>
                </div>
                <div style={{width:'20%',marginLeft:'50px'}}>
                 <div style={{width:'205px',height:'94px'}}>
                    <p style={{color:'white',fontSize:'20px',fontWeight:'800',marginLeft:'30px',marginTop:'40px'}}>
                        Address Info :
                    </p>
                    <div style={{display:'flex',gap:'10px'}}>
                    <img style={{width:'18px',height:'12px',marginLeft:'20px'}}  src={lc}/>  
                    <p style={{color:'white',marginTop:'-8px'}}>1801 NE 123rd StreetSuite 314 North Miami, FL 33181</p>                     
                    </div>
                 </div>
                </div>
                <div style={{width:'20%',marginLeft:'50px'}}>
                 <div style={{width:'205px',height:'94px'}}>
                    <p style={{color:'white',fontSize:'20px',fontWeight:'800',marginLeft:'30px',marginTop:'40px'}}>
                        Follow Us :
                    </p>
                    <div style={{display:'flex',gap:'10px'}}>
                    <img style={{marginLeft:'20px'}}  src={grp}/>  
                                       
                    </div>
                 </div>
                </div>
               
                    <img style={{position:'absolute',top:'-80px',right:'0px'}} src={dog}/>
                
            </div>
        </div>
    );
};

export default Footer;