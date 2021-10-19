import React from 'react';
import './GoodAt.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare,faAmbulance,faMedkit, faUserMd } from '@fortawesome/free-solid-svg-icons'

const GoodAt = () => {
    return (
        <div>
            <Container className="py-5">
                <Row>
                    <Col md={4} >
                        <h2><span>Health and Medical <br></br></span> We are good at</h2>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                        <button className="mainButton">View Our Services</button>
                    </Col>
                    <Col md={8} >
                        <Row className="g-3">
                            <Col md={6}>
                                <Row>
                                    <Col md={3}>
                                    <FontAwesomeIcon className="goodAtIcon" icon={faPlusSquare} />
                                    </Col>
                                    <Col md={9}>
                                        <h3>Rehabilitation Center</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={6}>
                                <Row>
                                    <Col md={3}>
                                        <FontAwesomeIcon className="goodAtIcon" icon={faMedkit} />
                                    </Col>
                                    <Col md={9}>
                                        <h3>Medical Counseling</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
                                    </Col>
                                </Row>
                            </Col>
                      
                            <Col md={6}>
                                <Row>
                                    <Col md={3}>
                                        <FontAwesomeIcon className="goodAtIcon" icon={faUserMd} />
                                    </Col>
                                    <Col md={9}>
                                        <h3>Qualified Doctors</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={6}>
                                <Row>
                                    <Col md={3}>
                                        <FontAwesomeIcon className="goodAtIcon" icon={faAmbulance} />
                                    </Col>
                                    <Col md={9}>
                                        <h3>Emergency Services</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default GoodAt;