import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loadSettings, saveResult } from '../utils/storage'
import { getQuizQuestions, getWinner } from '../utils/quiz'

function Quiz() {
  const navigate = useNavigate()

  // Picked once when the page opens, so a shuffled order stays the same
  // for the whole run. (Settings move to React context in step 9.)
  const [settings] = useState(() => loadSettings())
  const [questions] = useState(() => getQuizQuestions(settings.questionSet, settings.randomize))
  const lang = settings.lang

  // answers[i] = index of the picked answer for question i
  const [answers, setAnswers] = useState([])
  const current = answers.length
  const question = questions[current]
  const progress = (current / questions.length) * 100

  function pickAnswer(answerIndex) {
    const nextAnswers = [...answers, answerIndex]

    if (nextAnswers.length < questions.length) {
      setAnswers(nextAnswers)
      return
    }

    const monkeyId = getWinner(questions, nextAnswers)
    saveResult(monkeyId)
    // replace: the back button from the result goes home, not into a finished quiz
    navigate('/result', { replace: true, state: { monkeyId } })
  }

  function goBack() {
    setAnswers(answers.slice(0, -1))
  }

  return (
    <section className='mx-auto max-w-2xl py-6 sm:py-10'>
      <div className='mb-2 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400'>
        <span>
          Question {current + 1} / {questions.length}
        </span>
        {current > 0 && (
          <button
            type='button'
            onClick={goBack}
            className='rounded px-2 py-1 hover:text-gray-900 dark:hover:text-white'
          >
            ← Back
          </button>
        )}
      </div>
      <div
        className='mb-8 h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800'
        role='progressbar'
        aria-label='Quiz progress'
        aria-valuemin={0}
        aria-valuemax={questions.length}
        aria-valuenow={current}
      >
        <div
          className='h-full rounded-full bg-gray-900 transition-[width] duration-300 dark:bg-white'
          style={{ width: `${progress}%` }}
        />
      </div>

      <h1 className='mb-6 text-2xl sm:text-3xl'>{question.text[lang]}</h1>

      <div className='grid gap-3 sm:grid-cols-2'>
        {question.answers.map((answer, i) => (
          <button
            key={`${current}-${i}`}
            type='button'
            onClick={() => pickAnswer(i)}
            className='rounded-lg border border-gray-300 bg-white px-4 py-4 text-left hover:border-gray-900 hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:hover:border-white dark:hover:bg-gray-800 dark:focus-visible:outline-white'
          >
            {answer.text[lang]}
          </button>
        ))}
      </div>
    </section>
  )
}

export default Quiz
