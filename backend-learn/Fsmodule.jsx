const fs = require('fs');

fs.writeFileSync('read.txt',"welcome in node js ")

const buff_data = fs.readFileSync('read.txt');
const data = buff_data.toString();
console.log(data)