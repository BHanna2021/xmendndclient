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
        <Container>
            <Row>
                <Col md="6" className="loginUser-col">
                    <LoginUser updateToken={props.updateToken} />
                </Col>
                <Col md="2">
                    <Button className="signUp" style={{ backgroundColor: "darkblue", fontSize: "110%" }} type="button" onClick={toggleCreateUserOn}>Sign Up</Button>
                    {createActiveUser ? <CreateUser toggleCreateUserOff={toggleCreateUserOff}
                        updateToken={props.updateToken}
                    /> : <></>}
                </Col>
            </Row>
            <Row>
            </Row>
        </Container>
    )
}

export default Auth;