import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button } from 'react-bootstrap';
import im from './pp_edited.jpg'
import imm from './ENTREPRENEURSHIP.png'
import Courses from './Courses'
import Ten from './Ten';
import Sidecart from './Sidecart';
import { Scrollbars } from 'react-custom-scrollbars';
import { NavLink } from 'react-router-dom';
import Signup from './Signup';


function Navbarr() {






  


  return (
    <>
    <NavLink to="/home">
      <div className="log"><img className="logo" src={imm} /></div>
      </NavLink>

      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-11 mx-auto">



            <Navbar className="nav" expand="lg" >
            <NavLink to="/home"> <Navbar.Brand to="/" className="home"><img className="icon" src={im} /> TEN</Navbar.Brand></NavLink>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="mr-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  
                >
                  <NavLink activeClassName="pga" className="nav-link" exact to="/">Home</NavLink>
                  <NavLink activeClassName="pga" className="nav-link" exact to="/courses">| Online Courses  |</NavLink>
                  <NavLink activeClassName="pga" className="nav-link" exact to="/hiring">| We're Hiring |</NavLink>
                  <NavDropdown className="btns" title="More" id="navbarScrollingDropdown">
                    <NavDropdown.Item activeClassName="pga" className="btns" to="#action3">Blog</NavDropdown.Item>
                    <NavDropdown.Item activeClassName="pga" className="btns" to="#action4">Certifications</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item className="btns" to="#action5">Contact us</NavDropdown.Item>
                  </NavDropdown>




                 
                  






                  <ul className="icon-list">
                    <li className="icon-item">
                      <NavLink to="/courses" className="icon-link" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="fa fa-shopping-cart "></i></NavLink>
                      <NavLink to="/signup" className="icon-link" type="button"><i class="fa fa-user "></i></NavLink>
                      
                    </li>

                  </ul>




















                </Nav>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Navbar>

          </div>
        </div>
      </div>


      




    </>)
};

export default Navbarr;