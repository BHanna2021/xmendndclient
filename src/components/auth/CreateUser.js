import React, { useState } from "react";
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const CreateUser = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [handle, setHandle] = useState("");
    const [modalOpen, setModalOpen] = useState(true);
    const [activeButton, setActiveButton] = useState(false);

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
                console.log(data.sessionToken);
                props.updateToken(data.sessionToken);
            })

    };

    const closeModal = () => {
        setModalOpen(false)
        props.toggleCreateUserOff();
    }

    return (
        <div>
            <Modal isOpen={modalOpen}>
                <ModalHeader>
                    <h1>Signup</h1>
                </ModalHeader>
                <ModalBody>
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
                        <Button onClick={closeModal}>Cancel</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );
};

export default CreateUser;