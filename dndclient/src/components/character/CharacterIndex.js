import React, { useState, useEffect } from 'react';
import { } from 'reactstrap';
import Sidebar from '../../sites/Sidebar';
import CharacterCreator from './CreateCharacter';
// import CharacterCarousel from './CharacterCarousel';
import ViewCharacter from './ViewCharacter';

const CharacterIndex = (props) => {
    const [characters, setCharacters] = useState([]);

    const [sessionToken, setSessionToken] = useState('');

    // useEffect(() => {
    //     if (localStorage.getItem('token')) {
    //         setSessionToken(localStorage.getItem('token'));
    //     }
    // }, [])

    // const updateToken = (newToken) => {
    //     localStorage.setItem('token', newToken);
    //     setSessionToken(newToken);
    //     console.log(sessionToken);
    // }

    const clearToken = () => {
        localStorage.clear();
        setSessionToken('');
    }

    const fetchCharacters = () => {
        fetch('http://localhost:3000/characters/mine', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => res.json())
            .then((logData) => {
                setCharacters(logData)
                console.log(logData)
            })
    }

    return (
        <div className='index'>
            <div className='header'>
                <h1>Really Need A Name</h1>
            </div>
            <div className='layout'>
                <nav>
                    <Sidebar clickLogout={clearToken} />
                </nav>
                <div className='content'>
                    <h1>something to see</h1>
                    <div class="d-grid gap-2 col-6 mx-auto">
                            <button class="btn btn-primary" type="button">Create a Character</button>
                            {/* <CharacterCreator /> */}
                        </div>
                        <br />
                    <ViewCharacter />
                    {/* <CharacterCarousel /> */}
                </div>
            </div>
            <div className='footer'>
                <h4>some footer text</h4>
            </div>
        </div>
    )



}

export default CharacterIndex;