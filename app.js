const path = require('path');

console.log(path.basename('/foo/bar/baz/asdf/test.html'));
// Stampa: 'test.html'

console.log(path.basename('/foo/bar/baz/asdf/test.html', '.html'));
// Stampa: 'test'

console.log(path.dirname('/foo/bar/baz/asdf/test.html'));
// Stampa: '/foo/bar/baz/asdf'

console.log(path.extname('/foo/bar/baz/asdf/index.html'));
// Stampa: '.html'

console.log(path.parse('/foo/bar/baz/asdf/index.html'));
// Stampa: '.html'

console.log(path.join('/foo', 'bar', 'baz', 'quux', 'index.html'));
// Stampa: '\foo\bar\baz\quux\index.html'

console.log(path.resolve('corsi', 'Node.js', 'index.js'));
// C:\resto-del-percorso-assoluto\Node.js\node-built-in\corsi\Node.js\index.js

console.log(path.isAbsolute('C:\\Program Files\\Node'));
// true

console.log(path.relative('/foo/bar/aaa', '/foo/quux/bbb'));
// Stampa: '..\..\quux\bbb'

console.log(path.normalize('/foo/bar/./baz/../quux'));
// Stampa: '\foo\bar\quux'

console.log(`foo${path.sep}bar`);
// Stampa: 'foo\bar'

