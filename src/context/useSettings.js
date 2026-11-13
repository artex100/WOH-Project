import { createContext, useContext } from 'react'

// Shared settings: { settings, updateSettings }
export const SettingsContext = createContext(null)

export function useSettings() {
  const value = useContext(SettingsContext)
  if (!value) throw new Error('useSettings must be used inside <SettingsProvider>')
  return value
}
