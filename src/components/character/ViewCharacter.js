import React, { useState, useEffect } from 'react';
import { Button, CardImg } from 'reactstrap';
import EditCharacter from './CharacterEdit';

const ViewCharacter = (props) => {
    console.log(props);
    const [editActive, setEditActive] = useState(false);

    const editOn = () => {
        setEditActive(true)
    }

    const editOff = () => {
        setEditActive(false)
    }


    const deleteCharacter = (characterToView) => {
        fetch(`http://localhost:3000/character/delete/${props.characterToView.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then(() => props.fetchCharacters())
    }



    return (
        <div className='character_view'>
            <div id="featurecard" class="card text-center col-md-6 offset-md-1">
                {/* <CardImg top width="100%" src="Image1.jpg" alt=" " /> */}
                <div class="card-header">
                    {props.characterToView.race}/{props.characterToView.char_class}

                </div>
                <div class="card-body">
                    <h5 class="card-title">{props.characterToView.name}</h5>
                    {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                    <div className='characterinfo'>
                        <table scope="col" id="table2">
                        <div id="col1">
                            <tr>
                                    <th>Race: {props.characterToView.race}</th>
                                </tr>
                                <tr>
                                    <th>Class:  {props.characterToView.char_class}</th>
                                </tr>
                                <tr>
                                    <th>Experience:  {props.characterToView.experience}</th>
                                </tr>
                                <tr>
                                    <th>Background: {props.characterToView.background}</th>
                                </tr>
                                <tr>
                                    <th>Level:  {props.characterToView.level}</th>
                                </tr>

                                <hr/>
                                <div class="d-grid gap-2 col-8 mx-auto">
                                    <button class="btn btn-secondary btn-block" type="button" onClick={editOn}>Update</button>
                                    {editActive ? <EditCharacter characterToView={props.characterToView} editOff={editOff} token={props.token} /> : <></>}
                                </div>
                            </div>
                            <div id='col2'>
                                <tr>
                                    <th>Alignment: {props.characterToView.alignment}</th>
                                </tr>
                                <tr>
                                    <th>Gender: {props.characterToView.gender}</th>
                                </tr>
                                <tr>
                                    <th>Height-ft: {props.characterToView.height_ft}</th>
                                </tr>
                                <tr>
                                    <th>Height-inches: {props.characterToView.height_in}</th>
                                </tr>
                                <tr>
                                    <th>Weight: {props.characterToView.weight}</th>
                                </tr>
                                <hr/>
                                <div class="d-grid gap-2 col-8 mx-auto">
                                    <button class="btn btn-secondary btn-block" type="button" onClick={() => {deleteCharacter(props.characterToView)}}>Delete</button>
                                </div>
                            </div>
                            <tr>

                            </tr>
                        </table>
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
