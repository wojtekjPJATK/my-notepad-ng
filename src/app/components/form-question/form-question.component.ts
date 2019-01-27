import { Component, Input } from "@angular/core";
import { FormData } from "src/app/models/FormData";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-form-question",
  templateUrl: "./form-question.component.html",
  styleUrls: ["./form-question.component.css"]
})
export class FormQuestionComponent {
  @Input() question: FormData<any>;
  @Input() form: FormGroup;
  get isValid() {
    return this.form.controls[this.question.key].valid;
  }
}
