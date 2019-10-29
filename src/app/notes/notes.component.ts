import { Component, OnInit } from '@angular/core';
import { NoteService } from '../shared/note.service';
import { Note } from '../shared/note';
import { NgForm } from '@angular/forms';
import { RestResponse, Error } from '../shared/rest-response';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  //Injecting Dependency Of NoteService
  constructor(private noteService:NoteService) { }
  //Note Model
   note:Note;
//    response: RestResponse={
//     data:'',
//     error:new Error,
//     code:''

// }

   response: RestResponse=new RestResponse();

  ngOnInit() {
    this.resetCreateForm();
  }

  resetCreateForm(createNoteForm?:NgForm){
    if(createNoteForm!=null)
      createNoteForm.reset();

      this.note = {
        content:'',
        title:'',
        id:''
    }
  }
  //creating a note
  createNote(createNoteForm:NgForm){
    this.response=this.noteService.createNote(createNoteForm.value);
    console.log(this.response)
  }

}
