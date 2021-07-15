import React from 'react';
import LoginUser from "./LoginUser";
// import CreateUser from "./CreateUser";
import {Container, Row, Col} from 'reactstrap';

const Auth = (props) => {

    return (
        <Container className="auth-container">
            <Row>
                <Col md="2" className="loginUser-col">
                    <LoginUser updateToken={props.updateToken} />
                </Col>
            </Row>
        </Container>
    )
}

export default Auth;