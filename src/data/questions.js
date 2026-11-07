// Question sets for the quiz.
//
// Every answer gives points to monkey types (ids from monkeys.js):
//   2 points = the answer fits this monkey best
//   1 point  = it fits this monkey a bit
// After the quiz, the monkey with the most points is the result.
//
// The sets are balanced: in each set, every monkey is the 2-point pick 4 times.

function answer(fi, en, scores) {
  return { text: { fi, en }, scores }
}

const everyday = [
  {
    text: { fi: 'Lauantaiaamu. Mitä teet?', en: 'Saturday morning. What do you do?' },
    answers: [
      answer('Nukun puoleenpäivään', 'Sleep until noon', { orangutan: 2, langur: 1 }),
      answer('Lähden juoksemaan tai kiipeilemään', 'Go for a run or climb something', { spider: 2, gorilla: 1 }),
      answer('Brunssi kavereiden kanssa, minä järjestän', 'Brunch with friends, I organise it', { chimp: 2, tamarin: 1 }),
      answer('Pitkä hetki peilin edessä asua valiten', 'A long time in front of the mirror picking an outfit', { macaque: 2, tamarin: 1 }),
    ],
  },
  {
    text: { fi: 'Kaverisi kuvailevat sinua...', en: 'Your friends describe you as...' },
    answers: [
      answer('Siksi, joka tekee suunnitelmat', 'The one who makes the plans', { chimp: 2, gorilla: 1 }),
      answer('Siksi hauskaksi ja äänekkääksi', 'The funny, loud one', { tamarin: 2, spider: 1 }),
      answer('Rauhalliseksi kuuntelijaksi', 'The calm listener', { langur: 2, orangutan: 1 }),
      answer('Siksi, joka näyttää aina tyylikkäältä', 'The one who always looks sharp', { macaque: 2, lemur: 1 }),
    ],
  },
  {
    text: { fi: 'Valitse välipala', en: 'Pick a snack' },
    answers: [
      answer('Banaani', 'A banana', { orangutan: 2, gorilla: 1 }),
      answer('Jotain, mitä en ole ikinä maistanut', 'Something I have never tried', { lemur: 2, spider: 1 }),
      answer('Se, joka näyttää parhaalta kuvissa', 'Whatever looks best in photos', { macaque: 2, tamarin: 1 }),
      answer('Energiajuoma', 'Energy drink', { spider: 2, tamarin: 1 }),
    ],
  },
  {
    text: { fi: 'Ryhmätyö. Mikä on roolisi?', en: 'Group project. What is your role?' },
    answers: [
      answer('Johtaja, jaan tehtävät', 'Leader, I split the tasks', { chimp: 2, gorilla: 1 }),
      answer('Esiintyjä, rakastan huomiota', 'Presenter, I love the stage', { tamarin: 2, macaque: 1 }),
      answer('Tutkija, kaivan yksityiskohdat esiin', 'Researcher, I dig into the details', { langur: 2, lemur: 1 }),
      answer('Pidän huolen, että kaikki jaksavat', 'I make sure everyone is doing okay', { gorilla: 2, orangutan: 1 }),
    ],
  },
  {
    text: { fi: 'Sait yllättäen vapaan iltapäivän', en: 'You suddenly get a free afternoon' },
    answers: [
      answer('Tutkin kaupunginosaa, jota en tunne', 'Explore a part of town I don\'t know', { lemur: 2, spider: 1 }),
      answer('Salille', 'Gym', { gorilla: 2, spider: 1 }),
      answer('Kirja ja kuppi teetä', 'A book and a cup of tea', { langur: 2, orangutan: 1 }),
      answer('Strategiapeli', 'A strategy game', { chimp: 2, lemur: 1 }),
    ],
  },
  {
    text: { fi: 'Joku etuilee jonossa', en: 'Someone cuts in line' },
    answers: [
      answer('Mulkaisen epäilevästi ja tuijotan', 'I glance angrily and stare', { gorilla: 2, macaque: 1 }),
      answer('Sanon jotain kovaa ja hauskaa', 'I say something loud and funny', { tamarin: 2, chimp: 1 }),
      answer('Annan olla, ei sen arvoista', 'I let it go, not worth it', { langur: 2, orangutan: 1 }),
      answer('Tarkkailen tilannetta ja löydän nopeamman jonon', 'I watch the situation and find a faster line', { lemur: 2, chimp: 1 }),
    ],
  },
  {
    text: { fi: 'Puhelimesi kuvagalleria on täynnä...', en: 'Your camera roll is full of...' },
    answers: [
      answer('Selfieitä', 'Selfies', { macaque: 2, tamarin: 1 }),
      answer('Luontoa ja outoja löytöjä', 'Nature and weird things I found', { lemur: 2, langur: 1 }),
      answer('Videoita temppuilustani', 'Videos of my stunts', { spider: 2, tamarin: 1 }),
      answer('Ruokaa ja lemmikkejä', 'Food and pets', { orangutan: 2, gorilla: 1 }),
    ],
  },
  {
    text: { fi: 'Lempipaikkasi', en: 'Your favourite place' },
    answers: [
      answer('Puiden latvat, mahdollisimman korkealla', 'Treetops, as high as possible', { spider: 2, lemur: 1 }),
      answer('Sohva ja viltti', 'Sofa and a blanket', { orangutan: 2, langur: 1 }),
      answer('Bileiden tanssilattia', 'The dance floor at a party', { tamarin: 2, macaque: 1 }),
      answer('Vuoren huippu, valloitettuna', 'The top of a mountain, conquered', { gorilla: 2, chimp: 1 }),
    ],
  },
]

