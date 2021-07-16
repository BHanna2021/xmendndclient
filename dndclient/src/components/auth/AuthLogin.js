import React from 'react';
import LoginUser from "./LoginUser";
import {Container, Row, Col} from 'reactstrap';

const AuthLogin = (props) => {

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

export default AuthLogin;