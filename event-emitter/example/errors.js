const fs = require('fs');
const EventEmitter = require('events');

class WithTime extends EventEmitter {
    execute (asyncFunc, ...args) {
        console.time('execute');
        this.emit('begin');
        asyncFunc(...args, (err, data) => {
            if (err) {
                return this.emit('error', err);
            }

            this.emit('data', data);
            console.timeEnd('execute');
            this.emit('end');
        });

    }
}

const withTime = new WithTime();

// Kolejnosc wywolania funkcji obslugi zdarzenia jest zgodna z kolejnoscia i ch rejestracji
withTime.on('data', (data) => {
    console.log(`Dlugosc: ${data.length}`);
});

const charactersLength = (data) => {
    console.log(`Liczba znaków: ${data.toString().length}`);
};

withTime.on('data',charactersLength );



// jezeli chcesz aby twoja funkcji obslugi byla pierwsza to uzyj metody
// withTime.prependListener('data', (data) => console.log(`Liczba znaków: ${data.toString().length}`));
//
// withTime.removeListener('data', charactersLength);// usuwamy metoda obslugujaca zdarzenie
//
// Po dodniu oslugi zdarzenia error, blad jest lgowany ale proces kontynuje wykonywanie kodu
// withTime.on('error', console.error);

//
// process.on('uncaughtException', (err) => {
//     console.log(err);
//
//     process.exit(1)
// });
//

// process.once('uncaughtException', (err) => {
//     console.log(err);
//
//     process.exit(1)
// });

// withTime.execute(fs.readFile, '');
withTime.execute(fs.readFile, __filename);


