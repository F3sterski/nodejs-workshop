const {someAsyncFunc1} = require('./helpers');

async function asyncFunc () {
    const value = someAsyncFunc1();

    console.log(value);
}

asyncFunc();
