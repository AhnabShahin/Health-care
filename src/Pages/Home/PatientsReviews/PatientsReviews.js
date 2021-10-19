import React from 'react';
import './PatientsReviews.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const PatientsReviews = () => {
    return (
        <div className="patientsReviews">
            <Container className="py-5">
                <h2 className="text-center">What patients say About  <span>Health Care</span></h2>
                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, ex? Deleniti maiores quia qui aspernatur magnam labore! Possimus, atque beatae!</p>
                <Row className="mt-5">
                    <Col md={12}>
                        <div className="patientsReviewsImg">
                            <img src="https://medicalpress.inspirythemes.com/wp-content/uploads/2014/05/doctor-1.jpg" alt="" />
                        </div>
                        <div>
                            <p className="patientsReviewsText">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam quis nostrud exerci tation.</p>
                            <p className="text-center"><time>16 May, 2014</time><Link> By Jack</Link></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PatientsReviews;