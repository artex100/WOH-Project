import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getMonkey } from '../data/monkeys'
import { useSettings } from '../context/useSettings'
import { clearStats, loadStats } from '../utils/storage'

function formatDate(isoDate, lang) {
  return new Intl.DateTimeFormat(lang === 'fi' ? 'fi-FI' : 'en-GB', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(isoDate))
}

// finished quiz in the history grid
function HistoryItem({ monkey, date, lang }) {
  const { t } = useTranslation()
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <li className='card overflow-hidden'>
      <div className='aspect-[3/2] bg-sand dark:bg-jungle-line'>
        {imageFailed ? (
          <div className='text-muted flex h-full items-center justify-center p-2 text-center text-xs'>
            {t('stats.noPicture')}
          </div>
        ) : (
          <img
            src={monkey.image}
            alt={monkey.species[lang]}
            width={500}
            height={333}
            loading='lazy'
            className='h-full w-full object-cover'
            onError={() => setImageFailed(true)}
          />
        )}
      </div>
      <div className='p-3'>
        <p className='mb-0.5 leading-tight font-semibold'>{monkey.title[lang]}</p>
        <p className='text-muted mb-0 text-sm italic'>{monkey.species[lang]}</p>
        <time dateTime={date} className='mt-2 block text-xs font-medium text-copper-dark dark:text-copper-light'>
          {formatDate(date, lang)}
        </time>
      </div>
    </li>
  )
}

function Stats() {
  const { t } = useTranslation()
  const [timesTaken, setTimesTaken] = useState(() => loadStats().timesTaken)
  const { lang } = useSettings().settings

  // History sorting
  const [history, setHistory] = useState(() =>
    loadStats()
      .history.map((entry) => ({ ...entry, monkey: getMonkey(entry.monkeyId) }))
      .filter((entry) => entry.monkey)
      .reverse(),
  )

  function handleClear() {
    // Empty localStorage
    const empty = clearStats()
    setTimesTaken(empty.timesTaken)
    setHistory([])
  }

  return (
    <section className='py-6 sm:py-10'>
      <h1 className='mb-1 text-3xl sm:text-4xl'>{t('nav.stats')}</h1>
      <p className='text-muted'>{t('stats.timesTaken', { count: timesTaken })}</p>

      <h2 className='mt-8 mb-4'>{t('stats.history')}</h2>
      {history.length === 0 ? (
        <p className='text-muted'>
          {t('stats.empty')}{' '}
          <Link to='/quiz' className='link'>
            {t('stats.takeQuiz')}
          </Link>
        </p>
      ) : (
        <ul className='grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4'>
          {history.map((entry, i) => (
            <HistoryItem key={`${entry.date}-${i}`} monkey={entry.monkey} date={entry.date} lang={lang} />
          ))}
        </ul>
      )}

      {timesTaken > 0 && (
        <button
          className='btn-secondary mt-6 px-4 py-2 text-sm text-red-700 hover:border-red-600 hover:bg-red-50 dark:text-red-300 dark:hover:border-red-400 dark:hover:bg-red-950/40'
          type='button'
          onClick={handleClear}
        >
          {t('stats.clear')}
        </button>
      )}
    </section>
  )
}

export default Stats
