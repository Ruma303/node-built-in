const os = require('os');
//console.log(os);


console.log(`---------------------${os.EOL}`);

console.log(`arch: ${os.arch()}`);
console.log(`---------------------${os.EOL}`);

console.log(`Cpus:${os.EOL}`);
os.cpus().forEach(cpu => {
    console.log(`model: ${cpu.model}`);
    console.log(`speed: ${cpu.speed}`);
    console.log(`times.user: ${cpu.times.user}`);
    console.log(`times.nice: ${cpu.times.nice}`);
    console.log(`times.sys: ${cpu.times.sys}`);
    console.log(`times.idle: ${cpu.times.idle}`);
    console.log(`times.irq: ${cpu.times.irq}`);
    console.log(`${os.EOL}`)
});
console.log(`---------------------${os.EOL}`);

console.log(`endianness: ${os.endianness()}`);
console.log(`---------------------${os.EOL}`);

console.log(`freemem: ${os.freemem()}`);
console.log(`---------------------${os.EOL}`);

console.log(`homedir: ${os.homedir()}`);
console.log(`---------------------${os.EOL}`);

console.log(`loadavg: ${os.loadavg()}`);
console.log(`---------------------${os.EOL}`);

console.log(`networkInterfaces: ${os.networkInterfaces()}`);
console.log(`---------------------${os.EOL}`);

console.log(`platform: ${os.platform()}`);
console.log(`---------------------${os.EOL}`);

console.log(`release: ${os.release()}`);
console.log(`---------------------${os.EOL}`);

console.log(`tmpdir: ${os.tmpdir()}`);
console.log(`---------------------${os.EOL}`);

console.log(`totalmem: ${os.totalmem()}`);
console.log(`---------------------${os.EOL}`);

console.log(`type: ${os.type()}`);
console.log(`---------------------${os.EOL}`);

console.log(`uptime: ${os.uptime()}`);
console.log(`---------------------${os.EOL}`);

console.log(`userInfo: ${os.userInfo()}`);
console.log(`---------------------${os.EOL}`);

console.log(`version: ${os.version()}`);
console.log(`---------------------${os.EOL}`);
