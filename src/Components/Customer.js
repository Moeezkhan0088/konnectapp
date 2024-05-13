import React from 'react';
import './Customer.scss';
import img1 from '../Assests/Images/left-quote 2.png';
import img2 from '../Assests/Images/Group 7.png';
import img3 from '../Assests/Images/Group 2994.png';

const Customer = () => {
    return (
        <div className='cus'>
          <div>
          <div>
                <img src={img1} />
            </div>
            <div className='text'>
                <span className='cust'>CUSTOMERS</span><span className='lo'>LOVE</span>
            </div>
            <div className='star'>
                <img src={img2} />
            </div>
            <div className='pg'>
                <p className='para'>
                    Since partnering with Connekt for our staffing needs, the difference in our team's performance has been night and day. Their Talent Acquisition service didn’t just fill positions – they found us individuals who truly resonate with our hotel's ethos. The level of personalization and understanding of our unique needs has been exceptional.
                </p>
            </div>
            <div className='dg'>
                <span className='man'>
                Hotel General Manager
                </span>
                <spna className='bl' >
                -Luis Blanco
                </spna>
            </div>
          </div>
          <div>
            <img src={img3} />
          </div>
        </div>
    );
};

export default Customer;