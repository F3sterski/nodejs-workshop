Zadanie polega na stworzeniu prostego kalkulatora.

Używając modułu `readline` pobierz od użytkownika operację w postaci np 3+4 i następnie wyświetl wynik tej operacji. Wspierane operatory, to: +,-,*,/.


Aby wykonać to zadanie stwórz dwa moduły:
1. Pierwszy moduł `parser.js`, eksportuje funkcję parsującą otrzymany od użytkownika ciąg znaków i zwraca informację o rodzaju operacji w postaci obiektu:

```javascript
return {
     firstArgument: '3',
     operator: '+',
     secondArgument: '4'
}
```

2. Drugi moduł `calculator.js` eksportuje funkcję przyjmującą obiekt zwrócony przez moduł `parser.js` i zwracający wynik działania.

Załaduj stworzone moduły do pliku index.js i wywołaj wyeksportowane metody.

Z uwagi, że tworzowny kod jest synchronicznyc sytuacje błędne można obsłużyć wywołując wyjątek 
w postaci `throw new Error('blad')` a obsłużyć go przy użyciu składni `try/catch`. 

Należy pamiętać, że taka obsluga błędów nie zadziała w przypadku kodu asynchronicznego.

--------------

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
