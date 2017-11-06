Stwórz trzy wersje programu który odczyta plik `numbers.txt` i zwróci informacje o liczbie nieparzystych liczb w pliku.

Do odczytania pliku wykorzystaj metodę `fs.readFile` z modułu `fs`.

Każda wersja programu musi zawierać metodę `readFileAsArray` która zwraca listę odczytanych linii z pliku.

Różnica pomiędzy wersjami doczyty sposobu w jaki metoda `readFileAsArray` powinna zwrócić listę linii z pliku.

Wersja 1. Metoda przyjmuje sćiężke do pliku i funkcję callback.
Funkcja callback musi zostać wywołana w standardowej dla Node.js konwencji `callback(err, data)`. Funkcja callback zostanie wywołana z odczytaną listą linii z pliku.

Jeżeli w metodzie `readFileAsArray` wystąpi błąd to należy go spropagować w górę używając przekazanej funkcji callback.

Aby sprawdzić, czy błąd jest dobrze obsłużony, wystarczy przekazać do metody złą ścieżkę pliku.

Wywołanie metody `readFileAsArray` powinno wyglądać tak:

`readFileAsArray('sciezka do pliku', (err, lines) => {
    // logika do znalezienia liczby nieparzystych liczb
})`

Wersja 2. Druga wersja programu powinna zawierać metodą `readFileAsArray` przyjmującą tylko ścieżkę do pliku i zwracającą 
Promisa, gdzie w przypadku poprawnego rozwiązania promisa lista linii z pliku zostanie przekazana dalej. Należy pamiętać 
o zgłoszeniu odrzuceniu promisa w przypadku wytąpienia błędu.

Wywołanie metody `readFileAsArray` powinno wyglądać tak (należy pamiętać o obsłużeniu błędu):

`readFileAsArray('sciezka do pliku').then(lines) => {
    // logika do znalezienia liczby nieparzystych liczb
})`

Wersja 3. Metoda `readFileAsArray` pozostaje w wersji zwracającej obiekt Promise, zmiania się tylko jej wywołanie.

Wywołanie metody `readFileAsArray` powinno wykorzystać składnię `async/await` z użyciem try/catch
