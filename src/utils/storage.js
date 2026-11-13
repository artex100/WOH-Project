// localStorage helpers for stats and settings.
//
// localStorage can fail: private browsing, blocked site data, a full storage,
// or a value someone edited by hand. Every read and write is wrapped in
// try/catch, and broken or missing data falls back to defaults, so the app
// never crashes because of storage.

import { defaultQuestionSetId } from '../data/questions'

const STATS_KEY = 'catQuiz.stats'
const SETTINGS_KEY = 'catQuiz.settings'


function readJSON(key) {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function writeJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
    return true
  } catch {
    return false
  }
}

function removeKey(key) {
  try {
    localStorage.removeItem(key)
  } catch {
    // pass
  }
}


export function getDefaultStats() {
  return { timesTaken: 0, history: [] }
}

export function loadStats() {
  const saved = readJSON(STATS_KEY)
  const stats = getDefaultStats()
  if (!saved || typeof saved !== 'object') return stats

  if (Number.isInteger(saved.timesTaken) && saved.timesTaken >= 0) {
    stats.timesTaken = saved.timesTaken
  }
  if (Array.isArray(saved.history)) {
    // Keep only entries that have the right shape
    stats.history = saved.history.filter(
      (entry) =>
        entry &&
        typeof entry.catId === 'string' &&
        typeof entry.date === 'string' &&
        (typeof entry.imageUrl === 'string' || entry.imageUrl === null),
    )
  }
  return stats
}

// Call when a quiz is finished: timesTaken++ and the result goes to history.
// Returns the updated stats.
// imageUrl is null if the cat API failed
export function saveResult(catId, imageUrl) {
  const stats = loadStats()
  stats.timesTaken += 1
  stats.history.push({ date: new Date().toISOString(), catId, imageUrl: imageUrl ?? null })
  writeJSON(STATS_KEY, stats)
  return stats
}

// "Clear history" on the stats page: resets both the count and the history.
export function clearStats() {
  removeKey(STATS_KEY)
  return getDefaultStats()
}

// ---------- settings ----------
// { theme: 'light' | 'dark', lang: 'fi' | 'en', questionSet: string, randomize: boolean }

const THEMES = ['light', 'dark']
const LANGS = ['fi', 'en']

export function getDefaultSettings() {
  // follow the device's dark mode and language
  let theme = 'light'
  let lang = 'en'
  try {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) theme = 'dark'
    if (navigator.language?.toLowerCase().startsWith('fi')) lang = 'fi'
  } catch {
    // pass
  }
  return { theme, lang, questionSet: defaultQuestionSetId, randomize: false }
}

export function loadSettings() {
  const saved = readJSON(SETTINGS_KEY)
  const settings = getDefaultSettings()
  if (!saved || typeof saved !== 'object') return settings

  if (THEMES.includes(saved.theme)) settings.theme = saved.theme
  if (LANGS.includes(saved.lang)) settings.lang = saved.lang
  if (typeof saved.questionSet === 'string') settings.questionSet = saved.questionSet
  if (typeof saved.randomize === 'boolean') settings.randomize = saved.randomize
  return settings
}

// Save only the changed fields
// Returns the full updated settings
export function saveSettings(changes) {
  const settings = { ...loadSettings(), ...changes }
  writeJSON(SETTINGS_KEY, settings)
  return settings
}
