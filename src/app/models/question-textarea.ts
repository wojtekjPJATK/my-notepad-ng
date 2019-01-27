import { FormData } from "./FormData";

export class TextAreaQuestion extends FormData<string> {
  controlType = "textarea";
  type: string;
  validators: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options["type"] || "";
    this.validators = options["validators"] || "";
  }
}
