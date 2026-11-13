import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { loadStats } from '../utils/storage'

const catImage = 'catwithahat.webp'

function Home() {
  const { t } = useTranslation()
  // Read once when the page opens
  const [timesTaken] = useState(() => loadStats().timesTaken)

  return (
    <section className='flex flex-col items-center py-10 text-center sm:py-16'>
      <div className='mb-8 rounded-full border border-line bg-cream p-3 dark:border-transparent dark:bg-transparent'>
        <img
          src={catImage}
          alt=''
          width={160}
          height={160}
          className='h-32 w-32 sm:h-40 sm:w-40'
        />
      </div>

      <h1 className='text-4xl text-copper-dark sm:text-5xl dark:text-copper-light'>{t('app.title')}</h1>

      <p className='text-muted mb-8 max-w-md text-lg'>{t('home.welcome')}</p>

      <Link to='/quiz' className='btn-primary px-8 text-lg'>
        {t('home.start')}
      </Link>

      {/* Only shown after the first finished quiz */}
      {timesTaken > 0 && (
        <p className='text-muted mt-6 text-sm'>
          {/* count picks the singular/plural form (_one / _other in the json) */}
          {t('home.timesTaken', { count: timesTaken })}{' '}
          <Link to='/stats' className='link'>
            {t('home.seeCats')}
          </Link>
        </p>
      )}
    </section>
  )
}

export default Home
