import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { FormData } from "src/app/models/FormData";
import { QuestionControlService } from "src/app/services/question-control.service";
import { NoteService } from "src/app/services/note.service";
import { Note } from "src/app/models/Note";

@Component({
  selector: "app-add-note",
  templateUrl: "./add-note.component.html",
  styleUrls: ["./add-note.component.css"],
  providers: [QuestionControlService]
})
export class AddNoteComponent {
  @Input() questions: FormData<any>[] = [];
  form: FormGroup;
  @Output() addNote: EventEmitter<Note> = new EventEmitter();

  constructor(private qcs: QuestionControlService, private ns: NoteService) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    const note: Note = new Note(
      this.form.value.title,
      this.form.value.body,
      this.form.value.color
    );
    this.ns.addNote(note);
    this.addNote.emit(note);
  }
}
