//3rd Party Imports
import React, {useState, useEffect} from 'react'; 

//components
import { PlayerGrid } from './PlayerGrid'; 
import {SearchPlayer} from './SearchPlayer';
import { TeamsDropdown } from './TeamsDropdown';


export function NavigationBar() { 
  const [players, setPlayers] = useState([]);   
  const [name, setName]= useState('');
  const [teams, setTeams] = useState([]); 
  const [selectedTeam,setSelectedTeam]=useState([]);
  const [visiblePlayers,setVisiblePlayers]=useState([]);

  useEffect(() => { 
   fetch('http://localhost:3001/players')
    .then(response => response.json())
    .then((data) => setPlayers(data))
   },[]) 


   useEffect(() => {
    fetch('http://localhost:3001/teams')
      .then(response => response.json())
      .then((json) => setTeams(json))
  },[])   


  useEffect(() => { 
   const arrOfPlayers= players.filter(function(player){ 
      if(player.ta === selectedTeam.ta){
        return player
    }
  }) 
    setVisiblePlayers(arrOfPlayers) 
   },[selectedTeam,players]) 


  const grabTeam = (event) => { 
    const arrOfTeams = teams.filter(function(team){
      if(team.name === event.currentTarget.value ){
        return team
      }
    })
    setSelectedTeam(arrOfTeams[0])
  }  
 
  const handleSubmit = (evt) => {
    evt.preventDefault();  
    let teamTa=''
    const player= players.find(function(player){ 
        if((player.fn.toLowerCase() + ' ' + player.ln.toLowerCase()) === name.toLowerCase()){
          teamTa=player.ta
         return true;
      }
    })  
    setVisiblePlayers([player])
  }

  return ( 
    <div data-testid="navigation-bar">
      <div className="relative z-50 bg-gray-800 border-gray-200 rounded dark:bg-gray-800">
        <div className="container flex flex-wrap justify-between items-center mx-auto bg-gray-800"> 
          <h1 className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
          NBA Player Roster 
          </h1>  
          <TeamsDropdown data-testid="teams-dropdown-menu" teams={teams} grabTeam={grabTeam}></TeamsDropdown>  
          <SearchPlayer data-testid="search-bar" name={name} handleSubmit={handleSubmit} setName={setName}></SearchPlayer>
        </div> 
      </div>
      <PlayerGrid data-testid="player-grid" players={players} visiblePlayers={visiblePlayers} teams={teams}></PlayerGrid> 
    </div>
  )
}
