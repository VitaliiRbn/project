/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/







/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/



// Код возьмите из предыдущего домашнего задания

'use strict';

let numberOfFilms;

function start() {
     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

     }
}

start ();

// const PersonalMovieDB = {
// count: numberOfFilms,
// movies: {},
// actors: {},
// genres: [],
// privat: false
// };


// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из просмотренных фильмов', ''),
//           b = prompt('На сколько вы оцените его?', '');
        
// if ( a, b != null && a, b != "" && a.length < 50) {
//       PersonalMovieDB.movies[a] = b;
//       console.log('Done');
// } else {
//        console.log('Error');
//        i--;
// }
//         }
// if (PersonalMovieDB.count> 0 && PersonalMovieDB.count < 10) {
//     console.log('Просмотрено довольно мало фильмов');
// } else if (PersonalMovieDB.count >= 10 && PersonalMovieDB.coutn < 30) {
//     console.log('Вы классический зритель');
// } else if (PersonalMovieDB.count >= 30) {
//     console.log('Вы киноман');
// } else {
//     console.log('Произошла Ошибка');
// }

// console.log(PersonalMovieDB);







// function showFirstMessage(text) {
//     console.log('Hello world');   
// }
// console.log(text);


// showFirstMessage ();

// const num =50;

// if (num+5 == 55) {
//     console.log('good result');
// } else if (num+5!=50) {
//     console.log('reboot');
// } else {
//     console.log('finish');
// }
// const num =51;
// (num == 50) ? console.log('Ok') : console.log('not')


// swith (num) {
//     case 49:
//             console.log('goood');
//             break;
//             case 50:
//                     console.log('')
// }


// function calc() {
//     let a = 44
//  return a;
// }

// let any = calc();

// console.log(any);

// console.log(calc(2, 4));
// console.log(calc(3, 3));

// const str = "tester";


// const cut = "Hey girls!";
// console.log(cut.slice(1, 2));

// const like = '12,1';
// console.log(parseInt(like));


// let azz = `Good`;
// console.log(azz.toLowerCase());