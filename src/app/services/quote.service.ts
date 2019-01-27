import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Quote } from "@angular/compiler";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class QuoteService {
  constructor(private http: HttpClient) {}

  getQuote(): Observable<Quote> {
    return this.http.get<Quote>("http://quotes.rest/qod");
  }
}
