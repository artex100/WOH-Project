import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { loadSettings, loadStats } from '../utils/storage'

function Stats() {
  const location = useLocation()
  const [times] = useState(() => getResultMonkey(location.state))
  const [lang] = useState(() => loadSettings().lang)

  return (
    <section>
      <h1 className='mb-1 text-3xl sm:text-4xl'>Stats</h1>
      <p>Quiz taken: 0 times</p>

      {/* History: every monkey you have got, images from cache */}
      <h2>History</h2>
      <div className='stats_history'>[no results yet]</div>

      <button type='button'>Clear history</button>
    </section>
  )
}

export default Stats
