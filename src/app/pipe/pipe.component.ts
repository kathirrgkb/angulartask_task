import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  todaydate: any;
  text : any;

  details={
    name:'kathirvel',
    dep:'Ece'
  }


  constructor() { }

  ngOnInit(): void {
    this.todaydate = new Date().toDateString();
    this.text = 'hello world';
  }

}
