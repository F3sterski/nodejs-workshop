const {someAsyncFunc1} = require('./helpers');

async function asyncFunc () {
    console.log('Enter');
    const result = await someAsyncFunc1();
    console.log(`Result inside async: ${result}`);
}

const result = asyncFunc();

console.log(result);
