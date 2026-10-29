import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
      <section>
        <Link className='navbar_item' to='/'>home</Link>
        <Link className='navbar_item' to='/nimi'>nimi</Link>
        <Link className='navbar_item' to='/page2'>Page 2</Link>
      </section>
    </div>
  )
}

export default Navbar
