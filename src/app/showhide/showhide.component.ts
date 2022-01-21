import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showhide',
  templateUrl: './showhide.component.html',
  styleUrls: ['./showhide.component.css']
})
export class ShowhideComponent implements OnInit  {
  show = false;
  name :any = 'kathir';

  constructor() { }

  ngOnInit(): void {
    
   
  }
  showhide(){
    this.show = !this.show;
  }

}
