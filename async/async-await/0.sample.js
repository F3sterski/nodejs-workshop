const {db, event, log} = require('./helpers');

// db.open((err, connectionStatus) => {
//     if (err) {
//         throw new Error(err);
//     }
//     event.findOne(2, connectionStatus, (err, event) => {
//         if (err) {
//             throw new Error(err);
//         }
//         const eventParsed = JSON.parse(event);
//         log(eventParsed);
//     });
// });





db.open()
    .then(connectionStatus => event.findOne(2, connectionStatus))
    .then(event => JSON.parse(event))
    .then(eventParsed => log(eventParsed))
    //.then(() => {throw new Error('Problem')})
    .catch(err => console.log(err));









async function main () {
    try {
        const connectionStatus = await db.open();
        const eventFromDb = await event.findOne(2, connectionStatus);
        const eventParsed = JSON.parse(eventFromDb);
        log(eventParsed);
    } catch (err) {
        console.log(err);
    }
}

main();
