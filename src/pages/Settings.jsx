import { Trans, useTranslation } from 'react-i18next'
import { useSettings } from '../context/useSettings'
import { questionSets } from '../data/questions'

function Toggle({ label, checked, onChange }) {
  return (
    <label className='flex cursor-pointer items-center justify-between gap-4 py-4'>
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
        className="relative h-6 w-11 shrink-0 rounded-full bg-gray-300 transition-colors peer-checked:bg-gray-900 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-900 after:absolute after:top-0.5 after:left-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:shadow after:transition-transform after:content-[''] peer-checked:after:translate-x-5 dark:bg-gray-700 dark:peer-checked:bg-white dark:peer-checked:after:bg-gray-900 dark:peer-focus-visible:outline-white"
      />
    </label>
  )
}

// Label on the left, dropdown on the right
function Select({ label, value, onChange, options }) {
  return (
    <label className='flex items-center justify-between gap-4 py-4'>
      <span>{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className='rounded-xl border border-gray-300 bg-white px-3 py-2 dark:border-gray-700 dark:bg-gray-900'
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
    <section className='mx-auto max-w-3xl py-6 sm:py-10'>
      <h1>{t('nav.settings')}</h1>

      <h2 className='mt-6'>{t('settings.quiz')}</h2>
      <div className='divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-800 dark:border-gray-800'>
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

      <h2 className='mt-8'>{t('settings.appearance')}</h2>
      <div className='divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-800 dark:border-gray-800'>
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

      <h2 className='mt-8'>{t('settings.about')}</h2>
      <p className='text-gray-600 dark:text-gray-300'>
        <Trans
          i18nKey='settings.aboutText'
          components={{
            link: (
              <a
                href='https://www.placemonkeys.com'
                target='_blank'
                rel='noreferrer'
                className='underline hover:text-gray-900 dark:hover:text-white'
              />
            ),
          }}
        />
      </p>
    </section>
  )
}

export default Settings
