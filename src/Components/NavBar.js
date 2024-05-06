import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import  logo  from "../Assests/Images/10 2.png";
import './NavBar.scss';

function NavBar() {
  return (
    <Navbar className="bg-none" style={{height : '65px' , width : '1227px', marginLeft : 'auto' , marginRight : 'auto', padding : '0px'}}>
      <Container>
        <div>
        <Navbar.Brand href="#"><img src={logo}/></Navbar.Brand>
        </div>
       <div>
         <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={{color: 'white' , fontSize : '16px' , weight : '400' , lineHeight :'21.86px',paddingLeft : '30px',paddingRight : '30px'}}>Home</Nav.Link>
            <NavDropdown title="Services" id="navbarScrollingDropdown">
              <NavDropdown.Item className='dropdown' href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item className='dropdown' href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item className='dropdown' href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2"style={{color: 'white' , fontSize : '16px' , weight : '400' , lineHeight :'21.86px',paddingLeft : '30px',paddingRight : '30px'}}>Added Value</Nav.Link>
            <Nav.Link href="#action6"style={{color: 'white' , fontSize : '16px' , weight : '400' , lineHeight :'21.86px',paddingLeft : '30px',paddingRight : '30px'}}>Blog</Nav.Link>
            <Nav.Link href="#action7"style={{color: 'white' , fontSize : '16px' , weight : '400' , lineHeight :'21.86px',paddingLeft : '30px',paddingRight : '30px'}}>Foudation</Nav.Link>
            <Nav.Link href="#action8"style={{color: 'white' , fontSize : '16px' , weight : '400' , lineHeight :'21.86px',paddingLeft : '30px',paddingRight : '30px'}}>Join Our Team</Nav.Link>
            <Nav.Link href="#action9"style={{color: 'white' , fontSize : '16px' , weight : '400' , lineHeight :'21.86px',paddingLeft : '30px',paddingRight : '30px'}}>GET A QUOTE
            <hr style={{borderBottom : '2px solid white' , width : '30px' , margin : '0px'
            }}></hr>
            </Nav.Link>
          
          </Nav>
        </Navbar.Collapse>

       </div>
      </Container>
    </Navbar>


    
  );
}

export default NavBar;