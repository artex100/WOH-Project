// Question sets for the quiz.
//
// Every answer gives points to cat types (ids from cats.js):
//   2 points = the answer fits this cat best
//   1 point  = it fits this cat a bit
// After the quiz, the cat with the most points is the result.
//
// The sets are balanced: in each set, every cat is the 2-point pick 4 times.

function answer(fi, en, scores) {
  return { text: { fi, en }, scores }
}

const everyday = [
  {
    text: { fi: 'Lauantaiaamu. Mitä teet?', en: 'Saturday morning. What do you do?' },
    answers: [
      answer('Nukun puoleenpäivään', 'Sleep until noon', { napper: 2, philosopher: 1 }),
      answer('Lähden lenkille tai kiipeilemään', 'Go for a run or climb something', { chaos: 2, boss: 1 }),
      answer('Brunssi kavereiden kanssa, minä järjestän', 'Brunch with friends, I organise it', { mastermind: 2, clown: 1 }),
      answer('Seison pitkään peilin edessä valitsemassa asua', 'A long time in front of the mirror picking an outfit', { diva: 2, clown: 1 }),
    ],
  },
  {
    text: { fi: 'Kavereidesi mielestä olet...', en: 'Your friends describe you as...' },
    answers: [
      answer('Se, joka tekee suunnitelmat', 'The one who makes the plans', { mastermind: 2, boss: 1 }),
      answer('Se hauska ja äänekäs', 'The funny, loud one', { clown: 2, chaos: 1 }),
      answer('Rauhallinen kuuntelija', 'The calm listener', { philosopher: 2, napper: 1 }),
      answer('Se, joka näyttää aina tyylikkäältä', 'The one who always looks sharp', { diva: 2, explorer: 1 }),
    ],
  },
  {
    text: { fi: 'Valitse välipala', en: 'Pick a snack' },
    answers: [
      answer('Tonnikalaa, aina', 'Tuna, always', { napper: 2, boss: 1 }),
      answer('Jotain, mitä en ole ikinä maistanut', 'Something I have never tried', { explorer: 2, chaos: 1 }),
      answer('Se, mikä näyttää kuvissa parhaalta', 'Whatever looks best in photos', { diva: 2, clown: 1 }),
      answer('Energiajuoma', 'Energy drink', { chaos: 2, clown: 1 }),
    ],
  },
  {
    text: { fi: 'Ryhmätyö. Mikä on roolisi?', en: 'Group project. What is your role?' },
    answers: [
      answer('Johtaja, jaan tehtävät', 'Leader, I split the tasks', { mastermind: 2, boss: 1 }),
      answer('Esiintyjä, rakastan olla lavalla', 'Presenter, I love the stage', { clown: 2, diva: 1 }),
      answer('Tutkija, kaivan yksityiskohdat esiin', 'Researcher, I dig into the details', { philosopher: 2, explorer: 1 }),
      answer('Pidän huolen, että kaikki jaksavat', 'I make sure everyone is doing okay', { boss: 2, napper: 1 }),
    ],
  },
  {
    text: { fi: 'Saat yllättäen vapaan iltapäivän', en: 'You suddenly get a free afternoon' },
    answers: [
      answer('Lähden tutkimaan kaupunginosaa, jota en tunne', 'Explore a part of town I don\'t know', { explorer: 2, chaos: 1 }),
      answer('Salille', 'Gym', { boss: 2, chaos: 1 }),
      answer('Kirja ja kuppi teetä', 'A book and a cup of tea', { philosopher: 2, napper: 1 }),
      answer('Strategiapeli', 'A strategy game', { mastermind: 2, explorer: 1 }),
    ],
  },
  {
    text: { fi: 'Joku etuilee jonossa', en: 'Someone cuts in line' },
    answers: [
      answer('Mulkaisen vihaisesti ja jään tuijottamaan', 'I glance angrily and stare', { boss: 2, diva: 1 }),
      answer('Sanon kovaan ääneen jotain hauskaa', 'I say something loud and funny', { clown: 2, mastermind: 1 }),
      answer('Annan olla, ei ole sen arvoista', 'I let it go, not worth it', { philosopher: 2, napper: 1 }),
      answer('Tarkkailen tilannetta ja etsin nopeamman jonon', 'I watch the situation and find a faster line', { explorer: 2, mastermind: 1 }),
    ],
  },
  {
    text: { fi: 'Puhelimesi kuvagalleria on täynnä...', en: 'Your camera roll is full of...' },
    answers: [
      answer('Selfieitä', 'Selfies', { diva: 2, clown: 1 }),
      answer('Luontoa ja outoja löytöjä', 'Nature and weird things I found', { explorer: 2, philosopher: 1 }),
      answer('Videoita tempuistani', 'Videos of my stunts', { chaos: 2, clown: 1 }),
      answer('Ruokaa ja lemmikkejä', 'Food and pets', { napper: 2, boss: 1 }),
    ],
  },
  {
    text: { fi: 'Lempipaikkasi', en: 'Your favourite place' },
    answers: [
      answer('Kirjahyllyn päällä, mahdollisimman korkealla', 'On top of the bookshelf, as high as possible', { chaos: 2, explorer: 1 }),
      answer('Sohva ja viltti', 'Sofa and a blanket', { napper: 2, philosopher: 1 }),
      answer('Bileiden tanssilattia', 'The dance floor at a party', { clown: 2, diva: 1 }),
      answer('Valloitetun vuoren huippu', 'The top of a mountain, conquered', { boss: 2, mastermind: 1 }),
    ],
  },
]

