import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/stats', label: 'Stats' },
  { to: '/settings', label: 'Settings' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <nav className='navbar navbar-expand-md bg-body-tertiary'>
      <div className='container'>
        <Link className='navbar-brand' to='/' onClick={close}>
          Which monkey are you?
        </Link>

        <button
          className='navbar-toggler'
          type='button'
          aria-controls='main-nav'
          aria-expanded={open}
          aria-label='Toggle navigation'
          onClick={() => setOpen(!open)}
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div id='main-nav' className={`collapse navbar-collapse ${open ? 'show' : ''}`}>
          <div className='navbar-nav ms-auto'>
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className='nav-link'
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
