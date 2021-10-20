import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';




const News = (props) => {
    const{news}=props||{};
    return (
        <Col md={4}>
            <div className="card">
                <div className="cardImg">
                    <img className="w-100" src={news?.Img} alt="" />
                </div>
                <div className="cardDetails">
                    <Link className="cardName">{news?.Title}</Link>
                    <p className="text-center"><time>{news?.Time}</time><Link to="#"> {news?.PostBy}</Link></p>
                    <p className="text-center">This text represents a brief introduction of doctor and this text will be displayed on homepage and all the places where listed. </p>
                    <button className="cardButton">Read more</button>
                </div>
            </div>
        </Col>
    );
};

export default News;