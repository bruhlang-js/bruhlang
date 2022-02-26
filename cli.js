#!/usr/bin/env node

const fs = require('fs');

const BruhLang = require('./src/bruhlang');
const pkgInfo = require('./package.json');

const [,, ...args] = process.argv;

// Technically I don't have to do this
// It just looks more nicer to give
// it a name
function main() {
    if (args[0] === 'help') {
        const info = `    bruhlang <file>`;
        console.log(
            `BruhLang | v${pkgInfo.version}\nCommands:\n${info}`
        )

        return;
    }

    const file = args[0];
    if(!file) throw new Error('No File Input');
    const fileContent = file ? fs.readFileSync(`${file}`) : null;

    const bruhlang = new BruhLang(
        fileContent?.toString()
    );

    console.log(bruhlang.start());
}

main();