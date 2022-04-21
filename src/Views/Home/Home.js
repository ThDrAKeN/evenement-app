import React, {Component} from 'react';
import {Container, Row, Col, Card} from "react-bootstrap";
import Bar from "../../components/Navbar/Bar";

import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends Component {
    render() {
        return (
            <div className={"mt-5"}>
                <Bar/>
                <Row style={{backgroundColor: "#111827"}}>

                    <Row className="justify-content-center mt-5 mb-5">

                        <Col className="displayContentBox" xs={8}>
                            <div className="textTop">
                                <span className="textTitle1">Demandez des disponibilités</span>
                                <span className="textTitle2"><br/>en quelques secondes</span>

                                <p className="subText">
                                    Vous voulez demander à vos amis où aller le vendredi soir ou organiser une réunion
                                    avec des collègues ? Créez un sondage - et obtenez des réponses en un rien de temps.
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row className={"mt-5"} style={{backgroundColor: "#1F2937"}}>
                        <div className={"mt-4"}>
                            <span className="textTitleSub text-uppercase">Voter, c'est facile</span>
                            <p className="textTitleSub2">Des enquêtes simples avec une configuration puissante</p>
                            <div style={{width: '40%', margin: 'auto'}}>
                                <p className="textTitleSub3">Tout en rendant nos enquêtes aussi simples et agréables que
                                    possible, nous proposons également de puissantes options de personnalisation qui
                                    permettent une adaptation à la demande pour de nombreux objectifs différents.</p>
                            </div>
        <Row style={{marginLeft: "10%", marginRight: "10%", backgroundColor: "red"}}>
            <Col>
                <div className={"cardInfos"}>
                    <p className={"cardInfoTitle"}>Détection des contrefaçons</p>
                    <p className={"cardInfoDetails"}>Par défaut, les robots et les utilisateurs de VPN sont exclus des votes dans les sondages.</p>
                </div>
            </Col>
            <Col>
                Test
            </Col>
            <Col>
                test
            </Col>
        </Row>
                        </div>
                    </Row>
                </Row>
            </div>
        );
    }
}

export default Home;