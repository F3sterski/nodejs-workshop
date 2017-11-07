Zadanie polega na stworzeniu prostego czata. W ramach zadania należy dokonczyć kod po stronie serwera.

Kod po stronie serwera powinin obsłużyć następujące zdarzenia emitowane przez socket klienta:
- `new-message` - klient wysłał nową wiadomość, funkcja obsługująca zdarzenie musi zrobić broadcast zdarzenia `new-message` do pozostałych klientów i jako dane przekazać obiekt 
```javascript
{
    username: '' // nazwa uśytkownika wysyłającego wiadomość
    message: '' // otrzymana wiadomość  
}
``` 
- `add-user` - klient dołączył do czatu i wysłał swoją nazwę użytkownika. W ramach funkcji obsługi zdarzenia należy zapamiętać nazwę użytkownika w sesji socketa w celu późniejszego łatwego dostępu `socket.username = username`. Następnie trzeba zwiększyć liczbę użytkowników `numUsers` 
i wysłać do klienta zdarzenie `login` i jako dane przesłać obiekt

```javascript
{
    numUsers: numUsers
}
```
 ostanim krokiem obsługi zdarzenia `add-user` będzie broadcast do wszystkich klientów zdarzenia `user-joined` z danymi w postaci obiektu
 
 ```javascript
{
    username: socket.username,
    numUsers: numUsers
}
```

- `typing` - klient wysyła zdarzenie kiedy zaczyna pisac wiadomość. W ramach funkcji obsługi tego zdarzenia należy zrobić broadcast do pozostałych klientów zdarzenia `typing` z następującem obiektem 

```javascript
{
    username: socket.username
}
```

- `stop-typing` - klient wysyła zdarzenie kiedy przestaje pisac wiadomość. W ramach funkcji obsługi tego zdarzenia należy zrobić broadcast do pozostałych klientów zdarzenia `stop-typing` z następującem obiektem 

```javascript
{
    username: socket.username
}
```

- `disconnect` - zgłoszenie zgłaszane kiedy użytkwonik się rozłaczył. W ramach obsługi zdarzenia, należy zmienjszyc liczbe użytkowników o jeden i 
zrobić broadcast zdarzenia `user-left` do pozostałych klientów z obiektem

```javascript
{
    username: socket.username,
    numUsers: numUsers
}
``` 

----

Na koniec kiedy czat już działa lokalnie dodaj poniższy kod i zainstaluj pakietu `socket.io-redis`

```javascript
const redis = require('socket.io-redis');
io.adapter(redis({
    host: 'adres redisa',
    port: 14565
}));
```

Dzieki dodanemu adapterowi i wykorzystaniu redisa, będziemy mogli wszyscy ze sobą pisać pomimo, że nasze aplikacje działają na innych komputerach.
