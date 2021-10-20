import React from 'react';
import './Login.css';
import { useForm } from "react-hook-form"
import { Form, Row, Col, Container } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faAmbulance, faMedkit, faUserMd } from '@fortawesome/free-solid-svg-icons'
import useAuth from '../Hooks/useAuth';
import { signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {
    const { auth,signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_URL = location.state?.from || '/'
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_URL);
            })
    }
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const { email, password } = data;
        // console.log(email,password)
        signInWithEmailAndPassword(auth, email, password)
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
            <h2 className="text-center">Login Now</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Form>
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
                </Form>
                {errors.exampleRequired && <span>This field is required</span>}

                <button className="mainButton" type="submit" >Login</button>
            </form>
            <div className="my-5">
                <h5>Did you have any account ? <Link to="/signup">Signup Now</Link></h5>

                <button className="mainButton my-3" onClick={handleGoogleLogin}>Join with Google</button>

            </div>
        </Container>

    );
};

export default Login;