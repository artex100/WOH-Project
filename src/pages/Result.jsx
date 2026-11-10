import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getMonkey } from '../data/monkeys'
import { loadSettings, loadStats } from '../utils/storage'

// The quiz passes the monkey id in the router state. If the page is opened
// some other way (refresh, bookmark), fall back to the latest saved result.
function getResultMonkey(state) {
  const fromQuiz = getMonkey(state?.monkeyId)
  if (fromQuiz) return fromQuiz

  const { history } = loadStats()
  const latest = history[history.length - 1]
  return latest ? getMonkey(latest.monkeyId) : undefined
}

const primaryButton =
  'rounded-lg bg-gray-900 px-6 py-3 font-semibold text-white hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 dark:focus-visible:outline-white'
const secondaryButton =
  'rounded-lg border border-gray-300 px-6 py-3 font-semibold hover:border-gray-900 hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 dark:border-gray-700 dark:hover:border-white dark:hover:bg-gray-800 dark:focus-visible:outline-white'

function Result() {
  const location = useLocation()
  // Read once when the page opens (settings move to context in step 9)
  const [monkey] = useState(() => getResultMonkey(location.state))
  const [lang] = useState(() => loadSettings().lang)
  const [imageFailed, setImageFailed] = useState(false)

  // No quiz finished yet
  if (!monkey) {
    return (
      <section className='flex flex-col items-center py-12 text-center sm:py-20'>
        <h1>No result yet</h1>
        <p className='mb-8 text-gray-600 dark:text-gray-300'>Take the quiz to find out which monkey you are.</p>
        <Link to='/quiz' className={primaryButton}>
          Start the quiz
        </Link>
      </section>
    )
  }

  return (
    <section className='mx-auto flex max-w-xl flex-col items-center py-6 text-center sm:py-10'>
      <p className='mb-1 text-sm font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400'>
        You are...
      </p>
      <h1 className='mb-1 text-3xl sm:text-4xl'>{monkey.title[lang]}</h1>
      <p className='mb-6 text-lg text-gray-600 dark:text-gray-300'>{monkey.species[lang]}</p>
      <div className='mb-6 aspect-[3/2] w-full overflow-hidden rounded-xl bg-gray-200 dark:bg-gray-800'>
        {imageFailed ? (
          <div className='flex h-full items-center justify-center p-4 text-gray-500 dark:text-gray-400'>
            The picture could not be loaded.
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

      <p className='mb-8 max-w-md text-lg'>{monkey.description[lang]}</p>

      <div className='flex w-full flex-col gap-3 sm:w-auto sm:flex-row'>
        <Link to='/quiz' className={primaryButton}>
          Try again
        </Link>
        <Link to='/stats' className={secondaryButton}>
          Stats
        </Link>
      </div>
    </section>
  )
}

export default Result
