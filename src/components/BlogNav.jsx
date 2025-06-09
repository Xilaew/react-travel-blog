import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';

export function BlogNav() {
    return (
        <div>
            <Navbar style={{
                backgroundColor:"black"
            }}>
                <img
              src=''
              height='30'
              alt=''
              loading='lazy'
            />
                <Navbar.Brand href="#home" style={{color:"white", marginLeft:"10px"}}>TRAVELLING LOVER BLOG</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end">

                    <Nav>
                        
                        <Nav.Link href="#contact" style={{color:"white"}}>
                          Contact
                        </Nav.Link>

                        <Nav.Link href="#NewPost" style={{color:"white"}}>
                           New Post
                        </Nav.Link>

                        <Nav.Link href="#Login" style={{color:"white"}}>
                            Log in
                        </Nav.Link>

                    </Nav>
                    
                </Navbar.Collapse>
            </Navbar>


        </div>
    )
}