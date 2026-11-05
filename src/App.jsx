import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Result from './pages/Result'
import Stats from './pages/Stats'
import Settings from './pages/Settings'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main className='container py-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/result' element={<Result />} />
          <Route path='/stats' element={<Stats />} />
          <Route path='/settings' element={<Settings />} />
          {/* Unknown address -> back to home */}
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </main>
    </>
  )
}

export default App
