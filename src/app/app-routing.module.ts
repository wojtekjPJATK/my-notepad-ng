import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NoteListComponent } from "./components/note-list/note-list.component";
import { AboutComponent } from "./components/pages/about/about.component";
import { QuoteComponent } from "./components/pages/quote/quote.component";

const routes: Routes = [
  { path: "", component: NoteListComponent },
  { path: "about", component: AboutComponent },
  { path: "quote", component: QuoteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
