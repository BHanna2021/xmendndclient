import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const CreateUser = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [handle, setHandle] = useState("");

    let handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:3000/user/register", {
        
            method: "POST",
            body: JSON.stringify({
                user: { email: email, password: password, handle: handle, },
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
            
    };

    return (
        <div>
            <h1>Signup</h1>
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
                <FormGroup>
                    <Label htmlFor="handle">DnD handle</Label>
                    <Input
                        onChange={(e) => setHandle(e.target.value)}
                        name="handle"
                        value={handle}
                    />
                </FormGroup>
                <Button type="submit">Signup</Button>
            </Form>
        </div>
    );
};

export default CreateUser;