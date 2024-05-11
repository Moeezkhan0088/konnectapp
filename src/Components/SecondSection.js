import React from 'react';
import './SecondSection.scss';
import mk from '../Assests/Images/Mask group.png';
import kn from '../Assests/Images/Konnect.png';
import { FaArrowRightLong } from "react-icons/fa6";

const SecondSection = () => {
    return (
        <div className='second ' style={{height:'814px',width:'100%',display:'flex',justifyContent:'space-around',alignItems:'center'}}>
           <div>
           <img  src={mk} />
           <p style={{fontSize :'85px' , fontWeight :'900',lineHeight :'97px',marginTop:'-215px', color:'white',paddingLeft:'10px'}}>
            COMPETATIVE
           </p>
           <p style={{fontSize :'85px' , fontWeight :'900',lineHeight :'97px',color:'white',paddingLeft:'20px'}}>
            ADVANTAGES
           </p>
           </div>
           <div  style={{width:'553px',height:'365px'}}>
            <div>
                <img src={kn} />   
           </div>
           <div style={{fontSize:'20px',lineHeight:'30px',fontWeight:'350',flexWrap:'wrap'}}>
              Boosting over <span>
                15 years of Experience
              </span>
              <span style={{fontSize:'20px',lineHeight:'30px',fontWeight:'500',paddingLeft:'10px'}}>
               , our experties spans various industries , enabling us 
              </span>
               &nbsp;to cater to a diverse clientele. At Conneckt, we take care of all&nbsp;
              <span style={{color:'#2A8FC2',fontSize:'20px',lineHeight:'30px',fontWeight:'500'}}>
                aspects of our clients
              </span>
             &nbsp; ' talent managment so they can focus on their business and growth.
           </div>
           <div  style={{color:'#2A8FC2',fontSize:'20px',lineHeight:'29px',marginTop:'20px'}}>
            Learn More <FaArrowRightLong/>
           </div>
           </div>
        </div>
    );
};

export default SecondSection;