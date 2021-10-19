import React from 'react';
import './Banner.css';
import { Col, Container, Row } from 'react-bootstrap';
import bannerimg1 from '../../../Assets/Banner/slide-one.jpg';

const Banner = () => {
    return (
        <div>
            <div className="banner">
                <img className="w-100 h-100" src={bannerimg1} alt="" />
                <div className="textPossitionOnBanner">
                    <Container>
                        <Row>
                            <Col md={6} >
                                <h2 className="textOnBanner">Medical Services That You Can Trust</h2>
                                <button className="mainButton">See More</button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default Banner;