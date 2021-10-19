import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Header.css"
import bannerimg1 from '../../Assets/Banner/slide-one.jpg'

const Header = () => {
    return (
        <div className="header">
            <div className="upNav">
                <Container className=" h-100 d-flex align-items-center">
                    <p><span>Opening Hours : </span>Monday to Saturday - 8am to 9pm  </p>
                    <p className="ms-auto"><span>Contact : </span> +1-800-654-3210 </p>
                </Container>
            </div>
            <div className="nav">
                <Container className="h-100 my-2 d-flex align-items-center">
                    <div className="logo">
                        <Link>
                            Health Care
                        </Link>
                    </div>
                    <div className="navigationLink ms-auto">
                        <Link className="active">Home</Link>
                        <Link>Doctors</Link>
                        <Link>News</Link>
                        <Link>Services</Link>
                        <Link>Gellary</Link>
                    </div>
                </Container>
            </div>
        </div>

    );
};

export default Header;