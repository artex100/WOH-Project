function Stats() {
  return (
    <section>
      <h1>Stats</h1>

      {/* Times taken from localStorage */}
      <p>Quiz taken: 0 times</p>

      {/* History: every monkey you have got, images from cache */}
      <h2>History</h2>
      <div className='stats_history'>[no results yet]</div>

      <button type='button'>Clear history</button>
    </section>
  )
}

export default Stats
