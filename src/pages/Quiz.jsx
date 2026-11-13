import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useSettings } from '../context/useSettings'
import { getCat } from '../data/cats'
import { fetchCat } from '../utils/catApi'
import { saveResult } from '../utils/storage'
import { getQuizQuestions, getWinner } from '../utils/quiz'

const answerBase =
  'focus-ring min-h-20 rounded-2xl border-2 px-5 py-4 text-left text-lg font-medium shadow-sm transition-colors'
const answerIdle =
  'border-line bg-white hover:border-copper hover:bg-sand active:bg-copper/15 dark:border-jungle-line dark:bg-jungle-surface dark:hover:border-copper-light dark:hover:bg-jungle-line dark:active:bg-copper-light/20'
const answerSelected =
  'border-copper bg-copper/10 dark:border-copper-light dark:bg-copper-light/15'

function Quiz() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const { settings } = useSettings()
  const { lang } = settings
  // Picked once when the page opens, so a shuffled order stays the same for the whole run
  const [questions] = useState(() => getQuizQuestions(settings.questionSet, settings.randomize))

  // answers[i] = index of the picked answer for question i
  const [answers, setAnswers] = useState([])
  const [previousPick, setPreviousPick] = useState(null)
  const current = answers.length
  const question = questions[current]
  const done = current === questions.length
  const progress = (current / questions.length) * 100

  // Don't jump to the result if the user left the page while the cat was loading
  const left = useRef(false)
  useEffect(() => {
    left.current = false
    return () => {
      left.current = true
    }
  }, [])

  async function pickAnswer(answerIndex) {
    const nextAnswers = [...answers, answerIndex]
    setPreviousPick(null)
    setAnswers(nextAnswers)
    if (nextAnswers.length < questions.length) return

    const catId = getWinner(questions, nextAnswers)
    let imageUrl = null
    try {
      const cat = await fetchCat(getCat(catId).tag)
      imageUrl = cat.imageUrl
    } catch {
      // Saved without a photo
    }
    if (left.current) return

    saveResult(catId, imageUrl)
    // replace: back from the result goes home, not into a finished quiz
    navigate('/result', { replace: true, state: { catId, imageUrl } })
  }

  function goBack() {
    setPreviousPick(answers[answers.length - 1])
    setAnswers(answers.slice(0, -1))
  }

  return (
    <section className='mx-auto max-w-2xl py-6 sm:py-10'>
      <div className='text-muted mb-2 flex min-h-8 items-center justify-between text-sm'>
        <span>{done ? '' : t('quiz.progress', { current: current + 1, total: questions.length })}</span>
        {current > 0 && !done && (
          <button
            type='button'
            onClick={goBack}
            className='focus-ring rounded-lg px-2 py-1 font-medium transition-colors hover:bg-sand hover:text-bark dark:hover:bg-jungle-line dark:hover:text-mist'
          >
            {t('quiz.back')}
          </button>
        )}
      </div>
      <div
        className='mb-8 h-2.5 overflow-hidden rounded-full bg-sand dark:bg-jungle-line'
        role='progressbar'
        aria-label={t('quiz.progressLabel')}
        aria-valuemin={0}
        aria-valuemax={questions.length}
        aria-valuenow={current}
      >
        <div
          className='h-full rounded-full bg-copper transition-[width] duration-300 dark:bg-copper-light'
          style={{ width: `${progress}%` }}
        />
      </div>

      {done ? (
        <p role='status' className='text-muted py-10 text-center text-lg'>
          {t('quiz.loading')}
        </p>
      ) : (
        <>
          <h1 className='mb-6 text-2xl sm:text-3xl'>{question.text[lang]}</h1>

          <div className='grid gap-3 sm:grid-cols-2'>
            {question.answers.map((answer, i) => (
              <button
                key={`${current}-${i}`}
                type='button'
                aria-pressed={i === previousPick}
                onClick={() => pickAnswer(i)}
                className={`${answerBase} ${i === previousPick ? answerSelected : answerIdle}`}
              >
                {answer.text[lang]}
              </button>
            ))}
          </div>
        </>
      )}
    </section>
  )
}

export default Quiz
