import React, { useRef } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link, useNavigate } from "react-router";


function Header()
{
    let navigate = useNavigate();
    let movie = useRef();
    
    function searchMovie(ev){
        ev.preventDefault();        
        console.log(movie.current.value);
        
        if(movie.current.value !=="")
            navigate("/searchmovie/"+ movie.current.value)
    }
    return (
        
       <Navbar bg="dark" variant="dark" expand="lg" className="px-4 shadow">
    <Container fluid>

        <Navbar.Brand
            as={Link}
            to="/"
            className="fw-bold text-danger fs-3"
        >
            🎬 MovieDB
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>

            <Nav className="me-auto">

                <Nav.Link as={Link} to="/topratedcomp">
                    Home
                </Nav.Link>

                <Nav.Link as={Link} to="/popular">
                    Popular
                </Nav.Link>

                <Nav.Link as={Link} to="/topratedcomp">
                    Top Rated
                </Nav.Link>

                <Nav.Link as={Link} to="/upcoming">
                    Upcoming
                </Nav.Link>

            </Nav>

            <form className="d-flex" onSubmit={searchMovie}>

                <input
                    ref={movie}
                    className="form-control rounded-pill me-2"
                    placeholder="Search Movies..."
                />

                <button
                    className="btn btn-danger rounded-pill"
                >
                    Search
                </button>

            </form>

        </Navbar.Collapse>

    </Container>
</Navbar>
    
    
    )
}

export default Header;