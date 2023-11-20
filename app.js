//% Creare web server

const http = require('http');
const port = 3000;

const host = 'localhost';

//? Creazione web server
const server = http.createServer((req, res) => {
    console.log('Nuova richiesta');
});

//? Attivazione web server
server.listen(port, host, () => {
    console.log(`Server in ascolto sulla porta ${port}...`);
});

//? Errori
server.on('error', (err) => console.log(err));



//% Creare una risposta
/* const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log('Nuova richiesta'); */
    /* res.statusCode = 200;
    res.statusMessage = 'OK'; */

    /* res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.write('Richiesta ricevuta\n');
    res.write('Risposta inviata'); */

    /* res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.write('<h1>Richiesta ricevuta</h1>');
    res.write('<h3>Risposta inviata</h3>'); */

    //res.end();

    //# writeHead()
    /* const body = 'Corpo della risposta';
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8',
        'Content-Length': Buffer.byteLength(body),
    });
    res.end(body);
});

server.listen(port, host, () => {
    console.log(`Server in ascolto sulla porta ${port}...`);
}); */


//% Richiesta
/* const https = require('https');
const options = {
    hostname: 'info.cern.ch',
    method: 'GET'
}

const request = http.request(options, (response) => {
    if (response.statusCode < 300 && response.statusCode >=200) {
        response.on('data', (y) => {
            process.stdout.write(y);
        });
    } else {
        console.log(response.statusCode);
    }
}).on('error', (err) => {
    console.log(`Errore: ${err}`);
}).end(); */


//, Axios
const axios = require('axios');

//# GET
/* axios.get('http://info.cern.ch/hypertext/WWW/TheProject.html')
.then(function (response) { //? Gestire la risposta
    console.log(response.data);
})
.catch(function (error) { //? Gestire gli errori
    console.log(error);
}); */

//# POST
/* const data = {
    name: 'Mario Rossi',
    age: 32
};

axios.post('http://localhost:3000', data)
.then((response) => {
    console.log(response.data);
})
.catch((error) => {
    console.error(error);
}); */


//# Axios API
/* axios({
    method: 'post',
    url: 'http://localhost:3000',
    data: {
        firstName: 'Mario',
        lastName: 'Rossi',
        age: 32
    }
}); */