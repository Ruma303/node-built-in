const fs = require('fs');


//% Stream Readable

    //# Modificare chunk
    //const rs = fs.createReadStream('testo.txt', { highWaterMark: 32 * 1024 });

    //# Esempio streaming
    /* const rs = fs.createReadStream('testo.txt');
    totBytes = 0;
    rs.on('data', (chunk) => {
        console.log(chunk);
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
    ws.end('Scrittura terminata\n', null, () => console.log('Scrittura terminata'));
 */

//% Pipe

    /* let readableStream = fs.createReadStream('testo.txt', {
        encoding: "utf-8",
        highWaterMark: 10
    });

    let writableStream = fs.createWriteStream('output.txt');

    readableStream.pipe(writableStream); */


    //, Trasformare il contenuto

    const stream = require('stream');

    const upperCaseTransform = new stream.Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    }});

    let readableStream = fs.createReadStream('testo.txt', {
        encoding: "utf-8"
    });
    let writableStream = fs.createWriteStream('output.txt');

    readableStream.pipe(upperCaseTransform).pipe(writableStream);


    //# Approfondimenti sull'encoding
    /* const upperCaseTransform = new stream.Transform({
        transform(chunk, encoding, callback) {
          if (Buffer.isBuffer(chunk)) {
            chunk = chunk.toString('utf-8');
          }
          this.push(chunk.toUpperCase());
          callback();
    }}); */


    //, Gestione errori
   /*  function handleReadError(err) {
        console.log(err);
    }
    function handleTransformError(err) {
        console.log(err);
    }
    function handleWriteError(err) {
        console.log(err);
    }
    readableStream.on('error', handleReadError);
    upperCaseTransform.on('error', handleTransformError);
    writableStream.on('error', handleWriteError);
 */

    //, unpipe()
    /* setTimeout(() => {
        readableStream.unpipe(writableStream); // Chiude il flusso scrivibile
    }, 5000);

    writableStream.on('unpipe', (src) => {
        console.log('readableStream non è più piped in un altro stream');
        console.log(src);
    }); */


    //, Eventi end e finish
    /* //? Per un flusso leggibile
    readableStream.on('end', () => {
        console.log('Il flusso leggibile ha terminato di emettere dati');
    });

    //? Per un flusso scrivibile
    writableStream.on('finish', () => {
        console.log('Il flusso scrivibile ha terminato di emettere dati');
    });*/


    //, finished()
    /* const { finished } = require('stream');

    finished(readableStream, (err) => {
    if (err) {
        console.error('Errore nel flusso di lettura.', err);
    } else {
        console.log('Flusso terminato con successo.');
    }});

    finished(writableStream, (err) => {
        if (err) {
            console.error('Errore nel flusso scrivibile.', err);
        } else {
            console.log('Flusso terminato con successo.');
    }});*/