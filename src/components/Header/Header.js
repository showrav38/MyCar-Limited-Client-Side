import { Button, Container, Nav, Navbar, NavLink } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar bg="" style={{ height: '', backgroundColor: '#565555' }} variant="dark" fixed="top" collapseOnSelect expand="lg" className="border-bottom border-2 border-white">
                <Container>
                    <NavLink as={Link} to="/" style={{ textDecoration: 'none' }}><h3 className="textExtra"><span id="textMain"> CarMax </span>PlatForm</h3></NavLink>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-center " style={{ height: '', backgroundColor: '#565555' }}>
                        <Nav.Link as={HashLink} to="/home#home" style={{ margin: '10px', textDecoration: 'none', color: 'white' }} >Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/explore" style={{ margin: '10px', textDecoration: 'none', color: 'white' }} >Explore</Nav.Link>

                        {user?.displayName ?
                            <div style={{ width: '400px' }}>
                                <div class="row">
                                    <div class="col">
                                        <Nav.Link as={Link} to="/dashboard" style={{ textDecoration: 'none', color: 'white' }}
                                        >Dashboard</Nav.Link>
                                    </div>
                                    {/* <div class="col">
                                        <NavLink as={Link} to="/manage" style={{ textDecoration: 'none', color: 'white' }}
                                        >Manage Order</NavLink>
                                    </div>
                                    <div class="col">
                                        <NavLink as={Link} to="/addService" style={{ textDecoration: 'none', color: 'white' }}
                                        >Add Services</NavLink>
                                    </div> */}
                                    <div class="col">
                                        <Button onClick={logOut} variant="light">Logout</Button>
                                    </div>
                                </div>

                            </div>
                            :
                            <NavLink as={Link} to="/login" style={{ margin: '10px', textDecoration: 'none', fontWeight: "bold", color: 'goldenrod' }}
                            >Login</NavLink>}
                        <Navbar.Text>
                            {user.displayName &&
                                <a href="/login" style={{ textDecoration: 'none', paddingLeft: '5px', color: 'yellow', fontWeight: 'bold' }}>User: {user?.displayName}</a>}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;