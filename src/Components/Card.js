import React from 'react';
import './Card.scss';
import img1 from '../Assests/Images/msk.png.png';
import img2 from '../Assests/Images/Mask group (1).png';
import img3 from '../Assests/Images/Mask group (2).png';
import { FaLongArrowAltRight } from "react-icons/fa";


const Card = () => {
    return (
        <div style={{marginLeft:'auto',marginRight:'auto'}}>
            <div className='cd'>
           <div className='fir'>
               <spna className='or'>OUR</spna>
               <spna className='bl'>BLOG</spna>
           </div>
           <div className='secondary'>
           <div className='images'>
               <img src={img1}/>
               <p className='dis'>
               How Staffing Agencies Propel Business Growth
               </p>
               <span className='dist'>READ MORE</span>
               <span className='arrow'><FaLongArrowAltRight /></span>
            </div>
            <div className='images'>
                <img src={img2}/>
                <p className='dis'>
               How Staffing Agencies Propel Business Growth
               </p>
                <span className='dist'>READ MORE</span>
               <span className='arrow'><FaLongArrowAltRight /></span>
            </div>
            <div className='images'>
                <img src={img3}/>
                <p className='dis'>
               How Staffing Agencies Propel Business Growth
               </p>
                <span className='dist'>READ MORE</span>
               <span className='arrow'><FaLongArrowAltRight /></span>
            </div>
           </div>
        </div>
        </div>
    );
};

export default Card;