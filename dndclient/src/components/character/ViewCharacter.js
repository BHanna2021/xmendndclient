import React, { useState, useEffect } from 'react';
import { Button, CardImg } from 'reactstrap';

const ViewCharacter = (props) => {
    console.log(props);


    const deleteCharacter = (characters) => {
        fetch(`http://localhost:3000/character/${characters.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then(() => props.fetchCharacters())
    }

    

    return (
        <div className='character_view'>
            <div id="featurecard" class="card text-center col-md-6 offset-md-3">
                <CardImg top width="100%" src="image1.jpg" alt=" "/>
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
                                    <th>Name:{props.characterToView.name}</th>
                                </tr>
                                <tr>
                                    <th>Gender:{props.characterToView.gender}</th>
                                </tr>
                                <tr>
                                    <th>Height-ft:{props.characterToView.height_ft}</th>
                                </tr>
                                <tr>
                                    <th>Height-inches:{props.characterToView.height_in}</th>
                                </tr>
                                <tr>
                                    <th>Weight:{props.characterToView.weight}</th>
                                </tr>

                                <tr>
                                    <th>Race:{props.characterToView.race}</th>
                                </tr>
                                <tr>
                                    <th>Class:{props.characterToView.char_class}</th>
                                </tr>
                                <tr>
                                    <th>Alignment:{props.characterToView.alignment}</th>
                                </tr>
                                <tr>
                                    <th>Background:{props.characterToView.background}</th>
                                </tr>
                                <tr>
                                    <th>Level:{props.characterToView.level}</th>
                                </tr>
                                <tr>
                                    <th>Experience:{props.characterToView.experience}</th>
                                </tr>
                            </div>
                        </table>
                    </div>
                    <br />
                    <div class="d-grid gap-2 col-6 mx-auto">
                        <button class="btn btn-primary" type="button" onClick={() => {}}>Update</button>
                        <button class="btn btn-primary" type="button" onClick={() => {}}>Delete</button>
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
