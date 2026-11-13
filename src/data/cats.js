// Cat types. `tag` = cataas.com tag for the photo. `id` is saved in history, don't rename.

export const cats = [
  {
    id: 'diva',
    tag: 'fluffy',
    subtitle: { fi: 'Pörrökissa', en: 'Fluffy cat' },
    title: { fi: 'Diiva', en: 'The Diva' },
    description: {
      fi: 'Turkki on aina täydellinen, ja sinä tiedät sen. Kuvaan pääsee vain parhaalta puolelta.',
      en: 'Your fur is always perfect and you know it. Photos are taken from your good side only.',
    },
  },
  {
    id: 'mastermind',
    tag: 'black',
    subtitle: { fi: 'Musta kissa', en: 'Black cat' },
    title: { fi: 'Juonittelija', en: 'The Mastermind' },
    description: {
      fi: 'Sinulla on aina suunnitelma, ja yleensä myös varasuunnitelma. Ruokakuppi ei täyty sattumalta.',
      en: 'You always have a plan, and usually a backup plan too. The food bowl doesn\'t fill itself by accident.',
    },
  },
  {
    id: 'philosopher',
    tag: 'box',
    subtitle: { fi: 'Laatikkokissa', en: 'Box cat' },
    title: { fi: 'Filosofi', en: 'The Philosopher' },
    description: {
      fi: 'Rauhallinen ja harkitseva. Istut laatikossasi ja mietit suuria. Kun naukaiset, muut kuuntelevat.',
      en: 'Calm and thoughtful. You sit in your box pondering big things. When you meow, everyone listens.',
    },
  },
  {
    id: 'clown',
    tag: 'funny',
    subtitle: { fi: 'Hassu kissa', en: 'Funny cat' },
    title: { fi: 'Pelle', en: 'The Clown' },
    description: {
      fi: 'Kova ääni, outoja asentoja ja aina huomion keskipisteenä. Sinusta tehdään meemejä.',
      en: 'Loud, silly poses and always the centre of attention. You are meme material.',
    },
  },
  {
    id: 'napper',
    tag: 'sleepy',
    subtitle: { fi: 'Uninen kissa', en: 'Sleepy cat' },
    title: { fi: 'Unikeko', en: 'The Napper' },
    description: {
      fi: 'Rento ja lämmin. Pidät huolta omistasi, ja päiväunet auringonläikässä ovat sinulle pyhiä.',
      en: 'Chill and warm. You look after your own, and naps in a sunny spot are sacred to you.',
    },
  },
  {
    id: 'boss',
    tag: 'angry',
    subtitle: { fi: 'Äreä kissa', en: 'Grumpy cat' },
    title: { fi: 'Pomo', en: 'The Boss' },
    description: {
      fi: 'Vahva ja vakaa. Kukaan ei istu sinun paikallesi sohvalla, eikä kenenkään tarvitse pelätä vierelläsi.',
      en: 'Strong and steady. Nobody takes your spot on the sofa, and nobody beside you needs to worry.',
    },
  },
  {
    id: 'explorer',
    tag: 'kitten',
    subtitle: { fi: 'Kissanpentu', en: 'Kitten' },
    title: { fi: 'Tutkija', en: 'The Explorer' },
    description: {
      fi: 'Näet asiat, jotka muilta jäävät huomaamatta. Jokainen kaappi ja pussi on tutkittava, varovasti.',
      en: 'You notice what others miss. Every cupboard and bag must be explored, carefully.',
    },
  },
  {
    id: 'chaos',
    tag: 'orange',
    subtitle: { fi: 'Oranssi kissa', en: 'Orange cat' },
    title: { fi: 'Kaaoskissa', en: 'The Chaos Agent' },
    description: {
      fi: 'Paikallaan oleminen ei ole sinun juttusi. Kello kolme yöllä on täydellinen hetki juosta seinille.',
      en: 'Sitting still is not your thing. 3 a.m. is the perfect time to run up the walls.',
    },
  },
]

export const catIds = cats.map((cat) => cat.id)

export function getCat(id) {
  return cats.find((cat) => cat.id === id)
}
