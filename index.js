const fs = require('fs');

const BruhLang = require('./bruhlang');

class InvalidFileError extends Error {
	constructor(...args) {
		super(...args);
	}
}

// Technically I don't have to do this
// It just looks more nicer to give
// it a name
async function main(args) {
	args.shift();
	args.shift();
	const file = args[0];
	if(!file) throw new InvalidFileError('No File Selected');

	const fileContent = fs.readFileSync(`${file}`);
	if(!fileContent) throw new InvalidFileError('File is Empty');

	const bruhlang = new BruhLang(fileContent.toString());

	console.log(bruhlang.start());
}

main(process.argv);
