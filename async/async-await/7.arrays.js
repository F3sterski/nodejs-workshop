const {names, someAsyncFuncIntroduce} = require('./helpers');

async function asyncFunc() {
    //const promises = names.map(name => await someAsyncFuncIntroduce(name)); ! Zła skladnia
    const promises = names.map(name => someAsyncFuncIntroduce(name));
    return Promise.all(promises);
}


asyncFunc().then(messages => console.log(messages));
