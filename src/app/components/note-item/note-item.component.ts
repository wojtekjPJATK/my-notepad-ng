import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Note } from "src/app/models/Note";

@Component({
  selector: "app-note-item",
  templateUrl: "./note-item.component.html",
  styleUrls: ["./note-item.component.css"]
})
export class NoteItemComponent implements OnInit {
  @Input() note: Note;
  @Output() deleteNote: EventEmitter<Note> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  delete(note: Note) {
    this.deleteNote.emit(note);
  }

  setClasses() {
    let classes = {
      card: true,
      red: this.note.color == "red",
      blue: this.note.color == "blue",
      yellow: this.note.color == "yellow",
      green: this.note.color == "green"
    };
    return classes;
  }
}
