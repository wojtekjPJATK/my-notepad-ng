import { Injectable } from "@angular/core";
import { Note } from "../models/Note";

@Injectable({
  providedIn: "root"
})
export class NoteService {
  notes: Note[];
  constructor() {
    this.notes = [
      { id: 1, title: "First Note", body: "First Note Body!", color: "red" },
      {
        id: 2,
        title: "Second Note",
        body: "second Note Body!",
        color: "green"
      },
      {
        id: 3,
        title: "Third Note",
        body: "second Note Body!",
        color: "yellow"
      },
      { id: 4, title: "Forth Note", body: "second Note Body!", color: "blue" }
    ];
  }

  getNotes() {
    return this.notes;
  }

  getID() {
    return this.notes.length + 1;
  }

  addNote(note: Note) {
    const id: number = this.getID();
    note.id = id;
    this.notes.push(note);
  }

  deleteNote(note: Note) {
    const index: number = this.notes.indexOf(note);
    if (index != -1) this.notes.splice(index, 1);
  }
}
