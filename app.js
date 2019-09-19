const notes = require('./notes');
const yargs = require('yargs');
const chalk = require('chalk');


//create add command
yargs.command({
    command: 'add',
    describle: 'Add a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'String'
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type: 'String'
        }
    },
    handler (argv) {
        notes.addNotes(argv.title,argv.body)
    }
});
//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove note',
    builder:{
title:{
    describe:'note title',
    demandOption:true,
    type:'string'
}
    },
    handler (argv) {
        notes.removeNote(argv.title)
    }
})
//create list command
yargs.command({
    command: 'list',
    describe: 'list note',
    handler () {
        notes.listNotes();
    }
})
//create read command
yargs.command({
    command: 'read',
    describe: 'read notes',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        }
            },
    handler (argv) {
        notes.readNote(argv.title);
    }
})
yargs.parse();
// This line is used to get the args of command line
//console.log(process.argv)
// This line is used to get the args of command line using yargs package
//console.log(yargs.argv);
//Examples for importing core modules,own files and npm modules

// const validator=require('validator');
// console.log(validator.isEmail('harshamail.com'));
// const showMessage=add();
// console.log(showMessage);
// console.log(chalk.green.inverse('Hllo world!'));