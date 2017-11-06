const EventEmitter = require('events');

class WithLog extends EventEmitter {
    execute (taskFunc) {
        console.log('Przed wykonaniem');
        this.emit('begin');
        taskFunc();
        this.emit('end');
        console.log('Po wykonaniu');
    }
}

const withLog = new WithLog();

withLog.on('begin', () => console.log('Funkcja zaraz zostanie wykonana'));
withLog.on('end', () => console.log('Funkcja została wykonana'));


//withLog.on('begin', () => console.log('Kolejna funkcja obslugi zdarzenia begin'));
//withLog.on('begin', () => console.log('Kolejna funkcja obslugi zdarzenia begin'));


withLog.execute(() => setTimeout(() =>
    console.log('**** Wykonuje zadanie ****'), 500));
