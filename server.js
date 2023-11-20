const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            console.log('Dati ricevuti:', JSON.parse(body));
            res.end('Dati ricevuti correttamente!\n');
        });
    } else {
        res.statusCode = 404;
        res.end('Not Found\n');
    }
}).listen(3000, () => {
    console.log(`Server in ascolto sulla porta ${port}...`);
});

server.on('error', (err) => console.log(err));
