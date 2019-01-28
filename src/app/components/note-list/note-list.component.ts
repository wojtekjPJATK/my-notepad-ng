import { Component, OnInit } from "@angular/core";
import { Note } from "src/app/models/Note";
import { NoteService } from "src/app/services/note.service";
import { QuestionService } from "src/app/services/question.service";

@Component({
  selector: "app-note-list",
  templateUrl: "./note-list.component.html",
  styleUrls: ["./note-list.component.css"]
})
export class NoteListComponent implements OnInit {
  notes: Note[];
  questions: any[];

  constructor(private noteService: NoteService, private qs: QuestionService) {}

  ngOnInit() {
    this.questions = this.qs.getQuestions();
    this.notes = this.noteService.getNotes();
  }

  deleteNote(note: Note) {
    this.noteService.deleteNote(note);
  }

  addNote(note: Note) {
    this.noteService.addNote(note);
  }
}
