import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/stats', label: 'Stats' },
  { to: '/settings', label: 'Settings' },
]

// NavLink tells us if the link is the current page
const linkClass = ({ isActive }) =>
  `block rounded-md px-3 py-2 ${
    isActive
      ? 'font-semibold text-gray-900 dark:text-white'
      : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
  }`

function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <nav className='border-b border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900'>
      <div className='mx-auto flex max-w-5xl flex-wrap items-center justify-between px-4 py-3'>
        <Link className='text-lg font-semibold' to='/' onClick={close}>
          Which monkey are you?
        </Link>

        <button
          className='rounded-md p-2 text-gray-600 hover:bg-gray-200 md:hidden dark:text-gray-300 dark:hover:bg-gray-800'
          type='button'
          aria-controls='main-nav'
          aria-expanded={open}
          aria-label='Toggle navigation'
          onClick={() => setOpen(!open)}
        >
          <svg className='h-6 w-6' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round'>
            {open ? <path d='M6 6l12 12M18 6L6 18' /> : <path d='M4 7h16M4 12h16M4 17h16' />}
          </svg>
        </button>

        <div id='main-nav' className={`${open ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
          <div className='flex flex-col gap-1 pt-2 md:flex-row md:pt-0'>
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={linkClass}
                onClick={close}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
