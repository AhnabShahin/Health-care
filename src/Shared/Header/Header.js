import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Header.css"
import bannerimg1 from '../../Assets/Banner/slide-one.jpg'
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    // const [navBarIcon,setNavBarIcon]=useState(false);
    // const handleNavBarIcon=()=>{
    //     if(navBarIcon){
    //         setNavBarIcon(false);
    //     }else{
    //         setNavBarIcon(true);
    //     }
    // }
    return (
        <div className="header">
            <div className="upNav">
                <Container className=" h-100 d-flex align-items-center resposiveUpNav">
                    <p><span>Opening Hours : </span>Monday to Saturday - 8am to 9pm  </p>
                    <p className="ms-auto"><span>Contact : </span> +1-800-654-3210 </p>
                </Container>
            </div>
            <div className="nav">

                <Container className="h-100 my-2 d-flex align-items-center resposiveNav">
                    <i class="fas fa-bars ms-auto barIcon" ></i>
                    <div className="logo" >
                        <Link to="/home">
                            Health Care
                        </Link>
                    </div>
                    <div className="navigationLink ms-auto" >
                        <Link to="/home" className="active">Home</Link>
                        <Link to="/doctors">Doctors</Link>
                        <Link to="/news">News</Link>
                        <Link to="/appointment" >Appointment</Link>
                        {user.email ? <><Link className="active" to="#">{user.displayName}</Link><Link to="/" onClick={logOut} className="active"> Log Out</Link></> :
                            <><Link to="/login" className="active">Login</Link><Link to="/signup" className="active">SignUp</Link></>
                        }

                    </div>
                </Container>
            </div>
        </div>

    );
};

export default Header;