import React from 'react';
import CreateUser from "./CreateUser";
import {Container, Row, Col} from 'reactstrap';

const AuthCreate = (props) => {

    return (
        <Container className="auth-container">
            <Row>
                <Col md="2" className="loginUser-col">
                    <CreateUser updateToken={props.updateToken} />
                </Col>
            </Row>
        </Container>
    )
}

export default AuthCreate;