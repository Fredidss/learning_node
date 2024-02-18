const fs = require('node:fs')

console.log ('Leyendo el primer archivo...')
fs.readFile('./hmundo.txt', 'utf-8', (err, text) => {
    console.log('firstText:', text)
})

console.log('cole tira firmezas mientras tanto...')

console.log ('Leyendo el segundo archivo...')
fs.readFile('./hmundo2.txt', 'utf-8', (err, text) => {
    console.log('secondText', text)
})
