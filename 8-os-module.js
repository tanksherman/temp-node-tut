const os = require('os')
//get current user
const user = os.userInfo()
console.log(user);

// method returns system uptime
console.log(`the system uptime is ${os.uptime} in seconds`);

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()

}
console.log(currentOS);