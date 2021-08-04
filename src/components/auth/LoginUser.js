import React, { useState } from "react";
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Col,
    Row,
    Container
} from "reactstrap";
import APIURL from '../../helpers/environment';
import validator from "validator";

const LoginUser = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    let handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/user/login`, {
            method: "POST",
            body: JSON.stringify({
                user: { email: email, password: password },
            }),
            headers: new Headers({
                "Content-Type": "application/json",
            }),
        })
            .then(
                (response) => response.json()
            )
            .then((data) => {
                props.updateToken(data.sessionToken);
            })
            .catch(err => {
                console.error(err)
            })
    }

    return (
        <div>
            <Container className="auth-container">
                <div>
                    <h1 style={{ color: "indigo" }}>Adventure Awaits</h1>
                </div>
                <div>
                    <h3 style={{ fontSize: "175%" }}>Login Here:</h3>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label htmlFor="email">Email Address</Label>
                            <Input className='w-75'
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                name="email"
                                id="email"
                                pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}"
                                placeholder="AdventurerBob@DnD.com"
                                title="please enter a valid email"
                                required
                            />
                        </FormGroup>
                        <br />
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input
                                onChange={(e) => setPassword(e.target.value)}
                                name="password"
                                value={password}
                                type="password"
                                className="w-75"
                                placeholder="SpellFlinger27!"
                                required
                            />
                        </FormGroup>
                        <br />
                        <Row>
                            <Col md={3}>
                                <Button style={{ backgroundColor: "darkblue", fontSize: "110%" }} type="submit">Login</Button>
                            </Col>
                            <Col md={3}>
                                <Button style={{ backgroundColor: "darkblue", fontSize: "110%" }} type="button" onClick={props.toggleCreateUserOn}>Sign Up</Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </Container>
        </div>
    );
}

export default LoginUser;