import React, { useState, useEffect } from 'react';
import {Button,
        Form,
        FormGroup,
        Label,
        Input,
        Row,
        Col
    } from 'reactstrap';

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

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/character/create', {
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
        .then((charData) => {
            console.log(charData);
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
            
        })
    }

    return(
        <>
        <h2>DnD Character Creator</h2>
            <Form onSubmit={handleSubmit}>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <h3>Welcome to Character Creator!</h3>
                            <p>Let's see where your imagination takes you.</p>
                        </FormGroup>
                    </Col>
                <Col md={6}>
                    
                </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Label htmlFor="race">Race:</Label>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Input type="select" name="race" value={race} onChange={(e) => setRace(e.target.value)} />
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
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Label htmlFor="Class">Class:</Label>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Input type="select" name="char_class" value={char_class} onChange={(e) => setChar_class(e.target.value)} />
                                <option></option>
                                <option>Artificer</option>
                                <option>Barbarian</option>
                                <option>Bard</option>
                                <option>Blood Hunter</option>
                                <option>Cleric</option>
                                <option>Druid</option>
                                <option>Fighter</option>
                                <option>Monk</option>
                                <option>Paladin</option>
                                <option>Ranger</option>
                                <option>Rogue</option>
                                <option>Sorcerer</option>
                                <option>Warlock</option>
                                <option>Wizard</option>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={2}>
                        <FormGroup>
                            <Label htmlFor="weight">Weight:</Label>
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Input type="number" name="weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
                            <Label htmlFor="weight">lbs</Label>
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label htmlFor="height">Height:</Label>
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Input type="select" name="height_ft" value={height_ft} onChange={(e) => setHeight_ft(e.target.value)} />
                            <Label htmlFor="height_ft">ft</Label>
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Input type="select" name="height_in" value={height_in} onChange={(e) => setHeight_in(e.target.value)} />
                            <Label htmlFor="height_in">in</Label>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Label htmlFor="gender">Gender:</Label>
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label check>
                                <Input type="radio" name="female" value={gender} onChange={(e) => setGender(e.target.value)} />
                                Female
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label check>
                                <Input type="radio" name="nonbinary" value={gender} onChange={(e) => setGender(e.target.value)} />
                                Non-Binary
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label check>
                                <Input type="radio" name="male" value={gender} onChange={(e) => setGender(e.target.value)} />
                                Male
                            </Label>
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default CharacterCreator;