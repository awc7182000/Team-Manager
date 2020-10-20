import React, {useEffect, useState} from 'react';
import axios from 'axios'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
export default props => {
    // const{id} = props;
    const [player,setPlayer] = useState([]);

    useEffect(()=> {
        getPlayers();
    },[]);

    const deletePerson = (id) => {
        console.log("Hello")
        axios.delete('http://localhost:8000/api/users/delete/' +id )
        .then(res => {
            getPlayers();
        })
    }

    const getPlayers =() =>{
        axios.get('http://localhost:8000/api/users/')
        .then(res => {
            setPlayer(res.data.users)
            console.log(player)})
            .catch((error) => {
                console.log(error)
            })
        
    }
    return(
        <div>
            <Table striped bordered hover variant="dark">
    <thead>
        <tr>
            <th>Name</th>
            <th>Preferred Position</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
    {player.map((user,idx) =>(
    <tr>
        <td>
            {user.name}
        </td>
        <td>
            {user.position}
        </td>
        <td>
            <Button onClick= {deletePerson.bind(this,user._id)}>Remove Player</Button>
        </td>
    </tr>
    ))}
    </tbody>
</Table>
        </div>
    )
}