import React from "react";
import {Navbar,Container,Nav} from 'react-bootstrap';

const Navigator = () => {
    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Collapse>
                        <Nav>
                            <Nav.Link href="/productPage">ProductPage</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default Navigator;