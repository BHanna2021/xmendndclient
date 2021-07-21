import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Nav, NavItem } from 'reactstrap';
import CharacterTable from '../components/character/CharacterTable';
import ViewCharacter from '../components/character/ViewCharacter';

const Sidebar = (props) => {
    const [characters, setCharacters] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);

    const fetchCharacters = () => {
        fetch(`http://localhost:3000/character/mine`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then( (res) => res.json())
        .then((logData) => {
            setCharacters(logData)
            console.log(logData)
        })
    }

    const displayCharacter = (character) => {
        console.log(character.id)
        fetch(`http://localhost:3000/character/${character.id}`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then( (res) => res.json())
        .then((logData) => {
            props.setCharacterToView(logData)

        })
        // setCharacterToView(character);
    }

    const updateOn = () => {
        setUpdateActive(true);
    }

    const updateOff = () => {
        setUpdateActive(false);
    }


    useEffect(() => {
        fetchCharacters();
    }, [])

    return (
        <div className='sidebar' id='sidebar'>
            <div className='sidebar-list-styling'>
                <ul className='sidebar-list-styling'>
                    <h2>Welcome!</h2>
                    <h6>name</h6>
                    <h6>member since:</h6>
                </ul>
                <Nav className="ml-auto" navbar>
                    <NavItem id="button">
                        <Button onClick={props.clickLogout}>Logout</Button>
                    </NavItem>
                </Nav>
                <br/>
            </div>
            <Container>

                        <CharacterTable characters={characters} displayCharacter={displayCharacter} fetchCharacters={fetchCharacters} token={props.token} />
                        {/* <ViewCharacter characters={characters} displayCharacter={displayCharacter} fetchCharacters={fetchCharacters} token={props.token} /> */}
                    {updateActive ? <ViewCharacter characterToView={props.characterToView} setCharactersToView={props.setCharacterToView} updateOff={updateOff} token={props.token} updateOn={updateOn} fetchCharacters={fetchCharacters} /> : <></>}

            </Container>
        </div>
    );
};

export default Sidebar;