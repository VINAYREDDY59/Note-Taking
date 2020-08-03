import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { FormsModule } from '@angular/forms';
import { NoteService } from './services/note.service';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NoteListComponent } from './note-list/note-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotesRowComponent } from './notes-row/notes-row.component';
import { DateTimeComponent } from './date-time/date-time.component';
import { HighlightMessagePipe } from './helper/highlight-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CreateNoteComponent,
    ToolbarComponent,
    NoteListComponent,
    NotesRowComponent,
    DateTimeComponent,
    HighlightMessagePipe,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
  ],
  providers: [ NoteService ],
  bootstrap: [ AppComponent ],
})
export class AppModule {
}
