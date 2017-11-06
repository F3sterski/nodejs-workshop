const {errorAsyncFunc} = require('./helpers');

async function asyncFunc () {
    try {
        await errorAsyncFunc();
    } catch (error) {
        console.log(`Err: ${error}`);
    }
}

asyncFunc();
