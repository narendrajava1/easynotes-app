import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Note } from './note';
import { RestResponse } from './rest-response';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  note:Note;
  restResponse:RestResponse=new RestResponse();

  constructor(private httpClient:HttpClient) { }

  handleError(errorResponse:HttpErrorResponse){
    let errorMessage="";
    if(errorResponse.error instanceof ErrorEvent){
      //Client-side Errors
      errorMessage=errorResponse.error.message
    }
  }
  createNote(note:Note):RestResponse{
    
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
    reqHeader.append('Access-Control-Allow-Origin', '*');
    this.httpClient.post("/api/notes",note,{ headers:reqHeader}).subscribe(data=>{
      console.log(data);
      console.log(data["code"]);
      console.log(data["data"]);
      if(data["code"]===0){
        // this.restResponse.data=data["data"];
        this.restResponse.data=data["data"];
        this.restResponse.code=data["code"];
      }
    })
    return this.restResponse;
  }
}
