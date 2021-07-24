import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import APIURL from '../../helpers/environment';

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
    }

    return (
        <div>
            <Container className="auth-container">
                <div>
                    <h1>Adventure Awaits</h1>
                </div>
                <div>
                    <h3>Login Here</h3>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                                onChange={(e) => setEmail(e.target.value)}
                                name="email"
                                value={email}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input
                                onChange={(e) => setPassword(e.target.value)}
                                name="password"
                                value={password}
                                required
                            />
                        </FormGroup>
                        <Button type="submit">Login</Button>
                    </Form>
                </div>
            </Container>
        </div>
    );
}

export default LoginUser;