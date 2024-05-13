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
<<<<<<< HEAD
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
=======
            <div>
                <p style={{ fontSize: '6.184895833333333vw', fontWeight: '900', color: 'white', lineHeight: '109px' }}>
                    EMPOWERING
                </p>
            </div>
            <div>
                <span style={{ fontSize: '95px', fontWeight: '900', color: 'white', lineHeight: '109px' }}>
                    BUSINESS
                </span>
                <span style={{ fontSize: '95px', fontWeight: '400', color: 'white', paddingLeft: '30px' }}>
                    THROUGH
                </span>
            </div>
            <div>
                <span style={{ fontSize: '95px', fontWeight: '400', color: 'white', lineHeight: '109px' }}>
                    TALENT
                </span>
                <span style={{ fontSize: '95px', fontWeight: '400', color: 'white', paddingLeft: '30px' }}>
                    SOLUTIONS
                </span>
            </div>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <span>
                <button type='button' style={{backgroundColor : '#2A8FC2', border:'none', borderRadius : '70px', padding : '21px 48px',fontSize :'20px',color :'white',marginLeft :'10px',height : '75px',width :'215px'}}>
                  Learn More
                </button>
                </span>
                <span>
                    <hr style={{border : '3px solid #FFFFFF', width :'84px',marginLeft :'250px', marginTop :'10px',opacity:'1.25',borderRadius:'75px'}}>
                    </hr>
                </span>
                <span style={{display :'flex', flexWrap :'wrap',width:'626px',height:'145px',lineHeight:'29px'}}>
                    <span style={{fontSize:'20px', fontWeight :'300',color:'white'}}>
                        We are a  <span style={{fontSize:'20px',fontWeight :'900',color:'white'}}>
                     leading staffing solutions company,  <span style={{fontSize:'20px', fontWeight :'300',color:'white'}}>
                        dedicated to aliging business with top-tier talent to meet their strategic and operational needs.With an empahsis on precisons,efficiency and innovation,we bridge the gap between 
                     </span><span style={{fontSize:'20px',fontWeight :'900',color:'white',paddingLeft :'5px',paddingRight :'5px'}}>
                       Organizational
                     </span><span style={{fontSize:'20px', fontWeight :'300',color:'white'}}>
                        requirements and 
                     </span> <span style={{fontSize:'20px',fontWeight :'900', color:'white'}}>
                        exceptional candidates.
                     </span>
                     </span>
                    </span>
                </span>
                
>>>>>>> fcf7a5c06723b61e936dfa7dbe30f5aa237992e6
            </div>
        </div>
    );
};

export default SectionFirst;