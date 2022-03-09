//3rd Party Imports
import React from 'react'; 
import Image from 'next/image';


export function PlayerGrid(props) {  
  const { visiblePlayers,teams } = props;

  return ( 
    <div>
      <ul className="grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5  ">  
      {  
      visiblePlayers && visiblePlayers.map(player=> {
        const {id,fn,ln,ta,num,pos,pts,reb,ast,headshot} = player  
      
      return(
        <li data-testid='player-grid' key={id} className='max-w-sm max-w-sm rounded overflow-hidden shadow-lg m-3 ' id={id}> 
            <div id={id} className='flex flex-col'>
              <section className='relative overflow-hidden'>
                <div className='absolute w-8/12 opacity-5 --tw-translate-y: -35'>
                  <div className='relative min-w-full'>
                    <img className='max-w-full h-auto' src={teams?.find((team)=>team.ta === ta).logo}></img>                
                  </div>
                </div>
                <div className='relative block mx-auto bg-transparent max-w-screen-xxl'> 
                <div className='flex'> 
                <div className='block w-1/2 md:w-1/3'>  
                <div className='relative w-19 min-w-0 mt-5 sm:w-20 md:w-24 lg:w-32'>
                  <img alt={''} className='flex w-10/12 mx-auto mt-16 md:mt-24' src={headshot}>
                  </img>
                </div> 
                </div>
                <div className='w-1/2 sm:w-3/4 md:w-3/4 lg:w-3/4 flex flex-col md:flex-row justify-center md:justify-between items-start md:items-center'>
                  <div className='flex flex-col text-black'> 
                    <p className='t11 md:t2 font-normal text-base leading-tight'>
                    {'#'+ num + ' | ' + pos}
                    </p>
                    <p className='font-bold text-4xl leading-tight'>{fn}</p>
                    <p className='font-bold text-4xl leading-tight'>{ln}</p> 
                  </div>
                </div> 
                <div className=' w-16 min-w-0 mt-5 sm:w-20 md:w-24 lg:w-32'>
                <img alt={''} src={teams?.find((team)=>team.ta === ta).logo}></img>
                </div>
                </div> 
                </div>
                <div className={`border-b border-gray opacity-3 border-y-4`}></div>
              </section>
              <section className='relative text-black lg:px-30'>
                <div className='flex flex-col mx-auto lg:flex-row max-w-screen-xxl'>
                <div className='flex justify-center py-3 lg:justify-between lg:py-0'>
                <div className='flex flex-col justify-center pl-10 pr-10 text-center'>
                    <p className='font-normal text-xs leading-tight'>PPG</p>
                    <p className='font-black text-xl leading-tight'>{pts === null?0:pts}</p>
                </div>
                <div className='border-l border-gray-600 opacity-5'></div>
                  <div className='flex flex-col justify-center pl-10 pr-10 text-center'>
                    <p className='font-normal text-xs leading-tight'>RPG</p>
                    <p className='font-black text-xl leading-tight'>{reb===null?0:reb}</p>
                  </div>
                  <div className='border-l border-gray-600 opacity-5'></div>
                  <div className='flex flex-col justify-center pl-10 pr-10 text-center'>
                  <p className='font-normal text-xs leading-tight'>APG</p>
                  <p className='font-black text-xl leading-tight'>{ast===null?0:ast}</p>
                  </div>
                </div>
                </div>
              </section>
          </div> 
        </li>
       )
      })
    }
    </ul> 
  </div>
  )
}