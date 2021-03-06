//3rd Party Imports
import React, {FormEventHandler} from 'react'; 


interface SearchPlayerProps {
  handleSubmit: FormEventHandler, 
  setName: (name: string) => void, 
  name:string
}

export function SearchPlayer(props:SearchPlayerProps) { 

  const { handleSubmit, setName,name } = props;

  return (
    <div >
      <form data-testid="search-enter" className='container flex flex-wrap justify-between items-center'
       onSubmit={handleSubmit}>
        <input 
         data-testid="search-bar"
          aria-label="search-player"
          type="text"
          id="player"
          className="bg-gray-100 text-gray-900 block w-full pl-8 m-7  sm:text-sm border-gray-300 rounded-md"
          placeholder="search player" 
          onChange = {(e) => setName(e.target.value)} 
          value = {name}>
        </input> 
        <button className='top-8' type ='submit'></button>
      </form>
    </div>
  )
}




 