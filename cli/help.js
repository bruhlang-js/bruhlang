const pkgInfo = require('../package.json');

// Information about the Commands
const infos = [{
    name: '<file> [--tokens|-T]',
    description: 'Runs the file given',
    raw: '<file>'
}, {
    name: 'help [command-name]',
    raw: 'help',
    description: 'Displays this message'
}];

const commandNames = [];

infos.forEach(data => data.raw !== null && commandNames.push(data.raw));

function help(arg) {
    if (arg && commandNames.includes(arg)) return helpCommand(arg);
    else if (arg && !commandNames.includes(arg)) return console.error(`Command '${arg}' does not exist`);
    
    // Combine all the infos
    // and add 4 spaces per command
    let info = '';
    infos.forEach((data, i) => {
        const needsNewLine = i !== infos.length ? '\n' : '';
        
        info += `    bruhlang ${data.name} - ${data.description}${needsNewLine}`;
    });

    console.log(
        `BruhLang | v${pkgInfo.version}\nCommands:\n${info}`,
    );
    process.exit(0);
}

function helpCommand(arg) {
    const commandInfo = infos.find(x => x.raw === arg);

    const { 
        raw: name, 
        description, 
        name: usage,
    } = commandInfo;
    
    console.log(
        `bruhlang ${name} - ${description}\nUsage:\n    ${usage}`
    );
    process.exit(0);
}

module.exports = help;