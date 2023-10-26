const os = require('os');

console.log('---------------------\n');

console.log(`arch: ${os.arch()}`);
console.log('---------------------\n');

console.log('Cpus:\n');
os.cpus().forEach(cpu => {
    console.log(`model: ${cpu.model}`);
    console.log(`speed: ${cpu.speed}`);
    console.log(`times.user: ${cpu.times.user}`);
    console.log(`times.nice: ${cpu.times.nice}`);
    console.log(`times.sys: ${cpu.times.sys}`);
    console.log(`times.idle: ${cpu.times.idle}`);
    console.log(`times.irq: ${cpu.times.irq}`);
    console.log('\n')
});
console.log('---------------------\n');

console.log(`endianness: ${os.endianness()}`);
console.log('---------------------\n');

console.log(`freemem: ${os.freemem()}`);
console.log('---------------------\n');

console.log(`homedir: ${os.homedir()}`);
console.log('---------------------\n');

console.log(`loadavg: ${os.loadavg()}`);
console.log('---------------------\n');

console.log(`networkInterfaces: ${os.networkInterfaces()}`);
console.log('---------------------\n');

console.log(`platform: ${os.platform()}`);
console.log('---------------------\n');

console.log(`release: ${os.release()}`);
console.log('---------------------\n');

console.log(`tmpdir: ${os.tmpdir()}`);
console.log('---------------------\n');

console.log(`totalmem: ${os.totalmem()}`);
console.log('---------------------\n');

console.log(`type: ${os.type()}`);
console.log('---------------------\n');

console.log(`uptime: ${os.uptime()}`);
console.log('---------------------\n');

console.log(`userInfo: ${os.userInfo()}`);
console.log('---------------------\n');

console.log(`version: ${os.version()}`);
console.log('---------------------\n');