const catLife = [
  {
    text: { fi: 'Heräät aamulla. Ensimmäinen siirtosi?', en: 'You wake up. First move?' },
    answers: [
      answer('Säntäilen täysillä ympäri asuntoa', 'Zoom around the flat at full speed', { chaos: 2, explorer: 1 }),
      answer('Suunnittelen, miten saisin aamiaisen aikaisemmin', 'Plan how to get breakfast earlier', { mastermind: 2, philosopher: 1 }),
      answer('Käännän kylkeä ja jatkan uniani', 'Roll over and keep sleeping', { napper: 2, philosopher: 1 }),
      answer('Pesen turkkini huolella', 'Groom my fur carefully', { diva: 2, clown: 1 }),
    ],
  },
  {
    text: { fi: 'Imuri käynnistyy', en: 'The vacuum cleaner turns on' },
    answers: [
      answer('Pysyn paikallani ja sähisen sille', 'Stand my ground and hiss at it', { boss: 2, mastermind: 1 }),
      answer('Katson rauhallisena, ei tämä minua hetkauta', 'Watch calmly, it doesn\'t bother me', { philosopher: 2, napper: 1 }),
      answer('Haluan nähdä, miten se toimii', 'I want to see how it works', { explorer: 2, chaos: 1 }),
      answer('Hyökkään sen kimppuun ja teen siitä kunnon show\'n', 'Attack it and make a show of it', { clown: 2, chaos: 1 }),
    ],
  },
  {
    text: { fi: 'Löydät uuden laatikon', en: 'You find a new box' },
    answers: [
      answer('Hyppään sisään täyttä vauhtia', 'Jump in at full speed', { chaos: 2, clown: 1 }),
      answer('Haistelen, tökin ja tutkin sitä', 'Sniff it, poke it, study it', { explorer: 2, philosopher: 1 }),
      answer('Siitä tulee uusi nukkumapaikkani', 'It becomes my new bed', { napper: 2, boss: 1 }),
      answer('Käytän sitä väijytyspaikkana', 'Use it as an ambush spot', { mastermind: 2, diva: 1 }),
    ],
  },
  {
    text: { fi: 'Vieras kissa ilmestyy ikkunan taakse', en: 'A strange cat appears outside the window' },
    answers: [
      answer('Pörhistän turkkini. Tämä on minun reviirini.', 'Puff up my fur. This is my turf.', { boss: 2, clown: 1 }),
      answer('Tarkkailen sitä ja teen suunnitelman', 'Watch it and make a plan', { mastermind: 2, philosopher: 1 }),
      answer('Naukaisen ystävällisesti', 'Give it a friendly meow', { napper: 2, explorer: 1 }),
      answer('Pidän näyttävän esityksen ikkunalaudalla', 'Put on a show on the windowsill', { clown: 2, diva: 1 }),
    ],
  },
  {
    text: { fi: 'Mistä ihmisesi muistavat sinut?', en: 'What will your humans remember you for?' },
    answers: [
      answer('Viisaasta katseestani', 'My wise stare', { philosopher: 2, mastermind: 1 }),
      answer('Siitä, että näytin aina parhaimmaltani', 'Always looking my best', { diva: 2, clown: 1 }),
      answer('Hurjimmista loikistani verhoihin', 'The wildest leaps onto the curtains', { chaos: 2, boss: 1 }),
      answer('Piilopaikoista, joita kukaan ei löytänyt', 'Hiding spots nobody could find', { explorer: 2, chaos: 1 }),
    ],
  },
  {
    text: { fi: 'Kissojen kykykilpailu. Mikä on esityksesi?', en: 'Cat talent show. What is your act?' },
    answers: [
      answer('Akrobatiaa kirjahyllyllä', 'Acrobatics on the bookshelf', { chaos: 2, clown: 1 }),
      answer('Hassuja asentoja ja ilmeitä', 'Silly poses and faces', { clown: 2, mastermind: 1 }),
      answer('Muotinäytös, häntä pystyssä', 'A catwalk, tail held high', { diva: 2, explorer: 1 }),
      answer('Tuijotuskilpailu, en häviä koskaan', 'A staring contest, I never lose', { boss: 2, napper: 1 }),
    ],
  },
  {
    text: { fi: 'Yö laskeutuu', en: 'Night falls' },
    answers: [
      answer('Pidän vahtia ikkunalla', 'Keep watch at the window', { boss: 2, explorer: 1 }),
      answer('Livahdan tutkimaan keittiötä', 'Sneak off to explore the kitchen', { explorer: 2, chaos: 1 }),
      answer('Nukun, vihdoinkin (taas)', 'Sleep, finally (again)', { napper: 2, philosopher: 1 }),
      answer('Katselen kuuta ja mietin syntyjä syviä', 'Gaze at the moon, thinking deep thoughts', { philosopher: 2, diva: 1 }),
    ],
  },
  {
    text: { fi: 'Kissamottosi', en: 'Your cat motto' },
    answers: [
      answer('Ensin mietitään, sitten loikataan', 'Think first, pounce later', { mastermind: 2, philosopher: 1 }),
      answer('Hyvä turkki, parempi mieli', 'Good fur, good mood', { diva: 2, napper: 1 }),
      answer('Kovaa ja korkealta, miau', 'Loud and proud, meow', { clown: 2, boss: 1 }),
      answer('Ei hätää, ruokakuppi täyttyy kyllä', 'No worries, the food bowl always refills', { philosopher: 2, napper: 1 }),
    ],
  },
]

export const questionSets = [
  { id: 'everyday', name: { fi: 'Arki', en: 'Everyday life' }, questions: everyday },
  { id: 'catlife', name: { fi: 'Kissan elämä', en: 'A cat\'s life' }, questions: catLife },
]

export const defaultQuestionSetId = 'everyday'

export function getQuestionSet(id) {
  return questionSets.find((set) => set.id === id) ?? questionSets[0]
}
