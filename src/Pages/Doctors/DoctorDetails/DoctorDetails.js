import React from 'react';
import './DoctorDetails.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router';

const DoctorDetails = (props) => {
    const { doctors } = props.loadData.data || {};
    const { id } = useParams();
    const doctor = doctors?.find(({ Id }) => Id === id);

    return (
        <div className="doctorDetailsSection">
            <Container>
                <Row>
                    <Col md={4}>
                        <div className="doctorDetailsCard">
                            <div className="doctorDetailsImg">
                                <img className="w-100" src={doctor?.Img} alt="" />
                            </div>
                            <div className="doctorDetails">
                                <h2>{doctor?.Name}</h2>
                                <p><span>Phone Number : </span>{doctor?.Phone}</p>
                                <p><span>Degree: </span>{doctor?.Degree}</p>
                                <p><span>Designation : </span>{doctor?.Designation}</p>
                                <p><span>Department : </span>{doctor?.Department}</p>
                                <p><span>Work Days : </span>{doctor?.WorkingDays}</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={8}>
                        <div className="doctorDetails">
                            {doctor?.Bio.map((e) => (<>
                                <h2>{e.HospitalName}</h2>
                                <h5>{e.Time}</h5>
                                <p>{e.Details}</p>
                            </>))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DoctorDetails;