import React from 'react';
import './Specialists.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Specialist from './../Specialist/Specialist';

const Specialists = (props) => {
    const { doctors } = props?.loadData?.data||{};
    return (
        <div id="doctors" className="specialistSection">
            <Container className="py-5">
                <h2 className="text-center">Meet our Medical <span>Specialists</span></h2>
                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, ex? Deleniti maiores quia qui aspernatur magnam labore! Possimus, atque beatae!</p>
                <Row className="mt-5">
                    { doctors?.map(doctor=><Specialist doctor={doctor}></Specialist>)} 
                </Row>
            </Container>
        </div>
    );
};

export default Specialists;