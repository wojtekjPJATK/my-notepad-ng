import { Injectable } from "@angular/core";

import { DropdownQuestion } from "src/app/models/question-dropdown";
import { FormData } from "src/app/models/FormData";
import { TextboxQuestion } from "src/app/models/question-textbox";
import { TextAreaQuestion } from "../models/question-textarea";
import { ValidateBody } from "src/app/validators/body";

@Injectable()
export class QuestionService {
  constructor() {}

  getQuestions() {
    let questions: FormData<any>[] = [
      new DropdownQuestion({
        key: "color",
        label: "Pick color",
        options: [
          { key: "green", value: "Green" },
          { key: "red", value: "Red" },
          { key: "yellow", value: "Yellow" },
          { key: "blue", value: "Blue" }
        ],
        order: 3,
        required: false
      }),

      new TextboxQuestion({
        key: "title",
        label: "Note title",
        required: true,
        order: 1
      }),

      new TextAreaQuestion({
        key: "body",
        label: "Body",
        type: "text",
        order: 2,
        required: true,
        validators: ValidateBody
      })
    ];
    return questions.sort((a, b) => a.order - b.order);
  }
}
