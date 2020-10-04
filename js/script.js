const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');


const PersonalMovieDB = {
count: numberOfFilms,
movies: {},
actors: {},
genres: [],
privat: false
};

const a = prompt('Один из просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его', ''),
      c = prompt('Один из просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его', '');

      PersonalMovieDB.movies[a] = b;
      PersonalMovieDB.movies[c] = d;

      console.log(PersonalMovieDB);

"use strict";

if (4 == 9) {
console.log('ok!');
} else {
console.log('error');
}

const num = 50;
if (num<49) {console.log('Error')}
