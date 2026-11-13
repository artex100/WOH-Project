import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getCat } from '../data/cats'
import { catImage } from '../utils/catApi'
import { useSettings } from '../context/useSettings'
import { loadStats } from '../utils/storage'

// From the quiz (router state), or the latest saved result after a refresh
function getResult(state) {
  const fromQuiz = getCat(state?.catId)
  if (fromQuiz) return { cat: fromQuiz, imageUrl: state.imageUrl ?? null }

  const { history } = loadStats()
  const latest = history[history.length - 1]
  const cat = latest && getCat(latest.catId)
  return cat ? { cat, imageUrl: latest.imageUrl } : {}
}

function Result() {
  const location = useLocation()
  const { t } = useTranslation()
  // Read once when the page opens
  const [{ cat, imageUrl }] = useState(() => getResult(location.state))
  const { lang } = useSettings().settings
  const [imageFailed, setImageFailed] = useState(false)

  // No quiz finished yet
  if (!cat) {
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
          {imageFailed || !imageUrl ? (
            <div className='text-muted flex h-full items-center justify-center p-4'>
              {t('result.imageFailed')}
            </div>
          ) : (
            <img
              src={catImage(imageUrl, 600)}
              alt={cat.subtitle[lang]}
              width={600}
              height={400}
              className='h-full w-full object-cover'
              onError={() => setImageFailed(true)}
            />
          )}
        </div>

        <div className='px-5 pt-6 pb-2 sm:px-8 sm:pt-8'>
          <p className='mb-1 text-sm font-semibold tracking-wide text-copper-dark uppercase dark:text-copper-light'>
            {t('result.youAre')}
          </p>
          <h1 className='mb-1 text-3xl sm:text-4xl'>{cat.title[lang]}</h1>
          <p className='text-muted mb-5 text-lg italic'>{cat.subtitle[lang]}</p>
          <p className='mx-auto max-w-md text-lg'>{cat.description[lang]}</p>
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
