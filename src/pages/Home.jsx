import { useState } from 'react'
import { Link } from 'react-router-dom'
import { loadStats } from '../utils/storage'

function Home() {
  // Read once when the page opens
  const [timesTaken] = useState(() => loadStats().timesTaken)

  return (
    <section className='flex flex-col items-center py-12 text-center sm:py-20'>
      <h1 className='text-4xl sm:text-5xl'>Which monkey are you?</h1>

      <p className='mb-8 max-w-md text-lg text-gray-600 dark:text-gray-300'>
        Welcome! Answer a few questions and find out your inner monkey.
      </p>

      <Link
        to='/quiz'
        className='rounded-lg bg-gray-900 px-8 py-3 text-lg font-semibold text-white hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 dark:focus-visible:outline-white'
      >
        Start the quiz
      </Link>

      {/* Only shown after the first finished quiz */}
      {timesTaken > 0 && (
        <p className='mt-6 text-sm text-gray-500 dark:text-gray-400'>
          You have taken the quiz {timesTaken} {timesTaken === 1 ? 'time' : 'times'}.{' '}
          <Link to='/stats' className='underline hover:text-gray-800 dark:hover:text-gray-200'>
            See your monkeys
          </Link>
        </p>
      )}
    </section>
  )
}

export default Home
