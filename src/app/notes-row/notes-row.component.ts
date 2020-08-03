import { AfterViewInit, Component, Input } from '@angular/core';
import { UserNotes } from '../create-note/create-note.component';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-notes-row',
  templateUrl: './notes-row.component.html',
  styleUrls: [ './notes-row.component.scss' ],
})
export class NotesRowComponent implements AfterViewInit {
  @Input() note: UserNotes;
  @Input() searchTerm: string;

  setActiveStyle: boolean;

  constructor(private noteService: NoteService) {
  }

  ngAfterViewInit() {
    this.noteService.showNotes$.subscribe(data => {
      this.setActiveStyle = true;
    });
  }
}
