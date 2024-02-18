const fs = require('node:fs')

const text =  fs.readFileSync('./hmundo.txt', 'utf-8')

console.log (text)
