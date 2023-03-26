const os = require("os");

console.log("Free memory", os.freemem() / 1024 / 1024 / 1024);
console.log("Total memory", os.totalmem() / 1024 / 1024 / 1024);
console.log("OS version", os.version());
console.log("Platform", os.platform());
console.log("Processor", os.cpus());
//1024 bytes - 1kb -> 1024 kb -> imb -> 1024 mb -> 1gb
