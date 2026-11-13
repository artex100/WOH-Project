import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getMonkey } from '../data/monkeys'
import { useSettings } from '../context/useSettings'
import { loadStats } from '../utils/storage'

// The quiz passes the monkey id in the router state. If the page is opened
// some other way (refresh, bookmark), fall back to the latest saved result.
function getResultMonkey(state) {
  const fromQuiz = getMonkey(state?.monkeyId)
  if (fromQuiz) return fromQuiz

  const { history } = loadStats()
  const latest = history[history.length - 1]
  return latest ? getMonkey(latest.monkeyId) : undefined
}

function Result() {
  const location = useLocation()
  const { t } = useTranslation()
  // Read once when the page opens
  const [monkey] = useState(() => getResultMonkey(location.state))
  const { lang } = useSettings().settings
  const [imageFailed, setImageFailed] = useState(false)

  // No quiz finished yet
  if (!monkey) {
    return (
      <section className='flex flex-col items-center py-12 text-center sm:py-20'>
        <h1>{t('result.noResultTitle')}</h1>
        <p className='text-muted mb-8'>{t('result.noResultText')}</p>
        <Link to='/quiz' className='btn-primary'>
          {t('home.start')}
        </Link>
      </section>
    )
  }

  return (
    <section className='mx-auto flex max-w-xl flex-col items-center py-6 text-center sm:py-10'>
      <article className='card mb-8 w-full overflow-hidden shadow-sm'>
        <div className='aspect-[3/2] w-full bg-sand dark:bg-jungle-line'>
          {imageFailed ? (
            <div className='text-muted flex h-full items-center justify-center p-4'>
              {t('result.imageFailed')}
            </div>
          ) : (
            <img
              src={monkey.image}
              alt={monkey.species[lang]}
              width={500}
              height={333}
              className='h-full w-full object-cover'
              onError={() => setImageFailed(true)}
            />
          )}
        </div>

        <div className='px-5 pt-6 pb-2 sm:px-8 sm:pt-8'>
          <p className='mb-1 text-sm font-semibold tracking-wide text-copper-dark uppercase dark:text-copper-light'>
            {t('result.youAre')}
          </p>
          <h1 className='mb-1 text-3xl sm:text-4xl'>{monkey.title[lang]}</h1>
          <p className='text-muted mb-5 text-lg italic'>{monkey.species[lang]}</p>
          <p className='mx-auto max-w-md text-lg'>{monkey.description[lang]}</p>
        </div>
      </article>

      <div className='flex w-full flex-col gap-3 sm:w-auto sm:flex-row'>
        <Link to='/quiz' className='btn-primary'>
          {t('result.tryAgain')}
        </Link>
        <Link to='/stats' className='btn-secondary'>
          {t('nav.stats')}
        </Link>
      </div>
    </section>
  )
}

export default Result
