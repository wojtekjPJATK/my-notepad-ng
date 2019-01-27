export class Quote {
  quote: string;
  author: string;
  title: string;
  copyright: string;

  constructor(data: any) {
    this.quote = data.contents.quotes[0].quote;
    this.author = data.contents.quotes[0].author;
    this.title = data.contents.quotes[0].title;
    this.copyright = data.contents.copyright;
  }
}
