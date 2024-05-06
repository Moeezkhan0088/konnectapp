import React from 'react';
import bg from '../Assests/Images/Background.png'
import NavBar from './NavBar';
import SectionFirst from './SectionFirst';

const Header = () => {
    return (
        <div style={{backgroundImage : `url(${bg})`, backgroundRepeat : 'no-repeat' , height : '100vh'}}>
            <NavBar />
            <div>
                <hr style={{border : '1px solid white' , width : '1170px' , marginLeft : '195px'}}>
                </hr>
            </div>
            <div>
                <SectionFirst />
            </div>
        </div>
    );
};
export default Header;