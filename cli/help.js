// Information about the Commands
const infos = [{
    name: '<file>',
    description: 'Runs the file given',
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
    )
}

function helpCommand(arg) {
    const commandInfo = infos.find(x => x.raw === arg);
    
    const name = commandInfo.raw;
    const description = commandInfo.description;
    const usage = commandInfo.name;
    
    console.log(
        `bruhlang ${name} - ${description}\nUsage:\n    ${usage}`
    );
}

module.exports = help;