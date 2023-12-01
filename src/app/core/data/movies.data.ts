import { MovieModel } from 'src/app/core/models/movie.interface';

export const moviesData: MovieModel[] = [
  {
    id: 1,
    title: 'Tenet',
    description:
      'Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.',
    rating: 7.8,
    duration: '2h 30 min',
    genre: ['Action', 'Sci-Fi'],
    released_date: '3 September 2020',
    trailer_link: 'https://www.youtube.com/watch?v=LdOM0x0XDMo',
    image: 'Tenet.png',
  },
  {
    id: 2,
    title: 'Spider-Man: Into the Spider-Verse',
    description:
      'Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spiderpowered individuals from other dimensions to stop a threat for all realities.',
    rating: 8.4,
    duration: '1h 57min',
    genre: ['Action', 'Animation', 'Adventure'],
    released_date: '14 December 2018',
    trailer_link: 'https://www.youtube.com/watch?v=tg52up16eq0',
    image: 'Avengers.png',
  },
  {
    id: 3,
    title: 'Knives Out',
    description:
      'A detective investigates the death of a patriarch of an eccentric, combative family.',
    rating: 7.9,
    duration: '2h 10min',
    genre: ['Comedy', 'Crime', 'Drama'],
    released_date: '27 November 2019',
    trailer_link: 'https://www.youtube.com/watch?v=qGqiHJTsRkQ',
    image: 'Guardians of The Galaxy.png',
  },
  {
    id: 4,
    title: 'Guardians of the Galaxy',
    description:
      ' A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.',
    rating: 8.0,
    duration: '2h 1min',
    genre: ['Action', 'Adventure', 'Comedy'],
    released_date: '1 August 2014',
    trailer_link: 'https://www.youtube.com/watch?v=d96cjJhvlMA',
    image: 'Knives Out.png',
  },
  {
    id: 5,
    title: 'Avengers: Age of Ultron',
    description:
      "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
    rating: 7.3,
    duration: '2h 21min',
    genre: ['Action', 'Adventure', 'Sci-Fi'],
    released_date: '1 May 2015',
    trailer_link: 'https://www.youtube.com/watch?v=tmeOjFno6Do',
    image: 'Spider Man.png',
  },
];
