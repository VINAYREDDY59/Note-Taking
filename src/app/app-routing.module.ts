import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { NoteListComponent } from './note-list/note-list.component';


const routes: Routes = [
  { path: 'app', component: AppComponent },
  { path: 'create', component: CreateNoteComponent },
  { path: 'list', component: NoteListComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {
}
