import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { NoteService } from '../services/note.service';
import { UserNotes } from '../create-note/create-note.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: [ './toolbar.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent implements OnDestroy {
  @Input() note: UserNotes;
  @Output() createNote: EventEmitter<void> = new EventEmitter<void>();
  @Output() deleteNote: EventEmitter<string> = new EventEmitter<string>();
  @Output() toggleSideNav: EventEmitter<void> = new EventEmitter<void>();
  @Output() searchTerm: EventEmitter<string> = new EventEmitter<string>();

  constructor(private noteService: NoteService) {
  }

  ngOnDestroy() {
    this.noteService.showNotes$.unsubscribe();
  }

  delete(id: string) {
    if (id) {
      this.deleteNote.emit(id);
    }
  }

  create() {
    this.createNote.emit();
  }

  onNavToolbarBtnClicked() {
    this.toggleSideNav.emit();
  }

  onItemSearched(searchTerm: string) {
    this.searchTerm.emit(searchTerm);
  }
}
