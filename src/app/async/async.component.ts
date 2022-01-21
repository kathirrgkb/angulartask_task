import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('first');
   this.data()
    console.log('third');
  }

  data()
{
  setTimeout(()=>{
    console.log('second');
  },5000)
}
}
