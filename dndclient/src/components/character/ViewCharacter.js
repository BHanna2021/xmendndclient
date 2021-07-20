import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';

const ViewCharacter = (props) => {
    
    const deleteCharacter = (characters) => {
        fetch(`http://localhost:3000/character/${characters.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then(() => props.fetchCharacters())
    }

    const cardMapper = () => {
        return props.characters.map((character, index) => {
            return(
                <div id="results">
                <td key={index}>
                    <tbody>
                    <tr>
                    <th scope="row">{character.name}</th>
                    </tr>
                    <tr>
                    <td>{character.gender}</td>
                    </tr>
                    <tr>
                    <td>{character.height_ft}</td>
                    </tr>
                    <tr>
                    <td>{character.height_in}</td>
                    </tr>
                    <tr>
                    <td>{character.weight}</td>
                    </tr>
                    <tr>
                    <td>{character.race}</td>
                    </tr>
                    <tr>
                    <td>{character.char_class}</td>
                    </tr>
                    <tr>
                    <td>{character.alignment}</td>
                    </tr>
                    <tr>
                    <td>{character.background}</td>
                    </tr>
                    <tr>
                    <td>{character.level}</td>
                    </tr>
                    <tr>
                    <td>{character.experience}</td>
                    </tr>
                    </tbody>
                    <tr>
                    <td>
                        {/* <Button color="warning" onClick={() => {props.editUpdateCharacter(character); props.updateOn()}}>Update</Button>
                        <Button color="danger" onClick={() => {deleteCharacter(character)}}>Delete</Button> */}
                    </td>
                    </tr>
                    </td>
                    <br/>
                    <div id="buttons">
                    <Button color="warning" onClick={() => {props.editUpdateCharacter(character); props.updateOn()}}>Update</Button>
                    <Button color="danger" onClick={() => {deleteCharacter(character)}}>Delete</Button>
                    </div>
                </div>
            )
        })
    }    

    return (
        <div className='character_view'>
            <div id="featurecard" class="card text-center col-md-6 offset-md-3">
                <div class="card-header">
                    Featured
                </div>
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <div className='characterinfo'>
                        <table scope="col" id="table2">
                            <div id='col1'>
                                <tr>
                                    <th>Name:</th>
                                </tr>
                                <tr>
                                    <th>Gender:</th>
                                </tr>
                                <tr>
                                    <th>Height-ft:</th>
                                </tr>
                                <tr>
                                    <th>Height-inches:</th>
                                </tr>
                                <tr>
                                    <th>Weight:</th>
                                </tr>

                                <tr>
                                    <th>Race:</th>
                                </tr>
                                <tr>
                                    <th>Class:</th>
                                </tr>
                                <tr>
                                    <th>Alignment:</th>
                                </tr>
                                <tr>
                                    <th>Background:</th>
                                </tr>
                                <tr>
                                    <th>Level:</th>
                                </tr>
                                <tr>
                                    <th>Experience:</th>
                                </tr>
                            </div>
                            <tbody id="col2">
                                {cardMapper()}
                            </tbody>
                        </table>
                    </div>
                    <br />
                    <div class="d-grid gap-2 col-6 mx-auto">
                        {/* <button class="btn btn-primary" type="button" onClick={() => {props.editUpdateCharacter(character); props.updateOn()}}>Update</button>
                        <button class="btn btn-primary" type="button" onClick={() => {deleteCharacter(character)}}>Delete</button> */}
                    </div>
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
                <div class="card-footer text-muted">
                    2 days ago
                </div>
            </div>
        </div>
    );
}

export default ViewCharacter;


/*

<table>
    <div id='col1'>
        <tr>
            <th>Name:</th>
        </tr>
        <tr>
            <th>Gender:</th>
        </tr>
        <tr>
            <th>Height-ft:</th>
        </tr>
        <tr>
            <th>Height-inches:</th>
        </tr>
        <tr>
            <th>Weight:</th>
        </tr>
    </div>
    <div id='col2'>
        <tr>
            <th>Race:</th>
        </tr>
        <tr>
            <th>Class:</th>
        </tr>
        <tr>
            <th>Alignment:</th>
        </tr>
        <tr>
            <th>Background:</th>
        </tr>
        <tr>
            <th>Level:</th>
        </tr>
        <tr>
            <th>Experience:</th>
        </tr>
    </div>
</table>

*/