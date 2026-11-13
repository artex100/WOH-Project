import { useLayoutEffect, useState } from 'react'
import i18n from '../i18n'
import { loadSettings, saveSettings } from '../utils/storage'
import { SettingsContext } from './useSettings'

// Holds the settings for the whole app
export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState(() => loadSettings())

  // Save to localStorage and update every component that uses the settings
  function updateSettings(changes) {
    setSettings(saveSettings(changes))
  }

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = settings.theme
  }, [settings.theme])

  // Language switcher
  useLayoutEffect(() => {
    i18n.changeLanguage(settings.lang)
    document.documentElement.lang = settings.lang
    document.title = i18n.t('app.title')
  }, [settings.lang])

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  )
}
