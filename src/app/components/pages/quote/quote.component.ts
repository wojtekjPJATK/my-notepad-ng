import { Component, OnInit } from "@angular/core";
import { QuoteService } from "src/app/services/quote.service";
import { Quote } from "src/app/models/Quote";

@Component({
  selector: "app-quote",
  templateUrl: "./quote.component.html",
  styleUrls: ["./quote.component.css"]
})
export class QuoteComponent implements OnInit {
  quote: Quote;
  loading: boolean;

  constructor(private qs: QuoteService) {
    this.loading = true;
  }

  ngOnInit() {
    this.loading = true;
    this.qs.getQuote().subscribe(result => {
      this.quote = new Quote(result);
      this.loading = false;
    });
  }
}
