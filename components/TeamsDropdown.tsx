import  React, { Fragment, MouseEventHandler} from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import {Team} from './NavigationBar'; 

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

interface TeamProp {
  teams: Team[],
  grabTeam: MouseEventHandler<HTMLButtonElement>
}

export function TeamsDropdown(props: TeamProp) { 
  const { teams, grabTeam } = props;

  return(
    <div data-testid="teams-dropdown-menu" className=" hidden sm:block sm:ml-6 flex space-x-4">
      <Menu as="div" className="relative inline-block text-left">
        <div >
          <Menu.Button data-testid='teams-dropdown-button' className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          Teams
            <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className=" origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div  className="py-1">
            {teams && teams.map(team=> {
            const {tid, name, ta} = team  
              return(
                <Menu.Item key='tid'>
                  {({ active }) => (
                    <button 
                      data-testid='menu-item'
                      value= {name}
                      onClick={grabTeam}
                      id={tid.toString()}
                      type="submit"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block w-full text-left px-4 py-2 text-sm'
                      )}
                    >
                      {name}
                    </button>
                  )}
                </Menu.Item>
              )
              })}
          </div>
          </Menu.Items>
        </Transition>
    </Menu>
    </div>
  )
}