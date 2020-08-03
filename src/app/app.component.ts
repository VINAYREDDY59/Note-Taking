import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

import { NoteService } from './services/note.service';
import { UserNotes } from './create-note/create-note.component';
import { args } from './utils/utility.helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('drawer', { static: false }) sideNav: MatSidenav;
  title = 'note-taking';
  userNotes: UserNotes[] = [];
  requiredNote: UserNotes;
  isSmallScreen: boolean;
  searchTerm = '';

  constructor(private noteService: NoteService) {
  }

  ngOnInit() {
    const userNotes = this.noteService.getAllNotes$();
    if (userNotes) {
      this.userNotes = userNotes;
    }
  }

  ngAfterViewInit() {
    this.isSmallScreen = document.getElementById('main-div').offsetWidth < 450;
    if (!this.isSmallScreen) {
      this.sideNav.toggle(true);
    }
    this.noteService.notes$.subscribe(data => {
      if (data) {
        const isIdExist = this.userNotes.find(note => note.id === data.id);
        if (!isIdExist) {
          this.userNotes.unshift(data);
        } else {
          this.userNotes.filter(note => note.id === data.id).map(note => {
            note.notes = data.notes;
            note.dateTime = data.dateTime;
          });
        }
        this.noteService.addNotes$(this.userNotes);
      }
    });
  }

  ngOnDestroy() {
    this.noteService.notes$.unsubscribe();
  }

  createNote() {
    if (this.userNotes) {
      this.userNotes.unshift(
        {
          notes: 'New Note',
          dateTime: new Date() as any,
          id: Math.random().toString(36).slice(2),
        });
      this.noteService.addNotes$(this.userNotes);
      console.warn(this.userNotes);
      this.requiredNote = this.userNotes[ 0 ];
      this.noteService.showNotes$.next(this.requiredNote);
    }
  }

  onNavToolbarBtnClicked(drawer: MatSidenav) {
    drawer.toggle();
  }

  onNoteClicked(note: UserNotes) {
    if (this.userNotes) {
      this.requiredNote = this.userNotes.filter(item => item.id === note.id)[ 0 ];
      this.requiredNote = {
        ...this.requiredNote,
        notes: note.notes,
        dateTime: note.dateTime,
        id: note.id,
      };
    } else {
      this.requiredNote = this.noteService.getAllNotes$().filter(
        data => data.id === note.id)[ 0 ];
    }
    this.noteService.showNotes$.next(this.requiredNote);
  }

  deleteNote(id: string) {
    if (this.userNotes) {
      const index = this.userNotes.findIndex(note => note.id === id);
      this.userNotes.splice(index, 1);
      this.noteService.showNotes$.next(this.userNotes[ 0 ]);
    }
    this.noteService.addNotes$(this.userNotes);
  }

  onItemSearched(searchTerm: string) {
    this.searchTerm = searchTerm;
    const localStorageData: UserNotes [] = this.noteService.getAllNotes$();

    const filteredSearchResults: UserNotes[] = [];
    if (localStorageData && localStorageData.length && args) {
      args.keys.forEach(key => {
        const filteredItems = localStorageData.filter(item => item[ key ]
          && item[ key ].toString().toLowerCase().includes(this.searchTerm.toLowerCase()));
        if (filteredItems.length) {
          filteredSearchResults.push(...filteredItems);
        }
      });
    }

    this.userNotes = this.searchTerm === '' ? localStorageData : filteredSearchResults;
  }
}

