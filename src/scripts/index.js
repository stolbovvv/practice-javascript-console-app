/* Global */

window.addEventListener('DOMContentLoaded', () => {
  const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function () {
      personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');

      while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
        personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');
      }
    },

    rememberMyFilms: function () {
      for (let i = 0; i < 2; i++) {
        const a = prompt('Один из поледних просмотренных фильмов?', '').trim();
        const b = prompt('На сколько оцените его?', '').trim();

        if (a !== null && b !== null && a != '' && b != '' && a.length < 50) {
          personalMovieDB.movies[a] = b;
        } else {
          i--;
        }
      }
    },

    detectPersonalLevel: function () {
      if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
      } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
      } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
      } else {
        console.log('Произошла ошибка');
      }
    },

    shoMyDB: function (hidden) {
      if (!hidden) {
        console.log(personalMovieDB);
      }
    },

    toggleVisibleMyDB: function () {
      if (personalMovieDB.privat) {
        personalMovieDB.privat = false;
      } else {
        personalMovieDB.privat = true;
      }
    },

    writeYourGenres: function () {
      for (let i = 1; i <= 3; i++) {
        let genre = prompt(`Ваш любимый жанр под номером ${i}`);

        if (genre === '' || genre == null) {
          console.log('Вы не ввели данные или не ввели их вовсе');
          i--;
        } else {
          personalMovieDB.genres[i - 1] = genre;
        }
      }
      personalMovieDB.genres.forEach((item, i) => {
        console.log(`Любимый жанр №${i + 1} –это ${item}`);
      });
    },
  };

  personalMovieDB.start();
  personalMovieDB.rememberMyFilms();
  personalMovieDB.detectPersonalLevel();
  personalMovieDB.shoMyDB(personalMovieDB.privat);
  personalMovieDB.writeYourGenres();
});
