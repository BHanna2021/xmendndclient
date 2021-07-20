import React from 'react';
import { Table } from 'reactstrap';

const CharacterTable = (props) => {
    
    const characterMapper = () => {
        return props.characters.map((character, index) => {
            return(
                <td key={index}>
                    <tr>
                    <th scope="row">{character.id}</th>
                    </tr>
                    <tr>
                    <td>{character.name}</td>
                    </tr>
                    <tr>
                    <td>{character.char_class}</td>
                    </tr>
                    <tr>
                    <td>{character.race}</td>
                    </tr>
                </td>
            )
        })
    }

    return(
        <>
        <h3>Characters</h3>
        <hr />
        <Table size="sm" dark scope='col' id="table">
            <thead id="firstcol">
                <tr>
                    <th>#</th>
                </tr>
                <tr>
                    <th>Name:</th>
                </tr>
                <tr>
                    <th>Class:</th>
                </tr>
                <tr>
                    <th>Race:</th>
                </tr>
            </thead>
            <tbody id="secondcol">
                {characterMapper()}
            </tbody>
        </Table>
        </>
    )
}

export default CharacterTable;