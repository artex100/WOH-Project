import { getQuestionSet } from '../data/questions'

function shuffle(list) {
  const copy = [...list]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

// Questions for one quiz run, shuffled if the setting is on
export function getQuizQuestions(questionSetId, randomize) {
  const { questions } = getQuestionSet(questionSetId)
  return randomize ? shuffle(questions) : questions
}

// Returns the id of the cat with the most points.
// A tie is settled randomly between the tied cats.
export function getWinner(questions, answers) {
  const points = {}
  questions.forEach((question, i) => {
    const picked = question.answers[answers[i]]
    if (!picked) return
    for (const [catId, score] of Object.entries(picked.scores)) {
      points[catId] = (points[catId] ?? 0) + score
    }
  })

  const best = Math.max(...Object.values(points))
  const tied = Object.keys(points).filter((id) => points[id] === best)
  return tied[Math.floor(Math.random() * tied.length)]
}
