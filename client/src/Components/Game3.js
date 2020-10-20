import React, { useState, useEffect } from 'react';
import {Link} from '@reach/router';
import Table from 'react-bootstrap/Table'
import Axios from 'axios';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import PlayerAdd from '../Views/PlayerAdd';

export default props =>{
    const[name,setName] = useState([]);
    const[value,setValue] = useState([1,3]);
    const handleChange = (val) => setValue(val);
    

    useEffect(() => {
        getAllPlayers();
    })

    const getAllPlayers = () => {
        Axios.get('http://localhost:8000/api/users/')
        .then(res=>{
            setName(res.data.users)})
        .catch((err) => {
            console.log(err)
        })
    }
    return(
        <div>
            <h1>Player Status - Game 2</h1><br/>
            <Link to ="/status/game/1/"><h3>Game 1</h3></Link>
            <h3> | </h3>
            <Link to ="/status/game/2/"><h3>Game 2</h3></Link>
            <h3> | </h3>
            <Link to ="/status/game/3/"><h3>Game 3</h3></Link><br/>
            <Table striped bordered hover variant = 'dark'>
                <thead>
                    <tr>
                        <th>Team Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {name.map((user,idx) => (
                        <tr>
                            <td>
                                {user.name}
                            </td>
                            <ToggleButtonGroup type="checkbox" defaultValue={[]}>
                                <ToggleButton value={1}>Playing</ToggleButton>
                                <ToggleButton value={2}>Not Playing</ToggleButton>
                                <ToggleButton value={3}>Undecided</ToggleButton>
                            </ToggleButtonGroup>
                        <br />
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}