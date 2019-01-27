import { FormData } from "./FormData";

export class TextboxQuestion extends FormData<string> {
  controlType = "textbox";
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options["type"] || "";
  }
}
