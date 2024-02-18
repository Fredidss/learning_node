const fs =require('node:fs')

const stats = fs.statSync('./hmundo.txt')

console.log(
    stats.isFile(),
    stats.isDirectory(),
    stats.size,
)
