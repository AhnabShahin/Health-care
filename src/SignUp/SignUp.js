import React from 'react';
import './SignUp.css';
import { useForm } from "react-hook-form"
import { Form, Row, Col, Container } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faAmbulance, faMedkit, faUserMd } from '@fortawesome/free-solid-svg-icons'
import useAuth from '../Hooks/useAuth';
import { createUserWithEmailAndPassword } from "firebase/auth";



const SignUp = () => {
    const { auth, signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_URL = location.state?.from || '/'
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_URL);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                // ..
            });
    }

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const { email, password } = data;
        // console.log(email,password)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result)
                history.push(redirect_URL);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                // ..
            });
    }

    return (
        <Container className="my-5">
            <h2 className="text-center">Sign Up Now</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Your Name
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control  {...register("name")} placeholder="Enter Your Email..." />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Email
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control  {...register("email")} placeholder="Enter Your Email..." />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Password
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="password" {...register("password", { required: true })} placeholder="Password" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        Confirm Password
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="password" {...register("ConfirmPassword", { required: true })} placeholder="Password" />
                        </Col>
                    </Form.Group>
                </Form>
                {errors.exampleRequired && <span>This field is required</span>}

                <button className="mainButton" type="submit" >Sign Up</button>
            </form>
            <div className="my-5">
                <h5>Did you have any account ? <Link to="/login">Login Now</Link></h5>

                <button className="mainButton my-3" onClick={handleGoogleLogin}>Join with Google</button>

            </div>
        </Container>

    );
};

export default SignUp;