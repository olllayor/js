import os from 'node:os';

// Returns the CPU architecture of the operating system
const osArch = os.arch();
console.log(osArch);

// os.cpus(): Provides an array of objects describing each CPU/core installed.
const cpus = os.cpus();
console.log(cpus[0]);

// os.freemem(): Returns the amount of free system memory in bytes.
const freemem = os.freemem();
console.log(`freemem: ${freemem} bite`);

// os.homedir(): Returns the path to the current user’s home directory.
const homedir = os.homedir();
console.log(homedir);

// os.hostname(): Returns the hostname of the operating system.
const hostname = os.hostname();
console.log(hostname);

// os.platform(): Returns the operating system platform (e.g., ‘linux’, ‘darwin’).
const platform = os.platform();
console.log(platform);

// os.release(): Returns the operating system release.
const release = os.release();
console.log(release);

// os.uptime(): Returns the system uptime in seconds.
const uptime = os.uptime();
console.log(uptime/60);

// userinfo

const userinfo = os.userInfo();
console.log(userinfo.shell);
