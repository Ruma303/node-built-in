//% Process
console.log(process)
/* console.log(process.versions)
console.log(process.env)
console.log(process.cwd())
process.exit([console.log('Processo terminato')]) */

/* console.log(process.argv);
nome = process.argv[3];
console.log(`Ciao, ${nome}`); */



//% Yargs
//const cliArgs = require('yargs').argv;
//const yargs = require('yargs');

//# yargs.argv
//console.log(cliArgs)
//console.log(cliArgs._)

//# yargs
//console.log(yargs)

//# yargs.command()
/* yargs.command({
    command: 'get',
    describe: 'Ricerca utente dal nome. Inserisci il flag --name="Tuo nome"',
    builder: {
        name: {
            describe: 'Nome dell\'utente da cercare',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        console.log(argv);
        console.log(`Utente trovato! ${argv.name}`)
    }
});
yargs.parse(); */


//, Refactoring ed altre funzioni

//console.log(process.argv)

/* const { hideBin } = require('yargs/helpers');

yargs(hideBin(process.argv))
    .command('get', 'Ricerca utente dal nome',
        (yargs) => {
            return yargs
                .option('name', {
                    describe: 'Nome dell\'utente da cercare',
                    demandOption: true,
                    type: 'string'
                })
                .option('last-name', {
                    describe: 'Cognome dell\'utente da cercare',
                    demandOption: true,
                    type: 'string'
                })
            },(argv) => {
                console.log(argv);
                console.log(`Utente trovato! ${argv.name}`);
            }
        )
        .help()
        .argv */

