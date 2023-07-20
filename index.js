const {v4:uuid} = require("uuid");
const {format} = require("date-fns");

console.log(format(new Date(), 'yyyy/MM/dd\tHH:mm:ss'))

console.log(uuid())
