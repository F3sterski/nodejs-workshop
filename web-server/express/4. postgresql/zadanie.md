# Dostęp do bazy POstgreSql za pomocą ORM Sequalize.js


Przygotowanie bazy danych:
1. Otwórz plik `docker-compose.yml` w którym ustawione zostały nazwa bazy danych, użytkownik i hasło do bazy danych
2. Wpisz komendę `docker-compose up -d`, która uruchomi serwer postgresql na porcie 5432, utworzy podana bazę danych oraz użytkownika

Zadanie polega na utworzeniu prostej aplikacji tworzącej zadania dla użytkownika


1. Stwórz plik `package.json` za pomocą komendy `npm init`
2. Zainstaluje następujące zależnośći
    - `express`
    - `sequelize` 
    - `sequelize-cli`
    - `pg`
    - `pg-hstore`
    - `body-parser`
    - `pug`
   
   oraz pakiet `nodemon` jako zaleźność deweloperska.
    
3. Zainicjuj projekt sequelize, używając komendy 
`node_modules\.bin\sequelize init`. Uruchomienie tej komendy spowoduje stworzenie folderów:
    - `config`
    - `models`
    - `migrations`
    
4. Stwórz dwa modele:

    - Użytkownika 
    
    `node_modules\.bin\sequelize model:create --name User --attributes username:string`
    
    - Zadania
    
    `node_modules\.bin\sequelize model:create --name Task --attributes title:string`
           
    
> W wyniku wykonania powyższych komend, w folderze models zostały stworzene dwa pliki `user.js` reprezentujący model użytkownika i `task.js` reprezentujący model zadania. Dodatkowo w folderze `migrations` pojawiły się dwa pliki migracji, pozwalające odtwrozyć obiekty bazodanowe.    
    
5. Tworzenie relacji pomiędzy modelami.

- Zmiany dla modelu user
    
    > Z uwagi, że narzędzie sequelize-cli nie jest jeszcze kompatybilne z wersją 4 sequalize należy wykonac dodatkową zmianę w modelu. W definicji modelu proszę usunać obiekt zawierający właśćiwość `classMethods`


Przed kodem zwracającym definicję modelu należy zdefiniować relację jeden do wielu z modelem `task`  używając metody `hasMany`.

```javascript

  User.associate = function (models) {
      User.hasMany(models.Task)
  };

```

Po tej operacji

- Zmiany dla modelu task

    > Z uwagi, że narzędzie sequelize-cli nie jest jeszcze kompatybilne z wersją 4 sequalize należy wykonac dodatkową zmianę w modelu. W definicji modelu proszę usunać obiekt zawierający właśćiwość `classMethods`
    
    Przed kodem zwracającym definicję modelu należy zdefiniować relację z modelem `user`  w następujący sposób.
    
```javascript
    Task.associate = function (models) {
        Task.belongsTo(models.User);
    };
```

6. Ustawienie poprawnej konfiguracji

W pliku `config/config.json` proszę podać poprawną nazwę użytkownika bazy danych, hasło oraz nazwę bazy danych. Następnie proszę zmienić właściwość `dialect` na `postgres`.


7. W pliku `package.json` dodaj komendę dla skryptu `start`

`"start": "nodemon server.js"`

8. Poprawić w pliku `models/index.js` ścieżkę do pliku `config.json` z uwagi na błąd w wygenerowanym przez sequalize-cli pliku.


9. Stworzyć w katalogu `routes`, następujące pliki:

- `index.js` który definiuje trasę dla strony głównej przy pomocy modułu `require('express').Router()`

`router.get('/')` - funkcja obslugi trasy pobiera listę użytkowników i renderuje widok index z przekazaną listą użytkowników. Należy skorzystać z metody `findAll` modelu `User`.

`models.User.findAll({include: [model.Task]})`

- `users.js` który definiuje trasy do zadań na uzytkownikach i ich zadaniach:

`router.post('/create')` - tworzy użytkownika
`router.get('/:user_id/destroy')` - kasuje użytkownika przy użyciu metody `model.User.destroy`. Przekazany parametr `user_id` dostępny jest w obiekcie `req.params.user_id`
 `router.post('/:user_id/tasks/create')` - tworzy zadanie dla użytkownika
 `router.get('/:user_id/tasks/:task_id/destroy')` - kasuje zadanie użytkownika
 





