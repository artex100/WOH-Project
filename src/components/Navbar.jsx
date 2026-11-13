import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const links = [
  { to: '/', label: 'nav.home' },
  { to: '/stats', label: 'nav.stats' },
  { to: '/settings', label: 'nav.settings' },
]

// NavLink tells us if the link is the current page
const linkClass = ({ isActive }) =>
  `focus-ring block rounded-lg px-3 py-2 transition-colors ${
    isActive
      ? 'bg-sand font-semibold text-copper-dark dark:bg-jungle-line dark:text-copper-light'
      : 'text-bark-soft hover:bg-sand hover:text-bark dark:text-mist-soft dark:hover:bg-jungle-line dark:hover:text-mist'
  }`

function Navbar() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <nav className='sticky top-0 z-10 border-b border-line bg-white/80 backdrop-blur dark:border-jungle-line dark:bg-jungle-surface/80'>
      <div className='mx-auto flex max-w-4xl flex-wrap items-center justify-between px-4 py-3 sm:px-6'>
        <Link
          className='focus-ring rounded-sm font-heading text-xl font-normal text-copper-dark dark:text-copper-light'
          to='/'
          onClick={close}
        >
          {t('app.title')}
        </Link>

        <button
          className='focus-ring rounded-lg p-2 text-bark-soft transition-colors hover:bg-sand md:hidden dark:text-mist-soft dark:hover:bg-jungle-line'
          type='button'
          aria-controls='main-nav'
          aria-expanded={open}
          aria-label={t('nav.toggle')}
          onClick={() => setOpen(!open)}
        >
          <svg className='h-6 w-6' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round'>
            {open ? <path d='M6 6l12 12M18 6L6 18' /> : <path d='M4 7h16M4 12h16M4 17h16' />}
          </svg>
        </button>

        <div id='main-nav' className={`${open ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
          <div className='flex flex-col gap-1 pt-3 md:flex-row md:pt-0'>
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={linkClass}
                onClick={close}
              >
                {t(link.label)}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
