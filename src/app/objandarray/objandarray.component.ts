import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-objandarray',
  templateUrl: './objandarray.component.html',
  styleUrls: ['./objandarray.component.css']
})
export class ObjandarrayComponent implements OnInit {
  title = 'Angular';
  state =[{
    location : 'chennai'
  }]
  employee=[{
    name:'Kathirvel',
    family:[{
        father:'Ranganathan'
    }]
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
