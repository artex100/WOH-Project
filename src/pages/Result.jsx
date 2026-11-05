import { Link } from 'react-router-dom'

function Result() {
  return (
    <section>
      <h1>You are...</h1>

      {/* Monkey image from the API, name and description */}
      <div className='result_image'>[monkey image]</div>
      <h2>[monkey name]</h2>
      <p>[monkey description]</p>

      <div className='result_actions'>
        <Link to='/quiz'>Try again</Link>
        <Link to='/stats'>Stats</Link>
      </div>
    </section>
  )
}

export default Result
