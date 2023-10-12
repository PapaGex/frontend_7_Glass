import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <div>
            <footer>
                <Container>
                    <Row>
                        <Col className="text-center ">Copyright 2023 &copy; 7 Glass Studio LLC</Col>
                    </Row>
                </Container>
            </footer>
        </div>
    )
}

export default Footer