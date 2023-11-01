/* const EventEmitter = require('events');
const eventEmitter = new EventEmitter; */

//# Esempio base
/* eventEmitter.addListener('eve1', function () {
    console.log('Evento catturato');
});
eventEmitter.emit('eve1'); */


//, Passare dei parametri
/* eventEmitter.addListener('eve2', function (name) {
    console.log(`Mi chiamo ${name}`);
});
eventEmitter.emit('eve2', 'Giulio'); */

//# Passare un oggetto
/* eventEmitter.on('eve3', eveObj => {
    console.log(eveObj);
});
eventEmitter.emit('eve3', {
    infoEvent: 'Evento 3',
    author: 'Ruma',
    created: Date()
}); */


//, Dati asincroni
/* eventEmitter.on('async-event', eveObj => console.log(eveObj));

async function emitAsyncEvent() {
    const data = await Promise.resolve({
        infoEvent: 'Evento 4',
        type: 'Async data',
        created: new Date()
    });

    eventEmitter.emit('async-event', data);
}
emitAsyncEvent(); */


//, Metodi EventEmitter su più file
/* const getName = require('./name');
const EventEmitter = require('events');
const eve = new EventEmitter;

getName();
eve.on('name', name => console.log(name)); */

//# Importare la classe Name
/* const Name = require('./name');
const nameObj = new Name;
nameObj.on('name', name => console.log(`Nuovo nome: ${name}`));
nameObj.getName(); */


//, Eventi multipli
/* const events = require('events');
const eve = new events.EventEmitter; */

/* eve.on('status', status => console.log(`Evento catturato dal primo listener`));
eve.on('status', status => console.log(`Evento catturato dal secondo listener`));
eve.emit('status');*/


//, Altri metodi di EventEmitter
/* function status () {
    console.log('Funzione attivata!');
} */
/* eve.on('status', status);
eve.emit('status');
eve.emit('status'); */

//# once e eventNames()
/* eve.once('status', status);
console.log(eve.eventNames());
eve.emit('status');
console.log(eve.eventNames());
eve.emit('status'); */

//# removeListener()
/* eve.on('status', status);
console.log(eve.eventNames());

eve.emit('status');
eve.removeListener('status', status);

if (eve.eventNames().length === 0) {
    console.warn('Non ci sono eventi.');
} else {
    console.log(eve.eventNames());
    eve.emit('status');
} */


/* function status2() {
    console.log('Funzione status2() attivata!');
}
eve.on('status', status);
eve.on('status', status2);
eve.emit('status');
eve.removeListener('status', status); //! status() verrà rimossa

eve.emit('status'); */


//, Eventi schedulati
/* const { EventEmitter } = require('events');
const eve = new EventEmitter;

let index = 0;
console.log('Count    | Created at');
console.log('-------- | ----------');

eve.on('throw-event', function () {
    console.log('***Event thrown***');
});

eventInt = setInterval(function() {
    hour = new Date();
    time = hour.getHours() + ':' + hour.getMinutes() + ":" + hour.getSeconds();
    index++;
    if (index === 6) {
        clearInterval(eventInt);
        eve.emit('throw-event');
    } else {
        console.log(`Count: ${index}| ${time}`);
    }
}, 300); */



//% chalk
/* import EventEmitter from 'events';
import chalk from 'chalk';

//console.log(chalk.blue('Hello world!'));

const eve = new EventEmitter;
const log = console.log;
let index = 0;

log(chalk.bgRed('Count    | Created at'));
log(chalk.bold('-------- | ----------'));
log(chalk.bgMagenta('***Counter started***'));

eve.on('throw-event', function () {
    log(chalk.bgGreenBright('***Event thrown***'));
});

let eventInt = setInterval(function() {
    let hour = new Date();
    let time = hour.getHours() + ':' + hour.getMinutes() + ":" + hour.getSeconds();
    index++;
    if (index === 6) {
        clearInterval(eventInt);
        eve.emit('throw-event');
    } else {
        log(`Count: ${chalk.yellow(index)}| ${chalk.blue(time)}`);
    }
}, 1000); */