import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'src/app/model/Note';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() notes: Note[];

  /**
   * helper
   * @returns {boolean} true if the note list should be shown, false otherwise
   * @private
   */
  private _isNoteListEmpty(): boolean {
    return !this.notes || !this.notes.length;
  }

}
