import { Component, EventEmitter, Input, Output } from '@angular/core';

import { UserNotes } from '../create-note/create-note.component';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: [ './note-list.component.scss' ],
})
export class NoteListComponent {
  @Input() notes: UserNotes[];
  @Input() searchTerm: string;
  @Output() noteClicked: EventEmitter<UserNotes> = new EventEmitter<UserNotes>();

  selectedRowId: string;

  onNoteClicked(note: UserNotes) {
    this.noteClicked.emit(note);
    this.selectedRowId = note.id;
  }
}
