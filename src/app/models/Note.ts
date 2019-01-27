export class Note {
  id: number;
  title: string;
  body: string;
  color: string;

  constructor(title: string, body: string, color: string) {
    this.title = title;
    this.body = body;
    this.color = color;
  }
}
