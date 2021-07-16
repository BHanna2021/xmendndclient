import React, { useState } from 'react';
import { } from 'reactstrap';
import Sidebar from '../../sites/Sidebar';
// import CharacterCarousel from './CharacterCarousel';

const CharacterIndex = (props) => {
    const [characters, setCharacters] = useState([]);

    const fetchCharacters = () => {
        fetch('http://localhost:3000/characters/mine', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then( (res) => res.json())
        .then((logData) => {
            setCharacters(logData)
            console.log(logData)
        })
    }

    return(
        <div className='index'>
            <div className='header'>
                <h1>Really Need A Name</h1>
            </div>
            <div className='layout'>
                <nav>
                    <Sidebar />
                </nav>
                <h1>something to see</h1>
                {/* <CharacterCarousel /> */}

            </div>
            <div className='footer'>
                <h4>some footer text</h4>
            </div>
        </div>
    )



}

export default CharacterIndex;