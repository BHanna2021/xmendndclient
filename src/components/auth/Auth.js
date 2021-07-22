import React, { useState } from 'react';
import LoginUser from "./LoginUser";
import CreateUser from './CreateUser';
import { Container, Row, Col, Button } from 'reactstrap';

const Auth = (props) => {
    const [createActiveUser, setCreateActiveUser] = useState(false);

    const toggleCreateUserOn = () => {
        setCreateActiveUser(true)
    }

    const toggleCreateUserOff = () => {
        setCreateActiveUser(false)
    }

    return (
        <Container className="auth-container">
            <Row>
                <Col md="6" className="loginUser-col">
                    <LoginUser updateToken={props.updateToken} />
                </Col>
            </Row>
            <Row>
                <br/ >
            </Row>
            <Row>
                <Col md="2">
                    <Button className="signUp" type="button" onClick={toggleCreateUserOn}>Sign Up</Button>
                    {createActiveUser ? <CreateUser toggleCreateUserOff={toggleCreateUserOff} 
                updateToken={props.updateToken}
                /> : <></>}
                </Col>
            </Row>
        </Container>
    )
}

export default Auth;