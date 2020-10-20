import React from 'react';
import './App.css';
import {Link} from "@reach/router"
import {Router} from "@reach/router"
import Main from './Views/Main'
import Add from './Views/Add'
import Status from './Views/Status'
import PlayerAdd from './Views/PlayerAdd'
import Game1 from './Components/Game1'
import Game2 from './Components/Game2'
import Game3 from './Components/Game3'


function App() {
  return (
    <div className="App">
      <Link to="players/list"><h1>Manage Players</h1></Link>
      <h1> | </h1>
      <Link to ="/status/game/1/"><h1>Manage Player Status</h1></Link>
      <Router>
      <PlayerAdd path = "/players/addplayer/"/>
      <Main path="/players/list/"/>
      <Add path = "/players/addplayer"/>
      <Status path = "/status/game/"/>
      <Game1 path= "/status/game/1/"/>
      <Game2 path= "/status/game/2/"/>
      <Game3 path= "/status/game/3/"/>
      </Router>
    </div>
  );
}

export default App;

