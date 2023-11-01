// console.log() usage and available commands
function help() {
    console.log('usage: scan <command> /path/to/your/file/or/directory');
    console.log();
    console.log('   links       Creates directory with all broken links');
    console.log('   spelling    Not implemented yet');
    console.log();
    console.log('"scan help" lists available commands');
}

module.exports = { help };
