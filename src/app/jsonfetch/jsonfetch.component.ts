import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jsonfetch',
  templateUrl: './jsonfetch.component.html',
  styleUrls: ['./jsonfetch.component.css']
})
export class JsonfetchComponent implements OnInit {
  states = [
        {
            name: "Haryana",
            cities: [
                { name: "Gurgaon" },
                { name: "Faridabad" },
                { name: "Sonipat" }
            ]
        },
        {
            name: "UP",
            cities: [
                { name: "Agra" },
                { name: "Aligarh" },
                { name: "Allahabad" }
            ]
        },
        {
            name: "Delhi",
            cities: [
                { name: "North Delhi" },
                { name: "North West Delhi" },
                { name: "West Delhi" }
            ]
        }
    ];
    

  constructor() { }

  ngOnInit(): void {
  }

}
