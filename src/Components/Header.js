import React from 'react';
import bg from '../Assests/Images/Background.png'
import NavBar from './NavBar';
import SectionFirst from './SectionFirst';

const Header = () => {
    return (
        <div className='' style={{backgroundImage : `url(${bg})`, backgroundRepeat : 'no-repeat' , height : '894px'}}>
            <NavBar />
            <div className='container'>
                <hr style={{border : '1px solid white' , width : '1270px'}}>
                </hr>
            </div>
            <div>
                <SectionFirst />
            </div>
        </div>
    );
};
export default Header;