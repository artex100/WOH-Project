import { useState } from 'react'
import heroImg from '../assets/hero.png'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section>
        <h1>Kaput machine v2</h1>
        <div>
          <input type='search'></input>
          <button className='search btn'>Pressa här</button>
        </div>
      </section>

      <section id="spacer"></section>
    </>
  )
}

export default Home
