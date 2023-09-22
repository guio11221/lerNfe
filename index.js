const exec = require('./src/');
const fs = require('fs');
const path = require('path')


async function teste(){


    const respo = await exec(fs.readFileSync(path.join('test/nfe-test.xml'), 'utf-8'))


    console.log(respo.chave())
}


teste()