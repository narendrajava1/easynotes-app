import {Component, OnInit} from '@angular/core';
 
export class Quicknotes {
  title: String;
  content: String;
  id: number;
}
 
@Component({
  selector: 'app-quicknotes',
  templateUrl: './quicknotes.component.html',
  styleUrls: ['./quicknotes.component.css']
})
export class QuicknotesComponent implements OnInit {
 
  titleModel: String;
  contentModel: String;
  idModel: number;
  quicknotes: Quicknotes[];
 
  constructor() {
    this.titleModel = '';
    this.contentModel = '';
    this.idModel = 0;
 
    const defaultQuicknotes: Quicknotes = {
      title: 'my note',
      content: 'This is default note',
      id: 0
    };
 
    this.quicknotes = [defaultQuicknotes];
  }
  ngOnInit() {
  }
 
  createQuicknotes() {
 
    const newQuicknotes: Quicknotes = {
      title: this.titleModel,
      content: this.contentModel,
      id: this.idModel
    };
 
    this.quicknotes.push(newQuicknotes);
 
    // set the model values to '' again
    // this.titleModel = this.idModel = this.contentModel = '';
  }
 
}