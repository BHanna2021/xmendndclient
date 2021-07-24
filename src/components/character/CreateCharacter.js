import React, { useState, useEffect } from 'react';
import {Button,
        Form,
        FormGroup,
        Label,
        Input,
        Row,
        Col,
        ButtonGroup,
        ButtonToggle,
        Modal,
        ModalHeader,
        ModalBody,
        ModalFooter
    } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import APIURL from '../../helpers/environment';

const CharacterCreator = (props) => {
    const [name, setName] = useState('');
    const [race, setRace] = useState('');
    const [alignment, setAlignment] = useState('');
    const [gender, setGender] = useState('');
    const [height_ft, setHeight_ft] = useState('');
    const [height_in, setHeight_in] = useState('');
    const [weight, setWeight] = useState('');
    const [char_class, setChar_class] = useState('');
    const [background, setBackground] = useState('');
    const [level, setLevel] = useState('');
    const [experience, setExperience] = useState('');
    const [modalOpen, setModalOpen] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${APIURL}/character/create`, {
            method: 'POST',
            body: JSON.stringify({Character: {
                name: name,
                race: race,
                alignment: alignment,
                gender: gender,
                height_ft: height_ft,
                height_in: height_in,
                weight: weight,
                char_class: char_class,
                background: background,
                level: level,
                experience: experience,
            }}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then((res) => res.json())
        .then((charData) => {console.log(charData);
            setName('');
            setRace('');
            setAlignment('');
            setGender('');
            setHeight_ft('');
            setHeight_in('');
            setWeight('');
            setChar_class('');
            setBackground('');
            setLevel('');
            setExperience('');
            setModalOpen(false);
            window.location="/"
        })
    }

    const closeModal = () => {
        setModalOpen(false)
        props.toggleCreateOff()
    }

    return(
        <>
        <Modal isOpen={modalOpen}>
                <ModalHeader>
                    <h2>DnD Character Creator</h2>
                </ModalHeader>
                <ModalBody>
                <Form onSubmit={handleSubmit}>
                <Row form>
                    <Col md={12}>
                        <FormGroup>
                            <h3>Welcome to Character Creator!</h3>
                            <p>See where your imagination can take you.</p>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                    
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Label htmlFor="race">Race: </Label>
                            <Input type="select" name="race" value={race} onChange={(e) => setRace(e.target.value)}>
                                <option></option>
                                <option value="Dragonborn">Dragonborn</option>
                                <option value="Dwarf">Dwarf</option>
                                <option value="Elf">Elf</option>
                                <option value="Gnome">Gnome</option>
                                <option value="Half-Elf">Half-Elf</option>
                                <option value="Half-Orc">Half-Orc</option>
                                <option value="Halfling">Halfling</option>
                                <option value="Human">Human</option>
                                <option value="Tiefling">Tiefling</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label htmlFor="Class">Class: </Label>
                            <Input type="select" name="char_class" value={char_class} onChange={(e) => setChar_class(e.target.value)}>
                                <option></option>
                                <option value="Artificer">Artificer</option>
                                <option value="Barbarian">Barbarian</option>
                                <option value="Bard">Bard</option>
                                <option value="Blood Hunter">Blood Hunter</option>
                                <option value="Cleric">Cleric</option>
                                <option value="Druid">Druid</option>
                                <option value="Fighter">Fighter</option>
                                <option value="Monk">Monk</option>
                                <option value="Paladin">Paladin</option>
                                <option value="Ranger">Ranger</option>
                                <option value="Rogue">Rogue</option>
                                <option value="Sorcerer">Sorcerer</option>
                                <option value="Warlock">Warlock</option>
                                <option value="Wizard">Wizard</option>
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <br/>
                </Row>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Label htmlFor="weight">Weight: </Label>
                            <Input size="sm" type="number" name="weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
                            <Label htmlFor="weight"> lbs</Label>
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Label htmlFor="height">Height: </Label>
                            <Input type="select" name="height_ft" value={height_ft} onChange={(e) => setHeight_ft(e.target.value)}>
                                <option></option>
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                            </Input>
                            <Label htmlFor="height_ft"> ft </Label>
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Label htmlFor="height"></Label>
                            <Input type="select" name="height_in" value={height_in} onChange={(e) => setHeight_in(e.target.value)}>
                                <option></option>
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                            </Input>
                            <Label htmlFor="height_in"> in</Label>
                            </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <br/>
                </Row>
                <Row>
                    <Col md={2}>
                        <Label htmlFor="gender" value={gender}>Gender: </Label>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Label check>
                                <Input type="radio" name="gender" value="Female" onChange={(e) => setGender(e.target.value)} />
                                &nbsp;Female
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label check>
                                <Input type="radio" name="gender" value="Non-Binary" onChange={(e) => setGender(e.target.value)} />
                                &nbsp;Non-Binary
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Label check>
                                <Input type="radio" name="gender" value="Male" onChange={(e) => setGender(e.target.value)} />
                                &nbsp;Male
                            </Label>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <br/>
                </Row>
                <Row>
                    <Col md={12} className="text-center">
                        <Label htmlFor="alignment" value={alignment}>Alignment:</Label>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <ButtonGroup vertical>
                            <ButtonToggle value="Lawful Good" color="primary" name="alignment" onClickCapture={(e) => setAlignment(e.target.value)}>Lawful Good</ButtonToggle>
                            <ButtonToggle value="Lawful Neutral" color="info" name="alignment" onClickCapture={(e) => setAlignment(e.target.value)}>Lawful Neutral</ButtonToggle>
                            <ButtonToggle value="Lawful Evil" color="warning" name="alignment" onClickCapture={(e) => setAlignment(e.target.value)}>Lawful Evil</ButtonToggle>
                        </ButtonGroup>
                    </Col>
                    <Col md={4}>
                        <ButtonGroup vertical>
                            <ButtonToggle value="Neutral Good" color="primary" name="alignment" onClickCapture={(e) => setAlignment(e.target.value)}>Neutral Good</ButtonToggle>
                            <ButtonToggle value="Neutral" color="info" name="alignment" onClickCapture={(e) => setAlignment(e.target.value)}>Neutral</ButtonToggle>
                            <ButtonToggle value="Neutral Evil" color="warning" name="alignment" onClickCapture={(e) => setAlignment(e.target.value)}>Neutral Evil</ButtonToggle>
                        </ButtonGroup>
                    </Col>

                    <Col md={4}>
                        <ButtonGroup vertical>
                            <ButtonToggle value="Chaotic Good" color="primary" name="alignment" onClickCapture={(e) => setAlignment(e.target.value)}>Chaotic Good</ButtonToggle>
                            <ButtonToggle value="Chaotic Neutral" color="info" name="alignment" onClickCapture={(e) => setAlignment(e.target.value)}>Chaotic Neutral</ButtonToggle>
                            <ButtonToggle value="Chaotic Evil" color="warning" name="alignment" onClickCapture={(e) => setAlignment(e.target.value)}>Chaotic Evil</ButtonToggle>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row>
                    <br/>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="background">Background: </Label>
                            <Input type="select" name="background" value={background} onChange={(e) => setBackground(e.target.value)}>
                                <option></option>
                                <option value="Acolyte">Acolyte</option>
                                <option value="Anthropologist">Anthropologist</option>
                                <option value="Archaeologist">Archaeologist</option>
                                <option value="Athlete">Athlete</option>
                                <option value="Charlatan">Charlatan</option>
                                <option value="City Watch">City Watch</option>
                                <option value="Clan Crafter">Clan Crafter</option>
                                <option value="Cloistered Scholar">Cloistered Scholar</option>
                                <option value="Courtier">Courtier</option>
                                <option value="Criminal">Criminal</option>
                                <option value="Entertainer">Entertainer</option>
                                <option value="Faceless">Faceless</option>
                                <option value="Faction Agent">Faction Agent</option>
                                <option value="Far Traveler">Far Traveler</option>
                                <option value="Fisher">Fisher</option>
                                <option value="Folk Hero">Folk Hero</option>
                                <option value="Gladiator">Gladiator</option>
                                <option value="Guild Artisan">Guild Artisan</option>
                                <option value="Guild Merchant">Guild Merchant</option>
                                <option value="Haunted One">Haunted One</option>
                                <option value="Hermit">Hermit</option>
                                <option value="House Agent">House Agent</option>
                                <option value="Inheritor">Inheritor</option>
                                <option value="Knight">Knight</option>
                                <option value="Knight of the Order">Knight of the Order</option>
                                <option value="Marine">Marine</option>
                                <option value="Mercenary Veteran">Mercenary Veteran</option>
                                <option value="Noble">Noble</option>
                                <option value="Outlander">Outlander</option>
                                <option value="Pirate">Pirate</option>
                                <option value="Sage">Sage</option>
                                <option value="Sailor">Sailor</option>
                                <option value="Shipwright">Shipwright</option>
                                <option value="Smuggler">Smuggler</option>
                                <option value="Soldier">Soldier</option>
                                <option value="Spy">Spy</option>
                                <option value="Urban Bounty Hunter">Urban Bounty Hunter</option>
                                <option value="Urchin">Urchin</option>
                                <option value="Uthgardt Tribe Member">Uthgardt Tribe Member</option>
                                <option value="Waterdhavian Noble">Waterdhavian Noble</option>
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <br/>
                </Row>
                <Row>
                <Col md={6}>
                        <Label for="level">Level: </Label>
                        <Input type="number" name="level" value={level} onChange={(e) => setLevel(e.target.value)}/>
                    </Col>
                    <Col md={6}>
                        <Label for="experience">Experience: </Label>
                        <Input type="text" name="experience" value={experience} onChange={(e) => setExperience(e.target.value)}/>
                    </Col>
                </Row>
                <Row>
                    <br/>
                </Row>
                <Row>
                <Col md={12}>
                    <Label for="name">Character Name: </Label>
                    <Input type="text"  name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                    </Col>
                </Row>
                <Row>
                    <br />
                </Row>
                <Row>
                    <Col md={2}>
                    </Col>
                    <Col md={3}>
                        <Button type="submit">Create!</Button>
                    </Col>
                    <Col md={2}>
                    </Col>
                    <Col md={3}>
                        <Button onClick={closeModal}>Cancel</Button>
                    </Col>
                </Row>
                </Form>
                </ModalBody>
            </Modal>
        </>
    )
}

export default CharacterCreator;