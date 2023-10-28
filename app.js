const fs = require('fs');
//console.log(fs);

/* console.log(fs.existsSync('app.js'));

console.log(fs.statSync('app.js')); */



//% Operazioni con il modulo fs

//, Lettura

//# async
/* fs.readFile('testo.tx', 'utf-8', function(err, data) {
    if (err) {
        //console.log(err);
        return handleError(new Error(err));
    } else {
        console.log(data);
    }
});

function handleError(err) {
    console.log(`Errore catturato: ${err}`);
} */

// Con eventi

/* const { EventEmitter } = require('events');
const eve = new EventEmitter;
fs.readFile('t.txt', 'utf-8', (err, data) => {
    if (err) {
        return eve.emit('error', err);
    }
    console.log(err, data);
});
eve.on('error', eventErr => console.log(eventErr));
 */


//# sync
/* try {
    data = fs.readFileSync('testo.txt', 'utf-8');
    console.log(data);
} catch (err) {
    console.log(err);
} */


//# lettura di cartelle

    dir = '.\\cartella';
    fs.readdir(dir, (err, files) => {

        if (err) {
            console.log(err);
        } else {

            for (content of files) {
                stat = fs.statSync(dir + '\\' + content);

                if (stat.isDirectory()) {
                    console.log(`(dir) ${content}`);
                } else {
                    console.log(`${content} (${stat.size} bytes)`);
                }
            }
        }
    });






//, Scrittura