import React, { useState } from 'react';
import LoginUser from "./LoginUser";
import CreateUser from './CreateUser';
import { Container, Row, Col } from 'reactstrap';

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
                    <LoginUser updateToken={props.updateToken} toggleCreateUserOff={toggleCreateUserOff} toggleCreateUserOn={toggleCreateUserOn} />
                    {createActiveUser ? <CreateUser toggleCreateUserOff={toggleCreateUserOff}
                        updateToken={props.updateToken}
                    /> : <></>}
                </Col>
            </Row>
        </Container>
    )
}

export default Auth;