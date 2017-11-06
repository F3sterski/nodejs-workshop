// async function asyncFunc () {
//     return 123;
// }
//
// console.log(asyncFunc());
//
// asyncFunc().then( val => console.log(val));










async function asyncFunc () {
    throw new Error('Problem');
}

asyncFunc()
    .catch(err => console.log(err));
