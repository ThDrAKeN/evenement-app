import React, {Component} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import Bar from "../../components/Navbar/Bar";

import './Home.css';

class Home extends Component {
    render() {
        return (
            <>
                <Bar/>
                <Container>

                    <Row className={"mt-5"}>
                        <Col className={"displayContentBox"} >
                            <h1>Home</h1>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Home;