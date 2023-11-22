const http = require('http');
const port = 3000;

//, Creare un routing
/* const server = http.createServer((request, response) => {
    if (request.url === '/favicon.ico') {
        response.statusCode = 204;
        return response.end();
    }
    let body;
    if (request.url === '/' || request.url === '/home') {
        body = '<h1>Homepage</h1>';
        response.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8',
            'Content-Length': Buffer.byteLength(body),
        });
    } else if (request.url === '/contatti') {
        body = '<h1>Contatti</h1>';
        response.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8',
            'Content-Length': Buffer.byteLength(body),
        });
    } else {
        body = 'Pagina non trovata';
        response.statusCode = 404;
    }
    response.end(body);
    console.log(request.url);
}).listen(port, () =>console.log(`Server in ascolto sulla porta ${port}`)); */



//, Refactoring 1
/* const fs = require('fs');
const server = http.createServer((request, response) => {
    let htmlFile;
    switch (request.url) {
        case '/favicon.ico':
            response.statusCode = 204;
            return response.end();
        case '/':
        case '/home': htmlFile = 'index.html'; break;
        case '/contatti': htmlFile = 'contatti.html'; break;
        default: break;
    }
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    if (htmlFile) {
        fs.readFile(`./${htmlFile}`, "utf-8", (err, data) => {
            if (err) {
                response.statusCode = 500;
                response.end('Errore interno al server');
                return;
            }
            response.statusCode = 200;
            response.end(data);
        });
    } else {
        response.statusCode = 404;
        response.end('404 - Pagina non trovata');
    }
    console.log(request.url);
}).listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
}); */



//, Refactoring 2
/* const fs = require('fs');
const server = http.createServer((request, response) => {
    const routing = {
        '/' : 'index.html',
        '/home' : 'index.html',
        '/contatti' : 'contatti.html',
    }
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    render(response, routing[request.url]);
}).listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
});

function render(response, htmlFile) {
    if (!htmlFile) {
        response.statusCode = 404;
        response.end('404 - Pagina non trovata');
        return;
    }
    fs.stat(`./${htmlFile}`, (err, stats) => {
        if (stats) {
            response.statusCode = 200;
            fs.createReadStream(htmlFile).pipe(response);
        } else {
            response.statusCode = 500;
            response.end('Errore interno al server');
        }});} */