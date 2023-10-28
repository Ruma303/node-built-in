const path = require('path');

console.log(path.basename('/foo/bar/baz/asdf/test.html'));
// Stampa: 'test.html'

console.log(path.extname('index.html'));
// Stampa: '.html'

console.log(path.join('/foo', 'bar', 'baz', 'quux', 'index.html'));
// Stampa: '\foo\bar\baz\asdf'

console.log(path.resolve('www', 'files/png/', '/gif/image.gif'));
// Se il percorso corrente è /home/myself/node, stampa '/home/myself/node/wwwroot/static_files/gif/image.gif'

console.log(path.isAbsolute('C:\\Program Files\\Node'));

console.log('foo', path.sep, 'bar');

