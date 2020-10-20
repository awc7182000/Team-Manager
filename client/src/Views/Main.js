import React from 'react';
import PlayerList from '../Components/PlayerList';
import {Link} from '@reach/router';
export default(props) => {
    return(
        <div>
                    <Link to=""><h1>List</h1></Link>
                    <h1> | </h1>
                    <Link to ="/players/addplayer/"><h1>Add Player</h1></Link>
                    <PlayerList />
        </div>

    )
}