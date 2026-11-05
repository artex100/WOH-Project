import { Link } from 'react-router-dom'
// Placeholder drawing. Swap the file (same name) for the final illustration.


function Home() {
  return (
    <section>
      
      {/** Image for monkey*/}

      <h1>Which monkey are you?</h1>
      <p>Welcome! Answer a few questions and find out your inner monkey.</p>

      

      <Link to='/quiz'>Start the quiz</Link>
    </section>
  )
}

export default Home
