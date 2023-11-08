const fs = require('fs');


//% Stream Readable

    //# Modificare chunk
    //const rs = fs.createReadStream('testo.txt', { highWaterMark: 32 * 1024 });

    //# Esempio streaming
    /* const rs = fs.createReadStream('testo.txt');
    totBytes = 0;
    rs.on('data', (chunk) => {
        totBytes += chunk.length;
        console.log(`Lunghezza chunk: ${chunk.length} byte`);
        console.log(`Ho letto ${totBytes} byte di dati\n`);
    }); */

    //# Altri eventi
    /* rs.on('end', ()=> {
        console.log('Streaming terminato');
    }); */

//% Stream Writable

    /* const nomi = ['Mario', 'Giovanni', 'Elisa'];
    const cognomi = ['Rossi', 'Bianchi', 'Verdi'];

    const persona = function () {
        nome = nomi[Math.floor(Math.random() * nomi.length)];
        cognome = cognomi[Math.floor(Math.random() * cognomi.length)];
        return `${nome} ${cognome}\n`;
    }

    const ws = fs.createWriteStream('elenco.txt');
    ws.write('\nInizio scrittura:\n', null, () => console.log('Scrittura Iniziata'));

    for (i = 1; i <= 3; i++)
        ws.write(`\t${i}. ${persona()}`);
    ws.end('Scrittura terminata\n', null, () => console.log('Scrittura terminata')); */


//% Duplex e Transform