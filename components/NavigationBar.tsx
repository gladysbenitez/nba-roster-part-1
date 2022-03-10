//3rd Party Imports
import axios from 'axios';
import React, {useState, useEffect, MouseEvent, FormEvent} from 'react'; 
import { PlayerGrid } from './PlayerGrid';
import { SearchPlayer } from './SearchPlayer';
import { TeamsDropdown } from './TeamsDropdown';

//components


//types

export type Player ={
    id: number,
    ln: string,
    fn: string,
    ta: string,
    num: string,
    pos: string,
    pts: number,
    reb: number,
    ast: number,
    stl: number,
    headshot: string,
    slug: string
} 

export type Team = {
    tid: number,
    ta: string,
    city: string,
    name: string,
    color: string,
    logo: string
}
export function NavigationBar() { 
  const [players, setPlayers] = useState<Player[]>([]);   
  const [name, setName]= useState<string>('');
  const [teams, setTeams] = useState<Team[]>([]); 
  const [selectedTeam,setSelectedTeam]=useState<Team | null>(null);
  const [visiblePlayers,setVisiblePlayers]=useState<Player[]>([]);

  useEffect(() => { 
   axios.get('http://localhost:3001/players')
    .then(({data}) => setPlayers(data))
   },[]) 


   useEffect(() => {
    axios.get('http://localhost:3001/teams')
      .then(({data}) => setTeams(data))
  },[])   


  useEffect(() => { 
    const arrOfPlayers = players.filter(function(player){ 
      if(player.ta === selectedTeam?.ta){
        return player
      }
      return null;
    }) 
    setVisiblePlayers(arrOfPlayers) 
  }, [selectedTeam, players])


  const grabTeam = (event: MouseEvent<HTMLButtonElement>) => {  
    console.log( event,'event')
    const arrOfTeams = teams.filter(function(team){
      if(team.name === event.currentTarget.value){
        return team
      }
    })
    setSelectedTeam(arrOfTeams[0])
  }  
 
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();  
    let teamTa=''
    const player= players.find(function(p){  
      if((p.fn.toLowerCase() + ' ' + p.ln.toLowerCase()) === name.toLowerCase()){
          teamTa=p.ta
         return true;
      } 
    })
    if(player) {
      setVisiblePlayers([player])
    }
  }

  console.log(selectedTeam,'look here')

  return ( 
    <div data-testid="navigation-bar">
      <div className="relative z-50 bg-gray-800 border-gray-200 rounded dark:bg-gray-800">
        <div className="container flex flex-wrap justify-between items-center mx-auto bg-gray-800"> 
          <h1 className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
          NBA Player Roster 
          </h1>  
          <TeamsDropdown teams={teams} grabTeam={grabTeam}></TeamsDropdown>  
          <SearchPlayer data-testid="search-bar" name={name} handleSubmit={handleSubmit} setName={setName}></SearchPlayer>
        </div> 
      </div>
      <PlayerGrid data-testid="player-grid" visiblePlayers={visiblePlayers} teams={teams}></PlayerGrid> 
    </div>
  )
}
