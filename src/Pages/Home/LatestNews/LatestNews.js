import React from 'react';
import './LatestNews.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className="latestNewsSection">
            <Container className="py-5">
                <h2 className="text-center">Latest News from  <span>Health and Medical</span></h2>
                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, ex? Deleniti maiores quia qui aspernatur magnam labore! Possimus, atque beatae!</p>
                <Row className="mt-5">
                    <Col md={4}>
                        <div className="card">
                            <div className="cardImg">
                                <img className="w-100" src="https://medicalpress.inspirythemes.com/wp-content/uploads/2014/05/doctor-1.jpg" alt="" />
                            </div>
                            <div className="cardDetails">
                                <Link className="cardName">Dr.Addison Alexander</Link>
                                <p className="text-center"><time>16 May, 2014</time><Link> By Jack</Link></p>
                                <p className="text-center">This text represents a brief introduction of doctor and this text will be displayed on homepage and all the places where listed. </p>
                                <button className="cardButton">Read more</button>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="card">
                            <div className="cardImg">
                                <img className="w-100" src="https://medicalpress.inspirythemes.com/wp-content/uploads/2014/05/doctor-1.jpg" alt="" />
                            </div>
                            <div className="cardDetails">
                                <Link className="cardName">Dr.Addison Alexander</Link>
                                <p className="text-center">This text represents a brief introduction of doctor and this text will be displayed on homepage and all the places where multiple doctors are listed. </p>
                                <button className="cardButton">Read more</button>
                            </div>
                        </div>
                    </Col>                 
                    <Col md={4}>
                        <div className="card">
                            <div className="cardImg">
                            <iframe className="w-100 h-100" src="https://www.youtube.com/embed/jh5U5BnpGN8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div className="cardDetails">
                                <Link className="cardName">Dr.Addison Alexander</Link>
                                <p className="text-center">This text represents a brief introduction of doctor and this text will be displayed on homepage and all the places where multiple doctors are listed. </p>
                                <button className="cardButton">Read more</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LatestNews;