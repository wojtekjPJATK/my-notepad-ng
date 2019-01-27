import { FormData } from "./FormData";

export class DropdownQuestion extends FormData<string> {
  controlType = "dropdown";
  options: { key: string; value: string }[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options["options"] || [];
  }
}
