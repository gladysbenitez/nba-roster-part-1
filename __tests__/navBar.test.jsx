import { render, screen,fireEvent } from '@testing-library/react' 
import axios from "axios";

import { NavigationBar } from '@/components/NavigationBar'
import { SearchPlayer } from '@/components/SearchPlayer';


jest.mock("axios");

describe('Navigation Bar', () => { 

  const players= [ {
    "id": 1630173,
    "ln": "Achiuwa",
    "fn": "Precious",
    "ta": "MIA",
    "num": "5",
    "pos": "F",
    "pts": 6.6,
    "reb": 4.3,
    "ast": 0.7,
    "stl": 0.4,
    "headshot": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1630173.png",
    "slug": "precious-achiuwa"
  }]; 
  const teams = [ {
    "tid": 1610612748,
    "ta": "MIA",
    "city": "Miami",
    "name": "Heat",
    "color": "#98002e",
    "logo": "https://cdn.nba.com/logos/nba/1610612748/primary/L/logo.svg"
  }];

 beforeEach(()=>{
  axios.get.mockImplementation((url)=>{ 
    
    if(url === `http://localhost:3001/players` ){
      return Promise.resolve({data:players})
    }
    if(url === `http://localhost:3001/teams` ){
      return Promise.resolve({data:teams})
    }
    return Promise.reject()
  })
 })

  it('renders a navigation bar on load ', () => {
    render(<NavigationBar />)
    const navigation = screen.getByTestId('navigation-bar')
    expect(navigation).toBeInTheDocument()
  })

  it('renders player cards on click of dropdown menu team ', async () => { 
    render(<NavigationBar />) 
    const dropdownMenuButton = screen.getByTestId('teams-dropdown-button')
    fireEvent.click(dropdownMenuButton) 
    const team = await screen.findByText('Heat') 
    fireEvent.click(team)
    const playerGrid= screen.getByTestId('player-grid')
    expect(playerGrid).toBeInTheDocument
  })  

  it('renders player when user types player name in search bar ', async () => { 
    const mockSubmit = jest.fn();
     render(<NavigationBar handleSubmit={mockSubmit}/>);
     const searchBar = screen.getByTestId('search-bar') 
      fireEvent.change(searchBar, {target: {value:'Precious Achiuwa'}}) 
      const enter= await screen.getByTestId('search-enter') 
      fireEvent.submit(enter);
      const playerGrid= await screen.getByTestId('player-grid')
      expect(playerGrid).toBeInTheDocument
      console.log(playerGrid,'hola')
    })
  })  


