import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Bootstrap first
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
// HashRouter: GitHub Pages can't serve deep links like /stats, so routes live after the #
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
