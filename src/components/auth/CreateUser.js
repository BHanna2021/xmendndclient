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
    Row,
    Col
} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import APIURL from '../../helpers/environment';

const CreateUser = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [handle, setHandle] = useState("");
    const [modalOpen, setModalOpen] = useState(true);
    const [userId, setUserId] = useState('');

    let handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/user/register`, {

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
                setUserId(data.id);
                console.log(userId);
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
                    <h2>Who goes there?</h2>
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                                onChange={(e) => setEmail(e.target.value)}
                                name="email"
                                value={email}
                                type="email"
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
                                required
                            />
                        </FormGroup>
                        <br/>
                        <FormGroup>
                            <Label htmlFor="handle">DnD handle</Label>
                            <Input
                                onChange={(e) => setHandle(e.target.value)}
                                name="handle"
                                value={handle}
                            />
                        </FormGroup>
                        <br/>
                        <Row>
                            <Col md="3">
                                <Button style={{backgroundColor: "darkblue", fontSize: "110%"}} type="submit">Join Us</Button>
                            </Col>
                            <Col md="2">
                                <Button style={{backgroundColor: "darkslateblue", fontSize: "110%"}} onClick={closeModal}>Cancel</Button>
                            </Col>
                        </Row>
                        
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );
};

export default CreateUser;