/* Global */

window.addEventListener('DOMContentLoaded', () => {
  const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

  const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
  };

  const a = prompt('Один из поледних просмотренных фильмов?', '');
  const b = prompt('на сколько оцените его?', '');
  const c = prompt('Один из поледних просмотренных фильмов?', '');
  const d = prompt('на сколько оцените его?', '');

  personalMovieDB.movies[a] = b;
  personalMovieDB.movies[c] = d;

  console.log(personalMovieDB);
});
