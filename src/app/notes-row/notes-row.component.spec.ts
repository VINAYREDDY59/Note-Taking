import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesRowComponent } from './notes-row.component';

describe('NotesRowComponent', () => {
  let component: NotesRowComponent;
  let fixture: ComponentFixture<NotesRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
