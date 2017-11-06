module.exports = {
    db: {
        open () {
            return new Promise((resolve, reject) => {
                setTimeout(() => resolve(true), 500);
            });
        }
    },
    event: {
        findOne (id, connection) {
            return Promise.resolve(`
                {
                    "id": 2,
                    "name": "Workshop",
                    "location": "Risco",
                    "date" : "25.08.2017"                    
                }             
            `);
        }
    },
    log (message) {
        return new Promise((resolve, reject) => {
            setTimeout(() => console.log(`INFO: ${JSON.stringify(message)}`), 500);
        });
    },
    names: ['Piotr', 'Max', 'Iza', 'Lukasz', 'Marcin', 'Mariusz'],
    someAsyncFuncIntroduce (name) {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(`Witaj ${name} !!`), 300);
        });
    },
    someAsyncFunc1 () {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve('Hello'), 300);
        });
    },
    someAsyncFunc2 () {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve('world'), 500);
        });
    },
    errorAsyncFunc () {
        return new Promise((resolve, reject) => {
            setTimeout(() => reject('error'), 500);
        });
    }

};
