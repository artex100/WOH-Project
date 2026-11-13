import { Trans, useTranslation } from 'react-i18next'
import { useSettings } from '../context/useSettings'
import { questionSets } from '../data/questions'

function Toggle({ label, checked, onChange }) {
  return (
    <label className='flex cursor-pointer items-center justify-between gap-4 px-4 py-4 sm:px-5'>
      <span>{label}</span>
      <input
        type='checkbox'
        role='switch'
        className='peer sr-only'
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
      />
      <span
        aria-hidden='true'
        className="relative h-6 w-11 shrink-0 rounded-full bg-line transition-colors peer-checked:bg-leaf peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-copper after:absolute after:top-0.5 after:left-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:shadow after:transition-transform after:content-[''] peer-checked:after:translate-x-5 dark:bg-jungle-line dark:peer-checked:bg-leaf-light dark:peer-checked:after:bg-jungle dark:peer-focus-visible:outline-copper-light"
      />
    </label>
  )
}

// Label on the left, dropdown on the right
function Select({ label, value, onChange, options }) {
  return (
    <label className='flex items-center justify-between gap-4 px-4 py-4 sm:px-5'>
      <span>{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className='focus-ring min-w-0 cursor-pointer rounded-xl border border-line bg-cream px-3 py-2 transition-colors hover:border-copper dark:border-jungle-line dark:bg-jungle dark:hover:border-copper-light'
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  )
}

function Settings() {
  const { t } = useTranslation()
  const { settings, updateSettings } = useSettings()
  const { lang } = settings

  return (
    <section className='mx-auto max-w-2xl py-6 sm:py-10'>
      <h1>{t('nav.settings')}</h1>

      <h2 className='mt-6 mb-3'>{t('settings.quiz')}</h2>
      <div className='card divide-y divide-line dark:divide-jungle-line'>
        <Select
          label={t('settings.questionSet')}
          value={settings.questionSet}
          onChange={(questionSet) => updateSettings({ questionSet })}
          options={questionSets.map((set) => ({ value: set.id, label: set.name[lang] }))}
        />
        <Toggle
          label={t('settings.randomize')}
          checked={settings.randomize}
          onChange={(randomize) => updateSettings({ randomize })}
        />
      </div>

      <h2 className='mt-8 mb-3'>{t('settings.appearance')}</h2>
      <div className='card divide-y divide-line dark:divide-jungle-line'>
        <Toggle
          label={t('settings.darkMode')}
          checked={settings.theme === 'dark'}
          onChange={(isDark) => updateSettings({ theme: isDark ? 'dark' : 'light' })}
        />
        <Select
          label={t('settings.language')}
          value={lang}
          onChange={(newLang) => updateSettings({ lang: newLang })}
          options={[
            { value: 'fi', label: 'Suomi' },
            { value: 'en', label: 'English' },
          ]}
        />
      </div>

      <h2 className='mt-8 mb-3'>{t('settings.about')}</h2>
      <p className='card text-muted mb-0 p-4 sm:p-5'>
        <Trans
          i18nKey='settings.aboutText'
          components={{
            link: (
              <a
                href='https://cataas.com'
                target='_blank'
                rel='noreferrer'
                className='link'
              />
            ),
          }}
        />
      </p>
      <p className='flex mt-5 text-muted text-sm justify-center sm:justify-center'>
        {t('settings.madeWith')}
      </p>
    </section>
  )
}

export default Settings
