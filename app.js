const fs = require('fs');
//console.log(fs);

/* console.log(fs.existsSync('app.js'));
console.log(fs.statSync('app.js')); */



//% Operazioni sui file

//, Lettura
//# async

/* fs.readFile('testo.txt', 'utf-8', (err, data) => {
    console.log(data);
}); */

/* fs.readFile('testo.tx', 'utf-8', function(err, data) {
    if (err) {
        //console.log(err);
        return handleError(new Error(err));
    } else {
        console.log(data);
    }
});

function handleError(err) {
    console.log(`Errore catturato: ${err.message}`);
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
eve.on('error', eventErr => console.log(eventErr)); */


//# sync
/* try {
    data = fs.readFileSync('testo.txt', 'utf-8');
    console.log(data);
} catch (err) {
    console.log(err);
}
 */

//# promises
/* const ris = fs.promises.readFile('testo.txt', 'utf-8');
console.log(ris); */

/* fs.promises.readFile('testo.txt', 'utf-8')
    .then(data => console.log(data))
    .catch(err => console.log(err)); */

/* async function read(file) {
    const data = await fs.promises.readFile(file, 'utf-8');
    console.log(data);
}
read('testo.txt').catch(err => console.log(err)); */


//, Scrittura

testo = './testo.txt';

//# async
/* fs.writeFile(testo, 'Contenuto', err => {
    if (err) throw err;
    async function read(file) {
        const data = await fs.promises.readFile(file, 'utf-8');
        console.log(data);
    }
    read(testo);
});
 */

//# promise
/* fs.promises.writeFile(testo, 'Contenuto con promise')
    .then(() => console.log('Contenuto sovrascritto'))
    .catch(err => console.log(err)); */


//# appendFile()
/* async function read(file) {
    const data = await fs.promises.readFile(file, 'utf-8');
    console.log(data);
}
fs.promises.appendFile(testo, ' + contenuto aggiunto')
    .then(() => read(testo))
    .catch(err => console.log(err)); */


//, open()
/* fs.open(testo, 'w', (err, fd) => {
    fs.write(fd, 'Nuovo contenuto', 'utf-8', (err, bytes, content) => {
        console.log(err, bytes, content);
    });
    fs.close(fd, err => {
        if (err) throw err;
    });
});
 */

//, Informazioni sul file
/* fs.stat(testo, (err, stats) => {
    if (err) throw err;
    console.log(stats);
}); */


//, Eliminare un file
/* fs.unlink('./cartella/docu.pdf', err => {
    if (err) throw err;
    else console.log(`Il file è stato eliminato correttamente.`);
}); */


//, Rinominare un file
fs.promises.rename(testo, 'nuovo.txt')
    .then(()=> console.log('Rinomina completata'))
    .catch(err => console.log(err));


//, Spostare un file
/* fs.promises.rename(testo, `./cartella/sub/${testo}`)
    .then(()=> console.log('Spostamento completato'))
    .catch(err => console.log(err)); */





//% Operazioni su cartelle

//# lettura di cartelle
dir = '.\\cartella';
/* fs.readdir(dir, (err, dirContent) => {

    if (err) {
        console.log(err);
    } else {

        for (content of dirContent) {
            stat = fs.statSync(dir + '\\' + content);

            if (stat.isDirectory()) {
                console.log(`(dir) ${content}`);
            } else {
                console.log(`${content} (${stat.size} bytes)`);
            }
        }
    }
}); */


//# opendir() e altri metodi
/* async function fileList(directory) {
    const dir = await fs.promises.opendir(directory); */
// console.log(dir);
/* console.log(await dir.read());
console.log(await dir.read());
console.log(await dir.read());
console.log(await dir.read()); */

/* for await(const item of dir) {
    console.log(
        item.name,
        item.isFile() ? 'È un file' : 'È una cartella');
} */
/* }
fileList('.'); */


//, readdirp()
//const readdirp = require('readdirp');

/* const filters = {
    fileFilter: '*.txt',
    directoryFilter: ['!.git'],
    alwaysStat: true
} */

/* readdirp('.', { fileFilter: '*.js', alwaysStat: true })
//readdirp('.', filters)
    .on('data', (entry) => {
        const { path, stats: { size } } = entry;
        console.log(path, size);
    }); */


//, Spostare e rinominare cartella
/* fs.rename('./cartella', 'subdirectory', function(err) {
    if (err) throw err;
    console.log('Cartella spostata / rinominata!');
}); */


//, Eliminare cartelle
/* fs.rmdir('./cartella', function (err) {
    if (err) throw err;
    console.log('Cartella eliminata!');
}); */


//# Eliminare cartelle non vuote
/* const path = require('path');
const pathToDelete = './sub';

function deleteFolderRecursive(pathToDelete) {
    if (fs.existsSync(pathToDelete)) {
        fs.readdirSync(pathToDelete).forEach((file, index) => {
            const curPath = path.join(pathToDelete, file);
            if (fs.lstatSync(curPath).isDirectory()) { //? ricorsione se è una cartella
                deleteFolderRecursive(curPath);
            } else { //? cancellazione se è un file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(pathToDelete);
    }
};

deleteFolderRecursive(pathToDelete); */




//, Monitorare cambiamenti nel file system

/* for (i = 0; i < 999999; i++) {
    i += 1;
    console.log(i);
} */


/*  const opz = { persistent: true };
fs.watch('log.txt', opz, (eve, content)  => {
    console.log(eve, content);
});
const monitored = fs.watch('log.txt', opz);
monitored
    .on('change', (eve, content) => console.log(eve, content))
    .on('error', (err) => console.log(err))
    .on('close', () => console.log('Monitoraggio terminato'));

function removeMonitoring () {
    monitored.close();
}
setTimeout(removeMonitoring, 5000);
 */


//# chokidar

    /* const chokidar = require('chokidar');

    chokidar.watch('log.txt').on('all', (event, path) => {
        console.log(event, path);
    }); */