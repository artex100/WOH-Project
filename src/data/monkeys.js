// Monkey types = possible quiz results.
//
// Images: placemonkeys.com returns the SAME photo for the same size every time,
// so each type has a fixed size URL. The sizes were picked by hand so that the
// species in the photo matches the type (some sizes repeat photos, so the
// numbers are not in a row).
//
// `id` is what gets saved to localStorage history, so don't rename ids later.

const API = 'https://www.placemonkeys.com/500'

export const monkeys = [
  {
    id: 'macaque',
    image: `${API}/350`,
    species: { fi: 'Makaki', en: 'Macaque' },
    title: { fi: 'Peilin vartija', en: 'The Mirror Gazer' },
    description: {
      fi: 'Ulkonäkö ratkaisee, ja sinä tiedät sen. Tyyli on kohdillaan aina, myös viidakossa.',
      en: 'Looks matter and you know it. Your style is on point, even in the jungle.',
    },
  },
  {
    id: 'chimp',
    image: `${API}/312`,
    species: { fi: 'Simpanssi', en: 'Chimpanzee' },
    title: { fi: 'Strategi', en: 'The Strategist' },
    description: {
      fi: 'Sinulla on aina suunnitelma, ja yleensä myös varasuunnitelma. Lauma seuraa sinua.',
      en: 'You always have a plan, and usually a backup plan too. The troop follows you.',
    },
  },
  {
    id: 'langur',
    image: `${API}/307`,
    species: { fi: 'Languri', en: 'Langur' },
    title: { fi: 'Viisas', en: 'The Sage' },
    description: {
      fi: 'Rauhallinen ja harkitseva. Puhut vähän, mutta kun puhut muut kuuntelevat.',
      en: 'Calm and thoughtful. You don\'t talk much, but when you do, everyone listens.',
    },
  },
  {
    id: 'tamarin',
    image: `${API}/308`,
    species: { fi: 'Kultaleijonatamariini', en: 'Golden lion tamarin' },
    title: { fi: 'Show-apina', en: 'The Show-off' },
    description: {
      fi: 'Kova ääni, kirkkaat värit ja aina huomion keskipisteenä. Bileet seuraavat sinua.',
      en: 'Loud, bright and always the centre of attention. The party follows you.',
    },
  },
  {
    id: 'orangutan',
    image: `${API}/304`,
    species: { fi: 'Oranki', en: 'Orangutan' },
    title: { fi: 'Huolehtija', en: 'The Caretaker' },
    description: {
      fi: 'Rento ja lämmin. Pidät huolta omistasi, ja päiväunet ovat sinulle pyhiä.',
      en: 'Chill and warm. You look after your own, and naps are sacred to you.',
    },
  },
  {
    id: 'gorilla',
    image: `${API}/317`,
    species: { fi: 'Gorilla', en: 'Gorilla' },
    title: { fi: 'Pomo', en: 'The Boss' },
    description: {
      fi: 'Vahva ja vakaa. Kukaan ei sotke reviiriäsi, eikä kenenkään tarvitse pelätä vierelläsi.',
      en: 'Strong and steady. Nobody messes with your turf, and nobody beside you needs to worry.',
    },
  },
  {
    id: 'lemur',
    image: `${API}/326`,
    species: { fi: 'Kattalemuri', en: 'Ring-tailed lemur' },
    title: { fi: 'Utelias', en: 'The Curious One' },
    description: {
      fi: 'Näet asiat, jotka muilta jäävät huomaamatta. Tutkit kaiken varovasti.',
      en: 'You notice what others miss. You explore everything, but carefully.',
    },
  },
  {
    id: 'spider',
    image: `${API}/380`,
    species: { fi: 'Hämähäkkiapina', en: 'Spider monkey' },
    title: { fi: 'Akrobaatti', en: 'The Acrobat' },
    description: {
      fi: 'Paikallaan oleminen ei ole sinun juttusi. Korkeammalle, kovempaa, uudestaan.',
      en: 'Sitting still is not your thing. Higher, faster, again.',
    },
  },
]

export const monkeyIds = monkeys.map((monkey) => monkey.id)

export function getMonkey(id) {
  return monkeys.find((monkey) => monkey.id === id)
}
