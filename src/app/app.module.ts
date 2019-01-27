import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ClarityModule } from "@clr/angular";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./components/layout/header/header.component";
import { NoteListComponent } from "./components/note-list/note-list.component";
import { NoteItemComponent } from "./components/note-item/note-item.component";
import { AboutComponent } from "./components/pages/about/about.component";
import { AddNoteComponent } from "./components/add-note/add-note.component";
import { FormQuestionComponent } from "./components/form-question/form-question.component";
import { QuestionControlService } from "./services/question-control.service";
import { QuestionService } from "./services/question.service";
import { QuoteComponent } from "./components/pages/quote/quote.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NoteListComponent,
    NoteItemComponent,
    AboutComponent,
    AddNoteComponent,
    FormQuestionComponent,
    QuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [QuestionControlService, QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule {}
