1. Zaktualizuj komende `npm` poleceniem `npm i -g npm`
2. Ustaw zmienne konfiguracyjne

`npm set init.author.email "adres email"`
`npm set init.author.name "imie i nazwisko"`

2. Zainicjuj projekt przy użyciu komendy `npm init`   
3. Zainstaluj pakiet `express@4.16.0` poleceniem `npm i express@4.16.0`
4. Zainstaluj jako zależność deweloperską moduł `nodemon`
5. Znajdz w rejestrze https://www.npmjs.com  pakiet `supertest` i zainstaluj go zgodnie z dokumentacją
6. Sprawdź listę zainstalowanych lokalnych pakietów poleceniem `npm ls --depth-0`
7. Sprawdź poleceniem `npm outdated` listę pakietów do zaktualizowania
8. Zaktualizuje wersje zaleźnośći polceniem `npm update`

9. Stwórz plik `index.js` z prostym poleceniem `console.log('Node.js')`
w pliku `package.json` w `sekcji` scripts dodaj sekcję `"start" : "node index.js"`, po tej czynności program powinno się
 dać uruchomić poleceniem `npm start`.
10. W pliku `package.json` dodaj poniższe dwa skrypty w sekcji `scripts`

```
    "prestart": "echo \"przed startem aplikacji\"",
    "poststart": "echo \"po uruchomieniu aplikacji\""
```

Jest to sposób na podpiecie pod komende specjalnych tzw. hooks które zostana wyknane przed nasza komenda (`pre`) lub (`post`).

Po uruchomieniu komendy `npm start`, oba zdefiniwoane "hooki" zostaną wywołane.

11. Skasuj folder `node_modules` i następnie wpisz `npm i`, w ten sposób zainstalujesz wszystkie zależności podane w pliku `package.json`.

