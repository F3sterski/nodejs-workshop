const {someAsyncFunc1, someAsyncFunc2} = require('./helpers');

const start = process.hrtime();

async function asyncFunc () {
    const [result1, result2] = await Promise.all([
        someAsyncFunc1(),
        someAsyncFunc2()
    ]);
    console.log(result1, result2);
    const [, nanoseconds] = process.hrtime(start);
    console.log(`Czas wykonania: ${nanoseconds / 1000000} ms`);
}

asyncFunc();
