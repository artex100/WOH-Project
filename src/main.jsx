import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import './i18n'
// HashRouter: GitHub Pages can't serve deep links like /stats, so routes live after the #
import { HashRouter } from 'react-router-dom'
import { SettingsProvider } from './context/SettingsContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SettingsProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </SettingsProvider>
  </StrictMode>,
)
