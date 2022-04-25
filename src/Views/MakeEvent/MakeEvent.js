import React, {Component} from 'react';
import Bar from "../../components/Navbar/Bar";
import {Col, Container, Row, Card} from "react-bootstrap";
import {Input, Button} from 'antd';


import './MakeEvent.css';
import Footer from "../../components/Footer/Footer";

class MakeEvent extends Component {
    render() {
        return (
            <div>
                <Bar/>
                <Container style={{backgroundColor: "#111827", height: "70vh"}} fluid>


                    <Row className="justify-content-center mt-5">
                        <Col className="mt-5" xs={8}>
                            <p className={"textTitleSub2"}>Créer une coordination des dates</p>
                        </Col>
                    </Row>

                    <Row className={"mt-1 justify-content-center"}>
                        <Col xs={7} md={7} style={{backgroundColor: "#1F2937", borderRadius: 10, borderTop: "4px solid #f88181"}} className={"px-5 py-4"}>
                            <p style={{textAlign: "left", fontSize: 17, marginBottom: "0px", color: "white"}}>Titre</p>
                            <Input placeholder="Entréer un titre pour votre coordination..." maxLength={30}  />
                            <p style={{textAlign: "left", fontSize: 17, marginBottom: "0px", color: "white", marginTop: "2%"}}>Site <span style={{fontSize: 13, color: "#BCC1C8"}}>(en option)</span></p>
                            <Input placeholder="" />
                            <p style={{textAlign: "left", fontSize: 17, marginBottom: "0px", color: "white", marginTop: "2%"}}>Description <span style={{fontSize: 13, color: "#BCC1C8"}}>(en option)</span></p>
                            <Input.TextArea rows={3} maxLength={240} />
                            
                            <Row>
                                    <Button type={"primary"} className={"btnValid mt-3"}>Continuer</Button>
                            </Row>
                            
                        </Col>
                    </Row>

                </Container>
                
                <Footer />
            </div>
        );
    }
}

export default MakeEvent;