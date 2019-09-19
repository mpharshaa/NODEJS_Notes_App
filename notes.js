const fs = require('fs');
const chalk = require('chalk')

const addNotes = (title, body) => {

    const notes = loadNotes();
    duplicateNotes = notes.filter((notes) => notes.title === title)
    duplicateNote = notes.find((notes)=>notes.title === title)
    if (duplicateNote) {
        console.log("Title is already there")
    } else {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log("Your notes added")
    }
}


removeNote = (title) => {
    console.log("removing the note", title);
    const notes = loadNotes();
    notesToKeep = notes.filter((notes) => notes.title !== title)
    if (notesToKeep.length == notes.length) {
        console.log(chalk.red("No note found"))
    } else {
        saveNotes(notesToKeep);
        console.log(chalk.green("Note Removed"));
    }

}
listNotes=()=>{
    const notes=loadNotes();
    console.log(chalk.green("Your Notes"));
    notes.forEach((note) => {
        console.log(note.title)
    });
}

readNote=(title)=>{
const notes=loadNotes();
const noteToRead=notes.find((notes)=>notes.title === title);

if(noteToRead){
    console.log(noteToRead.title);
    console.log(noteToRead.body);
}else{
    console.log("unable to print note")
}
}


saveNotes =  (notes) =>{

    fs.writeFileSync('notes.json', JSON.stringify(notes));
}
loadNotes = () => {


    try {
        const dataBuffer = fs.readFileSync('notes.json');
        dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    } catch (e) {
        return []
    }

}
module.exports = {
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes:listNotes,
    readNote:readNote
}