import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Container,} from "reactstrap";
import APIURL from '../../helpers/environment';

const LoginUser = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userId, setUserId] = useState("");
    const [handle, setHandle] = useState("");

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
                setUserId(data.user.id)
            })
    }

    return (
        <div>
            <Container className="auth-container">
                <div>
                    <h1>Adventure Awaits</h1>
                </div>
                <div>
                    <h3 style={{fontSize: "175%"}}>Login Here:</h3>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                                onChange={(e) => setEmail(e.target.value)}
                                name="email"
                                value={email}
                                type="email"
                                className="w-75"
                                required
                            />
                        </FormGroup>
                        <br/>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input
                                onChange={(e) => setPassword(e.target.value)}
                                name="password"
                                value={password}
                                type="password"
                                className="w-75"
                                required
                            />
                        </FormGroup>
                        <br/>
                        <Button style={{backgroundColor: "darkblue", fontSize: "110%"}} type="submit">Login</Button>
                    </Form>
                </div>
            </Container>
        </div>
    );
}

export default LoginUser;