import { Injectable } from '@angular/core';

import { UserNotes } from '../create-note/create-note.component';
import { BehaviorSubject } from 'rxjs';

export enum LOCAL_STORAGE_KEYS {
  USER_NOTES = 'user_notes'
}

@Injectable()
export class NoteService {
  public notes$: BehaviorSubject<UserNotes> = new BehaviorSubject<UserNotes>(null);
  public showNotes$: BehaviorSubject<UserNotes> = new BehaviorSubject<UserNotes>(null);

  constructor() {
  }

  getAllNotes$(): UserNotes[] {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.USER_NOTES));
  }

  addNotes$(notes: UserNotes[]) {
    localStorage.setItem(LOCAL_STORAGE_KEYS.USER_NOTES, JSON.stringify(notes));
  }
}
