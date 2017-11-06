Zadanie polega na stworzeniu prostego menadżera zadań.
Użytkownik poprzez linię poleceń będzie mógł dodać zadanie, wyświetlić listę zadań i usunąć zadanie. 

W folderze dostępne są dwa pliki:
- client.js 
- server.js

Klient po wpisaniu przez użytkownika komendy w linii poleceń emituje zdarzenie 'command' do serwera w a serwer w odpowiedzi emituje zdarzenie 'response' do klienta.

Lista komend do zaimplementowania:
- help - komenda wyświetli listę dostępnych komend
- ls - do wyświetlenia listy zadań wraz z ich identyfikatorami
- add - dodaj nowe zadanie i zwróć jego id
- delete - usuń zadanie po id zadania i zwróć infomrację o usunięciu zadania

1. W pliku server.js stwórz klasę Server dziedziczącą po `EventEmitter` której zostanie przekazana instancja klienta w konstruktorze.

2. W przypadku otrzymania nieznanej komendy, serwer powinien wyemitoać zdarzenie `response` z wiadomością `Nieznana komenda`.

3. W pliku client.js potrzebujemy odczytać dane przekazane od użytkwonika, do tego celu użyjemy moduł `readline` (https://nodejs.org/api/readline.html).

W celu użycia modułu readline tworzymy interfejs ze standardowymi strumieniami wejścia/wyjścia.

```javascript
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
```

Stworzony interfejs emituje zdarzenie `line` po wciśnięciu przez użytkownika Enter, przekazując jako parametr tekst wpisany przez użytkownika.

```javascript
rl.on('line', (input) => {   
    console.log(input);
});
```

4. Po wpisaniu komendy przez użytkownika, klient powinien wyemitować zdarzenie `command` z podana komendą

```javascript
client.emit('command', command)
```

5. Serwer po zainicjowaniu powinine wysłać zdarzenie z instrukcją dla użytkownika w postaci 'Wpisz komende (help wyświetla listę komend)'.


6. Metoda `add` po stronie serwera powinna dostać jako argument tablicę z przekazanymi przez użytkownika argumentami podanymi po komendzie `add`, np.

`add Kupic pieczywo`

To metoda add powinna otrzymać tablicę ['Kupic','pieczywo'];

Aby to osiągnać klient powinien emitować podczas komendy `command` dwa argumenty wpisaną komendę oraz tablicę argumentów przekazanych po komendzie add.

7. Do przechowania listy zadań wystarczy wykorzystać prosty obiekt JavaScript
 ```javascript
 this.tasks = {};
 this.taskId = 1;
```

-----

Dla lepszej prezentacji odpowiedzi, możesz posłużyć się poniższym kodem, któy wyczyści konsole, przed wyświetleniem odpowiedzi.

```javascript
process.stdout.write('\u001B[2J\u001B[0;0f');
process.stdout.write(response);
process.stdout.write('\n\> ');
```
