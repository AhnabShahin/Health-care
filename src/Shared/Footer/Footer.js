import React from 'react';
import './Footer.css';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from "@fortawesome/fontawesome-svg-core"

const Footer = () => {
    return (
        <div className="footerSection">
            <Container>
                <Row>
                    <Col md={4}>
                        <div className="footerRecentPosts">
                            <h3>Recent Posts</h3>
                            <Link>Image Post Format</Link>
                            <Link>Quote Post Format</Link>
                            <Link>Gallery Post Format</Link>
                            <Link>How to Live a Healthier Life</Link>
                            <Link>The Hero In All Of Us</Link>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="footerRecentPosts">
                            <h3>Categories</h3>
                            <Link>Environment</Link>
                            <Link>Health Basics</Link>
                            <Link>Lifestyle</Link>
                            <Link>Motivation</Link>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="footerAbout">
                            <h3>About Healthcare</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptatibus ipsum assumenda voluptate aperiam aut.!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptatibus ipsum assumenda voluptate aperiam aut.!</p>
                        </div>
                    </Col>
                    <Col md={12} className="d-flex justify-content-between">
                        <p>© Copyright 2020. All Rights Reserved by Medical Press</p>
                        <div>
                            <i class="fab fa-instagram mx-2"></i>
                            <i class="fab fa-facebook-square mx-2 "></i>
                            <i class="fab fa-facebook-messenger mx-2"></i>
                            <i class="fab fa-linkedin mx-2"></i>
                            <i class="fab fa-youtube mx-2"></i>
                            <i class="fab fa-twitter-square mx-2"></i>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;