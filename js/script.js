const nomberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');

const personalMoveDB = {
    count: nomberOfFilms,
    moves: {},
    actors: {},
    ganers: [],
    privat: false
};

const a = prompt('Последний фильмь котрй смотрел', ''),
    b = prompt('На сколько оцените его?', ''),
    c = prompt('Какой последний фильм?', ''),
    d = prompt('На сколько оцените его?', '');
    
personalMoveDB.moves[a] = b;
personalMoveDB.moves[c] = d;

console.log(personalMoveDB);