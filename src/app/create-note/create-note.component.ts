import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';

import { NoteService } from '../services/note.service';
import { setDate } from '../helper/date-time.helper';

export interface UserNotes {
  dateTime: string;
  notes: string;
  id: string;
}

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: [ './create-note.component.scss' ],
})
export class CreateNoteComponent implements AfterViewInit, OnDestroy {
  @Input() notes: UserNotes[];
  dateTime = '';
  userNoteText = '';
  private id: string;

  constructor(private noteService: NoteService) {
  }

  ngAfterViewInit() {
    this.noteService.showNotes$.subscribe(
      data => {
        if (data) {
          this.dateTime = setDate(data.dateTime, false);
          this.userNoteText = data.notes;
          this.id = data.id;
        } else {
          this.dateTime = null;
          this.userNoteText = null;
        }
      },
    );
  }

  ngOnDestroy() {
    this.noteService.showNotes$.unsubscribe();
  }

  onKeyup($event: KeyboardEvent) {
    const isIdExists = this.notes.find(note => note.id === this.id);
    if (isIdExists) {
      this.noteService.notes$.next({
        notes: $event.target['value'],
        dateTime: new Date() as any,
        id: this.id,
      });
    }
  }
}
