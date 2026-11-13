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
    <li className='overflow-hidden rounded-md bg-white dark:bg-gray-900'>
      <div className='aspect-[3/2] bg-gray-200 dark:bg-gray-800'>
        {imageFailed ? (
          <div className='flex h-full items-center justify-center p-2 text-center text-xs text-gray-500 dark:text-gray-400'>
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
        <p className='font-semibold leading-tight'>{monkey.title[lang]}</p>
        <p className='text-sm text-gray-600 dark:text-gray-300'>{monkey.species[lang]}</p>
        <time dateTime={date} className='mt-1 block text-xs text-gray-500 dark:text-gray-400'>
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
    <section>
      <h1 className='mb-1 text-3xl sm:text-4xl'>{t('nav.stats')}</h1>
      <p>{t('stats.timesTaken', { count: timesTaken })}</p>

      <h2 className='mt-8'>{t('stats.history')}</h2>
      {history.length === 0 ? (
        <p className='text-gray-600 dark:text-gray-300'>
          {t('stats.empty')}{' '}
          <Link to='/quiz' className='underline hover:text-gray-900 dark:hover:text-white'>
            {t('stats.takeQuiz')}
          </Link>
        </p>
      ) : (
        <ul className='grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4'>
          {history.map((entry, i) => (
            <HistoryItem key={`${entry.date}-${i}`} monkey={entry.monkey} date={entry.date} lang={lang} />
          ))}
        </ul>
      )}

      {timesTaken > 0 && (
        <button
          className='mt-4 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600'
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
