import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Nimi from './pages/Nimi'
import Page2 from './pages/Page2'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/nimi' element={<Nimi />} />
        <Route path='/page2' element={<Page2 />} />
      </Routes>
    </>
  )
}

export default App
