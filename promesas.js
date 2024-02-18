const fs = require('node:fs/promises')

console.log('Leyendo el primer archivo...')
fs.readFile('./hmundo.txt', 'utf-8')
    .then(text => {
        console.log('firstText:', text)
    })
    .catch(error => {
        console.error('Error al leer el primer archivo:', error)
    })

console.log('cole tira firmezas mientras tanto...')

console.log('Leyendo el segundo archivo...')
fs.readFile('./hmundo2.txt', 'utf-8')
    .then(text => {
        console.log('secondText:', text)
    })
    .catch(error => {
        console.error('Error al leer el segundo archivo:', error)
    })