const jungle = [
  {
    text: { fi: 'Heräät keskeltä viidakkoa. Ensimmäinen siirto?', en: 'You wake up in the middle of the jungle. First move?' },
    answers: [
      answer('Kiipeän korkeimpaan puuhun katsomaan', 'Climb the tallest tree to look around', { spider: 2, lemur: 1 }),
      answer('Teen suunnitelman ja kartan', 'Make a plan and a map', { chimp: 2, langur: 1 }),
      answer('Rakennan mukavan pesän ja odotan', 'Build a cosy nest and wait', { orangutan: 2, langur: 1 }),
      answer('Tarkistan kampaukseni joesta', 'Check my hair in the river', { macaque: 2, tamarin: 1 }),
    ],
  },
  {
    text: { fi: 'Myrsky on tulossa', en: 'A storm is coming' },
    answers: [
      answer('Johdan kaikki suojaan', 'I lead everyone to shelter', { gorilla: 2, chimp: 1 }),
      answer('Pidän muut rauhallisina', 'I keep everyone calm', { langur: 2, orangutan: 1 }),
      answer('Haluan nähdä sen läheltä', 'I want to see it up close', { lemur: 2, spider: 1 }),
      answer('Aloitan sadetanssi bileet', 'I start a storm dance party', { tamarin: 2, spider: 1 }),
    ],
  },
  {
    text: { fi: 'Löydät oudon hedelmän', en: 'You find a strange fruit' },
    answers: [
      answer('Maistan heti', 'Taste it right away', { spider: 2, tamarin: 1 }),
      answer('Haistelen, tökin ja tutkin', 'Sniff it, poke it, study it', { lemur: 2, langur: 1 }),
      answer('Jaan sen lauman kanssa', 'Share it with the troop', { orangutan: 2, gorilla: 1 }),
      answer('Vaihdan sen johonkin parempaan', 'Trade it for something better', { chimp: 2, macaque: 1 }),
    ],
  },
  {
    text: { fi: 'Vieras lauma tulee reviirillesi', en: 'Another troop enters your territory' },
    answers: [
      answer('Hakkaan rintaani. Tämä on minun alueeni.', 'Beat my chest. This is my turf.', { gorilla: 2, tamarin: 1 }),
      answer('Neuvottelen sopimuksen', 'Negotiate a deal', { chimp: 2, langur: 1 }),
      answer('Kutsun heidät välipaloille', 'Invite them over for snacks', { orangutan: 2, lemur: 1 }),
      answer('Teen näyttävän shown, joka tekee vaikutuksen', 'Put on a show to impress them', { tamarin: 2, macaque: 1 }),
    ],
  },
  {
    text: { fi: 'Mistä viidakko muistaa sinut?', en: 'What will the jungle remember you for?' },
    answers: [
      answer('Viisaudesta', 'My wisdom', { langur: 2, chimp: 1 }),
      answer('Siitä, että näytin parhaalta', 'Being the best looking', { macaque: 2, tamarin: 1 }),
      answer('Hurjimmista hypyistä', 'The wildest jumps', { spider: 2, gorilla: 1 }),
      answer('Piilopaikoista, jotka löysin', 'The hidden places I found', { lemur: 2, spider: 1 }),
    ],
  },
  {
    text: { fi: 'Viidakon kykykilpailu. Mikä on esityksesi?', en: 'Jungle talent show. What is your act?' },
    answers: [
      answer('Akrobatiaa', 'Acrobatics', { spider: 2, tamarin: 1 }),
      answer('Stand-up-komiikkaa', 'Stand-up comedy', { tamarin: 2, chimp: 1 }),
      answer('Muotinäytös', 'A fashion walk', { macaque: 2, lemur: 1 }),
      answer('Nostan tukin', 'Lifting a log', { gorilla: 2, orangutan: 1 }),
    ],
  },
  {
    text: { fi: 'Yö laskeutuu', en: 'Night falls' },
    answers: [
      answer('Pidän vahtia', 'I keep watch', { gorilla: 2, lemur: 1 }),
      answer('Livahdan tutkimusretkelle', 'Sneak out to explore', { lemur: 2, spider: 1 }),
      answer('Nukun, vihdoinkin', 'Sleep, finally', { orangutan: 2, langur: 1 }),
      answer('Katselen tähtiä ja mietin syviä', 'Stargazing and deep thoughts', { langur: 2, macaque: 1 }),
    ],
  },
  {
    text: { fi: 'Viidakkomottosi', en: 'Your jungle motto' },
    answers: [
      answer('Ensin mietitään, sitten heilutaan', 'Think first, swing later', { chimp: 2, langur: 1 }),
      answer('Hyvä ulkonäkö, hyvä fiilis', 'Look good, feel good', { macaque: 2, orangutan: 1 }),
      answer('Kovaa ja ylpeästi', 'Loud and proud', { tamarin: 2, gorilla: 1 }),
      answer('Ei hätää, viidakko pitää huolen', 'No worries, the jungle provides', { langur: 2, orangutan: 1 }),
    ],
  },
]

export const questionSets = [
  { id: 'everyday', name: { fi: 'Arki', en: 'Everyday life' }, questions: everyday },
  { id: 'jungle', name: { fi: 'Viidakkoseikkailu', en: 'Jungle adventure' }, questions: jungle },
]

export const defaultQuestionSetId = 'everyday'

export function getQuestionSet(id) {
  return questionSets.find((set) => set.id === id) ?? questionSets[0]
}
