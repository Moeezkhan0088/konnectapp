import React from 'react';
import dot from '../Assests/Images/Dots.png';
import './SectionFirst.scss';

const SectionFirst = () => {
    return (
        <div className='container section'>
            <div className='main'>
                <div>
                    <img src={dot}/>
                </div>
                <div className='fir'>
                     EMPOWERING
                </div>
                <div>
                    <span className='fir'>
                        BUSINESS
                    </span>
                    <span className='sec'>
                        THROUGH
                    </span>
                </div>
                <div>
                    <span className='sec' style={{margin:'0px'}}>
                        TALENT
                    </span>
                    <span className='sec'>
                        SOLUTIONS
                    </span>
                </div>
            </div>
            <div className='second'>
                <span>
                <button type='button' className='button'>
                      Learn More
                </button>
                </span>
                <span style={{display:'flex',justifyContent:'space-around'}}>
                    <div className='underline'>
                    </div>
                    <div className='one'>
                        We are a <span className='two'>leading staffing solutions company,</span> dedicated to aligning
                        businesses with top-tier talent to meet their strategic and
                        operational needs. With an emphasis on precision, efficiency, and
                        innovation, we bridge the gap between <span className='two'>organizational</span> requirements and
                        <span className='two'>exceptional candidates</span>.
                    </div>
                </span>
            </div>
        </div>
    );
};

export default SectionFirst;