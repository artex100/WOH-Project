import { Link } from 'react-router-dom'

function Quiz() {
  return (
    <section>
      <h1>Quiz</h1>

      {/* Progress */}
      <p>Question 1 / 8</p>

      <h2>[question text]</h2>
      <div className='quiz_answers'>
        <button type='button'>[answer 1]</button>
        <button type='button'>[answer 2]</button>
        <button type='button'>[answer 3]</button>
        <button type='button'>[answer 4]</button>
      </div>


      <Link to='/result'>See result</Link>
    </section>
  )
}

export default Quiz
