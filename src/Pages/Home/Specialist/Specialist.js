import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
const Specialist = (props) => {
    const{doctor}=props||{};

    return (
        <Col md={3}>
            <div className="card">
                <div className="cardImg">
                    <img className="w-100" src={doctor?.Img} alt="" />
                </div>
                <div className="cardDetails">
                    <Link className="cardName">{doctor?.Name}</Link>
                    <p className="text-center">{doctor?.Bio?.[0]?.Details.slice(0, 100)}... </p>
                    <button className="cardButton"> <Link to={`/doctor/${doctor.Id}`}>Read more</Link></button>
                </div>
            </div>
        </Col>
    );
};

export default Specialist;