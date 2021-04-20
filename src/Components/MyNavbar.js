import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

function MyNavbar({ getsearchRate, getsearchTitle }) {
    const ratingChanged = (newrating) => {
        getsearchRate(newrating);
    };
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Netflix</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Form inline>
                <Form inline className="InputArea">
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                    />
                    <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                        onChange={(e) => getsearchTitle(e.target.value)}
                    />

                    <Button variant="outline-info">Search</Button>
                </Form>
            </Form>
        </Navbar>
    );
}

export default MyNavbar;