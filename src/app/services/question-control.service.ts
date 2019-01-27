import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { FormData } from "src/app/models/FormData";

@Injectable()
export class QuestionControlService {
  constructor() {}

  toFormGroup(questions: FormData<any>[]) {
    let group: any = {};

    questions.forEach(question => {
      if (question.key == "body") {
        group[question.key] = new FormControl(
          question.value || "",
          question.validators
        );
      } else {
        group[question.key] = question.required
          ? new FormControl(question.value || "", Validators.required)
          : new FormControl(question.value || "");
      }
    });
    return new FormGroup(group);
  }
}
