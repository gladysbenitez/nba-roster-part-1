

export default {
  nav: 'container',
  ul: [
  'max-width: 800px'
  ].join(' '),
  header: [
   'text-5xl',
   'font-bold',
   'text-blue-800'
  ].join(' '),
  li: [
   'border-solid',
   'border-radius: 10px',
   'rounded-full',
    'bg-yellow-400',
    'm-4',
    'p-6',
    'text-left',
    'max-width: 300px',
    'border-red-800'
  ].join(' '),
  a: ({ isActive }) =>
    [
      'text-black',
      'font-bold',
      'inline-block',
      'rounded-full',
      'bg-yellow-400',
      'py-1',
      'px-3',
      isActive ? 'text-white' : 'hover:bg-yellow-500',
    ].join(' '),  
}