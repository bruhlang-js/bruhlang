#!/usr/bin/env node

const fs = require('fs');

const BruhLang = require('../src/bruhlang');
const { InvalidFileError } = require('../src/errors');

const pkgInfo = require('../package.json');
const help = require('./help');

const [,, ...args] = process.argv;

function main() {
    if (!args[0]) return help();
    if (args[0] === 'help') return help(args[1]);

    const file = args[0];
    if(!file) throw new InvalidFileError('No File Input');
    let fileContent;

    try {
        fileContent = fs.readFileSync(`${file}`);
    } catch {
        throw new InvalidFileError(`No such file as '${file}'`);
    }

    const bruhlang = new BruhLang(
        fileContent?.toString()
    );
    const { res, tokens } = bruhlang.start();

    if (
        args.some(e => e === '--tokens' || e === '-T')
    ) {
        console.log(tokens);
        return process.exit(0);
    }

    console.log(res);
    process.exit(0);
}

main();