import React from 'react';
import './ServiceSection.scss';
import bg from '../Assests/Images/Maskgrp1.png';
import img1 from '../Assests/Images/image.png';
import { FaArrowRightLong } from "react-icons/fa6";
import img2 from '../Assests/Images/Talent management.png';
import img3 from '../Assests/Images/Cleaning service.png';

const ServiceSection = () => {
  return (
    <div className='' style={{ backgroundImage: `url(${bg})`, height: '873px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
      <div className='mb-5'>
        <span style={{ fontSize: '66px', lineHeight: '87px', color: 'white', fontWeight: '500' }}>OUR</span>
        <span style={{ fontSize: '66px', lineHeight: '87px', color: '#2A8FC2', fontWeight: '500', marginLeft: '20px' }}>SERVICES</span>
      </div>
      <div>
        <div className='row'>
          <div className='col-lg-4' style={{ width: '410px', height: '468px',backgroundColor:'#013882',padding:'0px',marginRight:'5px' }}>
            <div>
              <img src={img1} alt='img1' style={{objectFit:'cover'}} />
            </div>
            <div className='text' style={{width:'325px',height:'170px',marginTop:'-30px',marginLeft:'auto',marginRight:'auto',color:'white',fontSize:'13px'}}>
              Our process is deeply rooted in understanding your unique business culture and operational needs, enabling us to source candidates who are not just qualified, but perfectly aligned with your company’s ethos and objectives. From rigorous screening to personalized matchmaking, our aim is to transform your talent pipeline into a strategic asset, driving your business towards sustained growth and success.
            </div>
            <div style={{color:'white',marginLeft:'40px'}}>
         <p>Learn More <FaArrowRightLong /></p>
            </div>
          </div>
          <div className='col-lg-4' style={{ width: '410px', height: '450px',padding:'0px',marginRight:'5px' }}>
            <img src={img2}  />
          </div>
          <div className='col-lg-4' style={{ width: '410px', height: '450px',padding:'0px',marginRight:'5px' }}>
            <img src={img3}  />
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceSection;