//1. Zaladuj potrzebne moduly EventEmitter i readline


const client = new EventEmitter();
const server = // 2. zaladuj modul serwer.js i przekaż do niego obiekt `client`;

// 3. Podepnij sie do zdarzenia `response` emitowanego przez serwer  aby wyswietlic odpowiedz od serwera


let command, args;

// 4. podepnij sie do zdarzenia `line` emitowanego przez interfejs readline zeby odczytac wartosci wprowadzone przez
// uzytkownika
